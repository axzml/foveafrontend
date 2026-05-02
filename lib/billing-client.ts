export type BillingCycle = "yearly" | "monthly";

type CheckoutPayload = {
  billingCycle: BillingCycle;
};

type ApiSuccess<T> = {
  data?: T;
};

type CheckoutResponse = {
  url?: string;
};

export type QuotaStatus = {
  status: string;
  is_pro: boolean;
  remaining: number;
  used: number;
  limit: number;
  trial_ends_at?: string;
  pro_expires_at?: string;
  plan: "free" | "pro";
  status_kind:
    | "free"
    | "renews"
    | "pro_until"
    | "payment_failed"
    | "manual_pro"
    | string;
  status_at?: string;
  subscription_status?: string;
  cancel_at_period_end: boolean;
  billing_period_end?: string;
  manage_billing_available: boolean;
  manual_entitlement: boolean;
  manual_entitlement_end?: string;
  manual_entitlement_reason?: string;
};

export function getBackendBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_FOVEA_API_BASE_URL ||
    process.env.NEXT_PUBLIC_BACKEND_URL ||
    "http://localhost:8080"
  ).replace(/\/$/, "");
}

export async function createBillingCheckout(
  accessToken: string,
  payload: CheckoutPayload,
) {
  const response = await fetch(`${getBackendBaseUrl()}/api/billing/checkout`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const json = (await response.json().catch(() => null)) as
    | (ApiSuccess<CheckoutResponse> & CheckoutResponse & { error?: string; message?: string })
    | null;

  if (!response.ok) {
    const message = json?.error || json?.message || "Failed to create checkout.";
    throw new Error(message);
  }

  const url = json?.data?.url || json?.url;
  if (!url) {
    throw new Error("Checkout URL was missing from the billing response.");
  }

  return url;
}

export async function createBillingPortal(accessToken: string) {
  const response = await fetch(`${getBackendBaseUrl()}/api/billing/portal`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  const json = (await response.json().catch(() => null)) as
    | (ApiSuccess<CheckoutResponse> & CheckoutResponse & { error?: string; message?: string })
    | null;

  if (!response.ok) {
    const message = json?.error || json?.message || "Failed to open billing portal.";
    throw new Error(message);
  }

  const url = json?.data?.url || json?.url;
  if (!url) {
    throw new Error("Portal URL was missing from the billing response.");
  }

  return url;
}

export async function getQuotaStatus(accessToken: string) {
  const response = await fetch(`${getBackendBaseUrl()}/api/quota/check`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  const json = (await response.json().catch(() => null)) as
    | (ApiSuccess<QuotaStatus> & QuotaStatus & { error?: string; message?: string })
    | null;

  if (!response.ok) {
    const message = json?.error || json?.message || "Failed to load subscription status.";
    throw new Error(message);
  }

  const quota = json?.data || json;
  if (!quota || typeof quota.plan !== "string") {
    throw new Error("Quota plan was missing from the backend response.");
  }

  return quota;
}

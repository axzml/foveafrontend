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

// BillingStatus mirrors the backend's BillingStatusResponse (see
// models/request.go on the Go side). The shape is the contract the Web
// account page consumes; mac uses the leaner /api/quota/check.
//
// Design notes (mirror Go-side comments):
//   - No raw `subscription_status` / `trial_ends_at` / `pro_expires_at`:
//     UI consumes only `status_kind`, raw values bypass the derivation
//     layer and would fork business rules into two repos.
//   - No `manual_entitlement*` fields: the feature isn't built yet, so
//     the contract doesn't pretend it exists. Add when DB schema lands.
export type BillingStatus = {
  is_pro: boolean;
  remaining: number;
  used: number;
  limit: number;

  plan: "free" | "pro";
  status_kind: "free" | "renews" | "pro_until" | "payment_failed";
  status_at?: string;
  cancel_at_period_end: boolean;
  billing_period_end?: string;
  manage_billing_available: boolean;
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

export async function getBillingStatus(accessToken: string): Promise<BillingStatus> {
  const response = await fetch(`${getBackendBaseUrl()}/api/billing/status`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  const json = (await response.json().catch(() => null)) as
    | (ApiSuccess<BillingStatus> & BillingStatus & { error?: string; message?: string })
    | null;

  if (!response.ok) {
    const message = json?.error || json?.message || "Failed to load subscription status.";
    throw new Error(message);
  }

  // Backend wraps responses in {code, data}; older bare-payload responses are
  // not produced by /api/billing/status, but we tolerate both shapes for
  // resilience to envelope drift.
  const status = (json?.data ?? json) as BillingStatus | null;
  if (!status || typeof status.plan !== "string") {
    throw new Error("Billing status was missing from the backend response.");
  }

  return status;
}

import type { Locale } from "./site-locale";

type FeedbackType = "bug" | "feature" | "general";

const siteCopy = {
  en: {
    common: {
      localeLabel: "Language",
      english: "English",
      chinese: "中文",
      footer: "© 2026 FOVEA AI. ALL RIGHTS RESERVED.",
      privacyEnglishOnly: "Privacy Policy is currently available in English only.",
      privacyLinkLabel: "Privacy Policy",
      pricingLinkLabel: "Pricing",
      feedbackLinkLabel: "Feedback",
      termsLinkLabel: "Terms of Service",
    },
    metadata: {
      home: {
        title: "Fovea - Speak. Capture. Deliver. All in one.",
        description:
          "Fovea lets you input voice, text, and images together in one flow, turning captured material into structured output.",
      },
      download: {
        title: "Fovea - Beta Downloads",
        description:
          "Preview the Fovea beta download entry point for macOS and the optional browser extension.",
      },
      feedback: {
        title: "Fovea - Send Feedback",
        description:
          "Report bugs, request features, and share feedback for the Fovea beta.",
      },
      pricing: {
        title: "Fovea - Pricing",
        description:
          "Choose a Fovea plan for multimodal capture: voice, text, and images in one structured input flow.",
      },
      privacy: {
        title: "Fovea - Privacy Policy",
        description:
          "Read how Fovea handles microphone audio, selected text, screenshots, and account information.",
      },
    },
    nav: {
      backHome: "Back to Home",
    },
    home: {
      hero: {
        badge: "BETA FOR MACOS",
        titleLine1: "Speak. Capture. Deliver.",
        titleHighlight: "All in one.",
        subtitle: "Voice, text, and images in a single input flow.",
        subtitleStrong: "Structured output in one action.",
        navProduct: "Product",
        navWorkflow: "Workflow",
        navPricing: "Pricing",
        navFeedback: "Feedback",
        approvedLink: "Download for macOS",
        downloadShort: "Download",
        demoCta: "See workflow",
        heroStats: [
          { value: "3 inputs", label: "Voice, text, and image together" },
          { value: "Parallel", label: "Speak while capturing materials" },
          { value: "1 deliver", label: "Background assembly, no composer step" },
        ],
        inputLabel: "Parallel capture",
        voiceLabel: "Voice",
        voiceBody: '"Turn this into a clear next step."',
        textLabel: "Text selections",
        textBody: "Multiple snippets, notes, passages, or copied materials.",
        imageLabel: "Images",
        imageBody: "Multiple screenshots or visible details from your screen.",
        outputLabel: "Ready to deliver",
        readyLabel: "Ready",
        structuredLabel: "Captured input",
        outputLines: [
          "Expression: say what you need",
          "Text: multiple selections",
          "Images: multiple captures",
        ],
        deliverLabel: "Deliver once",
        deliverBody: "Fovea packages everything in the background.",
        destinationChips: ["AI tools", "Docs", "Tickets", "Reports", "Forms", "Workflows"],
        oneActionTitle: "One capture action",
        oneActionBody: "Less copy-paste, more complete input",
      },
      featureIntro: {
        eyebrow: "A new input layer",
        title: "From single-channel input to multimodal capture.",
        subtitle:
          "Most tools still expect one typed field or one uploaded image at a time. Fovea lets voice, text, and images arrive together, then packages them into a clean structure.",
        chips: ["Voice", "Selected text", "Screenshots", "Current app", "Structured result"],
      },
      featureGrid: [
        {
          title: "Speak intent",
          description:
            "Say what you want to do naturally, without translating your thought into a perfect written prompt first.",
        },
        {
          title: "Add text",
          description:
            "Bring selected text, copied passages, snippets, notes, or document material into the same input flow.",
        },
        {
          title: "Capture images",
          description:
            "Include screenshots and visible screen details when the task needs more than words alone can carry.",
        },
        {
          title: "Background assembly",
          description:
            "Fovea packages voice, text, and images behind the scenes before the single delivery action.",
        },
      ],
      about: {
        beforeAfter: {
          eyebrow: "What changes",
          title: "Stop rebuilding every input by hand.",
          subtitle:
            "When a task needs voice, text, and visuals at the same time, the old workflow turns into a pile of screenshots, pasted snippets, and missing details.",
          beforeTitle: "Before Fovea",
          beforeItems: [
            "Type the request",
            "Paste selected text",
            "Attach or describe the screenshot",
            "Rewrite the missing details",
          ],
          afterTitle: "With Fovea",
          afterItems: [
            "Speak while capturing",
            "Collect multiple texts and images",
            "Fovea packages in the background",
            "Deliver once",
          ],
        },
        useCases: {
          eyebrow: "Built for real work",
          title: "Use one input when the task needs more than text.",
          items: [
            {
              title: "Debugging and coding",
              description:
                "Capture an error, selected code, and your spoken intent into one structured handoff.",
            },
            {
              title: "Research and reading",
              description:
                "Combine notes, passages, screenshots, and questions without jumping between separate inputs.",
            },
            {
              title: "Product and design review",
              description:
                "Point to what you see, add the relevant text, and speak the review in the same capture flow.",
            },
          ],
        },
        trust: {
          eyebrow: "Control and clarity",
          title: "Capture only what you choose.",
          body:
            "Fovea is an input layer, not a closed workspace or a memory system. It works with the material you capture for the current action, structures it, and moves it forward.",
          items: [
            "You choose when to capture and what to include.",
            "Fovea does not pull from long-term memory or background history in the current product.",
            "macOS permissions are requested for the capture features that need them.",
            "The result stays portable, so it can fit the next tool or workflow instead of locking you in.",
          ],
        },
      },
      guide: {
        eyebrow: "Current beta workflow",
        title: "Speak and capture happen together.",
        description:
          "Fovea is not a step-by-step form. While you speak, you can also collect multiple text selections and multiple images. When you finish, one deliver action moves the result forward.",
        capture: {
          eyebrow: "Parallel capture",
          title: "Speak + capture in the same session",
          badge: "Live together",
        },
        speak: {
          title: "Say what you need",
          body: "Use voice to express the request, instruction, or question while you keep working with the material on screen.",
        },
        captureText: {
          title: "Select multiple text items",
          body: "Add more than one piece of text from the current task. Fovea treats them as part of the same input session.",
          items: ["code snippet", "paragraph", "note", "copied text"],
        },
        captureImages: {
          title: "Add multiple images",
          body: "Capture screenshots or visible details as many times as the task needs, without leaving the same flow.",
          items: ["screen area", "UI state", "document view"],
        },
        deliver: {
          eyebrow: "One deliver action",
          title: "Finish speaking and send",
          body: "After speaking and capture are done, you deliver once to the destination you choose.",
          invisibleTitle: "Assembly happens in the background",
          invisibleBody:
            "Fovea packages the voice, text, and images before delivery. The composer step is not another manual step for the user.",
        },
        caption: "Current beta: parallel speak + capture, then one deliver action.",
        note: "A product walkthrough for this workflow will be added when the updated demo is ready.",
      },
    },
    pricing: {
      badge: "Pricing preview",
      title: "Simple pricing for a new input layer.",
      intro:
        "Fovea is in beta. These plans frame how the product will be packaged as billing moves into Stripe checkout.",
      billingToggle: {
        monthly: "Monthly",
        annual: "Annual",
        save: "Save 20%",
      },
      plans: [
        {
          name: "Beta",
          price: "$0",
          period: "during beta",
          description: "For early users testing the macOS capture flow.",
          cta: "Download beta",
          href: "/download",
          featured: false,
          features: [
            "Voice, text, and image capture",
            "Structured output preview",
            "macOS beta updates",
            "Feedback channel access",
          ],
        },
        {
          name: "Pro",
          price: "$12",
          period: "per month",
          description: "For daily workflows that depend on fast multimodal input.",
          cta: "Start with beta",
          href: "/download",
          featured: true,
          features: [
            "Higher capture limits",
            "Browser companion workflow",
            "Priority model routing",
            "Early access to delivery improvements",
          ],
        },
        {
          name: "Team",
          price: "Custom",
          period: "for teams",
          description: "For teams that want shared onboarding, support, and admin controls.",
          cta: "Contact us",
          href: "/feedback",
          featured: false,
          features: [
            "Team onboarding",
            "Usage and billing support",
            "Privacy and deployment review",
            "Roadmap input for team workflows",
          ],
        },
      ],
      note:
        "Plan names and prices may change before public billing launches. Existing beta users will receive notice before any paid transition.",
      faqTitle: "Pricing FAQ",
      faqs: [
        {
          question: "Is Fovea free during beta?",
          answer:
            "Yes. The current macOS beta can be downloaded from the download page. Paid plans will be introduced with advance notice.",
        },
        {
          question: "Will Stripe handle billing?",
          answer:
            "Yes. The pricing page is structured so Stripe Checkout can replace the current beta CTAs when billing is enabled.",
        },
        {
          question: "What counts as a capture?",
          answer:
            "A capture is one user-triggered input flow that can include voice, selected text, screenshots, and visible screen details.",
        },
      ],
    },
    download: {
      badge: "BETA DOWNLOADS",
      title: "Download Fovea for macOS",
      intro:
        "Get started with Fovea. Download the macOS app, sign up, and you're ready to go. Existing users receive automatic updates inside the app.",
      macLabel: "macOS APP",
      macTitle: "Primary beta download",
      macButton: "Download for macOS",
      macVersion: "v0.2.0-beta.7",
      macRequirements: "macOS 13+",
      macAutoUpdate: "Auto-updates built in",
      packageTitle: "Latest macOS package",
      installSteps: [
        {
          title: "Download",
          body: "Get the latest signed macOS package.",
        },
        {
          title: "Install",
          body: "Open the DMG and move Fovea into Applications.",
        },
        {
          title: "Sign in",
          body: "Launch Fovea, sign in, and grant the permissions needed for capture.",
        },
      ],
      highlights: [
        "Speak while capturing multiple text selections and images.",
        "Deliver once after Fovea packages the input in the background.",
        "Keep your existing tools and workflows.",
      ],
      extTitle: "Fovea Companion Extension",
      extBody:
        "Optional Chrome extension for sending structured output to browser-based AI tools such as ChatGPT, Claude, Gemini, and DeepSeek.",
      extButton: "Download Extension",
      extInstallNote:
        "After downloading, move the extension folder to a permanent location (e.g. your Documents folder). Open chrome://extensions, enable \"Developer mode\", click \"Load unpacked\" and select the folder. Do not move or delete this folder after loading — Chrome will remove the extension on restart if the source files are missing.",
      requirementsTitle: "System Requirements",
      requirements: [
        "macOS 13 Ventura or later",
        "Apple Silicon Mac (M1 or later)",
        "Microphone & screen recording permissions",
      ],
      expectationsTitle: "What to expect in beta",
      expectations: [
        "Fovea is evolving quickly. UI details and delivery flows may shift between beta releases.",
        "Automatic updates are built into the macOS app, so you'll stay current without manual re-downloads.",
      ],
      waitlistPrompt: "Need access but not approved yet?",
      waitlistLink: "Join the beta waitlist",
    },
    feedback: {
      title: "Send Feedback",
      intro:
        "Report bugs, request features, or share your thoughts. Your feedback helps us improve Fovea.",
      successTitle: "Thank you!",
      successBody: "Your feedback has been submitted. We'll review it shortly.",
      submitAnother: "Submit another",
      typeLabel: "Type",
      titleLabel: "Title",
      descriptionLabel: "Description",
      contactLabel: "Contact",
      optionalLabel: "(optional)",
      titlePlaceholder: "Brief summary of your feedback",
      descriptionPlaceholders: {
        bug: "What happened? What did you expect? Steps to reproduce...",
        feature: "Describe the feature you would like to see...",
        general: "Share your thoughts...",
      },
      contactPlaceholder: "Email or other way to reach you",
      submitIdle: "Submit Feedback",
      submitLoading: "Submitting...",
      errorFallback: "Submission failed",
      typeOptions: [
        { value: "bug" as FeedbackType, label: "Bug Report", emoji: "!" },
        { value: "feature" as FeedbackType, label: "Feature Request", emoji: "+" },
        { value: "general" as FeedbackType, label: "General Feedback", emoji: "..." },
      ],
    },
  },
  zh: {
    common: {
      localeLabel: "语言",
      english: "English",
      chinese: "中文",
      footer: "© 2026 FOVEA AI. 保留所有权利。",
      privacyEnglishOnly: "Privacy Policy 当前仅提供英文版。",
      privacyLinkLabel: "Privacy Policy",
      pricingLinkLabel: "价格",
      feedbackLinkLabel: "反馈",
      termsLinkLabel: "服务条款",
    },
    metadata: {
      home: {
        title: "Fovea - 起心动念，言取合一。",
        description:
          "Fovea 让你在一次输入中同时使用语音、文本和图像，把当前捕捉到的内容整理成结构化输出。",
      },
      download: {
        title: "Fovea - Beta 下载入口",
        description:
          "查看 Fovea Beta 的 macOS 下载入口，以及可选的浏览器扩展占位入口。",
      },
      feedback: {
        title: "Fovea - 提交反馈",
        description:
          "提交 Bug、功能建议和产品反馈，帮助我们改进 Fovea Beta。",
      },
      pricing: {
        title: "Fovea - 价格",
        description:
          "查看 Fovea 多模态输入工具的价格方案：语音、文本和图像，一次输入，结构化输出。",
      },
      privacy: {
        title: "Fovea - Privacy Policy",
        description:
          "Read how Fovea handles microphone audio, selected text, screenshots, and account information.",
      },
    },
    nav: {
      backHome: "返回首页",
    },
    home: {
      hero: {
        badge: "macOS Beta",
        titleLine1: "起心动念，",
        titleHighlight: "言取合一。",
        subtitle: "语音、文本、图像，一次输入。",
        subtitleStrong: "结构化输出，一步完成。",
        navProduct: "产品",
        navWorkflow: "工作流",
        navPricing: "价格",
        navFeedback: "反馈",
        approvedLink: "查看下载入口",
        downloadShort: "下载",
        demoCta: "查看流程",
        heroStats: [
          { value: "3 类输入", label: "语音、文本和图像同时进入" },
          { value: "并行", label: "说话的同时继续捕捉内容" },
          { value: "1 次投递", label: "后台组装，无需手动 composer" },
        ],
        inputLabel: "并行捕捉",
        voiceLabel: "语音",
        voiceBody: "“把这里整理成下一步动作。”",
        textLabel: "文本选择",
        textBody: "多段选中文本、代码片段、笔记或复制内容。",
        imageLabel: "图像",
        imageBody: "多张截图，或屏幕上可见的关键细节。",
        outputLabel: "准备投递",
        readyLabel: "已整理",
        structuredLabel: "已捕捉输入",
        outputLines: [
          "表达：说出需求",
          "文本：多段选择",
          "图像：多次捕捉",
        ],
        deliverLabel: "一次投递",
        deliverBody: "Fovea 在后台自动打包全部输入。",
        destinationChips: ["AI 工具", "文档", "工单", "报告", "表单", "工作流"],
        oneActionTitle: "一次捕捉动作",
        oneActionBody: "少一点复制粘贴，多一点完整输入",
      },
      featureIntro: {
        eyebrow: "新的输入层",
        title: "从单通道输入，到多模态捕捉。",
        subtitle:
          "大多数工具仍然默认你一次只能输入一段文字，或者上传一张图片。Fovea 让语音、文本和图像同时进入同一条输入流程，再整理成清晰结构。",
        chips: ["语音", "选中文本", "截图", "当前应用", "结构化结果"],
      },
      featureGrid: [
        {
          title: "说出意图",
          description:
            "先自然说出你要做什么，不必把脑中的想法提前翻译成一段完美文字。",
        },
        {
          title: "加入文本",
          description:
            "把选中文本、复制内容、代码片段、笔记或文档内容放进同一条输入流程。",
        },
        {
          title: "捕捉图像",
          description:
            "当任务不只靠文字就能说清时，同时带上截图和屏幕中可见的关键细节。",
        },
        {
          title: "后台整理",
          description:
            "Fovea 会在一次投递前，在后台打包语音、文本和图像。",
        },
      ],
      about: {
        beforeAfter: {
          eyebrow: "改变在哪里",
          title: "不再手动重建每一份输入。",
          subtitle:
            "当一个任务同时需要语音、文本和视觉信息时，旧流程很快就会变成截图、粘贴片段和反复补充细节。",
          beforeTitle: "使用 Fovea 前",
          beforeItems: [
            "手动输入需求",
            "复制粘贴选中文本",
            "上传或描述截图",
            "反复补充缺失细节",
          ],
          afterTitle: "使用 Fovea 后",
          afterItems: [
            "说话的同时继续捕捉",
            "收集多段文本和多张图像",
            "Fovea 在后台完成组装",
            "一次动作投递出去",
          ],
        },
        useCases: {
          eyebrow: "面向真实工作",
          title: "当任务不止需要文字，就用一次输入完成。",
          items: [
            {
              title: "调试与编码",
              description:
                "把报错、选中代码和你的语音意图整理成一份结构化交接内容。",
            },
            {
              title: "研究与阅读",
              description:
                "把笔记、段落、截图和问题放进同一次输入，不再在多个输入框之间来回切换。",
            },
            {
              title: "产品与设计评审",
              description:
                "指出你看到的问题，带上相关文本，再用语音补充判断，全部在同一条捕捉流程里完成。",
            },
          ],
        },
        trust: {
          eyebrow: "控制与清晰",
          title: "只捕捉你选择的内容。",
          body:
            "Fovea 是一个输入层，不是封闭工作区，也不是记忆系统。它只处理你在当前这次动作里主动捕捉的内容，整理结构，并把结果推进到下一步。",
          items: [
            "由你决定什么时候捕捉、包含哪些内容。",
            "当前版本不会从长期记忆或后台历史中自动提取内容。",
            "需要麦克风或屏幕能力时，macOS 权限会明确请求。",
            "输出结果保持可迁移，可以进入下一步工具或工作流，而不是被锁在一个地方。",
          ],
        },
      },
      guide: {
        eyebrow: "当前 Beta 工作流",
        title: "说话和捕捉是并行发生的。",
        description:
          "Fovea 不是传统表单式步骤。你说出需求的同时，可以持续收集多段文本和多张图片。结束后，只需要一次投递动作。",
        capture: {
          eyebrow: "并行捕捉",
          title: "Speak + Capture 在同一次会话里完成",
          badge: "同时进行",
        },
        speak: {
          title: "说出需求",
          body: "用语音表达你的请求、指令或问题，同时继续处理屏幕上的内容。",
        },
        captureText: {
          title: "多次选择文本",
          body: "可以把当前任务里的多段文本加入同一次输入，Fovea 会把它们放在同一个捕捉会话里。",
          items: ["代码片段", "段落", "笔记", "复制文本"],
        },
        captureImages: {
          title: "多次加入图像",
          body: "根据任务需要多次截图或加入屏幕可见信息，不需要离开同一条流程。",
          items: ["屏幕区域", "界面状态", "文档视图"],
        },
        deliver: {
          eyebrow: "一次投递",
          title: "结束输入后发送出去",
          body: "当说话和捕捉都完成后，选择目的地并投递一次。",
          invisibleTitle: "组装过程在后台完成",
          invisibleBody:
            "Fovea 会在投递前自动打包语音、文本和图像。组装和 composer 不是用户需要额外操作的步骤。",
        },
        caption: "当前 Beta：Speak 和 Capture 并行，然后一次 Deliver。",
        note: "等新版流程演示准备好后，这里会换成对应的视频。",
      },
    },
    pricing: {
      badge: "价格预览",
      title: "为新的输入层准备的简单价格。",
      intro:
        "Fovea 目前仍处于 Beta 阶段。这里先把未来接入 Stripe Checkout 后的套餐结构展示出来。",
      billingToggle: {
        monthly: "月付",
        annual: "年付",
        save: "省 20%",
      },
      plans: [
        {
          name: "Beta",
          price: "$0",
          period: "Beta 期间",
          description: "适合正在测试 macOS 捕捉流程的早期用户。",
          cta: "下载 Beta",
          href: "/download",
          featured: false,
          features: [
            "语音、文本和图像捕捉",
            "结构化输出预览",
            "macOS Beta 自动更新",
            "反馈通道",
          ],
        },
        {
          name: "Pro",
          price: "$12",
          period: "每月",
          description: "适合每天依赖多模态快速输入的个人工作流。",
          cta: "先使用 Beta",
          href: "/download",
          featured: true,
          features: [
            "更高捕捉额度",
            "浏览器伴侣工作流",
            "优先模型路由",
            "提前体验投递流程改进",
          ],
        },
        {
          name: "Team",
          price: "定制",
          period: "团队方案",
          description: "适合需要团队引导、支持和管理能力的工作场景。",
          cta: "联系我们",
          href: "/feedback",
          featured: false,
          features: [
            "团队引导",
            "使用量和账单支持",
            "隐私与部署评审",
            "团队工作流路线图输入",
          ],
        },
      ],
      note:
        "公开计费上线前，套餐名称和价格仍可能调整。Beta 用户在任何付费切换前都会收到通知。",
      faqTitle: "价格 FAQ",
      faqs: [
        {
          question: "Beta 阶段是免费的吗？",
          answer:
            "是的。当前 macOS Beta 可以从下载页获取。付费方案上线前会提前通知。",
        },
        {
          question: "后续会用 Stripe 计费吗？",
          answer:
            "会。这个页面已经按后续接入 Stripe Checkout 的结构设计，计费开启后可以直接替换当前 CTA 动作。",
        },
        {
          question: "一次捕捉如何计算？",
          answer:
            "一次捕捉指用户主动触发的一条输入流程，可以包含语音、选中文本、截图和屏幕可见信息。",
        },
      ],
    },
    download: {
      badge: "BETA 下载入口",
      title: "下载 Fovea macOS 版本",
      intro:
        "下载 macOS 应用，注册账号即可开始使用。已安装的用户可直接在 App 内自动更新，无需重新下载。",
      macLabel: "macOS APP",
      macTitle: "主要 Beta 安装包",
      macButton: "下载 macOS 版本",
      macVersion: "v0.2.0-beta.7",
      macRequirements: "macOS 13+",
      macAutoUpdate: "内置自动更新",
      packageTitle: "最新 macOS 安装包",
      installSteps: [
        {
          title: "下载",
          body: "获取最新签名的 macOS 安装包。",
        },
        {
          title: "安装",
          body: "打开 DMG，并将 Fovea 移动到 Applications。",
        },
        {
          title: "登录",
          body: "启动 Fovea、登录账号，并授予捕捉所需权限。",
        },
      ],
      highlights: [
        "说话的同时捕捉多段文本和多张图像。",
        "Fovea 在后台打包输入，结束后只需一次投递。",
        "继续使用你已有的工具和工作流。",
      ],
      extTitle: "Fovea Companion 浏览器扩展",
      extBody:
        "可选的 Chrome 扩展，可将结构化输出发送到 ChatGPT、Claude、Gemini、DeepSeek 等浏览器端 AI 工具。",
      extButton: "下载扩展",
      extInstallNote:
        "下载完成后，请将扩展文件夹移动到固定位置（如「文稿」目录）。然后在 Chrome 中打开 chrome://extensions，开启「开发者模式」，点击「加载已解压的扩展程序」并选择该文件夹。请勿删除或移动此文件夹，否则 Chrome 重启后扩展会丢失。",
      requirementsTitle: "系统要求",
      requirements: [
        "macOS 13 Ventura 或更高版本",
        "Apple Silicon Mac（M1 或更新）",
        "需要麦克风和屏幕录制权限",
      ],
      expectationsTitle: "Beta 阶段说明",
      expectations: [
        "Fovea 还在快速迭代中，界面细节和投递流程可能会在不同 Beta 版本之间变化。",
        "macOS App 内置自动更新，后续无需手动重新下载。",
      ],
      waitlistPrompt: "还没有获得资格？",
      waitlistLink: "加入 Beta 等候名单",
    },
    feedback: {
      title: "提交反馈",
      intro:
        "你可以在这里提交 Bug、功能建议，或者任何产品反馈。你的意见会直接帮助我们改进 Fovea。",
      successTitle: "感谢反馈！",
      successBody: "我们已经收到你的反馈，会尽快查看。",
      submitAnother: "继续提交一条",
      typeLabel: "反馈类型",
      titleLabel: "标题",
      descriptionLabel: "描述",
      contactLabel: "联系方式",
      optionalLabel: "（可选）",
      titlePlaceholder: "用一句话概括你的反馈",
      descriptionPlaceholders: {
        bug: "发生了什么？你原本预期是什么？复现步骤是什么？",
        feature: "描述一下你希望增加的功能...",
        general: "写下你的想法...",
      },
      contactPlaceholder: "邮箱或其他联系方式",
      submitIdle: "提交反馈",
      submitLoading: "提交中...",
      errorFallback: "提交失败",
      typeOptions: [
        { value: "bug" as FeedbackType, label: "Bug 反馈", emoji: "!" },
        { value: "feature" as FeedbackType, label: "功能建议", emoji: "+" },
        { value: "general" as FeedbackType, label: "一般反馈", emoji: "..." },
      ],
    },
  },
} as const;

export type SiteCopy = (typeof siteCopy)[Locale];

export function getSiteCopy(locale: Locale): SiteCopy {
  return siteCopy[locale];
}

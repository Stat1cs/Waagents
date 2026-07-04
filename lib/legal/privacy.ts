import {
  BRAND_NAME,
  COMPANY_LOCATION,
  LEGAL_EMAIL,
  WEBSITE_URL,
} from "@/lib/constants";

import type { LegalDocuments } from "./types";

export const privacyPolicy: LegalDocuments = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "May 22, 2026",
    intro: `This Privacy Policy explains how ${BRAND_NAME} ("we", "us", or "our") collects, uses, shares, and protects personal information when you visit ${WEBSITE_URL}, use our AI messaging platform, or communicate with us. By using our services, you agree to the practices described below.`,
    sections: [
      {
        id: "who-we-are",
        title: "1. Who we are",
        blocks: [
          {
            type: "paragraph",
            text: `${BRAND_NAME} provides an AI-powered inbox for WhatsApp, Instagram, Messenger, and related business messaging channels. We help local service businesses automate replies, qualify leads, and book appointments.`,
          },
          {
            type: "paragraph",
            text: `Data controller: ${BRAND_NAME}, ${COMPANY_LOCATION}. For privacy questions, contact us at ${LEGAL_EMAIL}.`,
          },
        ],
      },
      {
        id: "information-we-collect",
        title: "2. Information we collect",
        blocks: [
          {
            type: "paragraph",
            text: "We collect information in three main ways: information you provide, information generated through use of our platform, and information from connected messaging channels.",
          },
          {
            type: "list",
            items: [
              "Account and business details: name, company name, email address, phone number, billing information, and team member details.",
              "Configuration data: FAQs, service menus, booking rules, business hours, and brand tone preferences you upload to train your AI agent.",
              "Messaging data: content of conversations processed through connected channels, including messages sent and received by your customers, metadata such as timestamps, delivery status, and channel identifiers.",
              "Customer/end-user data: names, phone numbers, appointment details, and other information your customers share in chats handled by the platform.",
              "Usage and device data: log files, IP address, browser type, pages viewed, feature usage, crash reports, and cookies or similar technologies on our website.",
              "Support communications: messages you send to our team via email, WhatsApp, or other channels.",
            ],
          },
        ],
      },
      {
        id: "how-we-use",
        title: "3. How we use information",
        blocks: [
          {
            type: "paragraph",
            text: "We use personal information to operate, improve, and secure our services. Specifically, we may use it to:",
          },
          {
            type: "list",
            items: [
              "Provide, configure, and maintain your AI inbox and booking workflows.",
              "Generate automated replies, qualify leads, and schedule appointments on your behalf.",
              "Authenticate users, process payments, and manage subscriptions.",
              "Monitor performance, troubleshoot issues, prevent fraud, and enforce our Terms.",
              "Send service notices, product updates, onboarding guidance, and support responses.",
              "Analyze aggregated or de-identified usage trends to improve our product.",
              "Comply with legal obligations and respond to lawful requests.",
            ],
          },
        ],
      },
      {
        id: "ai-processing",
        title: "4. AI and automated processing",
        blocks: [
          {
            type: "paragraph",
            text: `${BRAND_NAME} uses artificial intelligence and automated systems to analyze incoming messages and generate responses based on your configured knowledge base and rules. AI outputs may be reviewed by you before or after deployment depending on your settings.`,
          },
          {
            type: "paragraph",
            text: "We do not use your private business conversations to train public-facing models for unrelated customers without your permission. We may use aggregated, de-identified data to improve reliability, safety, and accuracy across the platform.",
          },
        ],
      },
      {
        id: "whatsapp-meta",
        title: "5. WhatsApp, Meta, and third-party platforms",
        blocks: [
          {
            type: "paragraph",
            text: "When you connect WhatsApp Business, Instagram, Messenger, or other messaging platforms, those services process data under their own terms and privacy policies. Meta and other platform providers may require us to access certain message and account data to deliver the integration.",
          },
          {
            type: "paragraph",
            text: "You are responsible for obtaining any consents required from your customers before using automated messaging, and for complying with each platform's business and commerce policies.",
          },
        ],
      },
      {
        id: "sharing",
        title: "6. How we share information",
        blocks: [
          {
            type: "paragraph",
            text: "We do not sell personal information. We may share information with:",
          },
          {
            type: "list",
            items: [
              "Service providers that help us host infrastructure, process payments, deliver email, provide analytics, or support customer service.",
              "Messaging platform partners necessary to connect and operate your channels.",
              "Professional advisers such as lawyers, accountants, or insurers where reasonably required.",
              "Authorities or other parties when required by law, court order, or to protect rights, safety, and security.",
              "A successor entity in connection with a merger, acquisition, or sale of assets, subject to this Policy.",
            ],
          },
        ],
      },
      {
        id: "retention",
        title: "7. Data retention",
        blocks: [
          {
            type: "paragraph",
            text: "We retain personal information for as long as needed to provide the services, fulfill the purposes described in this Policy, comply with legal obligations, resolve disputes, and enforce agreements.",
          },
          {
            type: "paragraph",
            text: "When you close your account, we will delete or anonymize your data within a reasonable period unless retention is required by law or legitimate business needs such as billing records or dispute resolution.",
          },
        ],
      },
      {
        id: "security",
        title: "8. Security",
        blocks: [
          {
            type: "paragraph",
            text: "We implement administrative, technical, and organizational measures designed to protect personal information against unauthorized access, loss, misuse, or alteration. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
          },
        ],
      },
      {
        id: "international-transfers",
        title: "9. International transfers",
        blocks: [
          {
            type: "paragraph",
            text: "Your information may be processed in Oman, the wider GCC region, or other countries where we or our service providers operate. Where required, we use appropriate safeguards for cross-border transfers.",
          },
        ],
      },
      {
        id: "your-rights",
        title: "10. Your rights",
        blocks: [
          {
            type: "paragraph",
            text: "Depending on applicable law, you may have rights to access, correct, delete, restrict, or object to certain processing of your personal information, and to withdraw consent where processing is consent-based.",
          },
          {
            type: "paragraph",
            text: `Business customers may exercise many of these rights through account settings or by contacting ${LEGAL_EMAIL}. End customers whose data is processed on behalf of a business should contact that business first; we will assist our customers in responding to valid requests where applicable.`,
          },
        ],
      },
      {
        id: "cookies",
        title: "11. Cookies and similar technologies",
        blocks: [
          {
            type: "paragraph",
            text: "Our website uses cookies and similar technologies to remember preferences such as language and theme, understand traffic patterns, and improve the site experience. You can control cookies through your browser settings. Disabling cookies may affect some site functionality.",
          },
        ],
      },
      {
        id: "children",
        title: "12. Children's privacy",
        blocks: [
          {
            type: "paragraph",
            text: "Our services are intended for businesses and are not directed to children under 18. We do not knowingly collect personal information from children. If you believe a child has provided us information, contact us and we will take appropriate steps to delete it.",
          },
        ],
      },
      {
        id: "changes",
        title: "13. Changes to this Policy",
        blocks: [
          {
            type: "paragraph",
            text: "We may update this Privacy Policy from time to time. We will post the revised version on this page and update the \"Last updated\" date. Material changes may also be communicated by email or in-product notice where appropriate.",
          },
        ],
      },
      {
        id: "contact",
        title: "14. Contact us",
        blocks: [
          {
            type: "paragraph",
            text: `If you have questions about this Privacy Policy or our data practices, contact us at ${LEGAL_EMAIL} or write to ${BRAND_NAME}, ${COMPANY_LOCATION}.`,
          },
        ],
      },
    ],
  },
  ar: {
    title: "سياسة الخصوصية",
    lastUpdated: "٢٢ مايو ٢٠٢٦",
    intro: `توضّح سياسة الخصوصية هذه كيف تجمع ${BRAND_NAME} ("نحن" أو "لنا") المعلومات الشخصية وتستخدمها وتشاركها وتحميها عند زيارتك ${WEBSITE_URL} أو استخدامك منصة المراسلة الذكية أو التواصل معنا. باستخدامك خدماتنا، فإنك توافق على الممارسات الموضّحة أدناه.`,
    sections: [
      {
        id: "who-we-are",
        title: "١. من نحن",
        blocks: [
          {
            type: "paragraph",
            text: `${BRAND_NAME} توفّر صندوق وارد ذكياً لواتساب وإنستغرام وماسنجر وقنوات مراسلة تجارية ذات صلة. نساعد أعمال الخدمات المحلية على أتمتة الردود وتأهيل العملاء وحجز المواعيد.`,
          },
          {
            type: "paragraph",
            text: `المتحكّم بالبيانات: ${BRAND_NAME}، ${COMPANY_LOCATION}. للاستفسارات المتعلقة بالخصوصية، تواصل معنا على ${LEGAL_EMAIL}.`,
          },
        ],
      },
      {
        id: "information-we-collect",
        title: "٢. المعلومات التي نجمعها",
        blocks: [
          {
            type: "paragraph",
            text: "نجمع المعلومات بثلاث طرق رئيسية: ما تقدّمه أنت، وما يُنشأ من استخدام المنصة، والمعلومات الواردة من قنوات المراسلة المتصلة.",
          },
          {
            type: "list",
            items: [
              "بيانات الحساب والنشاط: الاسم، اسم الشركة، البريد الإلكتروني، رقم الهاتف، معلومات الفوترة، وبيانات أعضاء الفريق.",
              "بيانات الإعداد: الأسئلة الشائعة، قوائم الخدمات، قواعد الحجز، ساعات العمل، وتفضيلات نبرة العلامة التجارية التي ترفعها لتدريب وكيلك الذكي.",
              "بيانات المراسلة: محتوى المحادثات المعالجة عبر القنوات المتصلة، بما في ذلك الرسائل المرسلة والمستلمة من عملائك، والبيانات الوصفية مثل الطوابع الزمنية وحالة التسليم ومعرّفات القنوات.",
              "بيانات العملاء/المستخدمين النهائيين: الأسماء وأرقام الهواتف وتفاصيل المواعيد وأي معلومات يشاركها عملاؤك في المحادثات التي تُدار عبر المنصة.",
              "بيانات الاستخدام والجهاز: ملفات السجل، عنوان IP، نوع المتصفح، الصفحات المعروضة، استخدام الميزات، تقارير الأعطال، وملفات تعريف الارتباط أو تقنيات مشابهة على موقعنا.",
              "اتصالات الدعم: الرسائل التي ترسلها إلى فريقنا عبر البريد الإلكتروني أو واتساب أو قنوات أخرى.",
            ],
          },
        ],
      },
      {
        id: "how-we-use",
        title: "٣. كيف نستخدم المعلومات",
        blocks: [
          {
            type: "paragraph",
            text: "نستخدم المعلومات الشخصية لتشغيل خدماتنا وتحسينها وتأمينها. على وجه التحديد، قد نستخدمها من أجل:",
          },
          {
            type: "list",
            items: [
              "توفير صندوق الوارد الذكي وتدفقات الحجز وصيانتهما.",
              "إنشاء ردود آلية وتأهيل العملاء المحتملين وجدولة المواعيد نيابةً عنك.",
              "مصادقة المستخدمين ومعالجة المدفوعات وإدارة الاشتراكات.",
              "مراقبة الأداء واستكشاف الأخطاء ومنع الاحتيال وإنفاذ الشروط.",
              "إرسال إشعارات الخدمة وتحديثات المنتج وإرشادات الإعداد وردود الدعم.",
              "تحليل اتجاهات الاستخدام المجمّعة أو مجهولة الهوية لتحسين المنتج.",
              "الامتثال للالتزامات القانونية والاستجابة للطلبات النظامية.",
            ],
          },
        ],
      },
      {
        id: "ai-processing",
        title: "٤. الذكاء الاصطناعي والمعالجة الآلية",
        blocks: [
          {
            type: "paragraph",
            text: `يستخدم ${BRAND_NAME} الذكاء الاصطناعي والأنظمة الآلية لتحليل الرسائل الواردة وإنشاء الردود بناءً على قاعدة المعرفة والقواعد التي تضبطها. قد تراجع مخرجات الذكاء الاصطناعي قبل أو بعد التفعيل حسب إعداداتك.`,
          },
          {
            type: "paragraph",
            text: "لا نستخدم محادثات نشاطك التجاري الخاصة لتدريب نماذج عامة موجهة لعملاء آخرين دون إذنك. قد نستخدم بيانات مجمّعة ومجهولة الهوية لتحسين الموثوقية والسلامة والدقة عبر المنصة.",
          },
        ],
      },
      {
        id: "whatsapp-meta",
        title: "٥. واتساب وميتا ومنصات الطرف الثالث",
        blocks: [
          {
            type: "paragraph",
            text: "عند ربط واتساب للأعمال أو إنستغرام أو ماسنجر أو منصات مراسلة أخرى، تُعالج تلك الخدمات البيانات وفق شروطها وسياسات الخصوصية الخاصة بها. قد تطلب ميتا ومزودو المنصات الآخرون منا الوصول إلى بيانات رسائل وحساب معيّنة لتقديم التكامل.",
          },
          {
            type: "paragraph",
            text: "أنت مسؤول عن الحصول على أي موافقات مطلوبة من عملائك قبل استخدام المراسلة الآلية، والامتثال لسياسات الأعمال والتجارة لكل منصة.",
          },
        ],
      },
      {
        id: "sharing",
        title: "٦. كيف نشارك المعلومات",
        blocks: [
          {
            type: "paragraph",
            text: "لا نبيع المعلومات الشخصية. قد نشارك المعلومات مع:",
          },
          {
            type: "list",
            items: [
              "مزودي الخدمات الذين يساعدوننا في استضافة البنية التحتية ومعالجة المدفوعات وإرسال البريد الإلكتروني وتقديم التحليلات أو دعم العملاء.",
              "شركاء منصات المراسلة اللازمين لربط قنواتك وتشغيلها.",
              "مستشارين مهنيين مثل المحامين والمحاسبين أو شركات التأمين عند الحاجة المعقولة.",
              "الجهات المختصة أو أطراف أخرى عندما يقتضي القانون أو أمر قضائي ذلك، أو لحماية الحقوق والسلامة والأمن.",
              "كيان خلف في إطار اندماج أو استحواذ أو بيع أصول، مع الالتزام بهذه السياسة.",
            ],
          },
        ],
      },
      {
        id: "retention",
        title: "٧. الاحتفاظ بالبيانات",
        blocks: [
          {
            type: "paragraph",
            text: "نحتفظ بالمعلومات الشخصية طالما كان ذلك ضرورياً لتقديم الخدمات وتحقيق الأغراض الموضّحة في هذه السياسة والامتثال للالتزامات القانونية وحل النزاعات وإنفاذ الاتفاقيات.",
          },
          {
            type: "paragraph",
            text: "عند إغلاق حسابك، سنحذف بياناتك أو نجعلها مجهولة الهوية خلال فترة معقولة ما لم يكن الاحتفاظ مطلوباً بموجب القانون أو لاحتياجات تجارية مشروعة مثل سجلات الفوترة أو تسوية النزاعات.",
          },
        ],
      },
      {
        id: "security",
        title: "٨. الأمان",
        blocks: [
          {
            type: "paragraph",
            text: "نطبّق تدابير إدارية وتقنية وتنظيمية لحماية المعلومات الشخصية من الوصول غير المصرّح به أو الفقد أو سوء الاستخدام أو التعديل. لا توجد وسيلة نقل أو تخزين آمنة بالكامل، ولا يمكننا ضمان أمان مطلق.",
          },
        ],
      },
      {
        id: "international-transfers",
        title: "٩. النقل الدولي للبيانات",
        blocks: [
          {
            type: "paragraph",
            text: "قد تُعالَج معلوماتك في عُمان أو منطقة مجلس التعاون أو في دول أخرى حيث نعمل نحن أو مزودو خدماتنا. عند الاقتضاء، نستخدم ضمانات مناسبة للنقل عبر الحدود.",
          },
        ],
      },
      {
        id: "your-rights",
        title: "١٠. حقوقك",
        blocks: [
          {
            type: "paragraph",
            text: "بحسب القانون المعمول به، قد تكون لك حقوق في الوصول إلى معلوماتك الشخصية أو تصحيحها أو حذفها أو تقييد معالجتها أو الاعتراض على بعض المعالجة، وسحب الموافقة حيث تكون المعالجة قائمة على الموافقة.",
          },
          {
            type: "paragraph",
            text: `يمكن لعملاء الأعمال ممارسة كثير من هذه الحقوق عبر إعدادات الحساب أو بالتواصل على ${LEGAL_EMAIL}. ينبغي لمستخدمي النهاية الذين تُعالَج بياناتهم نيابةً عن نشاط تجاري التواصل مع ذلك النشاط أولاً؛ وسنساعد عملاءنا في الاستجابة للطلبات المشروعة حيث ينطبق ذلك.`,
          },
        ],
      },
      {
        id: "cookies",
        title: "١١. ملفات تعريف الارتباط وتقنيات مشابهة",
        blocks: [
          {
            type: "paragraph",
            text: "يستخدم موقعنا ملفات تعريف الارتباط وتقنيات مشابهة لتذكّر تفضيلات مثل اللغة والمظهر، وفهم أنماط الزيارات، وتحسين تجربة الموقع. يمكنك التحكم في ملفات تعريف الارتباط عبر إعدادات المتصفح. قد يؤثر تعطيلها على بعض وظائف الموقع.",
          },
        ],
      },
      {
        id: "children",
        title: "١٢. خصوصية الأطفال",
        blocks: [
          {
            type: "paragraph",
            text: "خدماتنا موجهة للأعمال وليست موجّهة للأطفال دون 18 عاماً. لا نجمع عن قصد معلومات شخصية من الأطفال. إذا اعتقدت أن طفلاً قد زوّدنا بمعلومات، تواصل معنا وسنتخذ الخطوات المناسبة لحذفها.",
          },
        ],
      },
      {
        id: "changes",
        title: "١٣. التغييرات على هذه السياسة",
        blocks: [
          {
            type: "paragraph",
            text: "قد نحدّث سياسة الخصوصية من وقت لآخر. سننشر النسخة المحدّثة على هذه الصفحة ونحدّث تاريخ \"آخر تحديث\". قد نبلغ أيضاً بالتغييرات الجوهرية عبر البريد الإلكتروني أو إشعار داخل المنتج عند الاقتضاء.",
          },
        ],
      },
      {
        id: "contact",
        title: "١٤. تواصل معنا",
        blocks: [
          {
            type: "paragraph",
            text: `إذا كانت لديك أسئلة حول سياسة الخصوصية أو ممارسات البيانات لدينا، تواصل معنا على ${LEGAL_EMAIL} أو اكتب إلى ${BRAND_NAME}، ${COMPANY_LOCATION}.`,
          },
        ],
      },
    ],
  },
};

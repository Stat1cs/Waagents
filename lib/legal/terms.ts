import {
  BRAND_NAME,
  COMPANY_LOCATION,
  LEGAL_EMAIL,
  WEBSITE_URL,
} from "@/lib/constants";

import type { LegalDocuments } from "./types";

export const termsOfService: LegalDocuments = {
  en: {
    title: "Terms and Conditions",
    lastUpdated: "May 22, 2026",
    intro: `These Terms and Conditions ("Terms") govern access to and use of the ${BRAND_NAME} website, platform, and related services (collectively, the "Services"). By creating an account, connecting a messaging channel, or otherwise using the Services, you agree to these Terms on behalf of yourself and the business you represent.`,
    sections: [
      {
        id: "definitions",
        title: "1. Definitions",
        blocks: [
          {
            type: "paragraph",
            text: `"Customer", "you", or "your" means the business or authorized user registering for the Services. "End user" means a person who messages your business through a connected channel. "Content" means data, text, media, prompts, configurations, and other materials submitted to or generated through the Services.`,
          },
        ],
      },
      {
        id: "eligibility",
        title: "2. Eligibility and account registration",
        blocks: [
          {
            type: "paragraph",
            text: "You must be at least 18 years old and authorized to bind the business you represent. You agree to provide accurate registration information and keep it current.",
          },
          {
            type: "paragraph",
            text: "You are responsible for safeguarding login credentials and for all activity under your account. Notify us promptly at the contact details below if you suspect unauthorized access.",
          },
        ],
      },
      {
        id: "services",
        title: "3. Description of Services",
        blocks: [
          {
            type: "paragraph",
            text: `${BRAND_NAME} provides software that helps businesses automate messaging, qualify leads, and manage bookings across supported channels. Features may vary by plan and region. We may update, add, or remove features from time to time.`,
          },
          {
            type: "paragraph",
            text: "We do not guarantee that AI-generated replies will be error-free, legally compliant in every scenario, or suitable without human review. You remain responsible for reviewing automated flows and ensuring they meet your business and regulatory requirements.",
          },
        ],
      },
      {
        id: "acceptable-use",
        title: "4. Acceptable use",
        blocks: [
          {
            type: "paragraph",
            text: "You agree not to use the Services to:",
          },
          {
            type: "list",
            items: [
              "Violate applicable laws, platform policies, or third-party rights.",
              "Send spam, deceptive, harassing, hateful, or unlawful messages.",
              "Collect or process sensitive personal data without a lawful basis and appropriate safeguards.",
              "Attempt to reverse engineer, probe, or disrupt the Services or related systems.",
              "Misrepresent your identity, services, pricing, or availability.",
              "Use the Services for high-risk activities where automated messaging could cause material harm without human oversight.",
            ],
          },
        ],
      },
      {
        id: "platform-compliance",
        title: "5. Messaging platform compliance",
        blocks: [
          {
            type: "paragraph",
            text: "Your use of WhatsApp, Instagram, Messenger, and other integrated platforms must comply with each provider's terms, commerce policies, and messaging rules, including opt-in, template, and customer care requirements.",
          },
          {
            type: "paragraph",
            text: "If a platform suspends, limits, or terminates your account because of your messaging practices, we are not liable for resulting loss of access, revenue, or data.",
          },
        ],
      },
      {
        id: "customer-content",
        title: "6. Your content and data",
        blocks: [
          {
            type: "paragraph",
            text: "You retain ownership of Content you submit. You grant us a limited license to host, process, transmit, display, and otherwise use Content solely to provide, maintain, secure, and improve the Services.",
          },
          {
            type: "paragraph",
            text: "You represent that you have all rights and consents needed for us to process Content, including End user messages and personal data, in accordance with these Terms and our Privacy Policy.",
          },
        ],
      },
      {
        id: "fees",
        title: "7. Fees, billing, and taxes",
        blocks: [
          {
            type: "paragraph",
            text: "Paid plans are billed according to the pricing shown at signup or in your order form. Fees are generally non-refundable except where required by law or expressly stated in writing.",
          },
          {
            type: "paragraph",
            text: "You authorize us and our payment processors to charge applicable fees, taxes, and overages. Failure to pay may result in suspension or termination of the Services.",
          },
        ],
      },
      {
        id: "trial-beta",
        title: "8. Trials, demos, and beta features",
        blocks: [
          {
            type: "paragraph",
            text: "We may offer free trials, demos, or beta features on an as-is basis. These may be modified or discontinued at any time. Additional terms may apply to beta functionality.",
          },
        ],
      },
      {
        id: "intellectual-property",
        title: "9. Intellectual property",
        blocks: [
          {
            type: "paragraph",
            text: `${BRAND_NAME}, its logos, software, documentation, and all related intellectual property are owned by us or our licensors. Except for the limited right to use the Services during an active subscription, no rights are granted to you by implication or otherwise.`,
          },
          {
            type: "paragraph",
            text: "You may not copy, modify, distribute, sell, or lease any part of the Services unless we give written permission.",
          },
        ],
      },
      {
        id: "confidentiality",
        title: "10. Confidentiality",
        blocks: [
          {
            type: "paragraph",
            text: "Each party may receive non-public information from the other. The receiving party will use reasonable care to protect such information and will use it only for purposes related to the Services, except as required by law.",
          },
        ],
      },
      {
        id: "privacy",
        title: "11. Privacy and data processing",
        blocks: [
          {
            type: "paragraph",
            text: `Our Privacy Policy at ${WEBSITE_URL}/privacy explains how we handle personal information. Where we process End user data on your behalf, you act as the controller and we act as a processor to the extent applicable under local law.`,
          },
        ],
      },
      {
        id: "disclaimers",
        title: "12. Disclaimers",
        blocks: [
          {
            type: "paragraph",
            text: `THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" TO THE MAXIMUM EXTENT PERMITTED BY LAW. WE DISCLAIM ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.`,
          },
        ],
      },
      {
        id: "liability",
        title: "13. Limitation of liability",
        blocks: [
          {
            type: "paragraph",
            text: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, ${BRAND_NAME.toUpperCase()} AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AND SUPPLIERS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR BUSINESS OPPORTUNITY.`,
          },
          {
            type: "paragraph",
            text: "Our total liability for any claim arising out of or relating to the Services will not exceed the fees paid by you to us in the twelve (12) months before the event giving rise to the claim, or one hundred Omani Rials (OMR 100) if no fees were paid, whichever is greater.",
          },
        ],
      },
      {
        id: "indemnity",
        title: "14. Indemnification",
        blocks: [
          {
            type: "paragraph",
            text: "You will defend, indemnify, and hold harmless Wa-Agents and its affiliates from claims, damages, losses, and expenses (including reasonable legal fees) arising from your Content, your messaging practices, your breach of these Terms, or your violation of law or third-party rights.",
          },
        ],
      },
      {
        id: "suspension",
        title: "15. Suspension and termination",
        blocks: [
          {
            type: "paragraph",
            text: "You may stop using the Services at any time. We may suspend or terminate access if you breach these Terms, fail to pay fees, create legal or security risk, or if required by a platform provider or law.",
          },
          {
            type: "paragraph",
            text: "Upon termination, your right to use the Services ends. Provisions that by nature should survive will survive, including payment obligations, disclaimers, limitations of liability, and indemnity.",
          },
        ],
      },
      {
        id: "governing-law",
        title: "16. Governing law and disputes",
        blocks: [
          {
            type: "paragraph",
            text: `These Terms are governed by the laws of the Sultanate of Oman, without regard to conflict-of-law principles. The courts of Muscat, Oman shall have exclusive jurisdiction over disputes arising from or relating to these Terms, subject to any mandatory consumer protections that apply to you.`,
          },
          {
            type: "paragraph",
            text: "Before filing a claim, the parties agree to attempt good-faith resolution by contacting each other within thirty (30) days.",
          },
        ],
      },
      {
        id: "changes",
        title: "17. Changes to these Terms",
        blocks: [
          {
            type: "paragraph",
            text: "We may modify these Terms from time to time. If we make material changes, we will provide notice through the Services, by email, or by updating the date at the top of this page. Continued use after the effective date constitutes acceptance of the revised Terms.",
          },
        ],
      },
      {
        id: "contact",
        title: "18. Contact",
        blocks: [
          {
            type: "paragraph",
            text: `Questions about these Terms may be sent to ${LEGAL_EMAIL} or ${BRAND_NAME}, ${COMPANY_LOCATION}.`,
          },
        ],
      },
    ],
  },
  ar: {
    title: "الشروط والأحكام",
    lastUpdated: "٢٢ مايو ٢٠٢٦",
    intro: `تحكم هذه الشروط والأحكام ("الشروط") الوصول إلى موقع ${BRAND_NAME} ومنصته والخدمات ذات الصلة (مجتمعةً "الخدمات") واستخدامها. بإنشاء حساب أو ربط قناة مراسلة أو استخدام الخدمات بأي شكل آخر، فإنك توافق على هذه الشروط نيابةً عن نفسك وعن النشاط التجاري الذي تمثّله.`,
    sections: [
      {
        id: "definitions",
        title: "١. التعريفات",
        blocks: [
          {
            type: "paragraph",
            text: `"العميل" أو "أنت" يعني النشاط التجاري أو المستخدم المخوّل الذي يسجّل في الخدمات. "المستخدم النهائي" يعني الشخص الذي يراسل نشاطك عبر قناة متصلة. "المحتوى" يعني البيانات والنصوص والوسائط والتعليمات والإعدادات وغيرها من المواد المقدّمة إلى الخدمات أو الناتجة عنها.`,
          },
        ],
      },
      {
        id: "eligibility",
        title: "٢. الأهلية وتسجيل الحساب",
        blocks: [
          {
            type: "paragraph",
            text: "يجب أن يكون عمرك 18 عاماً على الأقل وأن تكون مخوّلاً بإلزام النشاط التجاري الذي تمثّله. توافق على تقديم معلومات تسجيل دقيقة وتحديثها.",
          },
          {
            type: "paragraph",
            text: "أنت مسؤول عن حماية بيانات تسجيل الدخول وعن جميع الأنشطة التي تتم عبر حسابك. أبلغنا فوراً عند الاشتباه في وصول غير مصرّح به.",
          },
        ],
      },
      {
        id: "services",
        title: "٣. وصف الخدمات",
        blocks: [
          {
            type: "paragraph",
            text: `${BRAND_NAME} توفّر برمجيات تساعد الأعمال على أتمتة المراسلة وتأهيل العملاء وإدارة الحجوزات عبر القنوات المدعومة. قد تختلف الميزات حسب الخطة والمنطقة. قد نحدّث الميزات أو نضيفها أو نزيلها من وقت لآخر.`,
          },
          {
            type: "paragraph",
            text: "لا نضمن أن الردود التي ينشئها الذكاء الاصطناعي خالية من الأخطاء أو متوافقة قانونياً في كل الحالات أو مناسبة دون مراجعة بشرية. تظل مسؤولاً عن مراجعة التدفقات الآلية وضمان مطابقتها لمتطلبات نشاطك والأنظمة المعمول بها.",
          },
        ],
      },
      {
        id: "acceptable-use",
        title: "٤. الاستخدام المقبول",
        blocks: [
          {
            type: "paragraph",
            text: "توافق على عدم استخدام الخدمات من أجل:",
          },
          {
            type: "list",
            items: [
              "انتهاك القوانين المعمول بها أو سياسات المنصات أو حقوق الغير.",
              "إرسال رسائل مزعجة أو مضللة أو مسيئة أو تحريضية أو غير قانونية.",
              "جمع أو معالجة بيانات شخصية حساسة دون أساس قانوني وضمانات مناسبة.",
              "محاولة الهندسة العكسية أو اختراق أو تعطيل الخدمات أو الأنظمة ذات الصلة.",
              "انتحال الهوية أو تقديم معلومات مضللة عن خدماتك أو أسعارك أو توفرك.",
              "استخدام الخدمات في أنشطة عالية المخاطر حيث قد تسبب المراسلة الآلية ضرراً جسيماً دون إشراف بشري.",
            ],
          },
        ],
      },
      {
        id: "platform-compliance",
        title: "٥. الامتثال لمنصات المراسلة",
        blocks: [
          {
            type: "paragraph",
            text: "يجب أن يتوافق استخدامك لواتساب وإنستغرام وماسنجر والمنصات المتكاملة الأخرى مع شروط كل مزود وسياسات التجارة وقواعد المراسلة، بما في ذلك متطلبات الموافقة والقوالب وخدمة العملاء.",
          },
          {
            type: "paragraph",
            text: "إذا علّقت منصة أو قيّدت أو أنهت حسابك بسبب ممارسات مراسلتك، فلسنا مسؤولين عن فقدان الوصول أو الإيرادات أو البيانات الناتج.",
          },
        ],
      },
      {
        id: "customer-content",
        title: "٦. محتواك وبياناتك",
        blocks: [
          {
            type: "paragraph",
            text: "تحتفظ بملكية المحتوى الذي تقدّمه. تمنحنا ترخيصاً محدوداً لاستضافة المحتوى ومعالجته ونقله وعرضه واستخدامه حصرياً لتقديم الخدمات وصيانتها وتأمينها وتحسينها.",
          },
          {
            type: "paragraph",
            text: "تقرّ بأن لديك جميع الحقوق والموافقات اللازمة لمعالجة المحتوى، بما في ذلك رسائل المستخدمين النهائيين والبيانات الشخصية، وفق هذه الشروط وسياسة الخصوصية.",
          },
        ],
      },
      {
        id: "fees",
        title: "٧. الرسوم والفوترة والضرائب",
        blocks: [
          {
            type: "paragraph",
            text: "تُفوتر الخطط المدفوعة وفق الأسعار المعروضة عند التسجيل أو في نموذج الطلب. الرسوم غير قابلة للاسترداد بوجه عام إلا حيث يقتضي القانون ذلك أو يُنص عليه كتابةً.",
          },
          {
            type: "paragraph",
            text: "تخوّلنا نحن ومعالجي الدفع بخصم الرسوم والضرائب والزيادات المطبّقة. قد يؤدي عدم الدفع إلى تعليق الخدمات أو إنهائها.",
          },
        ],
      },
      {
        id: "trial-beta",
        title: "٨. التجارب والعروض والميزات التجريبية",
        blocks: [
          {
            type: "paragraph",
            text: "قد نقدّم تجارب مجانية أو عروضاً أو ميزات تجريبية كما هي. قد تُعدّل أو تُوقف في أي وقت. قد تنطبق شروط إضافية على الوظائف التجريبية.",
          },
        ],
      },
      {
        id: "intellectual-property",
        title: "٩. الملكية الفكرية",
        blocks: [
          {
            type: "paragraph",
            text: `${BRAND_NAME} وشعاراتها وبرمجياتها ووثائقها وجميع حقوق الملكية الفكرية ذات الصلة مملوكة لنا أو لمرخّصينا. باستثناء الحق المحدود في استخدام الخدمات خلال اشتراك نشط، لا تُمنح لك أي حقوق ضمنياً أو غير ذلك.`,
          },
          {
            type: "paragraph",
            text: "لا يجوز نسخ أي جزء من الخدمات أو تعديله أو توزيعه أو بيعه أو تأجيره دون إذن كتابي منا.",
          },
        ],
      },
      {
        id: "confidentiality",
        title: "١٠. السرية",
        blocks: [
          {
            type: "paragraph",
            text: "قد يتلقى كل طرف معلومات غير عامة من الطرف الآخر. يستخدم الطرف المتلقي عناية معقولة لحماية هذه المعلومات ويستخدمها فقط لأغراض متعلقة بالخدمات، إلا حيث يقتضي القانون خلاف ذلك.",
          },
        ],
      },
      {
        id: "privacy",
        title: "١١. الخصوصية ومعالجة البيانات",
        blocks: [
          {
            type: "paragraph",
            text: `توضّح سياسة الخصوصية على ${WEBSITE_URL}/privacy كيفية تعاملنا مع المعلومات الشخصية. حيث نعالج بيانات المستخدمين النهائيين نيابةً عنك، فأنت المتحكّم بالبيانات ونحن المعالج بالقدر المعمول به بموجب القانون المحلي.`,
          },
        ],
      },
      {
        id: "disclaimers",
        title: "١٢. إخلاء المسؤولية",
        blocks: [
          {
            type: "paragraph",
            text: `تُقدَّم الخدمات "كما هي" و"حسب التوفر" إلى أقصى حد يسمح به القانون. نخلي مسؤوليتنا عن جميع الضمانات، سواء كانت صريحة أو ضمنية أو قانونية، بما في ذلك ضمانات القابلية للتسويق والملاءمة لغرض معيّن وعدم الانتهاك.`,
          },
        ],
      },
      {
        id: "liability",
        title: "١٣. تحديد المسؤولية",
        blocks: [
          {
            type: "paragraph",
            text: `إلى أقصى حد يسمح به القانون، لن تكون ${BRAND_NAME} أو الشركات التابعة لها أو مسؤولوها أو موظفوها أو موردوها مسؤولين عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية، أو عن فقدان الأرباح أو الإيرادات أو البيانات أو السمعة أو فرص الأعمال.`,
          },
          {
            type: "paragraph",
            text: "لن تتجاوز مسؤوليتنا الإجمالية عن أي مطالبة ناشئة عن الخدمات أو متعلقة بها الرسوم التي دفعتها لنا خلال الاثني عشر (12) شهراً السابقة للحدث، أو مائة ريال عُماني (100 OMR) إذا لم تُدفع رسوم، أيهما أكبر.",
          },
        ],
      },
      {
        id: "indemnity",
        title: "١٤. التعويض",
        blocks: [
          {
            type: "paragraph",
            text: "ستدافع عن Wa-Agents والشركات التابعة لها وتعوّضها وتحميها من المطالبات والأضرار والخسائر والنفقات (بما في ذلك أتعاب المحاماة المعقولة) الناشئة عن محتواك أو ممارسات مراسلتك أو خرقك لهذه الشروط أو انتهاكك للقانون أو حقوق الغير.",
          },
        ],
      },
      {
        id: "suspension",
        title: "١٥. التعليق والإنهاء",
        blocks: [
          {
            type: "paragraph",
            text: "يمكنك التوقف عن استخدام الخدمات في أي وقت. قد نعلّق الوصول أو ننهيه إذا خرقت هذه الشروط أو لم تدفع الرسوم أو أحدثت خطراً قانونياً أو أمنياً، أو إذا طلبت ذلك منصة أو القانون.",
          },
          {
            type: "paragraph",
            text: "عند الإنهاء، ينتهي حقك في استخدام الخدمات. تبقى الأحكام التي يقتضي طبيعتها البقاء سارية، بما في ذلك التزامات الدفع وإخلاء المسؤولية وتحديد المسؤولية والتعويض.",
          },
        ],
      },
      {
        id: "governing-law",
        title: "١٦. القانون الحاكم والنزاعات",
        blocks: [
          {
            type: "paragraph",
            text: "تخضع هذه الشروط لقوانين سلطنة عُمان، دون مراعاة لمبادئ تعارض القوانين. تختص محاكم مسقط، عُمان حصرياً بالنزاعات الناشئة عن هذه الشروط أو المتعلقة بها، مع مراعاة أي حماية إلزامية للمستهلك تنطبق عليك.",
          },
          {
            type: "paragraph",
            text: "قبل رفع دعوى، يتفق الطرفان على محاولة حل النزاع بحسن نية عبر التواصل خلال ثلاثين (30) يوماً.",
          },
        ],
      },
      {
        id: "changes",
        title: "١٧. التغييرات على هذه الشروط",
        blocks: [
          {
            type: "paragraph",
            text: "قد نعدّل هذه الشروط من وقت لآخر. إذا أجرينا تغييرات جوهرية، سنقدّم إشعاراً عبر الخدمات أو البريد الإلكتروني أو بتحديث التاريخ في أعلى هذه الصفحة. يُعد الاستمرار بعد تاريخ السريان قبولاً للشروط المحدّثة.",
          },
        ],
      },
      {
        id: "contact",
        title: "١٨. التواصل",
        blocks: [
          {
            type: "paragraph",
            text: `يمكن إرسال الأسئلة حول هذه الشروط إلى ${LEGAL_EMAIL} أو ${BRAND_NAME}، ${COMPANY_LOCATION}.`,
          },
        ],
      },
    ],
  },
};

// /privacy-security/ text, EN + AR. Every string is existing text: the landing (heading, lead, section names,
// button labels) or the legal documents (PRIVACY.md, SECURITY.md), copied verbatim. Where a legal sentence
// is cut, only a closing sentence that points "below" in the policy is left out (marked).
export const privacy = {
  en: {
    title: "Privacy & Security · Luna AI Core",
    description: "Luna is local-first. File operations require confirmation, folder access is controlled, and cloud use remains optional.",
    eyebrow: "PRIVACY & SECURITY",
    heading: "Your data. Your decisions.",
    lead: "Luna is local-first. File operations require confirmation, folder access is controlled, and cloud use remains optional.",
    // PRIVACY.md:10 up to "and later" (the "Effective" date is left out so it cannot go stale here)
    applies: "Applies to: Luna AI Desktop Assistant for Windows, Beta 0.1 and later",
    shortTitle: "The short version",
    short: [
      "Luna has no account, no ads, no telemetry and no analytics. The developer does not receive your conversations, files, memories or usage data.",
      "Your data is stored on your PC.",
      // PRIVACY.md:16 without its last sentence ("Each case is listed below.")
      "Data leaves your PC only when you use a cloud feature, search the web or have Luna read a web page, or when Luna checks for updates or downloads a component you asked for.",
    ],
    filesTitle: "Your files, within reach",
    files: "Luna reads or changes files only in the folders you allow, with the permission you set for each folder (read only or full access), and asks you to confirm every file operation.",
    modesTitle: "Choose how Luna thinks.",
    modes: [
      { title: "Local", text: "In Local mode, AI processing runs on your PC. Luna Engine only accepts connections from your own computer (127.0.0.1)." },
      { title: "Cloud", text: "Optional. Use your own API key, stored in Windows Credential Manager." },
      { title: "Hybrid", text: "In Hybrid mode, messages Luna detects as sensitive stay on your PC. This detection helps, but it may not catch everything." },
    ],
    privateLine: "Private conversations 🔒 are never sent to the cloud.",
    webTitle: "Web Search & Reading",
    web: "Luna can search the web, and can read a web page whose link you wrote. Neither works in a private conversation 🔒, and searching works only after you add a search key yourself.",
    securityTitle: "Never report security problems in a public issue",
    security: "Luna runs on your PC, reads your files only where you allow it, and can use cloud AI with your own keys. If you find a way this could put users' data or computers at risk, please tell us privately.",
    verify: "How can I verify the installer?",
    policy: "Privacy policy",
    terms: "Terms of use",
    securityPolicy: "Security policy",
  },
  ar: {
    title: "الخصوصية والأمان · Luna AI Core",
    description: "تعتمد لونا التشغيل المحلي أولًا. تتطلب عمليات الملفات تأكيدك، وتخضع صلاحيات المجلدات للتحكم، ويبقى استخدام السحابة اختياريًا.",
    eyebrow: "الخصوصية والأمان",
    heading: "بياناتك. قراراتك.",
    lead: "تعتمد لونا التشغيل المحلي أولًا. تتطلب عمليات الملفات تأكيدك، وتخضع صلاحيات المجلدات للتحكم، ويبقى استخدام السحابة اختياريًا.",
    // PRIVACY.md:119 up to "وما بعده"
    applies: "ينطبق على: Luna AI Desktop Assistant لنظام Windows، الإصدار التجريبي 0.1 وما بعده",
    shortTitle: "باختصار",
    short: [
      "لا تحتوي لونا على حساب أو إعلانات أو تتبّع أو إحصاءات استخدام. ولا يستلم المطوّر محادثاتك أو ملفاتك أو ذكرياتك أو بيانات استخدامك.",
      "تُحفظ بياناتك على جهازك.",
      // PRIVACY.md:125 without its last sentence ("وكل حالة موضّحة أدناه.")
      "لا تخرج البيانات من جهازك إلا عندما تستخدم أنت ميزة سحابية، أو تبحث في الويب، أو تطلب من لونا قراءة صفحة ويب، أو عندما تفحص لونا وجود تحديث، أو تنزّل مكوّنًا طلبته.",
    ],
    filesTitle: "ملفاتك في متناولك",
    files: "لا تقرأ لونا الملفات أو تعدّلها إلا في المجلدات التي تسمح بها، وبالصلاحية التي تحددها لكل مجلد (قراءة فقط أو وصول كامل)، وتطلب تأكيدك قبل كل عملية على الملفات.",
    modesTitle: "اختر كيف تعمل لونا.",
    modes: [
      { title: "محلي", text: "في الوضع المحلي تتم المعالجة على جهازك، ولا يقبل محرّك لونا الاتصال إلا من جهازك نفسه (127.0.0.1)." },
      { title: "سحابي", text: "اختياري. استخدم مفتاح API الخاص بك، ويُحفظ في مدير بيانات اعتماد Windows." },
      { title: "هجين", text: "في الوضع الهجين، تبقى الرسائل التي تكتشف لونا أنها حساسة على جهازك. وهذا الاكتشاف يساعد، لكنه قد لا يلتقط كل شيء." },
    ],
    privateLine: "المحادثات الخاصة 🔒 لا تُرسل إلى السحابة أبدًا.",
    webTitle: "قراءة الويب والبحث",
    web: "تستطيع لونا البحث في الويب، وقراءة صفحة ويب كتبتَ رابطها. ولا يعمل أي منهما في المحادثة الخاصة 🔒، ولا يعمل البحث إلا بعد أن تضيف مفتاح بحث بنفسك.",
    securityTitle: "لا تنشر المشكلات الأمنية أبدًا في بلاغ عام",
    security: "تعمل Luna على جهازك، وتقرأ ملفاتك فقط في المجلدات التي تسمح بها، ويمكنها استخدام الذكاء الاصطناعي السحابي بمفاتيحك الخاصة. إذا وجدت طريقة قد تعرّض بيانات المستخدمين أو أجهزتهم للخطر، فأخبرنا بها بشكل خاص.",
    verify: "كيف أتحقق من ملف التثبيت؟",
    policy: "سياسة الخصوصية",
    terms: "شروط الاستخدام",
    securityPolicy: "سياسة الأمان",
  },
} as const;
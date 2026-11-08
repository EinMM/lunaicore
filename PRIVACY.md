# Privacy Policy · سياسة الخصوصية

[English](#english) · [العربية](#arabic)

**Applies to:** Luna AI Desktop Assistant for Windows, Beta 0.1 and later · **Effective:** 8 November 2026

<a id="english"></a>

## English

### The short version

- Luna has **no account, no ads, no telemetry and no analytics**. The developer does **not** receive your conversations, files, memories or usage data.
- Your data is stored **on your PC**.
- Data leaves your PC only when **you** use a cloud feature, or when Luna checks for updates or downloads a component you asked for. Each case is listed below.

### 1. What stays on your PC

| Data | Where |
|---|---|
| Conversations, memories, "About you", the knowledge store (`luna_data.db`), settings and logs | `%LOCALAPPDATA%\EinMM\LunaAI\data` |
| Luna Engine and the AI models you download | `%LOCALAPPDATA%\EinMM\LunaAI` |
| Your workspace files | `Documents\Luna Workspace`, or the folder you choose |
| Cloud API keys | Windows Credential Manager (never written to a file) |

Luna reads or changes files **only in the folders you allow**, with the permission you set for each folder (read only or full access), and asks you to confirm every file operation.

In **Local** mode, AI processing runs on your PC. Luna Engine only accepts connections from your own computer (`127.0.0.1`).

Luna keeps a few technical log files on your PC to help solve problems. Some of them may contain parts of your messages. They are never sent anywhere automatically.

### 2. What is sent to a cloud AI provider, and when

Luna can use **Google Gemini** or **OpenAI** with **your own API key**. Data is sent to the provider you chose only when:

- you use **Cloud** mode or **Hybrid** mode, or
- you send a single message to the cloud yourself (☁️), or
- you use **web search** (🔎).

What is sent: your message and the conversation context needed to answer it. Memories, "About you" and documents are sent **only if you turn on** the matching options in Settings. With web search, the provider's search service receives your question, plus recent messages if you choose that in Settings.

- **Private conversations 🔒 are never sent to the cloud.**
- In Hybrid mode, messages Luna detects as sensitive stay on your PC. This detection helps, but it may not catch everything.

The provider processes this data under **its own terms and privacy policy**, through your account with them, and may charge you for it. Luna shows approximate costs, but your provider's bill is what counts. See [Gemini API terms](https://ai.google.dev/gemini-api/terms) and [OpenAI policies](https://openai.com/policies/).

### 3. Connections Luna makes for updates and downloads

| Purpose | Service | What is sent |
|---|---|---|
| Update check (at most once a day at startup; can be turned off in Settings → General) | `raw.githubusercontent.com` (GitHub) | Only Luna's version (`User-Agent: Luna/<version>`). No identifiers. |
| Downloading an update you approved | `github.com` (EinMM/lunaicore releases) | A normal file download |
| Downloading Luna Engine | `github.com` (llama.cpp releases) | A normal file download |
| Downloading AI models you choose | `huggingface.co` (Hugging Face) | A normal file download |

As with any download, these services can see your IP address. They handle it under their own privacy policies.

### 4. Feedback and bug reports

"Send feedback" opens **your browser** on a GitHub form with three fields filled in: Luna's version, your Windows version and the engine you use. You see the text before anything opens and can change it on GitHub before submitting. Luna itself sends nothing.

**GitHub issues are public.** Don't include personal data, keys or private files. Report security or privacy problems privately, as explained in [SECURITY.md](SECURITY.md).

### 5. Deleting your data

- **Uninstall:** Luna's uninstaller asks whether to remove your data and your downloaded models and engine. Both boxes are unchecked by default. Your workspace folder is never deleted.
- **API keys:** delete them in Luna's settings (Model & engine) before uninstalling, or from Windows Credential Manager.
- Data you sent to a cloud provider is managed in your account with that provider.

### 6. Children

Luna is not intended for children under 13.

### 7. Changes

If this policy changes, the new version will be published here with a new date. Important changes will also be mentioned in the release notes.

### 8. Contact

Hussain (EinMM) · [lunaicore@outlook.com](mailto:lunaicore@outlook.com)

---

<a id="arabic"></a>

<div dir="rtl">

## العربية

### باختصار

- لا تحتوي لونا على **حساب أو إعلانات أو تتبّع أو إحصاءات استخدام**. ولا يستلم المطوّر محادثاتك أو ملفاتك أو ذكرياتك أو بيانات استخدامك.
- تُحفظ بياناتك **على جهازك**.
- لا تخرج البيانات من جهازك إلا عندما **تستخدم أنت** ميزة سحابية، أو عندما تفحص لونا وجود تحديث، أو تنزّل مكوّنًا طلبته. وكل حالة موضّحة أدناه.

### 1. ما يبقى على جهازك

| البيانات | المكان |
|---|---|
| المحادثات، والذكريات، ومعلومات «عنك»، ومخزن المعرفة (`luna_data.db`)، والإعدادات، والسجلات | `%LOCALAPPDATA%\EinMM\LunaAI\data` |
| محرّك لونا ونماذج الذكاء الاصطناعي التي تنزّلها | `%LOCALAPPDATA%\EinMM\LunaAI` |
| ملفات مجلد العمل | `Documents\Luna Workspace` أو المجلد الذي تختاره |
| مفاتيح API للخدمات السحابية | مدير بيانات الاعتماد في Windows (ولا تُكتب في أي ملف) |

لا تقرأ لونا الملفات أو تعدّلها **إلا في المجلدات التي تسمح بها**، وبالصلاحية التي تحددها لكل مجلد (قراءة فقط أو وصول كامل)، وتطلب تأكيدك قبل كل عملية على الملفات.

في الوضع **المحلي** تتم المعالجة على جهازك، ولا يقبل محرّك لونا الاتصال إلا من جهازك نفسه (`127.0.0.1`).

تحتفظ لونا ببعض السجلات التقنية على جهازك للمساعدة في حل المشكلات، وقد يحتوي بعضها على أجزاء من رسائلك. ولا تُرسل هذه السجلات إلى أي جهة تلقائيًا.

### 2. ما يُرسل إلى مزوّد الذكاء الاصطناعي السحابي، ومتى

تستطيع لونا استخدام **Google Gemini** أو **OpenAI** بـ**مفتاح API الخاص بك**. ولا تُرسل البيانات إلى المزوّد الذي اخترته إلا عندما:

- تستخدم الوضع **السحابي** أو الوضع **الهجين**، أو
- ترسل رسالة واحدة إلى السحابة بنفسك (☁️)، أو
- تستخدم **البحث في الإنترنت** (🔎).

ما يُرسل: رسالتك وسياق المحادثة اللازم للإجابة عنها. أما الذكريات ومعلومات «عنك» والمستندات فلا تُرسل **إلا إذا فعّلت** الخيار الخاص بكل منها في الإعدادات. وعند البحث في الإنترنت تستلم خدمة البحث لدى المزوّد سؤالك، ومعه الرسائل الأخيرة إذا اخترت ذلك في الإعدادات.

- **المحادثات الخاصة 🔒 لا تُرسل إلى السحابة أبدًا.**
- في الوضع الهجين، تبقى الرسائل التي تكتشف لونا أنها حساسة على جهازك. وهذا الاكتشاف يساعد، لكنه قد لا يلتقط كل شيء.

يعالج المزوّد هذه البيانات وفق **شروطه وسياسة الخصوصية الخاصة به**، ومن خلال حسابك لديه، وقد يحتسب عليك تكلفة ذلك. تعرض لونا تكلفة تقريبية، لكن العبرة بفاتورة المزوّد. راجع [شروط Gemini API](https://ai.google.dev/gemini-api/terms) و[سياسات OpenAI](https://openai.com/policies/).

### 3. اتصالات لونا للتحديثات والتنزيلات

| الغرض | الخدمة | ما يُرسل |
|---|---|---|
| فحص التحديثات (مرة واحدة يوميًا على الأكثر عند التشغيل، ويمكن إيقافه من الإعدادات ← عام) | `raw.githubusercontent.com` (GitHub) | رقم إصدار لونا فقط (`User-Agent: Luna/<version>`)، دون أي معرّفات |
| تنزيل تحديث وافقت عليه | `github.com` (إصدارات EinMM/lunaicore) | تنزيل ملف عادي |
| تنزيل محرّك لونا | `github.com` (إصدارات llama.cpp) | تنزيل ملف عادي |
| تنزيل نماذج الذكاء الاصطناعي التي تختارها | `huggingface.co` (Hugging Face) | تنزيل ملف عادي |

وكما في أي تنزيل، تستطيع هذه الخدمات رؤية عنوان IP الخاص بك، وتتعامل معه وفق سياسات الخصوصية الخاصة بها.

### 4. الملاحظات والإبلاغ عن المشكلات

يفتح زر «إرسال ملاحظات» **متصفحك** على نموذج في GitHub، وقد عُبّئت فيه ثلاثة حقول: إصدار لونا، وإصدار Windows، والمحرّك الذي تستخدمه. ترى النص قبل فتح أي شيء، ويمكنك تعديله في GitHub قبل الإرسال. ولا ترسل لونا نفسها أي شيء.

**البلاغات في GitHub عامة.** لا تضع فيها بيانات شخصية أو مفاتيح أو ملفات خاصة. وأبلغ عن المشكلات الأمنية أو مشكلات الخصوصية بشكل خاص، كما هو موضّح في [SECURITY.md](SECURITY.md).

### 5. حذف بياناتك

- **إلغاء التثبيت:** يسألك برنامج إلغاء التثبيت عن حذف بياناتك، وعن حذف النماذج والمحرّك اللذين نزّلتهما، والخياران غير محددين افتراضيًا. ولا يُحذف مجلد العمل أبدًا.
- **مفاتيح API:** احذفها من إعدادات لونا (النموذج والمحرّك) قبل إلغاء التثبيت، أو من مدير بيانات الاعتماد في Windows.
- البيانات التي أرسلتها إلى مزوّد سحابي تُدار من خلال حسابك لدى ذلك المزوّد.

### 6. الأطفال

لونا غير موجّهة للأطفال دون 13 عامًا.

### 7. التغييرات

إذا تغيّرت هذه السياسة، تُنشر النسخة الجديدة هنا بتاريخ جديد، وتُذكر التغييرات المهمة أيضًا في ملاحظات الإصدار.

### 8. التواصل

حسين (EinMM) · [lunaicore@outlook.com](mailto:lunaicore@outlook.com)

</div>

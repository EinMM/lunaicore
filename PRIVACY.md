<!-- luna-doc-version: 2026-11-12 -->
# Privacy Policy · سياسة الخصوصية

[English](#english) · [العربية](#arabic)

<a id="english"></a>

## English

**Applies to:** Luna AI Desktop Assistant for Windows, Beta 0.1 and later · **Effective:** 12 November 2026

### The short version

- Luna has **no account, no ads, no telemetry and no analytics**. The developer does **not** receive your conversations, files, memories or usage data.
- Your data is stored **on your PC**.
- Data leaves your PC only when **you** use a cloud feature, or when Luna checks for updates or downloads a component you asked for. Each case is listed below.

### 1. What stays on your PC

| Data | Where |
|---|---|
| Conversations, memories, "About you", the knowledge store (`luna_data.db`), settings, logs, and a small record of which version of these documents you accepted (version dates, acceptance day, Luna version) | `%LOCALAPPDATA%\EinMM\LunaAI\data` |
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

"Send feedback" lets you write a message and choose how to send it. Luna itself sends nothing: you see the text first, and you decide what to do with it.

- **Send by email:** Luna asks Windows to open your mail program with a prepared message to the project's contact address. The message contains what you typed plus three technical details: Luna's version, your Windows version and the engine you use. Luna adds nothing else: no file paths, no user name, no conversations, no memories and no keys (text that looks like an API key is replaced before the message is prepared). Nothing is sent until you press send in your mail program. If the message is too long for your mail program, Luna leaves out some of the technical details or, if your text alone is too long, copies the full message to your clipboard so you can paste it yourself. If no mail program opens, Luna copies the message to your clipboard as well.
- **Copy message:** places the same text on your clipboard, nothing more.
- **Open on GitHub:** opens **your browser** on a GitHub form with the same three details filled in. You can change the text there before submitting.

**GitHub issues are public.** Don't include personal data, keys or private files. Report security or privacy problems privately, as explained in [SECURITY.md](SECURITY.md).

### 5. Deleting your data

- **Uninstall:** Luna's uninstaller asks whether to remove your data, your downloaded models and engine, and your saved API keys. All three boxes are unchecked by default. Your workspace folder is never deleted. A silent uninstall never removes your data, models or keys.
- **Desktop shortcut:** if you ticked the option during setup, Luna creates one ordinary shortcut file to your workspace folder on your Desktop. Luna keeps no record of it and the uninstaller leaves it; delete it like any other file.
- **API keys:** delete them in Luna's settings (Model & engine), by ticking the API keys box in the uninstaller, or from Windows Credential Manager. The uninstaller box removes only the keys of the Windows user running it, and it does not cancel the keys at Google or OpenAI: to cancel a key, revoke it in the provider's dashboard.
- Data you sent to a cloud provider is managed in your account with that provider.

### 6. Children

Luna is not intended for children under 13.

### 7. Changes

If this policy changes, the new version will be published here with a new date. Important changes will also be mentioned in the release notes. This policy is written in Arabic and English; if the two versions differ, the **Arabic** version prevails.

### 8. Contact

Hussain (EinMM) · [lunaicore@outlook.com](mailto:lunaicore@outlook.com)

---

<a id="arabic"></a>

<div dir="rtl">

## العربية

**ينطبق على:** Luna AI Desktop Assistant لنظام Windows، الإصدار التجريبي 0.1 وما بعده · **سارية اعتبارًا من:** 12 نوفمبر 2026

### باختصار

- لا تحتوي لونا على **حساب أو إعلانات أو تتبّع أو إحصاءات استخدام**. ولا يستلم المطوّر محادثاتك أو ملفاتك أو ذكرياتك أو بيانات استخدامك.
- تُحفظ بياناتك **على جهازك**.
- لا تخرج البيانات من جهازك إلا عندما **تستخدم أنت** ميزة سحابية، أو عندما تفحص لونا وجود تحديث، أو تنزّل مكوّنًا طلبته. وكل حالة موضّحة أدناه.

### 1. ما يبقى على جهازك

| البيانات | المكان |
|---|---|
| المحادثات، والذكريات، ومعلومات «عنك»، ومخزن المعرفة (`luna_data.db`)، والإعدادات، والسجلات، وسجل صغير بنسخة هذه الوثائق التي وافقت عليها (تواريخ النسخ، ويوم الموافقة، وإصدار لونا) | `%LOCALAPPDATA%\EinMM\LunaAI\data` |
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

يتيح لك زر «إرسال ملاحظات» كتابة رسالة واختيار طريقة إرسالها. ولا ترسل لونا نفسها أي شيء: ترى النص أولًا، وأنت من يقرر ما يفعله به.

- **إرسال بالبريد:** تطلب لونا من Windows فتح برنامج البريد لديك برسالة معدّة سلفًا إلى عنوان التواصل الرسمي للمشروع. تتضمن الرسالة ما كتبته، إضافةً إلى ثلاث معلومات تقنية: إصدار لونا، وإصدار Windows، والمحرّك الذي تستخدمه. ولا تضيف لونا شيئًا غير ذلك: لا مسارات ملفات، ولا اسم المستخدم، ولا محادثات، ولا ذكريات، ولا مفاتيح (يُستبدل أي نص يشبه مفتاح API قبل تجهيز الرسالة). ولا يُرسل شيء حتى تضغط أنت على الإرسال في برنامج البريد. وإذا كانت الرسالة أطول مما يحتمله برنامج البريد، تحذف لونا بعض المعلومات التقنية، أو تنسخ الرسالة كاملة إلى الحافظة لتلصقها بنفسك إذا كان نصك وحده أطول من ذلك. وإذا لم يُفتح أي برنامج بريد، تنسخ لونا الرسالة إلى الحافظة أيضًا.
- **نسخ الرسالة:** يضع النص نفسه في الحافظة فقط.
- **فتح على GitHub:** يفتح **متصفحك** على نموذج في GitHub عُبّئت فيه المعلومات التقنية الثلاث نفسها، ويمكنك تعديل النص هناك قبل الإرسال.

**البلاغات في GitHub عامة.** لا تضع فيها بيانات شخصية أو مفاتيح أو ملفات خاصة. وأبلغ عن المشكلات الأمنية أو مشكلات الخصوصية بشكل خاص، كما هو موضّح في [SECURITY.md](SECURITY.md).

### 5. حذف بياناتك

- **إلغاء التثبيت:** يسألك برنامج إلغاء التثبيت عن حذف بياناتك، وعن حذف النماذج والمحرّك اللذين نزّلتهما، وعن حذف مفاتيح API المحفوظة، والخيارات الثلاثة غير محددة افتراضيًا. ولا يُحذف مجلد العمل أبدًا. ولا يحذف إلغاء التثبيت الصامت بياناتك ولا النماذج ولا المفاتيح أبدًا.
- **اختصار سطح المكتب:** إذا حدّدت هذا الخيار أثناء الإعداد، تنشئ لونا ملف اختصار عاديًا واحدًا لمجلد العمل على سطح المكتب. ولا تحتفظ لونا بأي سجل عنه، ويتركه برنامج إلغاء التثبيت؛ احذفه كما تحذف أي ملف آخر.
- **مفاتيح API:** احذفها من إعدادات لونا (النموذج والمحرّك)، أو بتحديد خيار المفاتيح في برنامج إلغاء التثبيت، أو من مدير بيانات الاعتماد في Windows. ويحذف خيار برنامج إلغاء التثبيت مفاتيح مستخدم Windows الذي يشغّله فقط، ولا يُلغي المفاتيح لدى Google أو OpenAI: لإلغاء مفتاح، ألغِه من لوحة تحكم المزوّد.
- البيانات التي أرسلتها إلى مزوّد سحابي تُدار من خلال حسابك لدى ذلك المزوّد.

### 6. الأطفال

لونا غير موجّهة للأطفال دون 13 عامًا.

### 7. التغييرات

إذا تغيّرت هذه السياسة، تُنشر النسخة الجديدة هنا بتاريخ جديد، وتُذكر التغييرات المهمة أيضًا في ملاحظات الإصدار. وهذه السياسة محرّرة باللغتين العربية والإنجليزية، وعند الاختلاف بينهما **يُعتمد النص العربي**.

### 8. التواصل

حسين (EinMM) · [lunaicore@outlook.com](mailto:lunaicore@outlook.com)

</div>

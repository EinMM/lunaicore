# Security Policy · سياسة الأمان

[English](#english) · [العربية](#arabic)

<a id="english"></a>

## English

Luna runs on your PC, reads your files only where you allow it, and can use cloud AI with your own keys. If you find a way this could put users' data or computers at risk, please tell us **privately**.

### ⚠️ Never report security problems in a public issue

Public issues can be read by anyone. Use one of these instead:

1. **Private report on GitHub (preferred):** [Report a vulnerability](https://github.com/EinMM/lunaicore/security/advisories/new)
2. **Email:** [lunaicore@outlook.com](mailto:lunaicore@outlook.com) — if you don't have a GitHub account.

### What counts as a security or privacy problem?

- Data sent to the cloud while a conversation is **private 🔒**, or while Luna is in **Local** mode.
- Luna creating, changing, moving or deleting a file **without asking you to confirm**.
- Luna reading or changing files **outside the folders you allowed**, or ignoring **Read only** permission.
- Luna accepting a forbidden location (your whole user folder, a drive root, system folders).
- A file being deleted **permanently** instead of going to the Recycle Bin.
- API keys appearing anywhere outside Windows Credential Manager (logs, settings files, screenshots of the app, etc.).
- The update check installing or running anything by itself, or accepting an update that isn't from the official releases.
- Anything that makes Luna run with Administrator rights.

Normal bugs (crashes, slow answers, wrong AI answers, UI problems) go to [regular issues](https://github.com/EinMM/lunaicore/issues/new/choose).

### How to fill in the GitHub form

GitHub's private report form is a standard form made for software packages, so some fields may look unfamiliar. You only need:

| Field | What to write |
|---|---|
| **Title** | Short description — e.g. *"Private conversation sent to cloud after switching modes"* |
| **Description** | Luna version, Windows version, engine & model, steps to reproduce, what happened, why it is a risk |
| **Affected products** | Optional — leave empty, or write *Luna for Windows* and your version (e.g. `0.1.0`) |
| **Severity** | Optional — pick what you think; we'll review it |
| **Weaknesses (CWE) / CVSS** | Optional — skip if you don't know them |

Please **don't include** your API keys, passwords, personal files or conversation text. Use made-up test files and test conversations to show the problem.

### What happens next

- We will confirm that we received your report, review it, and keep you updated.
- Please give us reasonable time to fix the problem **before** talking about it publicly.
- With your permission, we'll thank you by name when the fix is released.

### Supported versions

| Version | Supported |
|---|---|
| Latest Beta (0.1.x) | ✅ |
| Older builds | ❌ — please update first and check whether the problem still happens |

---

<a id="arabic"></a>

<div dir="rtl">

## العربية

تعمل Luna على جهازك، وتقرأ ملفاتك فقط في المجلدات التي تسمح بها، ويمكنها استخدام الذكاء الاصطناعي السحابي بمفاتيحك الخاصة. إذا وجدت طريقة قد تعرّض بيانات المستخدمين أو أجهزتهم للخطر، فأخبرنا بها **بشكل خاص**.

### ⚠️ لا تنشر المشكلات الأمنية أبدًا في بلاغ عام

البلاغات العامة يقرؤها الجميع. استخدم إحدى الطريقتين:

1. **بلاغ خاص عبر GitHub (الأفضل):** [الإبلاغ عن ثغرة](https://github.com/EinMM/lunaicore/security/advisories/new)
2. **البريد الإلكتروني:** [lunaicore@outlook.com](mailto:lunaicore@outlook.com) — إذا لم يكن لديك حساب GitHub.

### ما الذي يُعدّ مشكلة أمنية أو مشكلة خصوصية؟

- إرسال بيانات إلى السحابة في محادثة **خاصة 🔒**، أو في الوضع **المحلي**.
- إنشاء ملف أو تعديله أو نقله أو حذفه **دون أن تطلب Luna تأكيدك**.
- قراءة Luna ملفات أو تعديلها **خارج المجلدات المسموح بها**، أو تجاهل صلاحية **القراءة فقط**.
- قبول Luna مكانًا ممنوعًا (مجلد المستخدم كاملًا، أو جذر قرص، أو مجلدات النظام).
- حذف ملف **نهائيًا** بدل نقله إلى سلة المحذوفات.
- ظهور مفاتيح API في أي مكان خارج مدير بيانات الاعتماد في Windows (السجلات، أو ملفات الإعدادات، أو واجهة البرنامج…).
- تثبيت التحديث أو تشغيل أي شيء تلقائيًا، أو قبول تحديث من غير الإصدارات الرسمية.
- أي شيء يجعل Luna تعمل بصلاحيات المسؤول (Administrator).

الأخطاء العادية (الانهيار، أو بطء الإجابات، أو الإجابات الخاطئة، أو مشكلات الواجهة) مكانها [البلاغات العادية](https://github.com/EinMM/lunaicore/issues/new/choose).

### كيف تعبّئ نموذج GitHub

نموذج البلاغ الخاص في GitHub نموذج قياسي مصمم لحزم البرمجيات، لذلك قد تبدو بعض حقوله غير مألوفة. تحتاج فقط إلى:

| الحقل | ماذا تكتب |
|---|---|
| **Title** | وصف قصير — مثل *«إرسال محادثة خاصة إلى السحابة بعد تغيير الوضع»* |
| **Description** | إصدار Luna، وإصدار Windows، والمحرك والنموذج، وخطوات تكرار المشكلة، وما حدث، ولماذا يُعدّ خطرًا |
| **Affected products** | اختياري — اتركه فارغًا، أو اكتب *Luna for Windows* وإصدارك (مثل `0.1.0`) |
| **Severity** | اختياري — اختر ما تراه مناسبًا، وسنراجعه |
| **Weaknesses (CWE) / CVSS** | اختياري — تجاوزه إن لم تكن تعرفه |

من فضلك **لا تضع** مفاتيح API أو كلمات مرور أو ملفاتك الشخصية أو نص محادثاتك. استخدم ملفات ومحادثات تجريبية لإظهار المشكلة.

### ماذا يحدث بعد ذلك

- سنؤكد استلام بلاغك، ونراجعه، ونُطلعك على المستجدات.
- نرجو أن تمنحنا وقتًا كافيًا لإصلاح المشكلة **قبل** الحديث عنها علنًا.
- بعد موافقتك، سنشكرك بالاسم عند إصدار الإصلاح.

### الإصدارات المدعومة

| الإصدار | مدعوم |
|---|---|
| أحدث نسخة تجريبية (0.1.x) | ✅ |
| النسخ الأقدم | ❌ — حدّث أولًا وتحقق هل ما زالت المشكلة موجودة |

</div>

# Luna — Beta Tester Guide

> **Beta 0.1 — Foundation Beta** · Windows 11 recommended · Windows 10: not officially supported (cloud AI works) · [العربية](TESTERS.ar.md)

Thank you for helping test Luna! Luna is a desktop AI assistant for Windows that runs **locally on your PC** by default, with optional cloud models (OpenAI / Google Gemini) using your own API keys.

This is an **early Beta**. Things will break — that is exactly why you are here. This guide explains how to install Luna, what to test, what to avoid, and how to report what you find.

---

## 1. Before you start — what to expect

- **It is a Beta.** Expect bugs, slow answers on weaker PCs, rough edges in the UI, and occasional wrong answers from the AI.
- **Windows SmartScreen warning.** The Beta installer is **not code-signed yet**, so Windows may show *"Windows protected your PC"*. Click **More info → Run anyway**. Only do this for installers downloaded from the official [Releases page](https://github.com/EinMM/lunaicore/releases).
- **Local AI needs resources.** The first model download is large, and answers depend on your CPU/GPU and RAM. A slow answer is not always a bug — but tell us about it (with your hardware).
- **Your data stays on your PC.** Conversations, settings and memory are stored only on your machine. Nothing is sent anywhere unless *you* choose a cloud model — except the optional update check, which you can turn off in Settings.
- **Features may change** between Beta builds, and data from one Beta may not always carry over perfectly to the next.

### Not included in this Beta (please don't report these as missing)

- Web browsing / internet search
- Controlling other apps or the desktop (Desktop Agent)
- Voice input / voice output
- Running in the background (system tray)
- Plugins / skills
- Linux and macOS versions

---

## 2. Installing Luna

1. Download the latest installer from **[Releases](https://github.com/EinMM/lunaicore/releases)**.
2. Run it. Luna installs **per user** (no administrator rights needed) into:
   `%LOCALAPPDATA%\Programs\Luna`
3. Start Luna and follow the **welcome / setup screen**.
4. Let Luna pick or download a local model suited to your PC.
5. *(Optional)* If you have an NVIDIA GPU, you can download the **CUDA** engine from Settings for faster answers. CPU and Vulkan engines are included by default.

**Where your data lives:** `%LOCALAPPDATA%\EinMM\LunaAI\data\` (logs are in the `logs\` folder inside it). You can open it from **Settings → Data → Open data folder**.

---

## 3. What to test

You don't have to do everything. Pick what you can, but **sections A and B matter most**.

### A. First run & basics ⭐
- [ ] Install, launch, and complete the welcome/setup screen.
- [ ] Send a few normal messages in **Arabic** and **English**.
- [ ] Use ⏹ **Stop** in the middle of a long answer. Does it stop right away?
- [ ] Edit your last message and resend it.
- [ ] Copy a code block and copy the whole conversation.
- [ ] Open a new tab ➕, switch between conversations, delete some from history.
- [ ] Close and reopen Luna — is everything still there?

### B. Local engine & performance ⭐
- [ ] How long did the first answer take? How fast are the following ones?
- [ ] Try **speed mode** (if your model supports it) on and off.
- [ ] Leave Luna idle, or run a game / full-screen app — does **sleep mode** kick in, and does Luna wake up correctly afterwards?
- [ ] Watch your PC: does GPU/CPU stay busy **after** you pressed Stop or after the answer finished? Please report this if it happens.

### C. Files & permissions
- [ ] Add a **test folder** (not your important files!) with **Read only** permission. Ask Luna to list, read or summarize files there.
- [ ] Switch the folder to **Full access**. Ask Luna to create, rename, copy or move a file. Luna must **ask you to confirm every action**.
- [ ] Try to add a forbidden location (e.g. your whole user folder `C:\Users\<you>`, a drive root like `C:\`, or a system folder). Luna should **refuse**.
- [ ] Ask Luna to delete a file. It should go to the **Recycle Bin**, not be deleted permanently.

### D. Cloud & Hybrid (only if you have your own API key)
- [ ] Add an OpenAI or Gemini key in Settings.
- [ ] Switch between **Local / Cloud / Hybrid** modes.
- [ ] Send one message to the cloud ☁️ and one locally 🖥️ in the same conversation.
- [ ] Check that the **cost / spending cap** display looks reasonable.
- [ ] Turn on **private 🔒** for a conversation — Luna must **never** use the cloud in it.

### E. Settings & interface
- [ ] Change settings, then leave the page — do **Save / Discard / Cancel** work as expected?
- [ ] Resize the window to very narrow and very wide. Does anything overlap or get cut off?
- [ ] Check Arabic (right-to-left) and English text display.
- [ ] Open the **User guide** and check whether it answers your questions.

### F. Free exploration
Use Luna for your real daily tasks for a few days. Your honest impressions ("this felt confusing", "I expected X") are just as valuable as bug reports.

---

## 4. What to avoid ⚠️

- **Don't give Luna Full access to important folders.** Use a dedicated test folder with copies of files. This is a Beta.
- **Don't rely on Luna for anything critical** — work deadlines, legal/medical/financial decisions, or your only copy of a file.
- **Never post API keys, passwords or personal data in GitHub Issues.** Issues are **public**.
- **Don't post logs or files from your data folder** in an issue. They may contain file paths and parts of your conversations. We'll ask privately if we need them.
- **Don't run Luna as Administrator.** It doesn't need it.
- **Don't edit files inside the data folder by hand** unless we ask you to.
- **Don't set a high cloud spending cap.** Keep it low while testing — cloud usage costs real money on your own account.

---

## 5. How to report

All feedback goes to **[GitHub Issues](https://github.com/EinMM/lunaicore/issues)**. You can write in **Arabic or English**.

**Easiest way:** use **Send feedback** inside Luna — it opens the right form with your version and engine already filled in. Or use **Settings → About → Copy system info** (versions only, no paths) and paste it into the form.

Choose one of two types:

### 🐞 Bug report — something doesn't work
The form will ask for:
1. **Title:** short and specific — e.g. *"Stop button doesn't stop cloud answer"*, not *"Bug"*.
2. **Luna version** and **Windows version**.
3. **Engine & model:** Local / Cloud / Hybrid, engine (CPU / Vulkan / CUDA), model name.
4. **Hardware** *(optional, but very helpful for speed or GPU problems)*: CPU, GPU, RAM — model names only.
5. **Steps to reproduce:** 1… 2… 3…
6. **What you expected** vs. **what actually happened** — error text and screenshots are welcome, but **hide any paths, names or conversation text first**.
7. **How often:** always / sometimes / once.
8. **Severity** *(optional)* — see the guide below.

> **Logs:** please don't paste log files or log lines into issues — they can contain file paths and parts of your conversations. If we need them, we'll ask you and explain how to share them privately.

### 💡 Feature request — an idea or improvement
Please include:
1. What you were trying to do.
2. What's missing or annoying today.
3. How you imagine it working.

### Before you post
- Search existing issues first — if someone already reported it, add a 👍 or a comment with your details instead of a new issue.
- **One problem per issue.**

### Severity guide (helps us prioritize)
| Level | Meaning |
|---|---|
| 🔴 Critical | Data loss, crash on start, Luna acted on files without confirmation, private data sent to the cloud |
| 🟠 High | A main feature doesn't work at all |
| 🟡 Medium | Works, but wrong or unreliable |
| 🟢 Low | Cosmetic, text, small UI issue |

> 🔴 **Security or privacy issue?** Please **don't** post it publicly. Email **lunaicore@outlook.com** instead.

---

## 6. Updates & leaving the Beta

- Luna checks for a new version **at most once a day** and only **notifies** you — it never installs anything by itself. You can turn this off in **Settings → General**.
- After updating, check **"What's new"** and re-test anything related to bugs you reported.
- To uninstall: Windows **Settings → Apps → Luna → Uninstall**. Your data folder (`%LOCALAPPDATA%\EinMM\LunaAI`) is kept unless you delete it yourself.

---

Thank you for testing Luna 💜 — every report makes her better.
**Hussain (EinMM)** · [lunaicore@outlook.com](mailto:lunaicore@outlook.com)

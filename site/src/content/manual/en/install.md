---
title: "Installing Luna"
description: "Download the installer, check it, and set up Luna on Windows."
order: 1
group: "start"
verifiedFor: "0.2.0"
---
Download the installer from the [Download page](/downloads/). The file is `{{installerName}}`, {{sizeMB}} MB.

<h2 id="verify">Verify the installer</h2>

Run this command in PowerShell, in the folder of the downloaded file:

```text
Get-FileHash .\{{installerName}} -Algorithm SHA256
```

The result must match this SHA-256 exactly:

```text
{{sha256}}
```

## Install Luna

Run the installer and accept the [Terms of Use](/legal/terms/) and [Privacy Policy](/legal/privacy/) pages. Luna installs per user, so no administrator rights are needed, into:

```text
%LOCALAPPDATA%\Programs\Luna
```

## Windows SmartScreen

The Beta installer is not code-signed yet, so Windows may show “Windows protected your PC”. Click More info, then Run anyway — only for installers downloaded from the [Download page](/downloads/) or the official [Releases page](https://github.com/EinMM/lunaicore/releases).

## First run

Start Luna and follow the welcome and setup screen. It asks for the language, how Luna should run (Local, Cloud AI, Hybrid or Decide later) and the workspace folder. Let Luna pick or download a local model suited to your PC. Before a download, Luna shows the size, license and source. See [Getting started](/docs/desktop/getting-started/).

## The NVIDIA engine

The installer includes the CPU and Vulkan engines. On a computer with an NVIDIA card, Luna offers to download the NVIDIA engine (CUDA 13.4, about 583 MB) in the welcome and in Settings → Model & engine. It needs NVIDIA driver 580 or newer. See [System requirements](/docs/desktop/requirements/).

## Where your data is

Luna keeps your data on your PC, in `%LOCALAPPDATA%\EinMM\LunaAI\data\`. You can open it from Settings → Data & privacy → Open data folder.

## Uninstall

To uninstall Luna, use Windows Settings → Apps → Luna → Uninstall. The uninstaller asks whether to also remove your data, your downloaded models and engine, and your saved API keys. Your workspace folder is never deleted. The [Privacy Policy](/legal/privacy/) describes each case.

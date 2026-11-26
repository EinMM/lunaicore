---
title: "Updates and versions"
description: "Luna checks for updates at most once a day and never installs one by herself."
order: 14
group: "privacy"
verifiedFor: "0.2.0"
---
## Which version do I have?

Settings → About Luna → Version.

## How does Luna check for updates?

With "Check for updates" on (Settings → General → Updates), Luna checks at most once a day when she starts. The check is one plain request with no personal data, and its answer is verified with a signature. "Check now" checks right away.

## Does Luna install updates?

Never by herself. Luna tells you that a new version is available; you can choose Details, Skip this version or Dismiss. In the installed app there is also "Update now" (on the notice, in Settings → General → Updates and on the welcome card).

## What does "Update now" do?

After you confirm (the version and its size are shown), Luna downloads the installer from the official GitHub releases page and checks it against the fingerprint in the signed update file. A file that does not match is deleted and never run. Then Luna asks about unsaved settings, stops a reply in progress, closes, installs the new version quietly and opens again. Your conversations, memories and settings stay. You can cancel the download; it continues where it stopped next time.

## What's new

After an update, Luna shows what changed: a short line in the status bar for a small update, or the "What's new" page for new features. The notes come with Luna and are never downloaded. The release notes are also on the [Release notes](/changelog/) page.
---
title: "Files and permissions"
description: "Luna works with files only in her workspace and in folders you allow, and asks you before she changes anything."
order: 5
group: "use"
verifiedFor: "0.2.0"
---
## What is the workspace?

The workspace is Luna's own folder: `Documents\Luna Workspace`, or the folder you choose. Luna creates, edits and deletes files there, always after your confirmation. Change it in Settings → Files & access → Workspace. A new folder must be empty; on Save the current content is copied to it, and the old folder is not deleted.

If you tick the Desktop shortcut option during setup, Luna creates a shortcut to your workspace folder. If you later move the workspace in Settings, Luna keeps your old folder, so the shortcut keeps opening the old one; delete it, or create a new one yourself.

## How do I let Luna use another folder?

1. Settings → Files & access → External folder access: On.
2. Add folder…, then tick Enabled.
3. Choose the permission:
   - **Read only**: read, list, search and copy from it, nothing else.
   - **Full access**: create, edit, delete, rename, copy and move, each after your confirmation.
4. Press Save.

When external access is off, Luna works only inside her workspace.

## What happens when Luna deletes a file?

Luna asks first. A deleted file or folder goes to the Windows Recycle Bin, where you can restore it. An allowed folder itself can never be deleted, renamed or moved.

## Which folders cannot be added?

A whole drive, your user folder and anything above it, Windows, Program Files, ProgramData, AppData, and Luna's own folders. A main folder such as Documents or Downloads cannot be the workspace itself; choose a subfolder.

## What can Luna do with files?

- List a folder, show a folder tree, and show file, folder and workspace information.
- Read files: text, Word, Excel and PDF (text only, no images).
- Search for files by name or by text inside them, and show recent, large or empty items.
- Create, write, rename, copy, move and delete files and folders, after your confirmation.
- Convert, for example Excel to Word, by reading a file and creating a new one. It cannot write PDF files or images.

## Attaching files

Use Attach files in the message box: text files up to 512 KB and documents up to 20 MB, inside the workspace or the allowed folders.

For how Luna reads a web page from a link you write, see [Web search](/docs/desktop/web-search/). For the policy on files, see the [Privacy Policy](/legal/privacy/).
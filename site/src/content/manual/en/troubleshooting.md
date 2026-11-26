---
title: "Troubleshooting"
description: "Fixes for a slow first reply, an engine that is not ready, empty replies, folders, the cloud and web search."
order: 15
group: "help"
verifiedFor: "0.2.0"
---
## The first reply is slow

Luna Engine loads the model with the first message, or with the first after sleep. This can take up to about 40 seconds. On a computer without a suitable graphics card, Luna runs on the processor and replies are much slower; a smaller model or the cloud AI helps.

💡 Tip: keep your models on an SSD; the model loads much faster than from a hard disk.

## "Luna Engine: not ready"

Open Settings → Model & engine: the reason is shown there, for example a missing model file or not enough graphics card memory. Choose a chat model that exists, close programs that use the graphics card, or turn speed mode off, then try again. The details are in engine.log in the data folder.

## Empty or strange replies

Turn speed mode off: Settings → Model & engine → Speed mode.

## Luna cannot reach a folder

Check Settings → Files & access: external access must be on, and the folder must be added and enabled. Some folders can never be added (system folders, a whole drive, your user folder).

## "File tools are not allowed" with the cloud

You chose "No, conversation only" for this conversation. Type "allow tools" to be asked again.

## The cloud does not answer

Press Test connection in Settings → Model & engine → Cloud AI, and check the key and the chosen model. If you reached your monthly cap, automatic cloud sends are paused.

## Luna does not search the web

Check three things. Settings → Data & privacy → Web must not be Off. The Web search card must hold a key for the chosen service (Luna searches nothing without one). A private conversation 🔒 never searches. If a message says the key was refused or its credit has run out, check the key or the credit on the service's own site. If the service does not answer, wait a moment and try again, or turn on the option to try your other services.

## Luna does not read my link

Luna reads only an https link that you wrote yourself in the conversation, and only if Web is not Off. With Ask first she asks once in each conversation. She does not read addresses on this computer or the local network, files that are not web pages, pages that need JavaScript to show any text, or pages in a private conversation 🔒.

## Meaning search is not available

Choose a meaning model in Settings → Model & engine. Word search works without it.

## Reporting a problem

"Send feedback" (in the navigation rail, or Settings → About Luna) opens a short window: choose a bug report or a feature request and write a message if you like. "Send by email" opens your email app with the message ready, with only Luna's version, the Windows version and the engine added; you check it and send it yourself. "Copy message" copies it for web mail. Or open a GitHub issue instead (this needs a GitHub account, and your message is not carried over). Luna sends nothing herself. "Copy system info" copies details without paths or personal data. Report security problems privately, never in a public issue: see the [Security Policy](/legal/security/).

## The diagnostic report

Settings → About Luna → "Diagnostic report" shows the whole report before you save it where you choose (.zip or .txt): versions, Windows, processor, memory and graphics card, the engine, model file names, settings that say nothing about you, and the last lines of Luna's logs. It never holds keys, conversations, memories, file contents or your folder paths, and names, e-mail addresses and paths are hidden. Luna sends it nowhere; attach it to your feedback email or a GitHub issue yourself if you want.
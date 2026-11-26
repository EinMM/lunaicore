---
title: "Cloud AI"
description: "Luna can use Gemini or OpenAI with your own API key. Your key stays in Windows Credential Manager."
order: 10
group: "engines"
verifiedFor: "0.2.0"
---
## How do I set up the cloud AI?

Settings → Model & engine → Cloud AI:

1. Choose the provider (Gemini or OpenAI).
2. Paste your API key and press Save key. The key is kept only in Windows Credential Manager and is never shown again.
3. Press Test connection, then choose the model.

The "Where do I get a key?" link opens the provider's page in your browser after you confirm.

## What is sent to the cloud?

Your conversation text goes to the provider you chose. Under "What is sent to the cloud" you decide separately about your memories, "About you" and document parts; each is sent only if you turn it on. Before sending, Luna checks your message for things like passwords, codes or card numbers and asks you what to do. The [Privacy Policy](/legal/privacy/) describes what is sent and when.

## File tools with the cloud

The first time the cloud AI wants a file tool in a conversation, Luna asks you: "Allow for this conversation" or "No, conversation only". Write, delete and memory confirmations stay as they are. Reading the built-in user guide needs no permission: it holds no personal data.

## How much does it cost?

Each cloud reply shows an estimated cost and the number of tokens, and Settings show the estimate for this month. The real bill is the provider's. You can set a monthly cap: when it is reached, automatic cloud sends stop and manual sends ask you first. If your key is free, choose "My key is free — don't count a cost".

## Deep think and web search

🧠 Deep think and 🔎 Search the web send one message to the cloud, text only (no tools). Deep think is slower and costlier. Web search works with OpenAI and shows its sources. Luna's own web search, with a search key, is a different feature: see [Web search](/docs/desktop/web-search/).

## How do I go back to my computer?

Settings → Model & engine → Engine: choose Luna Engine.
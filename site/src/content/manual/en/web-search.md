---
title: "Web search"
description: "Luna can read a web page from a link you write, and search the web with your own key, only when you allow it."
order: 7
group: "use"
verifiedFor: "0.2.0"
---
## What is web search?

Luna can search the web when a question needs fresh information. She sends a short search phrase to the search service you chose, reads the results as information only (never as instructions), and answers. Searching does not start until you add a search key. This is different from the 🔎 button, which sends one message to the cloud AI (see [Cloud AI](/docs/desktop/cloud-ai/)).

## How do I turn it on?

- Settings → Data & privacy → Web: choose Ask first or Allowed. Off stops all use of the web.
- In the Web search card, choose a search service, paste its key and press Save key.
- Ask a question that needs the web.

Luna never searches in a private conversation 🔒.

## Which service should I choose?

Luna supports Brave Search, Tavily and Mojeek. Each one needs its own key, which you create on the service's own site after signing up; the card tells you what each may ask for at sign-up. The card also shows a short privacy note for each service, taken from the service's own pages, with a link to its policy. Read it before you choose. Luna cannot change what a service does.

## What do I see before a search?

With Ask first, Luna shows the exact phrase and names the service before every search. You can edit the phrase, then press Search or Don't search. With Allowed, Luna searches without asking, but still asks when your message looks sensitive, after she read a web page in the same message, when the phrase resembles text from a file she read, and for a second search or a Redo reply ↻. Luna searches at most 3 times for one message, and refuses a phrase that looks like a secret, a local address or text from an attached file.

## What if the service does not answer?

Luna uses only the service you chose. If you turn on the option to try your other services (in the Web search card), then only after a failure Luna tries the next service that has its own key saved on this computer. The preview names every service that may receive the phrase.

## Sources and dates

Under a search answer, the Sources box lists up to 10 sources: the title, the site and, when the service gave a clear date, the date. Click one: Luna shows the full link and asks before your browser opens it. Sources stay only while the chat is open in its tab. They are not saved, and Luna no longer keeps them after you close the tab or quit Luna, so a chat opened from Chat History shows none. The answer itself is saved like any reply. The sources of the older 🔎 button are saved with the chat.

## Search in Arabic

Mojeek is known not to serve pages in Arabic, so Luna does not send Mojeek a phrase in Arabic and explains why. If Mojeek is your service and you write in Arabic, choose another service that has a key, or turn on the option to try your other services.

## Reading a web page

Luna can read a web page only from an https link that you wrote yourself in the conversation. She reads that one page as text and does not open the links inside it. Choose how it works in Settings → Data & privacy → Web: Off, Ask first or Allowed. With Ask first, Luna asks you once in each conversation before she reads a page, and names the site. Luna never reads web pages in a private conversation 🔒, whatever the setting. She treats the text she reads from a page as untrusted content: information only. She does not carry out instructions written inside the page.

## What leaves my computer?

The [Privacy Policy](/legal/privacy/) lists what is sent, to whom and when, for web search and for reading web pages.

## How do I remove a key?

Settings → Data & privacy → Web search: choose the service, press Remove key and confirm. The key is kept only in Windows Credential Manager, one per service. Removing it from Luna does not cancel it at the service: revoke it in the service's dashboard if you want.
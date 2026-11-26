---
title: "Local engine"
description: "Luna Engine runs the model on your computer. Nothing is sent to the internet to answer you."
order: 9
group: "engines"
verifiedFor: "0.2.0"
---
## What is Luna Engine?

Luna Engine runs the model on your computer. Nothing is sent to the internet to answer you. It starts with your first message and needs no other program.

## How do I choose a model?

Settings → Model & engine → Model files. Three files can be chosen:

- **Chat model**: the model that writes the replies (required).
- **Speed mode file**: an optional small helper model for speed mode.
- **Meaning model**: optional; searches your memories and documents by meaning. Without it, Luna searches by words.

Put .gguf files in the models folder, choose one with Browse…, or download a suggested model from the list. Before a download, Luna shows the size, license and source; afterwards she checks the file (SHA256). To see which models fit your graphics card, see [System requirements](/docs/desktop/requirements/).

💡 Tip: a smaller chat model answers faster and puts less load on your computer.

## What is speed mode?

Speed mode makes replies faster with the help of the speed mode file. It works only with a chat model that has a matching speed file: an MTP file made for that exact model (for example Gemma 4 12B MTP for Gemma 4 12B).

Why: the speed file quickly guesses the next words and the chat model checks them. This works only when both were made together, with the same vocabulary and the same size. A file that does not match is not used, and Luna says that the model does not support speed mode. If you notice empty or strange replies, turn it off.

## What is sleep mode?

Luna Engine can sleep after a set idle time (5, 10, 30 or 60 minutes, or never), and when a game or full-screen program runs. Sleeping frees graphics card memory. The engine wakes by itself with your next message and never cuts a reply. "Free graphics card memory now" puts it to sleep right away.

## Where does meaning search run?

Settings → Model & engine → Meaning search: on the processor (recommended) or on the graphics card (faster, and it uses graphics card memory).

## Advanced

"How the engine runs": Automatic tries NVIDIA (CUDA), then Vulkan, then the CPU.

## Which engine comes with Luna?

The Vulkan engine (works on most graphics cards) and the CPU engine come with Luna. On a computer with an NVIDIA card, Luna offers to download the NVIDIA engine (CUDA 13.4, about 583 MB) in the welcome and in Settings → Model & engine. It needs NVIDIA driver 580 or newer. Older NVIDIA cards or drivers stay on Vulkan, which still uses the graphics card. Every file is checked (SHA-256) before use; if the download fails, Luna stays on Vulkan.

## Ollama (optional)

Luna does not need Ollama. "Use Ollama instead of Luna Engine" (in Advanced) is for special or advanced use, if you installed Ollama yourself and it is running. With Ollama some Luna features may be limited: speed mode, sleep mode, and choosing or downloading model files work only with Luna Engine, and meaning search needs a separate model in Ollama. For most people, Luna Engine is the better choice.
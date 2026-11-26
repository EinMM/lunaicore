---
title: "System requirements"
description: "What your PC needs for local models."
order: 2
group: "start"
verifiedFor: "0.2.0"
---
Luna itself is light, with a {{sizeMB}} MB installer. The numbers below are for running AI models on your own PC. Without a suitable graphics card, you can still use Luna with cloud AI.

## Operating system

Windows 11 is recommended. The installer allows Windows 10, but it is not officially supported. Luna is for 64-bit Windows.

## Graphics card

Luna runs a model on your graphics card when the model file plus 1.5 GB of context memory fits in 90% of the card's own memory. The card memory needed is rounded up to a whole GB, as in the welcome screen. Integrated graphics count as CPU-only.

| Model | File size (GB) | Card memory needed (GB) | Tested on our hardware |
|---|---|---|---|
| Qwen3.5 4B | 2.7 | 5 | Yes |
| Gemma 4 E2B | 3.2 | 6 | Yes |
| Gemma 4 E4B | 5.0 | 8 | Yes |
| Qwen3.5 9B | 5.7 | 8 | Yes |
| Gemma 4 12B | 6.7 | 10 | Yes |
| Gemma 4 26B A4B (16 GB version) | 12.7 | 16 | Untested |
| Qwen3.5 27B | 16.7 | 21 | Untested |
| Gemma 4 26B A4B | 17.0 | 21 | Untested |
| Gemma 4 31B | 18.3 | 22 | Untested |
| Qwen3.5 35B A3B | 22.0 | 27 | Untested |

NVIDIA cards (CUDA) are the path we tested. AMD and Intel cards are supported through Vulkan but were not tested on our hardware. These figures are guidance: Luna checks your PC itself and suggests the best model that fits your card in Settings, under Your device.

## No graphics card

CPU-only mode works for small models, but slowly. It needs a processor with AVX2, at least 4 physical cores, and enough memory: the model file plus 2 GB must fit in 60% of your RAM. Only the small models (Qwen3.5 4B and Gemma 4 E2B) can run this way. That is about 8 GB of RAM for Qwen3.5 4B and about 9 GB for Gemma 4 E2B.

## Disk space

The installer is {{sizeMB}} MB. Models are separate downloads, from about 2.7 GB to about 22 GB each (see the table above). Before a download, Luna shows the size, license and source.

## Internet

You need the internet to download models and updates. Local conversations can work without internet after the model is installed. Cloud AI needs an internet connection and your own OpenAI or Gemini API key, and it works on lighter hardware. Web search is optional and needs your own key from Brave, Tavily or Mojeek.

## The NVIDIA engine

On a computer with an NVIDIA card, Luna offers to download the NVIDIA engine (CUDA 13.4, about 583 MB). It needs NVIDIA driver 580 or newer. Older NVIDIA cards or drivers stay on Vulkan, which still uses the graphics card.

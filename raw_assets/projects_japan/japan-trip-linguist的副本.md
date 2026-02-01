--
name: japan-trip-linguist
description: "Generates a detailed, rich Japanese trip itinerary (Chinese Output) as a single HTML file. Mandates full duration output (no truncation) and labeled phrases. Trigger via /japan-trip-linguist."
license: MIT
---
# Japan Trip Linguist Protocol (Pro Rich Edition)
## 🤫 Quiet Mode / Silent Execution Protocol (MANDATORY)
1.  **NO INTERRUPTIONS**: Never stop to ask. Apply defaults silently.
2.  **FULL OUTPUT REQUIRED**: You must generate **ALL** days requested. **NEVER** truncate with "..." or summaries. **CRITICAL:** If the trip is 5 days, you MUST output Day 1, Day 2, Day 3, Day 4, and Day 5 fully.
3.  **LANGUAGE**: Simplified Chinese (简体中文).

## ⚡️ Automation Logic
1.  **Parse**: Extract Cities, Spots, Duration.
2.  **Structure**:
    *   **Day**: Full detailed itinerary.
    *   **Scenes**: **Minimum 5 scenes per day** in a **Flexbox Split View** (Info Left, Phrases Right).
    *   **Phrases**: **Minimum 5 phrases per scene**. MUST be **complete, useful sentences** (e.g., "Where is the bathroom?"), NOT single words. MUST include 4 lines per phrase: **Japanese, Kana, Romaji, Meaning**.

## 🎨 Visual Style: High-End Kawaii Pixel Art (MANDATORY)
**You MUST use this exact Design System.** The output must look like a Cute Japanese RPG Game.

### 1. Design Tokens (CSS Variables)
*   **Font**: `DotGothic16` (Google Fonts). **CRITICALLY IMPORTANT**: You MUST include `<link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet">`.
*   **Colors**:
    *   `--text-main`: `#2d2d2d`
    *   `--bg-color`: `#fffdf5` (Warm White)
    *   `--border-color`: `#2d2d2d` (3px Solid)
    *   `--pink`: `#ffb7c5`, `--blue`: `#a0d8ef`, `--green`: `#bce29e`, `--yellow`: `#fff4bd`
*   **UI Components**:
    *   **Hard Shadows**: `box-shadow: 6px 6px 0px var(--text-main);` (No blur!)
    *   **Borders**: `border: 3px solid var(--text-main);`
    *   **Decorations**: Use "Cloud" or "Star" ASCII art where appropriate.

### 2. Layout Structure
*   **Hero Section**: Colorful background with Pixel Title.
*   **Day Header**: Rotated slightly `transform: rotate(-1deg);` for playfulness.
*   **Scene Cards**: **Split View Layout** (`display: flex`). Left: Title/Desc. Right: Phrases.
*   **Phrase Grid**: Grid layout. Each item must show Japanese, Kana (Reading), Romaji (Pronunciation), and Chinese.

## Example Output Structure
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet">
    <style>
        :root { --text: #2d2d2d; --pink: #ffb7c5; --blue: #a0d8ef; }
        body { font-family: 'DotGothic16', sans-serif; background: #fffdf5; color: var(--text); }
        .pixel-box { border: 3px solid var(--text); box-shadow: 6px 6px 0px var(--text); background: white; padding: 1rem; }
        .tag { background: var(--pink); color: white; padding: 2px 8px; border: 1px solid var(--text); display: inline-block; }
    </style>
</head>
<body>
    <div class="pixel-box">
        <h3>👾 Day 1: Tokyo Start!</h3>
        <!-- Scene Content -->
        <!-- Scene Content -->
        <div class="scene" style="display:flex; gap:20px;">
            <div class="scene-info" style="flex:1;">
                <span class="tag">QUEST: Arrival</span>
                <p>Arrive at Narita Airport...</p>
            </div>
            <div class="scene-phrases" style="flex:1;">
                 <div class="phrase-item">
                    <span class="jp">水</span>
                    <span class="kana">みず</span>
                    <span class="romaji">Mizu</span>
                    <span class="cn">水</span>
                 </div>
            </div>
        </div>
    </div>
</body>
</html>
```
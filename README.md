# TRACKS @ PWC — Project README

**Maintainer Reference Document**

> **A note on this deployment's origins:** The TRACKS website — its code, structure, and this documentation — was produced with the assistance of generative AI tools. Section 14 of this document explains how to use such tools to continue that work if you are not familiar with web development.

---

## Table of Contents

1. [What This Project Is](#1-what-this-project-is)
2. [File Structure](#2-file-structure)
3. [How the Site Works](#3-how-the-site-works)
4. [The Four Pages](#4-the-four-pages)
5. [Where All the Content Lives](#5-where-all-the-content-lives)
6. [How to Edit Content](#6-how-to-edit-content)
7. [Themes](#7-themes)
8. [The Archivist — Special Notes](#8-the-archivist--special-notes)
9. [How to Deploy](#9-how-to-deploy)
10. [Frequent Maintenance Tutorials](#10-frequent-maintenance-tutorials)
11. [Recommended Improvements](#11-recommended-improvements)
12. [What Not to Touch](#12-what-not-to-touch)
13. [Troubleshooting](#13-troubleshooting)
14. [Using Generative AI for Updates & Scripting](#14-using-generative-ai-for-updates--scripting)
15. [Glossary](#15-glossary)
16. [Changelog](#16-changelog)

---

## 1. What This Project Is

TRACKS (Thematic Resource Alignment) is a static website — a collection of HTML files that run entirely in the browser. There is no server, no database, and no backend to manage. The entire project is a folder of files.

It has four sections:

| Page | What It Does |
|---|---|
| **Home** (`index.html`) | Landing page. Links to the other three sections. |
| **Organization** (`organization.html`) | Displays the team, governance structure, roadmap, and philosophy. |
| **TRACKS in Research** (`research.html`) | The main academic hub. Contains Curriculum, Resources, Skills, and Activities. |
| **The Archivist** (`archivist.html`) | A standalone exploration tool that pulls random topics from Wikipedia and optionally uses an AI model to discuss them. |

**Important:** Because this is a static site, "updating the website" almost always means editing a data file and re-uploading. You rarely need to touch the HTML itself.

---

## 2. File Structure

This is how the project folder must be organized. **The folder names and file names must not be changed** — the HTML files look for files in specific locations.

```
/ (root)
│
├── index.html              ← Home page
├── organization.html       ← Organization page
├── research.html           ← Research Hub page
├── archivist.html          ← The Archivist tool
│
├── src/                    ← Visual & theme configuration
│   ├── hub_style.css       ← Master stylesheet (colours, fonts, themes)
│   ├── theme_manager.js    ← Handles light/dark/sepia switching
│   ├── theme_map.js        ← Archivist-specific colour config
│   └── archivist_style.css ← Archivist grain overlay (create if missing — see Section 8)
│
└── dat/                    ← All content data (edit these to update content)
    ├── hub_organization.js ← Team, roadmap, pillars, vision
    ├── hub_curriculum.js   ← 8-module research curriculum
    ├── hub_activities.js   ← Drills, simulations, competitions
    ├── hub_resources.js    ← Resource database (databases, tools, datasets)
    ├── hub_skills.js       ← Graduate skills curriculum
    ├── category_map.js     ← Archivist: topic categories for Wikipedia
    └── library_map.js      ← Archivist: curated search libraries
```

> **Rule of thumb:** If you want to change what appears on the website, look in the `dat/` folder first.

---

## 3. How the Site Works

This project uses no frameworks or build tools. There is nothing to "install" or "compile." You open an HTML file and it runs.

**Technologies used:**

- **HTML** — The structure of each page
- **Tailwind CSS** (loaded from the internet via CDN) — Visual styling
- **React** (loaded from the internet via CDN) — Used in `organization.html`, `research.html`, and `archivist.html` to display dynamic content from the data files
- **Babel** (loaded from the internet via CDN) — Allows React code to run in the browser directly without a build step
- **Font Awesome** (loaded from the internet via CDN) — Icons
- **Google Fonts** (loaded from the internet via CDN) — Typography

**Consequence:** The site requires an internet connection to display correctly, even when running locally. The fonts, icons, and UI framework all load from external servers. When deployed online, this is not a concern.

**How data gets onto the page:**

Each data file (e.g., `hub_organization.js`) places its content onto a global object called `window.HUB_DATA` or `window.LIBRARY_MAP`. The HTML page then reads from that object and renders it. This is why editing a data file immediately changes what appears on the page — there is no database or sync step.

---

## 4. The Four Pages

### Home (`index.html`)
A simple landing page with three navigation cards. The only things you might ever change here are the card descriptions, which are written directly in the HTML (not in a data file). Look for the `<p>` tags inside the three `<a>` elements to edit them.

### Organization (`organization.html`)
Renders entirely from `dat/hub_organization.js`. The page reads the data file and builds the entire view — mission, distinctions, functional pillars, strategic roadmap, and team roster — from that single file.

### Research Hub (`research.html`)
The most content-rich page. It has four tabs, each powered by its own data file:

| Tab | Data File |
|---|---|
| Curriculum | `dat/hub_curriculum.js` |
| Resources | `dat/hub_resources.js` |
| Skills | `dat/hub_skills.js` |
| Activities | `dat/hub_activities.js` |

### The Archivist (`archivist.html`)
A standalone tool. It uses two data files (`dat/category_map.js` and `dat/library_map.js`) and two external APIs (Wikipedia and optionally Google Books). It also offers an optional AI mode requiring a user-supplied API key. See [Section 8](#8-the-archivist--special-notes) for full details.

---

## 5. Where All the Content Lives

This section is a quick-reference for finding any specific piece of content.

| Content | File | Where in the file |
|---|---|---|
| Mission statement | `dat/hub_organization.js` | `overview.mission` |
| Vision paragraph | `dat/hub_organization.js` | `overview.vision` |
| Team members | `dat/hub_organization.js` | `team["2025-26"]` array |
| Active modules (TRACKS @ PWC, TRACKS in Research) | `dat/hub_organization.js` | `distinctions` array, `isPipeline: false` |
| Pipeline/upcoming modules | `dat/hub_organization.js` | `distinctions` array, `isPipeline: true` |
| Functional pillars (Inquiry, Capacity, etc.) | `dat/hub_organization.js` | `functions` array |
| Roadmap phases | `dat/hub_organization.js` | `roadmap` array |
| Curriculum modules | `dat/hub_curriculum.js` | `HUB_DATA.CURRICULUM` array |
| Research databases & tools | `dat/hub_resources.js` | `HUB_DATA.RESOURCES` object |
| Resource category labels | `dat/hub_resources.js` | `HUB_DATA.RESOURCE_CATEGORIES` array |
| Skills/learning tracks | `dat/hub_skills.js` | `HUB_DATA.SKILL_LEVELS` array |
| Drills, simulations, competitions | `dat/hub_activities.js` | `HUB_DATA.THINGS_TO_DO` array |
| Archivist topic categories | `dat/category_map.js` | `CATEGORY_MAP` array |
| Archivist search libraries | `dat/library_map.js` | `LIBRARY_MAP` object |

---

## 6. How to Edit Content

You do not need any special software. A plain text editor (Notepad on Windows, TextEdit on Mac, or a tool like [VS Code](https://code.visualstudio.com/)) is sufficient.

**The golden rule: the data files are JavaScript, but you are only ever editing the values (the text inside quotes), not the structure.**

### Editing a Team Member

Open `dat/hub_organization.js` and find the `team` section. Each member looks like this:

```javascript
{
    name: "Full Name",
    role: "Their Role Title",
    link: "https://www.linkedin.com/in/their-profile/"
}
```

To add a new member, copy one of those blocks, paste it at the end of the list (before the last `]`), and fill in the new details. Make sure there is a comma after the previous entry's closing `}`.

### Adding a Resource

Open `dat/hub_resources.js`. Resources are grouped by category (e.g., `macro`, `political`). Each resource looks like this:

```javascript
{ title: 'Resource Name', url: 'https://example.com/', desc: 'One-line description.' }
```

To add a new category, add an entry to `HUB_DATA.RESOURCE_CATEGORIES` and a matching key to `HUB_DATA.RESOURCES`. The `id` in the categories array must exactly match the key name in the resources object.

### Marking a Module as "Pipeline" (Coming Soon)

In `dat/hub_organization.js`, find the `distinctions` array. Items with `isPipeline: true` appear as dim, greyed-out placeholders. To promote one to active, change `isPipeline: true` to `isPipeline: false` and add `role` and `text` fields (see active modules above for the format).

---

## 7. Themes

The site has three themes: **Light**, **Dark**, and **Sepia**. The user's choice is saved in their browser automatically.

**Where themes are defined:**

- `src/hub_style.css` — Defines the three colour palettes for `index.html`, `organization.html`, and `research.html` using CSS variables (`:root` for Light, `.theme-dark`, `.theme-sepia`).
- `src/theme_map.js` — A separate, parallel colour configuration used exclusively by `archivist.html`.
- `src/theme_manager.js` — The JavaScript that reads the user's saved preference and applies the correct class to the page.

**To change a colour**, open `src/hub_style.css` and edit the relevant CSS variable inside the theme block:

```css
.theme-dark {
    --accent-color: #38bdf8; /* ← change this hex value */
}
```

If you change a colour in `hub_style.css`, also update the matching colour in `src/theme_map.js` for consistency in the Archivist.

---

## 8. The Archivist — Special Notes

The Archivist is architecturally different from the other pages. It is a self-contained interactive tool with its own data sources, theme system, and external API calls. It should be treated carefully.

### How It Works

1. On load, the user sees a disclaimer modal. After accepting, the tool loads.
2. It reads `dat/category_map.js` to get a list of Wikipedia category IDs mapped to intellectual domains.
3. It randomly selects topics from those categories by calling the **Wikipedia API** in the user's browser.
4. Topics appear on a spinning wheel. The user clicks "Query The Index" to spin and land on a topic.
5. Clicking a topic opens a "Dossier" showing the Wikipedia extract, pageview statistics, related books (Google Books API), and cross-references.
6. In "Scholar's Lens" mode, the user provides their own AI API key (Google Gemini or Groq) and can chat with an AI about the topic.

### The Caching System

The Archivist caches Wikipedia results in the user's browser (`localStorage`) for 24 hours to avoid excessive API calls. A user will not see new topics within 24 hours of their last visit unless they clear their browser data. This is intentional.

### The "Scholar's Lens" (AI Mode)

Opt-in. The user supplies their own API key — it is never stored on any server, only in browser memory for the session. Supported providers: **Google Gemini** ([Google AI Studio](https://aistudio.google.com/app/apikey)) and **Groq/Llama 3** ([Groq Console](https://console.groq.com/keys)), both free.

### Adding Topics to the Archivist

Open `dat/category_map.js`. Each entry:
```javascript
{ id: "Category:Category_Name_On_Wikipedia", domain: "Domain Label", label: "Display Label" }
```
The `id` must be a valid Wikipedia category (find it in the URL of any Wikipedia category page). New domains appear automatically in the filter dropdown.

### Adding Libraries to the Archivist

Open `dat/library_map.js`. Each entry:
```javascript
{ name: "Display Name", url: "https://example.com/search?q=" }
```
The URL must end with the query parameter — the Archivist appends the topic title to it automatically.

### The `archivist_style.css` File

`archivist.html` references `src/archivist_style.css`. If missing, the grain texture overlay in Sepia mode will not render, but the tool otherwise functions normally. To restore it, create `src/archivist_style.css` with:

```css
/* Archivist: Static Grain Overlay */
.grain-overlay::after {
    content: "";
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.5;
}
```

---

## 9. How to Deploy

### Option A: GitHub Pages (Recommended)

1. Create a free account at [github.com](https://github.com).
2. Create a new repository (e.g., `tracks-pwc`).
3. Upload all project files, preserving the folder structure.
4. Go to **Settings → Pages**, set Source to `Deploy from a branch`, choose `main`, and save.
5. The site will be live at `https://your-username.github.io/tracks-pwc/` within minutes.

To update: replace the changed files in the repository. GitHub Pages republishes automatically.

### Option B: Any Other Static Host

[Netlify](https://netlify.com), [Vercel](https://vercel.com), or standard web hosting all work. Upload the project folder. No build step or configuration needed.

### Running Locally (For Testing)

Opening `index.html` in a browser usually works. If your browser blocks such operations, some alternatives:

**With VS Code:** Install the **Live Server** extension, right-click `index.html`, select "Open with Live Server."

**With Python:** Open a terminal in the project folder and run:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

---

## 10. Frequent Maintenance Tutorials

Step-by-step instructions for the tasks the team will perform most often. Each tutorial is self-contained.

---

### Tutorial 1: Adding a New Academic Year Team

**File:** `dat/hub_organization.js`

1. Open the file and find the `team` section:
   ```javascript
   team: {
       "2025-26": [
           { name: "Shaunak Kulkarni", role: "Central Convener", link: "https://..." },
           ...
       ]
   }
   ```

2. Add a new year block **above** the existing one (the page defaults to the most recently keyed year):
   ```javascript
   team: {
       "2026-27": [
           { name: "New Member Name", role: "Their Role", link: "https://www.linkedin.com/in/handle/" },
           { name: "Another Member", role: "Their Role", link: "https://www.linkedin.com/in/handle/" }
       ],
       "2025-26": [
           ... (leave the old year intact)
       ]
   }
   ```

3. **Critical:** Every member entry except the last one in a list must be followed by a comma. The last entry before `]` must not have a trailing comma.

4. Save. The Organization page will now show a year dropdown defaulting to the newest year.

**If the page goes blank:** Open the browser console (`F12` → Console). A missing comma between entries is the most common cause.

---

### Tutorial 2: Updating a Single Team Member

**File:** `dat/hub_organization.js`

Find the person's entry by name. Edit only the value in quotes — never the key names (`name`, `role`, `link`):

```javascript
// Before
{ name: "John Doe", role: "Research Activity", link: "https://..." }

// After
{ name: "Jane Doe", role: "Senior Research Lead", link: "https://..." }
```

**Removing a member:** Delete the entire `{ ... }` block. If it was the last item in the list, also remove the comma from the item before it.

---

### Tutorial 3: Updating or Replacing an External Link

**When to do this:** A URL has gone dead, changed, or you want to swap a resource for a better one.

#### In Resources (`dat/hub_resources.js`)

Find the entry by its `title` and update the `url` value:
```javascript
{ title: 'FRED (St. Louis Fed)', url: 'https://fred.stlouisfed.org/new-path/', desc: '...' }
```

To add a new resource, paste a new line at the end of the relevant category array (before the `]`), with a comma after the previous entry.

#### In Skills (`dat/hub_skills.js`) or Activities (`dat/hub_activities.js`)

Find the item by `title` and update its `link` field. If a resource no longer exists and you have no replacement:
```javascript
link: null
```
The link button simply will not appear on the page.

---

### Tutorial 4: Adding a New Competition or Activity

**File:** `dat/hub_activities.js`

Find the relevant category (e.g., `'Public Arenas (Undergraduate)'`) and add a new item at the end of its `items` array, with a comma after the previous entry.

**Template for a competition:**
```javascript
{
    title: 'Competition Name',
    org: 'Organising Institution',
    type: 'Paper Competition',
    desc: 'What the competition involves and who it is for.',
    timeline: 'Deadline: Month | Event: Month.',
    requirements: 'Eligibility: Current Undergraduates. Entry: Original research paper.',
    link: 'https://competition-website.com/'
}
```

**Template for a simulation or drill:**
```javascript
{
    title: 'Simulation Name',
    org: 'Provider: Institution Name',
    type: 'Strategy Simulation',
    desc: 'What participants do in this simulation.',
    aims: 'What cognitive or intellectual goal this develops.',
    outcome: 'What the participant walks away with.',
    requirements: 'Free/Open Access. Browser-based.',
    link: 'https://simulation-url.com/'
}
```

If there is no external link, set `link: null`.

---

### Tutorial 5: Promoting a Pipeline Module to Active

**File:** `dat/hub_organization.js`

**When to do this:** When a new TRACKS domain (e.g., Performing Arts, Entrepreneurship) officially launches.

1. Find the pipeline entry in the `distinctions` array:
   ```javascript
   {
       id: "arts",
       title: "TRACKS in Performing Arts?",
       isPipeline: true
   }
   ```

2. Replace it with a full active entry:
   ```javascript
   {
       id: "arts",
       title: "TRACKS in Performing Arts",
       role: "Creative Incubator",
       text: "A one to two sentence description of what this module does and its role in the TRACKS framework.",
       isPipeline: false
   }
   ```
   Remove the `?` from the title. Add `role` and `text`. Set `isPipeline: false`.

3. To add a new pipeline placeholder for the next planned module:
   ```javascript
   {
       id: "new_module_id",
       title: "TRACKS in [New Domain]?",
       isPipeline: true
   }
   ```

---

### Tutorial 6: Adding a New Curriculum Protocol or Module

**File:** `dat/hub_curriculum.js`

#### Adding a protocol to an existing module

Find the module by its `title` and add to the end of its `protocols` array:

```javascript
{
    title: 'Protocol Title',
    desc: "One line: what this protocol achieves.",
    deliverable: 'Name of the Output',
    context: "A paragraph explaining the theoretical background and why this protocol matters.",
    steps: [
        { label: 'Step Label', text: 'What this step involves.', stem: 'A sentence starter the researcher can use...' },
        { label: 'Step Label', text: 'What this step involves.', stem: 'Another sentence starter...' }
    ],
    risk: "The most common failure mode or methodological error to avoid."
}
```

Use `pitfall` instead of `risk` if the error is practical rather than conceptual (both display identically, but the label differs).

#### Adding an entirely new module

Paste the following at the end of the `CURRICULUM` array (before the final `]`), with a comma after the previous module's closing `}`):

```javascript
{
    id: 'new_module',
    title: 'IX. Module Title',
    subtitle: 'Thematic Subtitle',
    intro: "The introductory paragraph framing this module's intellectual purpose.",
    readings: [
        { title: "Book Title", author: "Author Name", note: "Why this text is relevant." }
    ],
    protocols: [
        {
            title: 'First Protocol',
            desc: "What it does.",
            deliverable: 'Output Name',
            context: "Theoretical background.",
            steps: [
                { label: 'Label', text: 'Description.', stem: 'Sentence starter...' }
            ],
            risk: "Common error to avoid."
        }
    ]
}
```

---

### Tutorial 7: Updating the Roadmap

**File:** `dat/hub_organization.js`

Each phase in the `roadmap` array:
```javascript
{
    year: "Phase I",
    title: "Foundation",
    desc: "Description of what this phase entails."
}
```

To **update a description**, edit the `desc` value directly.

To **add a new phase**, paste a new object at the end of the array (with a comma after the previous entry):
```javascript
{
    year: "Phase V",
    title: "New Phase Title",
    desc: "Description of this new strategic phase."
}
```

There is no built-in "completed" visual state. If one becomes necessary, see Section 11 for how to request this from an AI assistant.

---

## 11. Recommended Improvements

These improvements will make future maintenance easier. They are listed in order of priority, with implementation instructions for those that can be done without deep coding knowledge.

---

### Improvement 1: Create a `site_config.js` File

**Why:** Site-wide values like the name "TRACKS @ PWC" and the current academic year are currently scattered across multiple files. One config file means you change something once and it updates everywhere.

**How to implement:**

1. Create `dat/site_config.js`:

```javascript
/**
 * TRACKS @ PWC - SITE CONFIGURATION
 * Edit this file to update site-wide settings.
 */

window.SITE_CONFIG = {
    siteName: "TRACKS @ PWC",
    siteSubtitle: "Thematic Resource Alignment at Podar World College",
    currentYear: "2025-26",
    contactEmail: "",
    instituteUrl: "",
};
```

2. Add the following line to the `<head>` of each HTML file, before any other `dat/` script tags:
```html
<script src="dat/site_config.js"></script>
```

3. To wire these values into specific places on the pages (e.g., auto-populating the nav with `siteName`), ask an AI assistant to help — paste the relevant HTML file and ask it to replace hardcoded instances with `window.SITE_CONFIG.siteName`, etc.

---

### Improvement 2: Add Inline Comments to Every Data File

**Why:** A data file with no comments is one where the next editor has to guess what every field does. In JavaScript, a comment starts with `//` and is ignored by the browser entirely — it is a note for humans only.

**How to implement:**

At the top of each relevant section in a data file, add a comment showing exactly what a valid entry looks like. For example, in `dat/hub_organization.js` above the `team` section:

```javascript
// --- HOW TO ADD A TEAM MEMBER ---
// Copy the block below and paste it into the correct year array.
// 'link' must be a full LinkedIn URL. If there is no LinkedIn, use: link: ""
// Make sure there is a comma after every entry except the last one.
//
// {
//     name: "Full Name",
//     role: "Role Title",
//     link: "https://www.linkedin.com/in/handle/"
// },

team: {
    "2025-26": [ ... ]
}
```

Do this for resources, skills, activities, and curriculum entries. It takes under 10 minutes per file and prevents hours of confusion for future editors.

---

### Improvement 3: Maintain a `CHANGELOG.md`

**Why:** Without a record of changes, the next team has no way to know what was altered, when, or why. A changelog is a plain text file — no tooling required. See [Section 16](#16-changelog) for the live version of this file.

**How to implement:**

A template is already provided in Section 16. Copy it into a file called `CHANGELOG.md` in the project root (alongside `index.html`). Update it every time a meaningful change is made. This file does not affect the website — it is for the team's reference only.

---

### Improvement 4: Centralise the Navigation Bar

**Why:** The navigation bar HTML is currently copied identically into `index.html` and `organization.html`. If the site name or a nav link ever needs changing, both files must be edited. A shared injector script means you edit one file.

**How to implement:**

1. Create `src/nav_inject.js`:

```javascript
/**
 * TRACKS @ PWC - Shared Navigation Injector
 * To update the nav bar on index.html and organization.html, edit only this file.
 */
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const placeholder = document.getElementById('shared-nav');
        if (!placeholder) return;

        placeholder.innerHTML = `
            <nav class="sticky top-0 z-50 bg-pwc-bg/95 backdrop-blur border-b border-pwc-border transition-colors duration-300" aria-label="Main Navigation">
                <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div class="flex items-center gap-6">
                        <a href="index.html" class="font-serif font-bold text-lg tracking-tight text-pwc-accent no-underline hover:opacity-80 transition-opacity">
                            TRACKS @ PWC
                        </a>
                        <a href="index.html" class="text-xs font-bold uppercase tracking-widest text-pwc-subtext hover:text-pwc-accent transition-colors no-underline border-l border-pwc-border pl-6 hidden sm:inline-block" aria-label="Return to Home">
                            <i class="fa-solid fa-arrow-left mr-2" aria-hidden="true"></i> Return
                        </a>
                    </div>
                    <div class="flex gap-1 bg-pwc-border/20 p-1 rounded-lg border border-pwc-border" role="group" aria-label="Theme Selection">
                        <button class="theme-btn p-2 rounded-md text-xs transition-all focus:outline-none focus:ring-2 focus:ring-pwc-accent" data-theme="light" aria-label="Light Theme" title="Light"><i class="fa-solid fa-sun" aria-hidden="true"></i></button>
                        <button class="theme-btn p-2 rounded-md text-xs transition-all focus:outline-none focus:ring-2 focus:ring-pwc-accent" data-theme="dark" aria-label="Dark Theme" title="Dark"><i class="fa-solid fa-moon" aria-hidden="true"></i></button>
                        <button class="theme-btn p-2 rounded-md text-xs transition-all focus:outline-none focus:ring-2 focus:ring-pwc-accent" data-theme="sepia" aria-label="Sepia Theme" title="Sepia"><i class="fa-solid fa-book-open" aria-hidden="true"></i></button>
                    </div>
                </div>
            </nav>
        `;
    });
})();
```

2. In `index.html` and `organization.html`, find the entire `<nav>...</nav>` block and replace it with:
```html
<div id="shared-nav"></div>
```

3. In the `<head>` of those same files, add after the `theme_manager.js` script tag:
```html
<script src="src/nav_inject.js"></script>
```

4. Leave `research.html` and `archivist.html` alone — both have custom navigation logic that must stay inline.

5. Test locally before deploying. Open the browser console (`F12`) and confirm no errors appear.

> If you are unsure about implementing this, paste these instructions into an AI assistant along with the current content of `index.html` and ask it to make the change. See Section 14.

---

## 12. What Not to Touch

The following should only be modified if you fully understand what you are doing. Incorrect edits here will break the site.

| File / Element | Why it is sensitive |
|---|---|
| `src/theme_manager.js` | Controls theme switching across all pages. Errors here cause themes to stop working or flash incorrectly on load. |
| The `<script type="text/babel">` blocks in the HTML files | This is the React code that renders each page. Any syntax error here will cause the entire page to go blank with no visible indication of why. |
| The `<script src="...">` tags at the top of each HTML file | These load React, Babel, Tailwind, and the data files in a specific order. Removing or reordering them will break the page. |
| The CDN links (`https://cdn.tailwindcss.com`, etc.) | These load external libraries. Do not change the URLs unless you are certain a specific version is causing a problem. |
| The `window.HUB_DATA =` lines at the top of each data file | These attach the data to the global object the HTML reads from. Deleting or renaming them will cause the page to show blank content. |

**A note on CDN version pinning:** Currently Tailwind, React, and Babel load from CDNs without pinned version numbers. In rare cases, a CDN library update could silently change site behaviour. If the site ever breaks without any changes on your end, this is worth investigating. An AI assistant can help you add explicit version numbers to the CDN links if this becomes necessary.

---

## 13. Troubleshooting

### The page is completely blank

A syntax error in a data file is the most common cause — usually a **missing comma** or **unclosed bracket** after an edit.

**Diagnose:** Press `F12` (or `Cmd+Option+I` on Mac) → **Console** tab. The red error message will name the file and line.

**Quick recovery:** Undo recent edits (`Ctrl+Z` in your text editor) until the page works, then redo the edit more carefully.

### A section isn't showing updated content

Save the file, then do a **hard refresh**: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac).

### The Archivist isn't loading topics

Requires an internet connection to the Wikipedia API. If connected and still stuck on "Loading Archives...", open `F12` → Console for API errors. The Wikipedia API occasionally rate-limits — wait a moment and click "Refresh."

### The AI chat in the Archivist says "Connection interrupted"

The user's API key is invalid, expired, or has exceeded its free quota. They need a new key from [Google AI Studio](https://aistudio.google.com/app/apikey) or [Groq Console](https://console.groq.com/keys).

### Fonts or icons are not appearing

The external CDN services (Google Fonts, Font Awesome) are not loading — an internet connectivity issue. No code fix needed.

### The theme is not saving between visits

Theme is saved in `localStorage`. Private/incognito windows and cleared browser data will reset it to Light on every visit. This is expected behaviour.

### I can't find what I broke

Copy the full error text from the browser console and paste it into an AI assistant. Explain what you were trying to do. It will identify the problem. See Section 14.

---

## 14. Using Generative AI for Updates & Scripting

### Why this section exists

This section explains how to use AI tools effectively and safely for this codebase, even with no coding background.

The goal is not for you to learn to code. The goal is for you to communicate clearly to a generative AI model what you want, give it the right context, and verify that the result works before deploying it.

### Which tools to use

Any capable AI assistant will work. Strong options include:

- **[Claude](https://claude.ai)** (Anthropic)
- **[ChatGPT](https://chat.openai.com)** (OpenAI)
- **[Gemini](https://gemini.google.com)** (Google)

All are available free at basic tiers.

---

### The Core Technique: Provide Full Context

AI tools work best when they can see the actual code they are being asked to modify. The single most effective thing you can do is **paste the entire contents of the relevant file** into your prompt.

**Do not** describe what you think the file looks like.
**Do** open the file, select all (`Ctrl+A`), copy, and paste it directly into the chat.

---

### Prompt Templates

Use these tested prompt structures for common tasks. Replace the bracketed sections with your actual details.

#### Template 1: Making a content change you're unsure how to do

```
I'm maintaining a static website project called TRACKS @ PWC.
The site has no build tools — it's plain HTML files with JavaScript data files.

I need to [describe exactly what you want — e.g., "add a new team member
for the 2026-27 year" or "add a new resource to the Macro & Finance category"].

Here is the full content of the file I need to edit:

[paste the entire file content here]

Please show me exactly what the file should look like after the change.
Highlight or describe what you changed.
```

#### Template 2: Diagnosing an error

```
I'm maintaining a static website and something broke after I made an edit.
The page is now blank. Here is the error message from the browser console:

[paste the exact error text here]

Here is the file I edited:

[paste the file content here]

Can you tell me what I did wrong and show me the corrected version?
```

#### Template 3: Implementing an improvement from Section 11

```
I'm maintaining a static website called TRACKS @ PWC.
I want to implement the following improvement from our README:

[paste the relevant improvement section here]

Here are the files involved:

--- index.html ---
[paste file]

--- organization.html ---
[paste file]

Please produce the updated versions of each file that needs to change,
and explain in plain language what you did.
```

#### Template 4: Adding a new type of content that doesn't exist yet

```
I'm maintaining a static website. Content is stored in JavaScript data files
that populate the page via React. I want to add [describe the new content —
e.g., "a new tab on the Research page called 'Events' that lists upcoming
events with a title, date, and description"].

Here is the current data file structure:

[paste relevant data file]

Here is the HTML/React code for the page it should appear on:

[paste HTML file]

Please suggest the simplest way to add this. Show me the data file format
and the React component I'd need to add.
```

---

### Rules for Working Safely with AI-Generated Code

**1. Always test before deploying.**
Run the site locally after every AI-assisted change. Confirm it works before uploading to the live site.

**2. Keep a backup.**
Before applying any AI-suggested change, save a copy of the original file (e.g., `hub_organization_backup_june2026.js`). If something goes wrong, you can restore immediately.

**3. Make one change at a time.**
Ask the AI to do one thing per conversation. If you ask for five changes at once and something breaks, you won't know which caused it.

**4. Ask for explanations.**
Add "explain what you changed and why" to every prompt. If the explanation doesn't match what you asked for, clarify and try again before using the code.

**5. Never paste API keys or passwords into AI chats.**
The Archivist's API keys are supplied by users at runtime and never stored in project files. If you ever find credentials in the codebase, do not share them with any AI tool.

**6. The model can be wrong.**
AI tools occasionally produce plausible-looking code with subtle errors. Always test the output. If something doesn't work, paste the error message back and ask it to fix the problem — this usually resolves in one or two rounds.

**7. Paste error messages verbatim.**
"It doesn't work" is not useful. The exact text from the browser console is. Copy it completely and paste it in.

---

### A Worked Example

**Situation:** It's the start of the 2026-27 year. You need to add John Galt as the new Central Convener.

**Step 1:** Open `dat/hub_organization.js`. Select all (`Ctrl+A`), copy.

**Step 2:** Go to [claude.ai](https://claude.ai) and type:

> I'm maintaining a static website project called TRACKS @ PWC. I need to add a new academic year "2026-27" to the team section, with one member: John Galt, Central Convener, LinkedIn: https://www.linkedin.com/in/johngalt/. Here is the full content of the file:
>
> [paste the file]
>
> Show me the updated file with the change made. Explain what you changed.

**Step 3:** The model returns an updated file. Read its explanation — confirm it understood the request correctly.

**Step 4:** Copy the model's output. Paste it back into `dat/hub_organization.js`, replacing all existing content. Save.

**Step 5:** Open the site in your local server. Check that the Organization page shows a "2026-27" year in the dropdown with John Galt listed.

**Step 6:** If it looks correct, upload the updated file to GitHub.

---

## 15. Glossary

**CDN (Content Delivery Network)** — A service that hosts files (like Tailwind or React) on servers around the world so browsers can load them quickly. This project uses several CDNs to load its dependencies.

**CSS Variables** — Values defined once in a stylesheet that can be reused throughout. In this project, colours like `--accent-color` are CSS variables, which is how the theme system works — swapping one class on `<body>` changes all colours at once.

**`dat/` folder** — The data directory. All site content lives here as JavaScript files.

**`src/` folder** — The source directory for configuration files — stylesheets and theme scripts.

**HUB_DATA** — The global JavaScript object that all data files attach to. Think of it as the site's content store. `window.HUB_DATA.CURRICULUM` is the curriculum content, `window.HUB_DATA.RESOURCES` is the resource database, and so on.

**isPipeline** — A flag in `hub_organization.js` that marks a module as "coming soon." Items with `isPipeline: true` appear as dim, greyed-out placeholders in the Organization page.

**localStorage** — A browser feature that lets a website save small amounts of data on the user's device. This project uses it to remember the chosen theme and to cache Archivist results.

**React** — A JavaScript library used to build the interactive parts of the site. It reads the data files and renders them as HTML on the page. You do not need to understand React to maintain the content — only the data files.

**Static site** — A website consisting only of files (HTML, CSS, JS) with no server or database. Everything runs in the user's browser.

**`window.CATEGORY_MAP` / `window.LIBRARY_MAP` / `window.THEME_MAP`** — Global objects used specifically by the Archivist, equivalent to `HUB_DATA` for the other pages.

---

## 16. Changelog

Maintained manually. Add a new entry at the top every time a meaningful change is made to the project. This file does not affect the website — it exists for the team's reference.

```
## [YEAR-YY] — Month Year
- Description of what changed and in which file.
- Another change.

## [2025-26] — Initial Release
- Initial deployment of TRACKS @ PWC.
- Modules live: Organization, Research Hub (Curriculum, Resources,
  Skills, Activities), The Archivist.
- README authored as handoff document for incoming team.
```

---

*This document is prepared as a handoff reference for the incoming team.*

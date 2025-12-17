# TRACKS @ PWC — Web Interface Demonstrator

These artifacts serve as exploratory design prototypes for a "Zero-Build" web ecosystem, comprising a central landing hub, an organizational governance viewer, a research curriculum interface, and a knowledge discovery engine.

---

## Important Disclosure

**AI-Assisted Development**: All scripts in this repository were generated using generative AI. The content represents a conceptual demonstration rather than an authoritative institutional specification.

---

## Ecosystem Overview

The repository consists of four distinct interfaces that function as a cohesive application suite:

### 1. `index.html` — The Landing Hub
*The Central Gateway.*
A minimalist navigation deck that routes users to the three primary modules. It features:
- **Theme Persistence:** Toggles between Light, Dark (Obsidian), and Sepia modes, saving the preference to `localStorage` for use across all sub-pages.
- **Three-Column Navigation:** Direct access to Organization, Research, and the Archivist.

### 2. `organization.html` — Institutional Governance
*The Strategic Architecture.*
A visual manifesto of the TRACKS framework, focusing on governance and long-term strategy.
- **Functional Pillars:** Visualizes the five core functions (Inquiry, Capacity, Discourse, Memory, Alignment).
- **Strategic Roadmap:** An interactive vertical timeline detailing Phases I through IV (Foundation to Institutional Integration).
- **Operational Philosophy:** Articulates the "Evolutionary Governance" model.

### 3. `research.html` — The Research Lab
*The Systems Demonstrator.*
A comprehensive dashboard for academic inquiry, divided into four interactive tabs:
- **Curriculum:** A protocol-driven navigator for Epistemic Foundations, Causal Inference (DiD, IV), and Qualitative Rigor. Includes interactive "steps" for research protocols like *The Theoretical Puzzle*.
- **Resources:** A curated, categorized bank of external datasets (FRED, World Bank, V-Dem) and tools.
- **Skills:** A tiered skill tree (Foundations, Core, Advanced) covering Math, Python, R, and Econometrics.
- **Activities:** A collection of metacognitive drills (Pre-Mortem, Zero-Draft) and simulation links (Fishbanks, OPEQ).

### 4. `archivist.html` — The Archivist
*The Serendipity Engine.*
An exploratory interface designed to generate lateral thinking by connecting disparate knowledge domains.
- **The Spinner:** A visual "wheel" that randomizes topics based on selected domains (Philosophy, Science, History, etc.).
- **Scholar's Lens (AI Augmented):** An optional mode allowing users to input API keys (Google Gemini or Groq/Llama3) to generate real-time intellectual syntheses and "Key Debates" summaries.
- **The Dossier:** Displays Wikipedia extracts, book recommendations (via Google Books API), and cross-references.
- **Universal Library:** A sidebar providing quick search access to external repositories (JSTOR, PhilPapers, NBER, etc.).
- **Session Hashing:** The specific state of the wheel can be serialized into the URL for sharing.

---

## Technical Architecture

This project follows a **Zero-Build Modular Architecture**. All interfaces run directly in a modern web browser (including via the `file://` protocol) without a local server or compilation step.

### Core Stack
- **React (via CDN):** Component logic.
- **Tailwind CSS (via CDN):** Utility-first styling.
- **Babel (via CDN):** In-browser JSX transpilation.
- **FontAwesome:** Iconography.

### File Structure

#### `/dat` — Data Ontologies
Content is strictly separated from logic. Editing these files updates the content without touching the React code.
- `hub_organization.js`: Vision, roadmap, and pillars for `organization.html`.
- `hub_curriculum.js`: Research protocols and reading lists for `research.html`.
- `hub_skills.js`: Technical skill trees and project links.
- `hub_resources.js`: Categorized external data links.
- `hub_activities.js`: Simulations, drills, and competitions.
- `category_map.js`: The taxonomy of domains (Philosophy, Physics, Art) used by the Archivist.
- `library_map.js`: The list of external search engines used in the Archivist sidebar.

#### `/src` — Logic & Assets
- `theme_manager.js`: Handles applying CSS classes (`theme-sepia`, `theme-dark`) and persisting state to `localStorage`.
- `theme_map.js`: Defines the specific color palettes and Tailwind classes for the Archivist's themes.
- `hub_style.css`: Styles specific to the Hub, Organization, and Research pages.
- `archivist_style.css`: Styles specific to the Archivist (grain textures, customized scrollbars).

---

## Usage Instructions

1. **Download:** Clone or download the repository.
2. **Run:** Double-click `index.html` to open the Landing Hub in Chrome, Edge, or Firefox.

### API Keys (Optional)
To use the "Scholar's Lens" feature in the Archivist:
1. Click the "Standard Mode" button in the top right.
2. Enter a valid API Key for **Google Gemini** or **Groq**.
3. The system will use this key only for the duration of the session to fetch AI-augmented insights. Keys are not stored persistently.

---

## Customization

To modify the content (e.g., adding a new reading module or changing a resource link), edit the corresponding file in the `/dat` directory. The HTML files will automatically render the new data upon refresh.

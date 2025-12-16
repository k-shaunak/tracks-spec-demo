# TRACKS @ PWC — Research Hub

This repository contains static, client-side HTML prototypes for two experimental, research-oriented web interfaces developed under the broader **TRACKS @ PWC** conceptual framework. These artifacts are intended as exploratory design prototypes rather than production systems or authoritative specifications.

---

## Important Disclosure

All code in this repository has been produced with the assistance of generative AI. The overall structure, styling, component logic, and textual scaffolding were generated, refined, and assembled using large language models.

---

## Repository Overview

### 1. `index.html` — TRACKS @ PWC Research Hub

A comprehensive, self-contained research hub interface designed to function as:

- A curriculum and methodology navigator  
  (Epistemic Foundations, Causal Inference, Qualitative Rigor)
- A resource aggregation platform  
  (data sources, simulations, competitions)
- A research training and incubation scaffold

**Key Characteristics**

- **Zero-Build Architecture**  
  React and Tailwind CSS are loaded via CDN, with JSX transpiled directly in the browser.

- **Thematic Customization**  
  Native support for Light, Dark, and Sepia reading modes.

- **Protocol-Driven Design**  
  Structured research guides, including:
  - The Theoretical Puzzle  
  - Identification Strategy  
  - Analytic Induction

- **Persistent State**  
  Active modules, protocols, and resource categories are preserved across page reloads using `localStorage`.

---

### 2. `archivist.html` — *The Archivist: Serendipity Engine*

An exploratory knowledge discovery interface designed to support serendipitous navigation across human knowledge domains, augmented by optional generative inference.

**Key Features**

- **Modular Architecture**  
  Strict separation of logic, data, and presentation layers.

- **Session Serialization (“The Hash”)**  
  The application serializes the current set of loaded topics into a URL-safe hash (`?s=...`), allowing users to share an identical serendipity state.

- **Deep Linking**  
  Individual topics can be opened directly via URL parameters (`?t=Topic_Name`), triggering the “File Retrieved” modal while ensuring the background spinner is fully initialized for continued exploration.

- **Universal Library Access**  
  A dossier sidebar provides collapsible access to all curated external repositories (e.g., JSTOR, PhilPapers, NBER), independent of the currently loaded topic.

- **Scholar’s Lens (AI Augmentation)**  
  An optional mode allowing users to provide API keys (Google Gemini or Groq) to generate real-time intellectual synthesis and surface core academic debates related to selected topics.

- **Performance-Oriented Design**  
  - Persistent local caching of Wikipedia data  
  - Static background textures to minimize CPU usage  
  - Debounced interaction logic to reduce unnecessary reflows  

---

## Architecture and File Structure

This project follows a **Zero-Build Modular Architecture**. All interfaces run directly in a modern web browser (including via the `file://` protocol) without a local server, while maintaining a clean separation of concerns.

### Root

- `index.html` — Entry point for the Research Hub  
- `archivist.html` — Entry point for the Serendipity Engine  

### `/dat` — Data Ontologies

These files define the underlying content and domain structure. They can be edited to change subject matter without modifying application logic.

- `hub_curriculum.js` — Research protocols and epistemic foundations  
- `hub_resources.js` — External datasets and repositories (FRED, World Bank, etc.)  
- `hub_skills.js` — Technical tutorials (R, Python, LaTeX)  
- `hub_activities.js` — Simulations and competitions  
- `category_map.js` — The Archivist’s domain ontology (Philosophy, Science, etc.)  
- `library_map.js` — Curated external archives and libraries  

### `/src` — Source and UI Assets

- `hub_style.css` — Styles specific to the Research Hub  
- `archivist_style.css` — Styles specific to the Archivist (grain textures, scrollbars)  
- `theme_map.js` — UI theme definitions (Sepia, Obsidian, Light)  

---

## Usage

No installation or build steps are required.

1. Download or clone the entire repository.
2. Open `index.html` in any modern web browser  
3. Navigate to the **Lab** tab or open `archivist.html` directly to access the Serendipity Engine.

### Persistence Notes

The application uses `localStorage` to preserve:

- Theme preferences  
- Active tabs and modules  
- Cached API responses (where applicable)

To fully reset the application state, clear your browser’s local storage for the corresponding file or site context.

---

## Relationship to TRACKS @ PWC Documentation

A separate, detailed document exists describing the broader institutional vision, governance model, curricular design, and long-term roadmap for **TRACKS @ PWC**.

The HTML files in this repository should be understood as **prototypes and visual artifacts** aligned with that broader framework, rather than as definitive or authoritative specifications.

---

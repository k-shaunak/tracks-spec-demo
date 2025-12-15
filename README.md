# TRACKS @ PWC — Research Interfaces

This repository contains **static, client-side HTML prototypes** for two experimental research-oriented web interfaces developed under the broader **TRACKS @ PWC** conceptual framework.

⚠️ **Important Disclosure**  
**All code in this repository has been produced with the assistance of generative AI.**  
The structure, styling, component logic, and textual scaffolding were generated, refined, and assembled using large language models.

---

## Repository Contents

### 1. `index.html` — TRACKS @ PWC Research Hub  

A comprehensive, self-contained research hub interface that functions as:

- A **curriculum and methodology navigator**
- A **resource aggregation platform**
- A **research training and incubation scaffold**

**Key characteristics:**
- React (via CDN) with JSX transpiled in-browser using Babel
- Tailwind CSS via CDN with custom theming (light / dark / sepia)
- Modular data-driven structure (curriculum, protocols, resources)
- No backend or build tooling required

**Conceptual focus:**
- Epistemic foundations of research
- Literature synthesis and rhetoric
- Quantitative causal inference
- Qualitative rigor and archival methods
- Skill-building pathways and external competitions

---

### 2. `archivist.html` — The Archivist: Serendipity Engine  

An exploratory **knowledge discovery interface** designed to support:

- Serendipitous navigation of human knowledge domains
- Domain inference and categorization
- Augmented exploratory learning using generative inference

**Key characteristics:**
- React-based single-page interface
- Client-side caching using `sessionStorage`
- Heuristic domain inference from categorical metadata
- Heavy emphasis on interaction design and visual texture
- No external API dependencies required at runtime

**Conceptual focus:**
- Knowledge mapping and categorization
- Cross-domain exploration
- Discovery-driven learning rather than search-first paradigms

---

## Architectural Notes

- **No build step**: All dependencies are loaded via CDN.
- **No server required**: Files can be opened directly in a browser.
- **No persistence layer**: State is ephemeral and browser-bound.
- **Experimental by design**: These files are intended as *concept demonstrators*, not production systems.

---

## Relationship to TRACKS @ PWC Documentation

A detailed **process, governance, and curricular design document** exists describing the institutional vision, operational structure, and long-term roadmap for TRACKS @ PWC.

The HTML files should be understood as *prototypes and visual artifacts* aligned with that broader framework, not as authoritative specifications

---

## Usage

```bash
# No installation required
# Simply open the files in a modern browser

open index.html
open archivist.html

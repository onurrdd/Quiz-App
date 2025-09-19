# Copilot Instructions for Quiz App

## Project Overview
This is a simple browser-based Quiz App. The codebase consists of three main files:
- `index.html`: Main HTML structure and entry point.
- `style.css`: Styles for the app UI.
- `README.md`: Project description (minimal).

## Architecture & Data Flow
- All logic is expected to reside in the HTML file, using embedded or linked JavaScript.
- No build tools, frameworks, or external dependencies are present.
- The app is static: open `index.html` directly in a browser to run and debug.

## Developer Workflows
- **Run/Debug:** Open `index.html` in any modern browser. No build or test commands are required.
- **Styling:** Edit `style.css` for UI changes. Link new CSS files in `index.html` if needed.
- **JavaScript:** Add scripts link external JS files. Use `<script>` tags at the end of `<body>` for best practice.

## Project-Specific Patterns
- Code content and questions should be prepared in English.
- Use semantic HTML for quiz questions, answers, and navigation.
- Prefer vanilla JavaScript for interactivity (no frameworks).
- Store quiz data as JS objects/arrays within the script section.
- Use event listeners for user interactions (e.g., answer selection, next question).

## Examples
- To add a new quiz question, update the JS data structure and UI rendering logic in `index.html`.
- To change the look, edit `style.css` and reload the browser.

## Key Files
- `index.html`: Main logic, UI, and data.
- `style.css`: All styles.
- `script.js`: Quiz logic and interactivity.


## Conventions
- No external dependencies or package managers.
- No automated tests or build scripts.
- All changes are immediately visible by refreshing the browser.

---
For major refactors, keep the app single-page and static unless requirements change.

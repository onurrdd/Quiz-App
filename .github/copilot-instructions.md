
# Copilot Instructions for Quiz App

## Project Overview
This is a simple browser-based Quiz App. The codebase now consists of these main files:
- `index.html`: Main HTML structure and entry point for the quiz.
- `admin.html`: Admin interface for managing questions.
- `style.css`: Styles for the app UI.
- `script.js`: Quiz logic and interactivity.
- `admin.js`: Admin page logic for question management.
- `questions.js`: Shared default quiz questions (used by both quiz and admin).
- `README.md`: Project description (minimal).

## Architecture & Data Flow
- All logic is in linked JavaScript files (`script.js`, `admin.js`).
- Default quiz questions are defined in `questions.js` and loaded by both quiz and admin pages.
- Questions are stored in browser `localStorage` for persistence and editing.
- No build tools, frameworks, or external dependencies are present.
- The app is static: open `index.html` or `admin.html` directly in a browser to run and debug.

## Developer Workflows
- **Run/Debug:** Open `index.html` or `admin.html` in any modern browser. No build or test commands are required.
- **Styling:** Edit `style.css` for UI changes. Link new CSS files in HTML if needed.
- **JavaScript:** Add scripts by linking external JS files. Use `<script>` tags at the end of `<body>` for best practice.

## Project-Specific Patterns
- Code content and questions should be prepared in English.
- Use semantic HTML for quiz questions, answers, and navigation.
- Prefer vanilla JavaScript for interactivity (no frameworks).
- Store quiz data as JS objects/arrays in `questions.js` and in localStorage.
- Use event listeners for user interactions (e.g., answer selection, next question, admin actions).

## Examples
- To add a new quiz question, update the `defaultQuestions` array in `questions.js`.
- To change the look, edit `style.css` and reload the browser.
- To reset questions, use the admin page's reset button (restores defaults from `questions.js`).

## Key Files
- `index.html`: Main quiz UI and logic.
- `admin.html`: Admin interface for question management.
- `style.css`: All styles.
- `script.js`: Quiz logic and interactivity.
- `admin.js`: Admin logic and question management.
- `questions.js`: Shared default questions.

## Conventions
- No external dependencies or package managers.
- No automated tests or build scripts.
- All changes are immediately visible by refreshing the browser.

---
For major refactors, keep the app single-page and static unless requirements change.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start Vite dev server (http://localhost:5173)
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
```

No test framework is configured.

## Project Context

This is an educational starter project from a Mosh Hamedani course. It **intentionally contains bugs and messy code** to be progressively fixed and improved as part of the learning exercise.

## Architecture

**Stack:** React 19 + Vite + ESLint. Pure JavaScript (no TypeScript). No routing, no external state management, no backend/API — all data lives in local component state (no persistence).

**Structure:** Essentially a single-component app. All logic and UI lives in `src/App.jsx`. `src/main.jsx` is just the React root mount.

**State in App.jsx:**
- `transactions[]` — array of transaction objects `{ id, description, amount, type, category, date }`
- Form field states: `description`, `amount`, `type`, `category`
- Filter states: `filterType`, `filterCategory`
- Derived: `totalIncome`, `totalExpenses`, `balance` computed inline from filtered transactions

**Known bugs (intentional):**
- `amount` is stored as a string, not a number — causes incorrect string concatenation in the summary `reduce()` calls instead of numeric addition
- Delete functionality is referenced in CSS but not implemented in JSX
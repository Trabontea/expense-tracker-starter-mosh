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

**Component tree:**

```
App
├── Summary
├── TransactionForm
└── TransactionList
```

**State ownership:**
- `App` — holds `transactions[]` (`{ id, description, amount, type, category, date }`) and the shared `categories[]` list; passes `onAdd` callback to `TransactionForm`
- `Summary` — receives `transactions`, computes `totalIncome`, `totalExpenses`, and `balance` internally
- `TransactionForm` — owns all form field state (`description`, `amount`, `type`, `category`); calls `onAdd` with the built transaction object on submit
- `TransactionList` — owns filter state (`filterType`, `filterCategory`); receives `transactions` and `categories` to render the filtered table

**Known issue (intentional):**
- Delete functionality is referenced in CSS but not implemented
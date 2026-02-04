# Standalone Funds Page

This is a standalone React page that can be viewed independently in your browser, without Storybook.

## Setup

First, install the required dependencies:

```bash
npm install vite @vitejs/plugin-react
```

## Running the Page

Start the development server:

```bash
npm run dev
```

The page will automatically open in your browser at `http://localhost:3000`

## What You'll See

The Funds page includes:
- Sidebar navigation on the left
- Header with company name, breadcrumbs, and controls
- Navigation tabs
- Full data table with all design system components working together
- All styling uses design tokens from the design system

## Files Created

- `index.html` - HTML entry point
- `src/main.tsx` - React entry point that renders the FundsPage
- `vite.config.ts` - Vite configuration for the standalone app
- `src/pages/FundsPage.tsx` - The main page component (uses all design system components)

## Building for Production

To build the page for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

To preview the production build:

```bash
npm run preview
```

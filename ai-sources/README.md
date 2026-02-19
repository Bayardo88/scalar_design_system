# AI-generated components

Components in this folder are generated from **Figma** using **AI-Rules.md** and **design-tokens.scalar.ai.json** as the single source of truth.

## Source of truth

- **Design:** Figma (links in each component file)
- **Rules:** `public/AI-Rules.md`
- **Tokens:** `design-tokens.scalar.ai.json` (no hardcoded colors, spacing, or typography)

## Requirements

1. **CSS variables** — The app must expose design tokens as CSS variables so these components can use semantic tokens (e.g. `--background-brand`, `--text-button-label`). Inject from `design-tokens.scalar.ai.json` into `:root` and `[data-theme="dark"]`.

2. **Material Symbols** — Icons use [Google Material Symbols](https://fonts.google.com/icons). Load the font and use `<span class="material-symbols-outlined">icon_name</span>`.

3. **Theming** — Light: `:root`. Dark: `[data-theme="dark"]` on a parent (e.g. `<html data-theme="dark">`).

## Components

| Component | Figma source |
|-----------|----------------|
| [Button](./Button.tsx) | [Scalar_Design_System-Components – Button](https://www.figma.com/design/Z4MtKOfkNEzhMYJzN1q3kR/Scalar_Design_System-Components?node-id=59-21923&m=dev) |

## Usage

```tsx
import { Button } from './ai-sources/Button';

<Button variant="brand" size="m">Label</Button>
<Button variant="positive" size="l" iconRight="arrow_forward">Continue</Button>
<Button variant="negative" size="s" disabled>Cancel</Button>
```

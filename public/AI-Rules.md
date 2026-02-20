# AI Component Creation Rules
## Scalar Design System — Figma MCP + Cursor Context

This document defines strict rules for any AI tool (Cursor, Copilot, etc.) generating UI components based on the Scalar Design System.

The **single source of truth** for styling decisions is:

`design-tokens.scalar.ai.json`

DO NOT invent visual values.
DO NOT hardcode colors, spacing, typography, or radii.
ALL styling must derive from the tokens file.

---

# 1. Source of Truth

All generated components MUST:

- Import and rely on `design-tokens.scalar.ai.json`
- Use `tailwind.theme.extend` values defined in the file
- Use `tokens.semanticColorsLight` and `tokens.semanticColorsDark` for UI states
- Respect the primitive tokens for spacing, typography, and units

Reference file:
`design-tokens.scalar.ai.json`

---

# 2. Token Usage Hierarchy (MANDATORY)

When creating components, follow this strict hierarchy:

### 1️⃣ Semantic Tokens (FIRST CHOICE)
Use semantic tokens for UI meaning:

- text-primary
- text-secondary
- background-brand
- background-positive
- background-negative
- stroke-brand
- icon-brand
- etc.

Light theme → `tokens.semanticColorsLight`  
Dark theme → `tokens.semanticColorsDark`

Never bypass semantic tokens for UI styling.

---

### 2️⃣ Primitive Tokens (ONLY if semantic is unavailable)

Use:

- `tokens.primitiveColors`
- `tokens.spacing`
- `tokens.cornerRadius`
- `tokens.primitiveType`
- `tokens.unit`

Never write raw hex values.
Never write pixel values directly.
Always use token variables.

---

# 3. Tailwind Rules

The design system extends Tailwind via:

`tailwind.theme.extend`

Therefore:

- Use `brand-500`, not `#037de8`
- Use `neutral-900`, not `#1a1a1a`
- Use `rounded-m`, not `rounded-[16px]`
- Use spacing tokens (xs, s, m, l, xl)

If a value is not in Tailwind extend,
→ use CSS variables generated from tokens.

Do NOT invent utility classes.

---

# 4. Theming Rules

The system supports:

- Light theme → :root
- Dark theme → [data-theme="dark"]

Components MUST:

- Be theme-aware
- Avoid hardcoded colors
- Use semantic tokens that switch automatically

Never manually implement dark-mode overrides.
Tokens already define theme differences.

---

# 5. Typography Rules

Typography must use:

- `family-inter`
- Defined weights: light, regular, semi-bold, bold
- Defined size tokens (size-xs → size-5xl)
- Defined line-heights
- Defined letter-spacing

Never:

- Hardcode font-size
- Hardcode line-height
- Use arbitrary Tailwind typography classes

---

# 6. Spacing & Layout

Spacing MUST use:

- xs → var(--4)
- s → var(--8)
- m → var(--16)
- l → var(--24)
- xl → var(--32)

Never:

- Use random px values
- Use arbitrary gap-[value]

---

# 7. Border Radius

Allowed radii only:

- xs
- s
- m
- l
- xl

Never use custom rounded values.

---

# 8. Breakpoints

Available breakpoints:

- desktop-1440
- desktop-1920

Do not invent additional breakpoints.

---

# 9. Figma MCP Server Rules (MANDATORY)

The Figma MCP Server provides an assets endpoint.

Rules:

- If MCP returns a localhost image or SVG → use that source directly.
- DO NOT import new icon packages.
- DO NOT create placeholder graphics if localhost source exists.
- All visual assets must come from the Figma payload.

Never replace Figma-provided assets.

---

# 10. Icon Usage Rules (STRICT)

1. DO NOT generate raw `<svg>` code.
2. DO NOT use lucide-react or any other icon library.
3. ALWAYS use Google Material Symbols.

When implementing icons:

**Correct:**
```html
<span class="material-symbols-outlined">search</span>
```

**Incorrect:** Raw SVG or third-party icon libraries.

When an icon appears in Figma:

- Identify its name (e.g. "menu", "arrow_forward")
- Use the exact Material Symbols name

Icons must inherit semantic color tokens.

---

# 11. Component Construction Principles

When generating components:

**✅ DO**

- Map Figma styles → semantic tokens
- Use Tailwind values from tokens
- Support theme switching
- Respect spacing scale
- Respect typography scale
- Keep components consistent with token architecture

**❌ DO NOT**

- Hardcode colors
- Hardcode spacing
- Invent typography sizes
- Import new dependencies
- Create design deviations from tokens

---

# 12. Button Example (Reference Pattern)

Example structure:

- Background → background-brand
- Text → text-button-label
- Hover → background-hover
- Pressed → background-pressed
- Disabled → background-disable + text-button-disable-label
- Spacing → padding using spacing tokens
- Radius → rounded-m
- Typography → label-m-semi-bold

---

# 13. Enforcement Rule

If a requested design detail does not exist in design-tokens.scalar.ai.json:

→ Do NOT invent it.
→ Ask for a token extension.

The tokens file is authoritative.

---

# 14. Mental Model for AI Tools

When building components:

- **Figma** → Design Intent
- **Tokens** → System Constraint
- **Tailwind** → Implementation Layer
- **React** → Rendering Layer

Never reverse this hierarchy.

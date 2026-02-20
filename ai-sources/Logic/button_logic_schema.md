# Button Logic Schema (Authoritative)
## Scalar Design System

This document defines the behavioral and structural logic for the Button component.

This file governs:

- Interaction lifecycle
- Content structure
- Loading behavior
- Disabled rules
- Accessibility logic
- Guardrails

This file does NOT define visual tokens.
Visual styling is defined in 01-component-schema.md.

**Deviation from this schema is invalid.**

---

## Component: Button

**Type:** ui  
**Responsibility:** Triggers a single explicit user action.

---

## 1. Core Behavioral Contract

Button represents a discrete user-triggered action.

**A Button MUST:**

- Trigger one action per activation
- Not manage application state internally
- Not contain navigation logic unless explicitly configured as link-button
- Remain deterministic in interaction behavior

**A Button MUST NOT:**

- Trigger multiple unrelated actions
- Contain business logic
- Fetch data internally
- Mutate external state outside provided handler

---

## 2. Rendering Structure

### Structural Model

Button MAY contain:

- Label (required unless icon-only variant)
- Leading icon (optional)
- Trailing icon (optional)
- Loading indicator (conditional)

Structure must remain consistent across states.

DOM structure must not change between:

- default
- hover
- pressed
- focus
- disabled

Loading may alter content visibility but must preserve layout dimensions.

---

## 3. Variant Logic

**Allowed Variants (finite):**

- primary
- secondary
- positive
- negative
- warning
- ghost

**Variant determines:**

- Semantic intent
- Token mapping (visual layer only)

**Variant MUST NOT:**

- Alter interaction behavior
- Change structural layout
- Introduce new state logic

No arbitrary variant strings allowed.

---

## 4. Size Logic

**Allowed Sizes:**

- xs
- sm
- md
- lg

**Rules:**

- Size must be selected from predefined enum
- No numeric or arbitrary values
- Size affects padding and typography (visual layer only)
- Size must not affect interaction logic

---

## 5. Interaction Lifecycle

**Supported states:**

- default
- hover
- pressed
- focus
- disabled
- loading

### State Rules

**Hover:**

- Visual feedback only
- No structural mutation

**Pressed:**

- Active feedback
- No content replacement

**Focus:**

- Keyboard-visible
- Must not rely solely on color

**Disabled:**

- Suppresses interaction
- Prevents onClick execution
- Applies aria-disabled
- Removes from tab order (if native button disabled)

**Loading:**

- Suppresses interaction
- Prevents repeated clicks
- May replace label with spinner
- Must preserve button width

---

## 6. Click Handling Logic

Button activation occurs when:

- Mouse click
- Keyboard Enter
- Keyboard Space

**Rules:**

- **IF** `disabled = true` → onClick MUST NOT fire
- **IF** `loading = true` → onClick MUST NOT fire

Button MUST debounce internally only if explicitly defined (not default behavior).

**Button MUST NOT:**

- Trigger multiple times from a single activation event
- Fire when unmounted
- Fire when disabled or loading

---

## 7. Loading Behavior Logic

When `loading = true`:

- Interaction disabled
- Visual indicator displayed
- Original label may be visually hidden but remains structurally reserved
- Width must remain constant

**Loading MUST NOT:**

- Collapse layout
- Shift surrounding elements
- Change button size

**Optional:**

- `aria-busy="true"`

---

## 8. Icon Logic

Button MAY include:

- Leading icon
- Trailing icon

**Rules:**

- Icon-only button requires accessible label
- Icon position must not dynamically reorder
- Icons must not alter click target area
- Icons must not replace semantic meaning of variant

**Icon-only variant MUST include:**

- aria-label
- Tooltip (recommended)

---

## 9. Accessibility Logic

### Native Behavior

Default implementation MUST use:

- `<button>` element

If rendered as link:

- Must use `<a>`
- Must support keyboard activation
- Must preserve role consistency

### Accessibility Requirements

- Visible focus state
- Proper disabled semantics
- aria-disabled when applicable
- aria-busy when loading
- aria-label required for icon-only

Button MUST remain operable via keyboard.

---

## 10. Structural Invariants

**Button MUST:**

- Maintain consistent height per size
- Preserve padding structure
- Avoid layout shifts across states
- Preserve content alignment

**Button MUST NOT:**

- Resize during hover or pressed
- Collapse when loading
- Introduce wrapper mutations per state

---

## 11. Composition Rules

Button MAY be composed within:

- ButtonGroup
- Form
- Modal
- Toolbar
- Dropdown trigger (external control)

**Button MUST NOT:**

- Internally manage dropdown state
- Act as both submit and navigation simultaneously
- Contain nested interactive elements

---

## 12. Error Handling Logic

Button MUST handle:

- Missing onClick (still renderable)
- Undefined variant (fallback to primary or throw)
- Undefined size (fallback to md)

**Button MUST NOT:**

- Crash if handler is undefined
- Emit console warnings in production
- Silently introduce new variants

---

## 13. Guardrails

**Forbidden behaviors:**

- Arbitrary variants
- Arbitrary sizes
- Inline business logic
- Hardcoded interaction rules
- Dynamic addition of undocumented states
- Nesting interactive children
- Using div instead of button without role correction

Button logic must remain finite, predictable, and token-driven.

---

**END OF LOGIC SCHEMA**

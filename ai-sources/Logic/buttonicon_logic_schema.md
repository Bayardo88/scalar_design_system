# ButtonIcon Logic Schema (Authoritative)
## Scalar Design System

This document defines the behavioral and structural logic for the ButtonIcon component.

This file governs:

- Dropdown behavior
- Controlled value logic
- Interaction lifecycle
- State handling
- Accessibility behavior
- Structural invariants
- Guardrails

This file does NOT define visual tokens.
All styling is governed by semantic tokens from design-tokens.scalar.ai.json.

**Deviation from this schema is invalid.**

---

## Component: ButtonIcon

**Type:** ui  
**Responsibility:** Triggers a dropdown selection of predefined options.

---

## 1. Core Behavioral Model

ButtonIcon is a controlled dropdown trigger.

**It behaves as:**

- A button
- That toggles a listbox
- That emits a selected value via onChange

**It is NOT:**

- A native `<select>`
- A multi-select
- A free-input field
- A searchable combobox

---

## 2. Controlled Value Logic

**Props:**

- `value?: string`
- `onChange?: (value: string) => void`
- `options: { value: string; label: ReactNode }[]`

### Resolution Rules

Selected option is determined by:

```
selectedOption = options.find(o => o.value === value)
```

**Display logic:**

- **IF** matching option exists → display `selectedOption.label`
- **ELSE** → display placeholder

No internal value state is stored.

**The component does NOT:**

- Mutate value
- Maintain uncontrolled selection state
- Persist selection internally

---

## 3. Dropdown Open/Close Logic

**Internal state:**

- `open: boolean`

### Toggle Behavior

- **IF** `disabled = false` **AND** trigger clicked → toggle open
- **IF** click occurs outside component → set `open = false`

Outside click detection uses document listener and ref containment.

### Constraints

**Dropdown MUST:**

- Close on outside click
- Close on option selection
- Not open when disabled
- Not remain open after selection

---

## 4. Option Selection Logic

Each option:

- `role="option"`
- `id="option-{value}"`
- `aria-selected` when active

**On click:**

- `onChange?.(opt.value)`
- `setOpen(false)`

**Selection MUST:**

- Call onChange once
- Close dropdown
- Not mutate options
- Not reorder options

MouseDown prevents focus loss.

---

## 5. Variant Logic

**Allowed Variants:**

- brand
- positive
- negative
- warning

Variant determines semantic token mapping only.

**Variant MUST NOT:**

- Change dropdown behavior
- Change structure
- Alter accessibility logic
- Introduce new interaction patterns

No arbitrary variants allowed.

---

## 6. Size Logic

**Allowed Sizes:**

- s
- m
- l

**Size affects:**

- Padding
- Typography scale
- Min height
- Min width

**Size MUST NOT:**

- Alter interaction behavior
- Change dropdown logic
- Modify state handling

---

## 7. Style Mode Logic

**Allowed Styles:**

- filled
- outlined
- minimal

**Style mode affects:**

- Background behavior
- Border behavior

**Style MUST NOT:**

- Change layout
- Change interaction logic
- Modify dropdown behavior

---

## 8. Interaction Lifecycle

**Supported states:**

- default
- hover (internal boolean)
- pressed (internal boolean)
- disabled
- open (dropdown visible)

### Hover State

Set on:

- `onMouseEnter` → true
- `onMouseLeave` → false

### Pressed State

Set on:

- `onMouseDown` → true
- `onMouseUp` → false
- `onMouseLeave` → false

These states affect semantic token resolution only.

**They MUST NOT:**

- Change structure
- Change content
- Affect dropdown positioning

---

## 9. Disabled Logic

When `disabled = true`:

- Trigger button disabled
- `aria-disabled=true`
- open cannot toggle
- Dropdown cannot render
- Option clicks suppressed
- Cursor indicates non-interactive

**Disabled MUST override:**

- Hover
- Pressed
- Open state

---

## 10. Structural Invariants

**ButtonIcon structure:**

```
div (relative container)
  └── button (trigger)
  └── ul (listbox) [conditional]
        └── li (options)
```

**Structure MUST:**

- Remain consistent across states
- Not inject dynamic wrappers
- Not change DOM hierarchy per state

**Dropdown MUST:**

- Be absolutely positioned
- Align to trigger width
- Render only when `open && !disabled`

---

## 11. Accessibility Logic

**Trigger:**

- `type="button"`
- `aria-haspopup="listbox"`
- `aria-expanded={open}`
- `aria-disabled={disabled}`
- `aria-label` required (fallback to display label or "Select option")

**List:**

- `role="listbox"`
- `aria-activedescendant` = selected option id

**Options:**

- `role="option"`
- `aria-selected` when active

**Accessibility MUST:**

- Persist across states
- Reflect disabled
- Reflect expanded state accurately

---

## 12. Icon Logic

**Trailing icon:**

- Material Symbol: `expand_more`
- `aria-hidden`
- Color determined by state

**Icon MUST:**

- Not trigger interaction independently
- Not change dropdown behavior
- Not be focusable

---

## 13. Error Handling Logic

**Component MUST handle:**

- Undefined value
- Empty options array
- Missing onChange
- Missing aria-label

**Component MUST NOT:**

- Throw runtime error if value not found
- Crash if onChange undefined
- Render invalid aria attributes

---

## 14. Composition Rules

ButtonIcon MAY be used within:

- Forms
- Toolbars
- Layout containers

**ButtonIcon MUST NOT:**

- Be nested inside another interactive trigger
- Manage global state
- Fetch options asynchronously internally
- Act as multi-select

---

## 15. Guardrails

**Forbidden behaviors:**

- Arbitrary variants
- Arbitrary sizes
- Arbitrary styles
- Multi-select support
- Search/filter logic
- Keyboard arrow navigation (not implemented)
- Internal value state
- Hardcoded visual values
- Adding undocumented states

Behavior must remain:

- Finite
- Deterministic
- Token-driven
- Structurally stable

---

**END OF LOGIC SCHEMA**

# Avatar Logic Schema (Authoritative)
## Scalar Design System

This document defines the behavioral and structural logic for the Avatar component.

This file governs:

- Rendering priority
- Fallback resolution
- Interaction rules
- Structural invariants
- Accessibility logic

This file does NOT define visual tokens.
Visual styling is defined in 01-component-schema.md.

**Deviation from this schema is invalid.**

---

## Component: Avatar

**Type:** ui  
**Responsibility:** Represents a user or entity through a visual identity marker.

---

## 1. Rendering Priority Logic

Avatar content MUST follow strict fallback hierarchy.

### Priority Order

1. Valid image source
2. Valid initials
3. Icon fallback
4. Anonymous placeholder

### Resolution Rules

- **IF** `src` is defined **AND** image loads successfully → render image
- **ELSE IF** `initials` is defined → render initials
- **ELSE IF** `icon` is defined → render icon
- **ELSE** → render anonymous fallback variant

Image load failure MUST automatically trigger fallback logic.

No visual collapse is allowed.

---

## 2. Structural Invariants

Avatar MUST:

- Maintain 1:1 aspect ratio
- Remain circular
- Preserve consistent DOM structure across states
- Avoid layout shifts during fallback transitions

Avatar MUST NOT:

- Change size between states
- Inject additional wrappers during state change
- Dynamically alter border-radius
- Collapse if image fails

Structure must remain predictable.

---

## 3. Size Logic

Avatar supports finite size set.

**Allowed Sizes:**

- xs
- sm
- md
- lg
- xl

**Rules:**

- Size must be selected from predefined enum
- No numeric or arbitrary size values
- Typography scale (for initials) is derived from size
- Icon scale is derived from size
- Image always fills container
- Size changes must not affect structure.

---

## 4. Interaction Logic

Avatar is non-interactive by default.

### Default Behavior

- `role="img"`
- No pointer interaction
- No keyboard interaction

### Interactive Mode

Avatar becomes interactive **ONLY** if:

- `onClick` handler exists **OR**
- wrapped inside interactive component

In interactive mode:

- `role="button"`
- Must support keyboard activation (Enter / Space)
- Must expose focus state
- Must include accessible label

Avatar MUST NOT internally manage menus, dropdowns, or popovers.

---

## 5. State Behavior Rules

**Supported states:**

- default
- hover
- pressed
- focus
- disabled
- loading (optional)

**State Constraints**

- States must not change content priority
- States must not remove fallback logic
- States must not change layout
- Disabled state prevents interaction
- Loading state may temporarily suppress image but must preserve size

---

## 6. Variant Logic

**Allowed Variants:**

- user
- organization
- system
- anonymous

**Variant determines:**

- Semantic meaning
- Token mapping (visual layer only)

**Variant MUST NOT:**

- Change fallback logic
- Change structure
- Introduce new content types

Anonymous variant is automatically selected when no identity data exists.

---

## 7. Accessibility Logic

### Image Mode

- Must include meaningful `alt`
- If decorative → `alt=""` allowed

### Initials Mode

- Must expose full name via `aria-label`
- Initials alone are insufficient

### Icon Mode

- Must include `aria-label` describing entity

### Interactive Mode

- Must be keyboard accessible
- Must have visible focus state
- Must support `aria-disabled`

Accessibility MUST persist across all fallback states.

---

## 8. Error Handling Logic

Avatar MUST handle:

- Broken image URL
- Delayed image load
- Missing props

**Broken image MUST:**

- Trigger fallback automatically
- Not produce console error in production
- Not visually collapse

---

## 9. Composition Rules

Avatar MAY be composed with:

- AvatarGroup
- AvatarWithBadge (separate component)
- Tooltip wrapper

Avatar MUST NOT:

- Contain notification badge internally
- Manage stacking logic (handled by AvatarGroup)
- Manage status indicators internally

---

## 10. Guardrails

**Forbidden behaviors:**

- Free-form size values
- Free-form variants
- Hardcoded conditional styling
- Embedding business logic inside component
- Managing async identity fetch
- Mutating props internally
- Adding undocumented states

Avatar logic must remain deterministic and finite.

---

**END OF LOGIC SCHEMA**

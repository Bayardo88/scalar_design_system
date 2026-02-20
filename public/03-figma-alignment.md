# Figma Alignment Rules
## Scalar Design System

This document defines how component rules MUST align with Figma component structure and properties.

---

## 1. One-to-One Mapping Rule

Every Figma component MUST map to:
- One component rule file
- One component implementation

No merged logic across components.

---

## 2. Figma Variants = Component Variants

Rules:
- Figma variant names MUST equal component variant values
- No transformation or aliasing

Example:
Figma Variant:


variant=primary


Component:


variant: "primary"


---

## 3. Figma Boolean Properties

Map directly to component props.

Example:


icon=true
disabled=true


Rules:
- Booleans MUST NOT change layout
- Booleans toggle visibility or state only

---

## 4. Figma States → Semantic Tokens

Figma interaction states MUST NOT introduce new styles.

Instead:
- Hover → semantic hover tokens
- Pressed → semantic pressed tokens
- Disabled → semantic disabled tokens

If a state exists in Figma but not in tokens → STOP.

---

## 5. Icon Handling via Figma MCP

Rules:
- Icons come ONLY from Figma MCP assets
- Use provided localhost URLs directly
- No placeholders
- No new icon libraries

Icons must be implemented using:


<span class="material-symbols-outlined">icon_name</span>


Icon names MUST match Figma labels.

---

## 6. Auto Layout → Spacing Tokens

Figma Auto Layout values MUST map to spacing tokens.

Example:


Auto Layout gap: 16px → spacing-m


If a value does not exist in tokens → STOP.

---

## 7. Typography Styles

Figma text styles MUST map to:
- semanticTypeDesktop1440
- semanticTypeDesktop1920

Never recreate typography manually.

---

## 8. Figma Is Visual, Tokens Are Authority

If there is a conflict:

Priority order:
1. design-tokens.scalar.ai.json
2. Component rules
3. Figma visuals

Figma does NOT override tokens.

---

## 9. Figma Component Naming Convention

Recommended:


Button / Primary
Button / Secondary
Input / Default


This improves AI inference accuracy.

---

END OF FIGMA ALIGNMENT RULES

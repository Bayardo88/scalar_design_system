# Scalar Design System v1.0 - Design Token Architecture

## Overview

This document provides a comprehensive overview of the design token architecture for the Scalar Design System v1.0, documenting the exact variable structure, naming conventions, values, and interconnections as defined in Figma.

The design system employs a **three-tier variable architecture**:
1. **Primitive Variables** - Foundational tokens with raw values
2. **Semantic Variables** - Context-specific tokens mapped to primitives
3. **Composite Variables** - Combined primitive tokens forming reusable styles

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    PRIMITIVE VARIABLES                       │
│  ┌──────────────────┐  ┌──────────────────┐                 │
│  │ Color Primitives │  │ Typography       │                 │
│  │ (Raw Hex Values) │  │ Primitives       │                 │
│  │                  │  │ (Raw Values)    │                 │
│  │ • Neutral        │  │ • Family         │                 │
│  │ • Brand          │  │ • Size           │                 │
│  │ • Purple         │  │ • Weight         │                 │
│  │ • Blue           │  │ • Line Height    │                 │
│  │ • Green          │  │ • Letter Spacing │                 │
│  │ • Orange         │  │                  │                 │
│  │ • Red            │  │                  │                 │
│  │ • Yellow         │  │                  │                 │
│  └──────────────────┘  └──────────────────┘                 │
│  ┌──────────────────┐  ┌──────────────────┐                 │
│  │ Spacing Tokens   │  │ Sizing Tokens    │                 │
│  │ (Component Spacing)│ │ (Figma Scale)   │                 │
│  │                  │  │                  │                 │
│  │ • Button Padding │  │ • Base Spacing   │                 │
│  │ • Icon Sizes     │  │ • Icon Sizing    │                 │
│  │ • Icon Gaps      │  │ • Button Sizing  │                 │
│  │ • Border Radius  │  │ • Input Sizing   │                 │
│  │                  │  │ • Complete Scale │                 │
│  └──────────────────┘  └──────────────────┘                 │
└─────────────────────────────────────────────────────────────┘
                        │              │
                        │              │
                        ▼              ▼
┌─────────────────────────────────────────────────────────────┐
│                  SEMANTIC VARIABLES                          │
│              (Mode-Dependent Mappings)                       │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │   Text   │  │Background│  │   Icon   │  │  Border  │   │
│  │  Colors  │  │  Colors  │  │  Colors  │  │  Colors  │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
│  ┌──────────┐  ┌──────────┐                                │
│  │ Outline │  │ Overlay  │                                │
│  │  Colors │  │  Colors  │                                │
│  └──────────┘  └──────────┘                                │
│                                                              │
│  Mode: Light ──────────────── Dark                          │
└─────────────────────────────────────────────────────────────┘
                        │
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│                  COMPOSITE VARIABLES                         │
│         (Multiple Primitive References)                     │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Typography Styles                                    │   │
│  │ • Breakpoint: Desktop Large                          │   │
│  │ • Category: Heading                                  │   │
│  │ • Sizes: XS, S, M, L, XL, 2XL, 3XL, 4XL, 5XL        │   │
│  │ • Weights: Regular, SemiBold, Bold                   │   │
│  │ • References: Family + Size + Weight + LineHeight + │   │
│  │              LetterSpacing                           │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

---

## 1. Variable Collections

### 1.1 Color Primitives Collection

**Collection Name:** `Color Primitives`  
**Type:** Primitive Variables  
**Purpose:** Foundational color values organized by color families

#### Structure

Color primitives follow the naming pattern: `[ColorFamily]/[Shade]`

#### Color Families

##### Neutral
- **Scale:** 100-900 (21 shades)
- **Values:**
  - `neutral/white`: `#ffffff` (White)
  - `neutral/100`: `#E5E5E5`
  - `neutral/200`: `#CCCCCC`
  - `neutral/300`: `#B3B3B3`
  - `neutral/400`: `#999999`
  - `neutral/500`: `#808080`
  - `neutral/600`: `#666666`
  - `neutral/700`: `#4C4C4C`
  - `neutral/800`: `#333333`
  - `neutral/900`: `#1A1A1A`
  - `neutral/black`: `#000000` (Black)


##### Brand
- **Scale:** 100-900 (9 shades)
- **Values:**
  - `brand/100`: `#CDE5FA`
  - `brand/200`: `#9ACBF6`
  - `brand/300`: `#68B1F1`
  - `brand/400`: `#3597ED`
  - `brand/500`: `#037DE8` (Primary brand color)
  - `brand/600`: `#0268C1`
  - `brand/700`: `#02539A`
  - `brand/800`: `#013E73`
  - `brand/900`: `#01294C`

  ##### Accent
- **Scale:** 100-900 (9 shades)
- **Values:**
  - `accent/100`: `#CEF3E6`
  - `accent/200`: `#9CE8CD`
  - `accent/300`: `#6BDCB3`
  - `accent/400`: `#39D19A`
  - `accent/500`: `#08C581` 
  - `accent/600`: `#07A46B`
  - `accent/700`: `#058355`
  - `accent/800`: `#046140`
  - `accent/900`: `#03402A`

##### Purple
- **Scale:** 100-900 (9 shades)
- **Values:**
  - `purple/100`: `#DFCFFF`
  - `purple/200`: `#C2A8FF`
  - `purple/300`: `#A77FFF`
  - `purple/400`: `#8A58FF`
  - `purple/500`: `#6E2FFF`
  - `purple/600`: `#5826D6`
  - `purple/700`: `#441DA3`
  - `purple/800`: `#2E1571`
  - `purple/900`: `#1A0B3E`

##### Blue
- **Scale:** 100-900 (9 shades)
- **Values:**
  - `blue/100`: `#CED3FD`
  - `blue/200`: `#9EA7FA`
  - `blue/300`: `#6D7BF8`
  - `blue/400`: `#3D4FF5`
  - `blue/500`: `#2A3EF4`
  - `blue/600`: `#0A1CC2`
  - `blue/700`: `#071592`
  - `blue/800`: `#050E61`
  - `blue/900`: `#020731`

##### Green
- **Scale:** 100-900 (9 shades)
- **Values:**
  - `green/100`: `#BBE8CE`
  - `green/200`: `#7ED6A5`
  - `green/300`: `#31C37B`
  - `green/400`: `#00B04F`
  - `green/500`: `#009C1C`
  - `green/600`: `#007E17`
  - `green/700`: `#006012`
  - `green/800`: `#00420F`
  - `green/900`: `#002409`

##### Orange
- **Scale:** 100-900 (9 shades)
- **Values:**
  - `orange/100`: `#FFE0C4`
  - `orange/200`: `#FFC790`
  - `orange/300`: `#FFAC5C`
  - `orange/400`: `#FF9211`
  - `orange/500`: `#FF7700`
  - `orange/600`: `#D26000`
  - `orange/700`: `#A04900`
  - `orange/800`: `#6F3300`
  - `orange/900`: `#3C1B00`

##### Red
- **Scale:** 100-900 (9 shades)
- **Values:**
  - `red/100`: `#FFC8C9`
  - `red/200`: `#FF999C`
  - `red/300`: `#FF686E`
  - `red/400`: `#FF2F3D`
  - `red/500`: `#FB0000`
  - `red/600`: `#CB0000`
  - `red/700`: `#9C0000`
  - `red/800`: `#6C0003`
  - `red/900`: `#3B0104`

##### Yellow
- **Scale:** 100-900 (9 shades)
- **Values:**
  - `yellow/100`: `#FFEECC`
  - `yellow/200`: `#FFDD99`
  - `yellow/300`: `#FFCC66`
  - `yellow/400`: `#FFBB33`
  - `yellow/500`: `#FFAA00`
  - `yellow/600`: `#CC8800`
  - `yellow/700`: `#996600`
  - `yellow/800`: `#664400`
  - `yellow/900`: `#332200`

**Total Color Primitives:** 8 families × average 9-21 shades = **~100 primitive color variables**

---

### 1.2 Typography Primitives Collection

**Collection Name:** `Typography Primitives`  
**Type:** Primitive Variables  
**Purpose:** Foundational typographic properties

#### Structure

Typography primitives follow the naming pattern: `[Property]/[Value]`

#### Font Family

- **Variable:** `Family/Inter`
- **Value:** `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

#### Font Sizes

- **Variable Pattern:** `Size/[Scale]`
- **Values:**
  - `Size/XS`: `10`
  - `Size/S`: `12`
  - `Size/M`: `14`
  - `Size/L`: `16`
  - `Size/XL`: `18`
  - `Size/2XL`: `20`
  - `Size/3XL`: `24`
  - `Size/4XL`: `28`
  - `Size/5XL`: `32`

#### Font Weights

- **Variable Pattern:** `Weight/[Weight]`
- **Values:**
  - `Weight/Regular`: `400`
  - `Weight/Medium`: `500`
  - `Weight/SemiBold`: `600`
  - `Weight/Bold`: `700`

**Note:** The `Weight/Light` (300) variable has been removed from the primitive collection but may still be referenced in composite variables.

#### Line Heights

- **Variable Pattern:** `Line Height/[Scale]`
- **Values:**
  - `Line Height/XS`: `14`
  - `Line Height/S`: `16`
  - `Line Height/M`: `20`
  - `Line Height/L`: `24`
  - `Line Height/XL`: `26`
  - `Line Height/2XL`: `28`
  - `Line Height/3XL`: `32`
  - `Line Height/4XL`: `36`
  - `Line Height/5XL`: `40`

#### Letter Spacing

- **Variable Pattern:** `Letter Spacing/[Value]`
- **Values:**
  - `Letter Spacing/None`: `0`
  - `Letter Spacing/Tight`: `-0.5`
  - `Letter Spacing/Wide`: `0.5`

**Total Typography Primitives:** 1 family + 9 sizes + 4 weights + 9 line heights + 3 letter spacing = **27 primitive typography variables**

---

### 1.3 Spacing Tokens Collection

**Collection Name:** `Spacing Tokens`  
**Type:** Primitive Variables  
**Purpose:** Component-specific spacing values for padding, margins, gaps, and border radius

#### Structure

Spacing tokens are organized by component type and size variant.

#### Button Padding

- **Small (`sm`):**
  - `horizontal`: `12px`
  - `vertical`: `4px`
- **Medium (`md`):**
  - `horizontal`: `16px`
  - `vertical`: `8px`
- **Large (`lg`):**
  - `horizontal`: `20px`
  - `vertical`: `12px`

#### Icon Spacing

- **Icon Sizes:**
  - `sm`: `16px` (16×16px for S size buttons)
  - `md`: `24px` (24×24px for M size buttons)
  - `lg`: `28px` (28×28px for L size buttons)
- **Icon Gaps (spacing between icon and text):**
  - `sm`: `6px`
  - `md`: `8px`
  - `lg`: `10px`

#### Border Radius

- **Small (`sm`):** `4px`
- **Medium (`md`):** `6px`
- **Large (`lg`):** `8px`

**Total Spacing Tokens:** Button padding (3 sizes × 2 dimensions) + Icon sizes (3) + Icon gaps (3) + Border radius (3) = **15 spacing tokens**

---

### 1.4 Sizing Tokens Collection

**Collection Name:** `Sizing Tokens`  
**Type:** Primitive Variables  
**Purpose:** Foundational sizing values extracted from the Figma Sizing scale

**Reference:** [Figma Sizing Scale](https://www.figma.com/design/anrnTIJKgu27zV224h7vON/Scalar_Design_System-v1.0?node-id=92-10&m=dev)

#### Structure

Sizing tokens provide a comprehensive scale from 2px to 120px, organized by category.

#### Base Spacing Scale

Used for padding, margins, gaps, and general spacing:

- `xs`: `4px` - Extra small spacing
- `sm`: `8px` - Small spacing
- `md`: `16px` - Medium spacing
- `lg`: `24px` - Large spacing
- `xl`: `32px` - Extra large spacing
- `2xl`: `40px` - 2X large spacing
- `3xl`: `48px` - 3X large spacing
- `4xl`: `56px` - 4X large spacing
- `5xl`: `64px` - 5X large spacing
- `6xl`: `72px` - 6X large spacing
- `7xl`: `80px` - 7X large spacing
- `8xl`: `88px` - 8X large spacing
- `9xl`: `96px` - 9X large spacing
- `10xl`: `104px` - 10X large spacing
- `11xl`: `112px` - 11X large spacing
- `12xl`: `120px` - 12X large spacing

#### Icon Sizing

Based on button size requirements from Figma:

- `sm`: `16px` (16×16px for S size buttons)
- `md`: `24px` (24×24px for M size buttons)
- `lg`: `28px` (28×28px for L size buttons)

#### Button Sizing

- **Heights:**
  - `sm`: `24px` - Small button height (from Figma: Size S)
  - `md`: `40px` - Medium button height (from Figma: Size M)
  - `lg`: `60px` - Large button height (from Figma: Size L)
- **Minimum Widths:**
  - `sm`: `64px` - Small button minimum width
  - `md`: `96px` - Medium button minimum width
  - `lg`: `128px` - Large button minimum width

#### Input Field Sizing

- `height`: `40px` - Standard input field height
- `minWidth`: `200px` - Minimum input field width

#### Complete Scale

Additional sizing values from Figma scale (2px to 120px) available for custom component sizing:

- `2`, `4`, `8`, `10`, `12`, `14`, `16`, `18`, `20`, `24`, `26`, `28`, `32`, `36`, `40`, `48`, `56`, `64`, `72`, `80`, `88`, `96`, `104`, `112`, `120`

**Total Sizing Tokens:** Base spacing (14) + Icon sizes (3) + Button heights (3) + Button min widths (3) + Input sizing (2) + Complete scale (25) = **50 sizing tokens**

---

### 1.5 Semantic Color Variables Collection

**Collection Name:** `Semantic Colors`  
**Type:** Semantic Variables (Mapped)  
**Purpose:** Context-specific color tokens that reference primitive colors with mode-dependent mappings

#### Structure

Semantic colors follow the naming pattern: `[Category]/[Purpose]`  
**Modes:** `Light` and `Dark`  
**Mapping:** Each semantic variable references a primitive color variable using the format: `{Color/[ColorFamily]/[Shade]}`

#### Categories

##### Text Colors

**Light Mode Mappings:**
- `Text/Primary`: `{Color/neutral/900}` → `#1A1A1A`
- `Text/Secondary`: `{Color/neutral/800}` → `#333333`
- `Text/Tertiary`: `{Color/neutral/600}` → `#666666`
- `Text/Disabled`: `{Color/neutral/300}` → `#B3B3B3`
- `Text/Link`: `{Color/blue/500}` → `#2A3EF4`
- `Text/Link Hover`: `{Color/blue/600}` → `#0A1CC2`
- `Text/Link Pressed`: `{Color/blue/700}` → `#071592`
- `Text/Warning`: `{Color/yellow/600}` → `#CC8800`
- `Text/Warning Hover`: `{Color/yellow/700}` → `#996600`
- `Text/Warning Pressed`: `{Color/yellow/800}` → `#664400`
- `Text/Positive`: `{Color/green/600}` → `#007E17`
- `Text/Positive Hover`: `{Color/green/700}` → `#006012`
- `Text/Positive Pressed`: `{Color/green/800}` → `#00420F`
- `Text/Negative`: `{Color/red/600}` → `#CB0000`
- `Text/Negative Hover`: `{Color/red/700}` → `#9C0000`
- `Text/Negative Pressed`: `{Color/red/800}` → `#6C0003`
- `Text/Readable`: `{Color/neutral/800}` → `#333333`
- `Text/Sourced`: `{Color/green/600}` → `#007E17`
- `Text/Editable`: `{Color/brand/500}` → `#037DE8`



**Dark Mode Mappings:**
- `Text/Primary`: `{Color/neutral/100}` → `#E5E5E5`
- `Text/Secondary`: `{Color/neutral/200}` → `#CCCCCC`
- `Text/Tertiary`: `{Color/neutral/400}` → `#999999`
- `Text/Disabled`: `{Color/neutral/700}` → `#4C4C4C`
- `Text/Link`: `{Color/blue/400}` → `#3D4FF5`
- `Text/Link Hover`: `{Color/blue/300}` → `#6D7BF8`
- `Text/Link Pressed`: `{Color/blue/200}` → `#9EA7FA`
- `Text/Warning`: `{Color/yellow/400}` → `#FFBB33`
- `Text/Warning Hover`: `{Color/yellow/300}` → `#FFCC66`
- `Text/Warning Pressed`: `{Color/yellow/200}` → `#FFDD99`
- `Text/Positive`: `{Color/green/400}` → `#00B04F`
- `Text/Positive Hover`: `{Color/green/300}` → `#31C37B`
- `Text/Positive Pressed`: `{Color/green/200}` → `#7ED6A5`
- `Text/Negative`: `{Color/red/400}` → `#FF2F3D`
- `Text/Negative Hover`: `{Color/red/300}` → `#FF686E`
- `Text/Negative Pressed`: `{Color/red/200}` → `#FF999C`
- `Text/Readable`: `{Color/neutral/200}` → `#CCCCCC`
- `Text/Sourced`: `{Color/green/400}` → `#00B04F`
- `Text/Editable`: `{Color/brand/400}` → `#3597ED`

**Total Text Variables:** 19 per mode = **38 total text semantic variables**

##### Background Colors

**Light Mode Mappings:**
- `Background/Brand`: `{Color/brand/500}` → `#037DE8`
- `Background/Hover`: `{Color/brand/600}` → `#0268C1`
- `Background/Pressed`: `{Color/brand/700}` → `#02539A`
- `Background/Disabled`: `{Color/neutral/300}` → `#B3B3B3`
- `Background/Positive`: `{Color/green/600}` → `#007E17`
- `Background/Positive Hover`: `{Color/green/700}` → `#006012`
- `Background/Positive Pressed`: `{Color/green/800}` → `#00420F`
- `Background/Warning`: `{Color/yellow/600}` → `#CC8800`
- `Background/Warning Hover`: `{Color/yellow/700}` → `#996600`
- `Background/Warning Pressed`: `{Color/yellow/800}` → `#664400`
- `Background/Negative`: `{Color/red/600}` → `#CB0000`
- `Background/Negative Hover`: `{Color/red/700}` → `#9C`
- `Background/Negative Pressed`: `{Color/red/800}` → `#6C000`
- `Background/Page`: `{Color/neutral/100}` → `#E5E5E5`

**Dark Mode Mappings:**
- `Background/Brand`: `{Color/brand/400}` → `#3597ED`
- `Background/Hover`: `{Color/brand/300}` → `#68B1F1`
- `Background/Pressed`: `{Color/brand/200}` → `#9ACBF6`
- `Background/Disabled`: `{Color/neutral/700}` → `#4C4C4C`
- `Background/Positive`: `{Color/green/400}` → `#00B04F`
- `Background/Positive Hover`: `{Color/green/300}` → `#31C37B`
- `Background/Positive Pressed`: `{Color/green/200}` → `#7ED6A5`
- `Background/Warning`: `{Color/yellow/400}` → `#FFBB33`
- `Background/Warning Hover`: `{Color/yellow/300}` → `#FFCC66`
- `Background/Warning Pressed`: `{Color/yellow/200}` → `#FFDD9`
- `Background/Negative`: `{Color/red/400}` → `#FF2F3D`
- `Background/Negative Hover`: `{Color/red/300}` → `#FF686E`
- `Background/Negative Pressed`: `{Color/red/200}` → `#FF999C`
- `Background/Page`: `{Color/neutral/900}` → `#1A1A1A`


**Total Background Variables:** 14 per mode = **28 total background semantic variables**


##### Overlay Colors

**Light Mode Mappings:**
- `Overlay/30`: `{Color/neutral/black}` → (black with 30% opacity)
- `Overlay/50`: `{Color/neutral/black}` → (black with 50% opacity)
- `Overlay/70`: `{Color/neutral/black}` → (black with 70% opacity)

**Dark Mode Mappings:**
- `Overlay/30`: `{Color/neutral/white}` → (white with 30% opacity)
- `Overlay/50`: `{Color/neutral/white}` → (white with 50% opacity)
- `Overlay/70`: `{Color/neutral/white}` → (white with 70% opacity)

**Total Overlay Variables:** 3 per mode = **6 total overlay semantic variables**

**Total Semantic Color Variables:** ~72 variables (36 per mode × 2 modes)

---

### 1.6 Composite Typography Variables Collection

**Collection Name:** `Composite Typography`  
**Type:** Composite Variables (Mapped)  
**Purpose:** Typography styles combining multiple primitive typography properties

#### Structure

Composite typography follows the naming pattern: `[Breakpoint]/[Category]/[Scale]/[Weight]`

#### Breakpoint

- **Breakpoint:** `Desktop Large`

#### Category

- **Category:** `Heading`

#### Scales

- XS, S, M, L, XL, 2XL, 3XL, 4XL, 5XL

#### Weights

- Regular, SemiBold, Bold
- **Note:** Some composite variables reference `Weight/Light`, but this weight has been removed from primitives

#### Composite Structure

Each composite variable references multiple primitive variables:

**Example:** `Desktop Large/Heading/XS/Regular`

```json
{
  "family": "{typography.primitive.family.inter}",
  "size": "{typography.primitive.size.xs}",
  "weight": "{typography.primitive.weight.regular}",
  "lineHeight": "{typography.primitive.lineHeight.xs}",
  "letterSpacing": "{typography.primitive.letterSpacing.none}"
}
```

**Resolved Values:**
- `family`: `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- `size`: `10`
- `weight`: `400`
- `lineHeight`: `14`
- `letterSpacing`: `0`

#### Complete Composite Typography Matrix

| Size | Regular | SemiBold | Bold | 
|------|---------|----------|------|
| XS   | ✓       | ✓        | ✓    | 
| S    | ✓       | ✓        | ✓    | 
| M    | ✓       | ✓        | ✓    | 
| L    | ✓       | ✓        | ✓    | 
| XL   | ✓       | ✓        | ✓    | 
| 2XL  | ✓       | ✓        | ✓    | 
| 3XL  | ✓       | ✓        | ✓    | 
| 4XL  | ✓       | ✓        | ✓    | 
| 5XL  | ✓       | ✓        | ✓    | 


**Total Composite Typography Variables:** 9 sizes × 3 weights = **27 composite typography variables**

---

## 2. Collection Mapping and Connections

### 2.1 Mapping Mechanism

Collections are connected through **variable aliases** (mapped collections in Figma). Semantic and composite variables reference primitive variables using the reference format: `{collection.primitive.[path]}`

### 2.2 Reference Format

**Pattern:** `{Color/[ColorFamily]/[Shade]}` for color primitives

**Examples:**
- `{Color/neutral/100}` - References Neutral/100 color
- `{Color/brand/500}` - References Brand/500 color
- `{Color/neutral/500}` - References Neutral/500 color

### 2.3 Mapping Patterns

#### Pattern 1: Direct Primitive → Semantic Mapping

```
Primitive Variable → Semantic Variable
─────────────────────────────────────
Neutral/900 → Text/Primary (Light Mode)
Neutral/100 → Text/Primary (Dark Mode)
```

**Connection Type:** One-to-one mapping with mode-dependent resolution

#### Pattern 2: Primitive → Semantic with Opacity

```
Primitive Variable + Opacity Suffix → Semantic Variable
─────────────────────────────────────────────────────────
Neutral/100 + 50 → Overlay/50 Inverse (Light Mode)
Neutral/900 + 50 → Overlay/50 Inverse (Dark Mode)
```

**Connection Type:** One-to-one mapping with opacity modifier

#### Pattern 3: Multiple Primitives → Composite

```
Multiple Primitive Variables → Composite Variable
──────────────────────────────────────────────────
Family/Inter + Size/XS + Weight/Regular + 
Line Height/XS + Letter Spacing/None 
→ Desktop Large/Heading/XS/Regular
```

**Connection Type:** Many-to-one mapping combining multiple primitives

### 2.4 Mode-Dependent Mapping

The same semantic variable can map to different primitives based on the active mode:

**Example: Text/Primary**

| Mode | Semantic Variable | Primitive Reference | Resolved Value |
|------|------------------|---------------------|----------------|
| Light | `Text/Primary` | `{Color/neutral/900}` | `#1A1A1A` |
| Dark  | `Text/Primary` | `{Color/neutral/100}` | `#E5E5E5` |

**Key Characteristics:**
- Same semantic name, different primitive references
- Consistent semantic meaning across modes


**Pattern:**
- Base variable: Uses standard mapping

---

## 3. Naming Conventions

### 3.1 Primitive Variables

#### Color Primitives
- **Pattern:** `[ColorFamily]/[Shade]`
- **Examples:**
  - `neutral/100`
  - `brand/500`
  - `red/900`

#### Typography Primitives
- **Pattern:** `[Property]/[Value]`
- **Examples:**
  - `Family/Inter`
  - `Size/XS`
  - `Weight/Regular`
  - `Line Height/M`
  - `Letter Spacing/None`

#### Spacing Primitives
- **Pattern:** `[Component]/[Size]` or `[Component]/[Property]/[Size]`
- **Examples:**
  - `button.sm.horizontal` (12px)
  - `icon.size.md` (24px)
  - `icon.gap.lg` (10px)
  - `radius.md` (6px)

#### Sizing Primitives
- **Pattern:** `[Category]/[Size]` or `[Category]/[Property]/[Size]`
- **Examples:**
  - `spacing.md` (16px)
  - `spacing['2xl']` (40px)
  - `icon.sm` (16px)
  - `button.height.md` (40px)
  - `scale['28']` (28px)

### 3.2 Semantic Variables

- **Pattern:** `[Category]/[Purpose]`
- **Examples:**
  - `Text/Primary`
  - `Background/Accent Hover`
  - `Icon/Success`
  - `Border/Primary`
  - `Overlay/50 Inverse`

**CamelCase Convention:** Multi-word purposes use camelCase (e.g., `Primary Inverse`, `Link Hover`)

### 3.3 Composite Variables

- **Pattern:** `[Breakpoint]/[Category]/[Scale]/[Weight]`
- **Examples:**
  - `Desktop Large/Heading/XS/Regular`
  - `Desktop Large/Heading/M/Bold`

**Hierarchy:** Breakpoint → Category → Scale → Weight

---

## 4. Value Consistency

### 4.1 Color Value Format

- **Format:** Hexadecimal (`#RRGGBB`)
- **Examples:**
  - `#000000` (Black)
  - `#ffffff` (White)
  - `#037DE8` (Brand primary)

### 4.2 Typography Value Format

- **Sizes:** Integer (pixels)
- **Weights:** Integer (font-weight values: 400, 500, 600, 700)
- **Line Heights:** Integer (pixels)
- **Letter Spacing:** Number (pixels, can be negative)

### 4.3 Spacing and Sizing Value Format

- **Spacing Values:** Integer (pixels)
- **Sizing Values:** Integer (pixels)
- **Examples:**
  - Button padding: `12px`, `16px`, `20px` (horizontal), `4px`, `8px`, `12px` (vertical)
  - Icon sizes: `16px`, `24px`, `28px`
  - Border radius: `4px`, `6px`, `8px`
  - Base spacing scale: `4px` to `120px`
  - Button heights: `24px`, `40px`, `60px`
  - Button min widths: `64px`, `96px`, `128px`

### 4.4 Opacity Suffix Format

- **Format:** `{reference}[opacity]`
- **Examples:**
  - `{Color/neutral/900}50` (50% opacity)
  - `{Color/neutral/100}80` (80% opacity, hex 80 = 128/255 ≈ 50%)

**Note:** Opacity values are appended as hexadecimal digits representing 0-255 range

---

## 5. Collection Hierarchy Summary

### 5.1 Primitive Layer

**Collections:** 4
- Color Primitives (~89 variables)
- Typography Primitives (27 variables)
- Spacing Tokens (15 variables)
- Sizing Tokens (50 variables)

**Total Primitives:** ~181 variables

### 5.2 Semantic Layer

**Collections:** 1
- Semantic Colors (~72 variables across 2 modes)

**Total Semantics:** ~72 variables

### 5.3 Composite Layer

**Collections:** 1
- Composite Typography (26 variables)

**Total Composites:** 26 variables

### 5.4 Grand Total

**Total Design Tokens:** ~279 variables

---

## 6. Key Architectural Principles

### 6.1 Single Source of Truth

Primitive variables serve as the single source of truth. All semantic and composite variables reference primitives, ensuring consistency and enabling global updates.

### 6.2 Separation of Concerns

- **Primitives:** Raw values without semantic meaning
- **Semantics:** Context-specific tokens with meaning
- **Composites:** Reusable style combinations

### 6.3 Mode Independence

Semantic variables maintain consistent meaning across modes while resolving to different primitives, enabling automatic theme switching.

### 6.4 Cascading Updates

Changes to primitive variables automatically propagate to all referencing semantic and composite variables.

### 6.5 Reference Integrity

All references use a consistent format (`{collection.primitive.[path]}`) ensuring reliable resolution and preventing broken links.

---

## 7. Implementation Notes

### 7.1 Reference Resolution

When resolving a semantic variable:
1. Check active mode (Light/Dark)
2. Locate semantic variable in appropriate mode collection
3. Extract primitive reference
4. Resolve primitive reference to actual value
5. Apply any modifiers (opacity, etc.)

### 7.2 Opacity Handling

Opacity suffixes are handled as hexadecimal values:
- `80` (hex) = 128 (decimal) = ~50% opacity
- `20` (hex) = 32 (decimal) = ~12.5% opacity

### 7.3 Composite Resolution

When resolving a composite variable:
1. Locate composite variable by path
2. Extract all primitive references
3. Resolve each primitive reference independently
4. Combine into final style object

---

## 8. Summary

The Scalar Design System v1.0 design token architecture consists of:

- **3 Variable Tiers:** Primitives → Semantics → Composites
- **4 Primitive Collections:** Colors (~89) + Typography (27) + Spacing (15) + Sizing (50)
- **1 Semantic Collection:** Colors (~72 across 2 modes)
- **1 Composite Collection:** Typography (27)
- **2 Modes:** Light + Dark
- **~279 Total Variables**

The architecture enables:
- ✅ Consistent design values
- ✅ Automatic theme switching
- ✅ Global updates through primitives
- ✅ Type-safe token access
- ✅ Seamless Figma integration

All variables follow consistent naming conventions and reference patterns, ensuring reliable resolution and maintainability across the design system.


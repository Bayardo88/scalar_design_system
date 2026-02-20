# 📄 page-schema.md
# Page Layout Schema
## Scalar Design System

Source Implementation:
Pages compose components; no single file. Reference: globalai.md and component schemas.

---

Pages are compositional layers.

They must NOT introduce new visual primitives.

---

## 1. Page Structure

Page must follow:

```
<Layout>
  <PageHeader />
  <PageContent>
    <Section />
    <Section />
  </PageContent>
</Layout>
```

---

## 2. Spacing Rules

Vertical spacing:

- Use spacing-l between sections
- Use spacing-m inside sections

No arbitrary margin values.

---

## 3. Typography

Use only:

- Heading components
- Body components
- Token-defined typography

No inline font sizing.

---

## 4. Composition Rules

Pages may only use:

- Approved components (from /ai-sources)
- Approved layouts
- Token-based spacing wrappers

No ad hoc div wrappers with styles.

---

## 5. Interaction Rules

Pages must not:

- Introduce custom hover logic
- Introduce layout animations
- Override component states

---

## 6. Anti-Patterns

- ❌ Inline styling
- ❌ Hardcoded spacing
- ❌ Direct token usage in page
- ❌ Component mutation
- ❌ Non-schema components

---

END OF PAGE SCHEMA

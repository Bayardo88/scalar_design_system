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
| [Button Icon](./ButtonIcon.tsx) | [Scalar_Design_System-Components – button_icon](https://www.figma.com/design/Z4MtKOfkNEzhMYJzN1q3kR/Scalar_Design_System-Components?node-id=205-709&m=dev) |
| [Avatar](./Avatar.tsx) | [Scalar_Design_System-Components – Avatar](https://www.figma.com/design/Z4MtKOfkNEzhMYJzN1q3kR/Scalar_Design_System-Components?node-id=66-11868&m=dev) |
| [Sidebar Icon](./SidebarIcon.tsx) | [Scalar_Design_System-Components – Sidebar icon](https://www.figma.com/design/Z4MtKOfkNEzhMYJzN1q3kR/Scalar_Design_System-Components?node-id=1-49231&m=dev) |
| [Sidebar](./Sidebar.tsx) | [Scalar_Design_System-Components – Sidebar](https://www.figma.com/design/Z4MtKOfkNEzhMYJzN1q3kR/Scalar_Design_System-Components?node-id=66-11894&m=dev) |
| [Checkbox](./Checkbox.tsx) | [Scalar_Design_System-Components – Checkbox](https://www.figma.com/design/Z4MtKOfkNEzhMYJzN1q3kR/Scalar_Design_System-Components?node-id=73-12236&m=dev) |
| [Title Item Row](./TitleItemRow.tsx) | [Scalar_Design_System-Components – Title Item Row](https://www.figma.com/design/Z4MtKOfkNEzhMYJzN1q3kR/Scalar_Design_System-Components?node-id=229-2974&m=dev) |
| [Column Header](./ColumnHeader.tsx) | [Scalar_Design_System-Components – Column Header](https://www.figma.com/design/Z4MtKOfkNEzhMYJzN1q3kR/Scalar_Design_System-Components?node-id=224-3018&m=dev) |
| [Data Cell](./DataCell.tsx) | [Scalar_Design_System-Components – Data Cell](https://www.figma.com/design/Z4MtKOfkNEzhMYJzN1q3kR/Scalar_Design_System-Components?node-id=224-2954&m=dev) |
| [Content Cell](./ContentCell.tsx) | [Scalar_Design_System-Components – Content Cell](https://www.figma.com/design/Z4MtKOfkNEzhMYJzN1q3kR/Scalar_Design_System-Components?node-id=224-3070&m=dev) |
| [Chip](./Chip.tsx) | [Scalar_Design_System-Components – Chip](https://www.figma.com/design/Z4MtKOfkNEzhMYJzN1q3kR/Scalar_Design_System-Components?node-id=70-12104&m=dev) |
| [Modal Status Cell](./ModalStatusCell.tsx) | [Scalar_Design_System-Components – Modal Status Cell](https://www.figma.com/design/Z4MtKOfkNEzhMYJzN1q3kR/Scalar_Design_System-Components?node-id=224-3088&m=dev) (uses Chip) |
| [Evaluation Status Cell](./EvaluationStatusCell.tsx) | [Scalar_Design_System-Components – Evaluation Status Cell](https://www.figma.com/design/Z4MtKOfkNEzhMYJzN1q3kR/Scalar_Design_System-Components?node-id=224-3101&m=dev) (uses Chip) |
| [Table](./Table.tsx) | [Scalar_Design_System-Components – Table](https://www.figma.com/design/Z4MtKOfkNEzhMYJzN1q3kR/Scalar_Design_System-Components?node-id=225-3142&m=dev) (ColumnHeader, DataCell, TitleItemRow) |

## Usage

```tsx
import { Button, ButtonIcon, Avatar, SidebarIcon, Sidebar, Checkbox, TitleItemRow, ColumnHeader, DataCell, ContentCell, Chip, ModalStatusCell, EvaluationStatusCell, Table } from './ai-sources';

<Button variant="brand" size="m">Label</Button>
<Button variant="positive" size="l" iconRight="arrow_forward">Continue</Button>
<Button variant="negative" size="s" disabled>Cancel</Button>

<ButtonIcon
  variant="brand"
  size="m"
  style="outlined"
  placeholder="Choose…"
  options={[{ value: 'a', label: 'Option A' }, { value: 'b', label: 'Option B' }]}
  value={value}
  onChange={setValue}
/>

<Avatar src={user.photo} name={user.name} size="m" alt={user.name} />
<Avatar name="Jane Doe" size="l" bordered />
<Avatar name="JD" size="xs" />

{/* Sidebar: uses SidebarIcon inside for each item; change icons via items */}
<Sidebar
  items={[
    { id: 'home', icon: 'home', label: 'Home', active: true, onClick: () => navigate('/') },
    { id: 'dashboard', icon: 'dashboard', label: 'Dashboard', onClick: () => navigate('/dashboard') },
    { id: 'settings', icon: 'settings', label: 'Settings', onClick: () => openSettings() },
  ]}
  iconSize="m"
/>

<Checkbox label="Accept terms" checked={accepted} onChange={setAccepted} />
<Checkbox label="Optional" defaultChecked size="s" />
<Checkbox label="Some selected" indeterminate disabled />

<TitleItemRow title="Name" value="Jane Doe" size="m" />
<TitleItemRow title="Email" subtitle="We'll never share it" value="jane@example.com" onClick={() => {}} />

<ColumnHeader size="m">Name</ColumnHeader>
<ColumnHeader sort="asc" onSortClick={() => setSort('asc')}>Date</ColumnHeader>
<ColumnHeader align="right" sort="desc" onSortClick={() => setSort('desc')}>Amount</ColumnHeader>

<DataCell size="m">Jane Doe</DataCell>
<DataCell size="m" variant="secondary">Jan 15, 2025</DataCell>
<DataCell size="m" align="right">$99.00</DataCell>

<ContentCell size="m">Multi-line or rich content; wraps by default.</ContentCell>
<ContentCell size="m" variant="secondary" truncate>Single line with ellipsis when long</ContentCell>
<ContentCell size="m" avatar={{ name: 'Jane Doe', src: user.photo }} />
<ContentCell size="m" avatar={{ name: 'John Smith' }} />

<Chip variant="success" icon="check_circle">Completed</Chip>
<Chip variant="error" onRemove={() => {}}>Dismissible</Chip>
<Chip variant="brand" style="outlined" size="s">Tag</Chip>

<ModalStatusCell status="success">Completed</ModalStatusCell>
<ModalStatusCell status="error">Failed</ModalStatusCell>
<ModalStatusCell status="warning" size="s" chipStyle="outlined">Pending</ModalStatusCell>
<ModalStatusCell status="info">In progress</ModalStatusCell>

<EvaluationStatusCell status="success">Passed</EvaluationStatusCell>
<EvaluationStatusCell status="error">Failed</EvaluationStatusCell>
<EvaluationStatusCell status="warning">Pending review</EvaluationStatusCell>
<EvaluationStatusCell status="info" chipStyle="outlined">In progress</EvaluationStatusCell>

{/* Table: Section 1 (Header), Section 2 (Table), Section 3 (Pagination); showHeader/showPagination control visibility */}
<Table
  showHeader={true}
  header={<TitleItemRow title="Users" value={`${rows.length} total`} size="m" />}
  columns={[
    { id: 'name', label: 'Name', sort: sortBy === 'name' ? sortDir : undefined, onSortClick: () => setSort('name') },
    { id: 'date', label: 'Date', align: 'right' },
    { id: 'amount', label: 'Amount', align: 'right' },
  ]}
  rows={[
    { name: 'Jane Doe', date: 'Jan 15, 2025', amount: '$99.00' },
    { name: 'John Smith', date: 'Jan 14, 2025', amount: '$120.00' },
  ]}
  showPagination={true}
  pagination={<div>Page 1 of 3</div>}
  size="m"
/>
```

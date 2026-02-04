# Test Pages

This directory contains full-page test implementations that demonstrate how to use the design system components together to create complete application pages.

## Viewing Test Pages

All test pages are available in Storybook under the "Test Pages" section.

### To view in your browser:

1. **Start Storybook** (if not already running):
   ```bash
   npm run storybook
   ```

2. **Navigate to the page**:
   - Open Storybook in your browser (usually at `http://localhost:6006`)
   - In the sidebar, expand "Test Pages"
   - Click on "Funds Page" to view the full page recreation

## Available Pages

### Funds Page
A complete recreation of the Figma design showing a data table with funds information. This page demonstrates:
- Sidebar navigation
- Header with company name, breadcrumbs, and controls
- Navigation tabs
- Data table with column headers and rows
- All components using design tokens for styling

## Adding New Test Pages

1. Create a new component file in this directory (e.g., `MyPage.tsx`)
2. Create a corresponding Storybook story file (e.g., `MyPage.stories.tsx`)
3. Use the `layout: 'fullscreen'` parameter in the story meta to ensure the page displays correctly
4. Import and use design system components from `../components`
5. Use design tokens from `../tokens` for all styling

Example:

```tsx
// MyPage.tsx
import React from 'react';
import { getColorPrimitive, typographyPrimitives } from '../tokens';
import { Button } from '../components/Button';

export const MyPage: React.FC = () => {
  return (
    <div style={{ padding: '24px' }}>
      <h1>My Test Page</h1>
      <Button>Click me</Button>
    </div>
  );
};
```

```tsx
// MyPage.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MyPage } from './MyPage';

const meta: Meta<typeof MyPage> = {
  title: 'Test Pages/My Page',
  component: MyPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof MyPage>;
export const Default: Story = {};
```

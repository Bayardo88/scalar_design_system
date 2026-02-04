import type { Meta, StoryObj } from '@storybook/react';
import { ColumnHeader } from './ColumnHeader';

const meta: Meta<typeof ColumnHeader> = {
  title: 'Components/Column Header',
  component: ColumnHeader,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/1OL2YjVozJKsGPw73FHkmV/Table?node-id=29-1675&m=dev',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['Default', 'Selected', 'New Column'],
      description: 'Visual state of the header',
    },
    label: {
      control: 'text',
      description: 'Header label text',
    },
    icon: {
      control: 'boolean',
      description: 'Show calendar icon next to label',
    },
    leading: {
      control: 'boolean',
      description: 'Show leading action badge',
    },
    leadingLabel: {
      control: 'text',
      description: 'Text for leading action badge',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ColumnHeader>;

/**
 * Default state - white background with gray border
 * 
 * Shows the column header in its default unselected state.
 */
export const Default: Story = {
  args: {
    state: 'Default',
    label: 'Column Header',
    icon: false,
    leading: false,
  },
};

/**
 * Selected state - light blue background with blue border and top marker
 * 
 * Shows the column header when it's selected or active.
 */
export const Selected: Story = {
  args: {
    state: 'Selected',
    label: 'Column Header',
    icon: false,
    leading: false,
  },
};

/**
 * New Column state - light gray background
 * 
 * Shows the column header for a new/empty column.
 */
export const NewColumn: Story = {
  args: {
    state: 'New Column',
    label: 'Column Header',
    icon: false,
    leading: false,
  },
};

/**
 * With icon
 * 
 * Shows the header with a calendar icon next to the label.
 */
export const WithIcon: Story = {
  args: {
    state: 'Default',
    label: 'Column Header',
    icon: true,
    leading: false,
  },
};

/**
 * With leading action badge
 * 
 * Shows the header with a leading action badge (e.g., "Mark all as Final").
 */
export const WithLeadingAction: Story = {
  args: {
    state: 'Default',
    label: 'Column Header',
    icon: false,
    leading: true,
    leadingLabel: 'Mark all as Final',
  },
};

/**
 * Selected with icon and leading action
 * 
 * Shows the selected state with both icon and leading action badge.
 */
export const SelectedWithFeatures: Story = {
  args: {
    state: 'Selected',
    label: 'Column Header',
    icon: true,
    leading: true,
    leadingLabel: 'Mark all as Final',
  },
};

/**
 * Custom label
 * 
 * Example with custom header text.
 */
export const CustomLabel: Story = {
  args: {
    state: 'Default',
    label: 'Revenue Analysis',
    icon: true,
    leading: false,
  },
};

/**
 * All states comparison
 * 
 * Shows default, selected, and new column states side by side for comparison.
 */
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Default State</h3>
        <ColumnHeader state="Default" label="Column Header" />
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Selected State</h3>
        <ColumnHeader state="Selected" label="Column Header" />
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>New Column State</h3>
        <ColumnHeader state="New Column" label="Column Header" />
      </div>
    </div>
  ),
};

/**
 * Multiple headers in a row
 * 
 * Shows how multiple column headers look together, simulating a table header row.
 */
export const MultipleHeaders: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <ColumnHeader state="Selected" label="Public Company" leading={true} leadingLabel="Mark all as Final" />
      <ColumnHeader state="Default" label="Private Company" icon={true} />
      <ColumnHeader state="Default" label="Financial Data" />
      <ColumnHeader state="New Column" label="New Column" />
    </div>
  ),
};

/**
 * Feature variations
 * 
 * Shows different combinations of optional features.
 */
export const FeatureVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>With Icon</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <ColumnHeader state="Default" label="Column Header" icon={true} />
          <ColumnHeader state="Selected" label="Column Header" icon={true} />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>With Leading Action</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <ColumnHeader state="Default" label="Column Header" leading={true} />
          <ColumnHeader state="Selected" label="Column Header" leading={true} />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>With Both</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <ColumnHeader state="Default" label="Column Header" icon={true} leading={true} />
          <ColumnHeader state="Selected" label="Column Header" icon={true} leading={true} />
        </div>
      </div>
    </div>
  ),
};

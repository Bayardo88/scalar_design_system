import type { Meta, StoryObj } from '@storybook/react';
import { DataCell } from './DataCell';

const meta: Meta<typeof DataCell> = {
  title: 'Components/Data Cell',
  component: DataCell,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/1OL2YjVozJKsGPw73FHkmV/Table?node-id=30-3136&m=dev',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['Selected', 'Editable', 'Default', 'error'],
      description: 'Visual state of the cell',
    },
    type: {
      control: 'select',
      options: ['Readable', 'Editable', 'Data', 'Empty'],
      description: 'Type of data in the cell',
    },
    text: {
      control: 'text',
      description: 'Text content to display',
    },
    hasAvatar: {
      control: 'boolean',
      description: 'Show avatar with initials',
    },
    hasIcon: {
      control: 'boolean',
      description: 'Show calendar icon',
    },
    hasLabel: {
      control: 'boolean',
      description: 'Show label chip',
    },
    hasTooltipMarker: {
      control: 'boolean',
      description: 'Show tooltip marker in top-right corner',
    },
    avatarText: {
      control: 'text',
      description: 'Text to display in avatar',
    },
    labelText: {
      control: 'text',
      description: 'Text to display in label chip',
    },
  },
};

export default meta;

type Story = StoryObj<typeof DataCell>;

/**
 * Selected + Readable state
 * 
 * Light blue background with blue border, gray text.
 */
export const SelectedReadable: Story = {
  args: {
    state: 'Selected',
    type: 'Readable',
    text: '11/11/30',
    hasIcon: true,
    hasLabel: false,
    hasTooltipMarker: true,
  },
};

/**
 * Default + Readable state
 * 
 * White background with gray border, gray text.
 */
export const DefaultReadable: Story = {
  args: {
    state: 'Default',
    type: 'Readable',
    text: '11/11/30',
    hasIcon: true,
    hasLabel: false,
    hasTooltipMarker: true,
  },
};

/**
 * Default + Editable state
 * 
 * White background with gray border, blue text indicating editable.
 */
export const DefaultEditable: Story = {
  args: {
    state: 'Default',
    type: 'Editable',
    text: '11/11/30',
    hasIcon: true,
    hasLabel: false,
    hasTooltipMarker: true,
  },
};

/**
 * Selected + Editable state
 * 
 * Light blue background with blue border, blue text.
 */
export const SelectedEditable: Story = {
  args: {
    state: 'Selected',
    type: 'Editable',
    text: '11/11/30',
    hasIcon: true,
    hasLabel: false,
    hasTooltipMarker: true,
  },
};

/**
 * Default + Data state
 * 
 * White background with gray border, green text indicating sourced data.
 */
export const DefaultData: Story = {
  args: {
    state: 'Default',
    type: 'Data',
    text: '11/11/30',
    hasIcon: true,
    hasLabel: false,
    hasTooltipMarker: true,
  },
};

/**
 * Selected + Data state
 * 
 * Light blue background with blue border, green text.
 */
export const SelectedData: Story = {
  args: {
    state: 'Selected',
    type: 'Data',
    text: '11/11/30',
    hasIcon: true,
    hasLabel: false,
    hasTooltipMarker: true,
  },
};

/**
 * Error + Readable state
 * 
 * Red background with red border, red text indicating error.
 */
export const ErrorReadable: Story = {
  args: {
    state: 'error',
    type: 'Readable',
    text: '11/11/30',
    hasIcon: true,
    hasLabel: false,
    hasTooltipMarker: true,
  },
};

/**
 * Default + Empty state
 * 
 * Light gray background with gray border, disabled appearance.
 */
export const DefaultEmpty: Story = {
  args: {
    state: 'Default',
    type: 'Empty',
    text: '11/11/30',
    hasIcon: true,
    hasLabel: false,
    hasTooltipMarker: true,
  },
};

/**
 * With avatar
 * 
 * Shows cell with avatar containing initials.
 */
export const WithAvatar: Story = {
  args: {
    state: 'Selected',
    type: 'Readable',
    text: '11/11/30',
    hasAvatar: true,
    avatarText: 'BV',
    hasIcon: true,
    hasLabel: false,
    hasTooltipMarker: true,
  },
};

/**
 * With label chip
 * 
 * Shows cell with label chip containing icon and text.
 */
export const WithLabel: Story = {
  args: {
    state: 'Selected',
    type: 'Readable',
    text: '11/11/30',
    hasIcon: true,
    hasLabel: true,
    labelText: 'Label',
    hasTooltipMarker: true,
  },
};

/**
 * With all features
 * 
 * Shows cell with avatar, label, icon, and tooltip marker.
 */
export const WithAllFeatures: Story = {
  args: {
    state: 'Selected',
    type: 'Readable',
    text: '11/11/30',
    hasAvatar: true,
    avatarText: 'BV',
    hasIcon: true,
    hasLabel: true,
    labelText: 'Label',
    hasTooltipMarker: true,
  },
};

/**
 * All states comparison
 * 
 * Shows all state and type combinations side by side.
 */
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Selected States</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <DataCell state="Selected" type="Readable" text="11/11/30" />
          <DataCell state="Selected" type="Editable" text="11/11/30" />
          <DataCell state="Selected" type="Data" text="11/11/30" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Default States</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <DataCell state="Default" type="Readable" text="11/11/30" />
          <DataCell state="Default" type="Editable" text="11/11/30" />
          <DataCell state="Default" type="Data" text="11/11/30" />
          <DataCell state="Default" type="Empty" text="11/11/30" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Error State</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <DataCell state="error" type="Readable" text="11/11/30" />
        </div>
      </div>
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
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>With Avatar</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <DataCell state="Selected" type="Readable" text="11/11/30" hasAvatar={true} avatarText="BV" />
          <DataCell state="Default" type="Readable" text="11/11/30" hasAvatar={true} avatarText="JD" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>With Label</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <DataCell state="Selected" type="Readable" text="11/11/30" hasLabel={true} labelText="Label" />
          <DataCell state="Default" type="Data" text="11/11/30" hasLabel={true} labelText="Source" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Without Icon</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <DataCell state="Selected" type="Readable" text="11/11/30" hasIcon={false} />
          <DataCell state="Default" type="Readable" text="11/11/30" hasIcon={false} />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Without Tooltip Marker</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <DataCell state="Selected" type="Readable" text="11/11/30" hasTooltipMarker={false} />
          <DataCell state="Default" type="Readable" text="11/11/30" hasTooltipMarker={false} />
        </div>
      </div>
    </div>
  ),
};

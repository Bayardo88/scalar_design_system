import type { Meta, StoryObj } from '@storybook/react';
import { LeadingAction } from './LeadingAction';

const meta: Meta<typeof LeadingAction> = {
  title: 'Components/Leading Action',
  component: LeadingAction,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/1OL2YjVozJKsGPw73FHkmV/Table?node-id=8-2026&m=dev',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Action label text',
    },
    projection: {
      control: 'boolean',
      description: 'Show/hide the action badge',
    },
  },
};

export default meta;

type Story = StoryObj<typeof LeadingAction>;

/**
 * Default action badge
 * 
 * Shows the standard "Mark all as Final" action badge with green background and document icon.
 */
export const Default: Story = {
  args: {
    label: 'Mark all as Final',
    projection: true,
  },
};

/**
 * Custom label
 * 
 * Example with custom action label.
 */
export const CustomLabel: Story = {
  args: {
    label: 'Approve All',
    projection: true,
  },
};

/**
 * Hidden
 * 
 * Shows the component when projection is false (returns null).
 */
export const Hidden: Story = {
  args: {
    label: 'Mark all as Final',
    projection: false,
  },
};

/**
 * Multiple action labels
 * 
 * Shows different action label variations.
 */
export const MultipleActions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Mark all as Final</h3>
        <LeadingAction label="Mark all as Final" />
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Approve All</h3>
        <LeadingAction label="Approve All" />
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Submit Changes</h3>
        <LeadingAction label="Submit Changes" />
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Review Items</h3>
        <LeadingAction label="Review Items" />
      </div>
    </div>
  ),
};

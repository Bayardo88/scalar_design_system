import type { Meta, StoryObj } from '@storybook/react';
import { LeadingProjection } from './LeadingProjection';

const meta: Meta<typeof LeadingProjection> = {
  title: 'Components/Leading Projection',
  component: LeadingProjection,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/1OL2YjVozJKsGPw73FHkmV/Table?node-id=1-1915&m=dev',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Text to display in the badge',
    },
    projection: {
      control: 'boolean',
      description: 'Show/hide the projection badge',
    },
  },
};

export default meta;

type Story = StoryObj<typeof LeadingProjection>;

/**
 * Default projection badge
 * 
 * Shows the standard "Projection" badge with blue background.
 */
export const Default: Story = {
  args: {
    label: 'Projection',
    projection: true,
  },
};

/**
 * Custom label
 * 
 * Example with custom label text.
 */
export const CustomLabel: Story = {
  args: {
    label: 'Forecast',
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
    label: 'Projection',
    projection: false,
  },
};

/**
 * Multiple labels
 * 
 * Shows different label variations.
 */
export const MultipleLabels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Projection</h3>
        <LeadingProjection label="Projection" />
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Forecast</h3>
        <LeadingProjection label="Forecast" />
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Estimate</h3>
        <LeadingProjection label="Estimate" />
      </div>
    </div>
  ),
};

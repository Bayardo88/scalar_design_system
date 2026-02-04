import type { Meta, StoryObj } from '@storybook/react';
import { LeadingHeaderSelector } from './LeadingHeaderSelector';

const meta: Meta<typeof LeadingHeaderSelector> = {
  title: 'Components/Leading Header Selector',
  component: LeadingHeaderSelector,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/1OL2YjVozJKsGPw73FHkmV/Table?node-id=1-1904&m=dev',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    currency: {
      control: 'text',
      description: 'Currency code to display (e.g., USD, EUR)',
    },
    values: {
      control: 'text',
      description: 'Value format to display (e.g., ($) Thousands)',
    },
    leading: {
      control: 'boolean',
      description: 'Show currency and amount dropdowns',
    },
    projection: {
      control: 'boolean',
      description: 'Show projection badge',
    },
  },
};

export default meta;

type Story = StoryObj<typeof LeadingHeaderSelector>;

/**
 * Default with currency and amount selectors
 * 
 * Shows both currency (USD) and amount format (($) Thousands) dropdowns.
 */
export const Default: Story = {
  args: {
    currency: 'USD',
    values: '($) Thousands',
    leading: true,
    projection: false,
  },
};

/**
 * With projection badge
 * 
 * Shows currency, amount, and projection badge.
 */
export const WithProjection: Story = {
  args: {
    currency: 'USD',
    values: '($) Thousands',
    leading: true,
    projection: true,
  },
};

/**
 * Only projection badge
 * 
 * Shows only the projection badge without currency/amount selectors.
 */
export const ProjectionOnly: Story = {
  args: {
    currency: 'USD',
    values: '($) Thousands',
    leading: false,
    projection: true,
  },
};

/**
 * Custom currency
 * 
 * Example with different currency code.
 */
export const CustomCurrency: Story = {
  args: {
    currency: 'EUR',
    values: '($) Thousands',
    leading: true,
    projection: false,
  },
};

/**
 * Custom values format
 * 
 * Example with different value format.
 */
export const CustomValues: Story = {
  args: {
    currency: 'USD',
    values: '(M) Millions',
    leading: true,
    projection: false,
  },
};

/**
 * All variations
 * 
 * Shows different combinations of currency, values, and projection.
 */
export const AllVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Default</h3>
        <LeadingHeaderSelector currency="USD" values="($) Thousands" leading={true} projection={false} />
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>With Projection</h3>
        <LeadingHeaderSelector currency="USD" values="($) Thousands" leading={true} projection={true} />
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Projection Only</h3>
        <LeadingHeaderSelector leading={false} projection={true} />
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Different Currency</h3>
        <LeadingHeaderSelector currency="EUR" values="(€) Thousands" leading={true} projection={false} />
      </div>
    </div>
  ),
};

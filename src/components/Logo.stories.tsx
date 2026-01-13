import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Z4MtKOfkNEzhMYJzN1q3kR/Scalar_Design_System-Components?node-id=114-2335&m=dev',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['Small', 'Mid', 'Large', 'XL'],
      description: 'Size variant of the logo - matches Figma design sizes',
      table: {
        defaultValue: { summary: 'Small' },
      },
    },
    alt: {
      control: 'text',
      description: 'Alt text for accessibility',
      table: {
        defaultValue: { summary: 'Scalar Logo' },
      },
    },
    className: {
      control: 'text',
      description: 'Optional custom class name',
    },
    color: {
      control: 'color',
      description: 'Custom color for the logo background circle (defaults to brand/500)',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Logo>;

/**
 * Default logo at Small size (16x16px) - matches Figma design
 */
export const Default: Story = {
  args: {
    size: 'Small',
  },
};

/**
 * Small logo (16x16px) - matches Figma design
 */
export const Small: Story = {
  args: {
    size: 'Small',
  },
};

/**
 * Mid logo (24x24px) - matches Figma design
 */
export const Mid: Story = {
  args: {
    size: 'Mid',
  },
};

/**
 * Large logo (32x32px) - matches Figma design
 */
export const Large: Story = {
  args: {
    size: 'Large',
  },
};

/**
 * XL logo (40x40px) - matches Figma design
 */
export const XL: Story = {
  args: {
    size: 'XL',
  },
};

/**
 * All size variants displayed together for comparison - matches Figma design
 */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center' }}>
        <Logo size="Small" />
        <p style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Small (16px)</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Logo size="Mid" />
        <p style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Mid (24px)</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Logo size="Large" />
        <p style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Large (32px)</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Logo size="XL" />
        <p style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>XL (40px)</p>
      </div>
    </div>
  ),
};

/**
 * Logo on dark background - matches Figma design presentation
 */
export const OnDarkBackground: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '24px',
        alignItems: 'center',
        padding: '32px',
        backgroundColor: '#1A1A1A',
        borderRadius: '8px',
        flexWrap: 'wrap',
      }}
    >
      <Logo size="Small" />
      <Logo size="Mid" />
      <Logo size="Large" />
      <Logo size="XL" />
    </div>
  ),
};

/**
 * Logo with custom background color
 */
export const CustomColor: Story = {
  args: {
    size: 'Mid',
    color: '#6E2FFF', // Purple from design tokens
  },
};

/**
 * Logo with custom className for additional styling
 */
export const WithCustomClass: Story = {
  args: {
    size: 'Mid',
    className: 'custom-logo-class',
  },
};


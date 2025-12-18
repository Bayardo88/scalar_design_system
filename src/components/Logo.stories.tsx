import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Z4MtKOfkNEzhMYJzN1q3kR/Scalar_Design_System-Components?node-id=70-12074&m=dev',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size variant of the logo',
      table: {
        defaultValue: { summary: 'md' },
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
  },
};

export default meta;

type Story = StoryObj<typeof Logo>;

/**
 * Default logo at medium size (42x42px) - matches Figma design
 */
export const Default: Story = {
  args: {
    size: 'md',
  },
};

/**
 * Extra small logo (24x24px)
 */
export const ExtraSmall: Story = {
  args: {
    size: 'xs',
  },
};

/**
 * Small logo (32x32px)
 */
export const Small: Story = {
  args: {
    size: 'sm',
  },
};

/**
 * Medium logo (42x42px) - Default size from Figma
 */
export const Medium: Story = {
  args: {
    size: 'md',
  },
};

/**
 * Large logo (56x56px)
 */
export const Large: Story = {
  args: {
    size: 'lg',
  },
};

/**
 * Extra large logo (72x72px)
 */
export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
};

/**
 * All size variants displayed together for comparison
 */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Logo size="xs" />
        <p style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>XS (24px)</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Logo size="sm" />
        <p style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>SM (32px)</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Logo size="md" />
        <p style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>MD (42px)</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Logo size="lg" />
        <p style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>LG (56px)</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Logo size="xl" />
        <p style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>XL (72px)</p>
      </div>
    </div>
  ),
};

/**
 * Logo on dark background
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
      }}
    >
      <Logo size="xs" />
      <Logo size="sm" />
      <Logo size="md" />
      <Logo size="lg" />
      <Logo size="xl" />
    </div>
  ),
};

/**
 * Logo with custom className for additional styling
 */
export const WithCustomClass: Story = {
  args: {
    size: 'md',
    className: 'custom-logo-class',
  },
};


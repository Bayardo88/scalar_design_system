import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Z4MtKOfkNEzhMYJzN1q3kR/Scalar_Design_System-Components?node-id=59-21923&m=dev'
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: 'select',
      options: ['main', 'positive', 'warning', 'negative'],
    },
    disabled: {
      control: 'boolean',
    },
    themeMode: {
      control: 'select',
      options: ['light', 'dark'],
    },
    iconLeft: {
      control: 'text',
      description: 'Material Design icon name (e.g., "Check", "KeyboardArrowDown", "ArrowForward")',
    },
    iconRight: {
      control: 'text',
      description: 'Material Design icon name (e.g., "Check", "KeyboardArrowDown", "ArrowForward")',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// Primary Variant - Main Type
export const PrimaryMainDefault: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    type: 'main',
    disabled: false,
  },
};

export const PrimaryMainWithIconLeft: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    type: 'main',
    disabled: false,
    iconLeft: 'Check',
  },
};

export const PrimaryMainWithIconRight: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    type: 'main',
    disabled: false,
    iconRight: 'KeyboardArrowDown',
  },
};

export const PrimaryMainWithIcons: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    type: 'main',
    disabled: false,
    iconLeft: 'Check',
    iconRight: 'KeyboardArrowDown',
  },
};

export const PrimaryMainHover: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    type: 'main',
    disabled: false,
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const PrimaryMainPressed: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    type: 'main',
    disabled: false,
  },
  parameters: {
    pseudo: {
      active: true,
    },
  },
};

export const PrimaryMainDisabled: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    type: 'main',
    disabled: true,
  },
};

// Primary Variant - Positive Type
export const PrimaryPositive: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    type: 'positive',
    disabled: false,
  },
};

export const PrimaryPositiveWithIcon: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    type: 'positive',
    disabled: false,
    iconLeft: 'Check',
  },
};

export const PrimaryPositiveHover: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    type: 'positive',
    disabled: false,
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const PrimaryPositivePressed: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    type: 'positive',
    disabled: false,
  },
  parameters: {
    pseudo: {
      active: true,
    },
  },
};

// Primary Variant - Warning Type
export const PrimaryWarning: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    type: 'warning',
    disabled: false,
  },
};

export const PrimaryWarningWithIcon: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    type: 'warning',
    disabled: false,
    iconLeft: 'Warning',
  },
};

export const PrimaryWarningHover: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    type: 'warning',
    disabled: false,
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const PrimaryWarningPressed: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    type: 'warning',
    disabled: false,
  },
  parameters: {
    pseudo: {
      active: true,
    },
  },
};

// Primary Variant - Negative Type (Danger)
export const PrimaryNegative: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    type: 'negative',
    disabled: false,
  },
};

export const PrimaryNegativeWithIcon: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    type: 'negative',
    disabled: false,
    iconLeft: 'Delete',
  },
};

export const PrimaryNegativeHover: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    type: 'negative',
    disabled: false,
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const PrimaryNegativePressed: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    type: 'negative',
    disabled: false,
  },
  parameters: {
    pseudo: {
      active: true,
    },
  },
};

// Secondary Variant - Main Type
export const SecondaryMain: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'md',
    type: 'main',
    disabled: false,
  },
};

export const SecondaryMainWithIcon: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'md',
    type: 'main',
    disabled: false,
    iconRight: 'ArrowForward',
  },
};

export const SecondaryMainHover: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'md',
    type: 'main',
    disabled: false,
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const SecondaryMainPressed: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'md',
    type: 'main',
    disabled: false,
  },
  parameters: {
    pseudo: {
      active: true,
    },
  },
};

export const SecondaryMainDisabled: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'md',
    type: 'main',
    disabled: true,
  },
};

// Secondary Variant - Positive Type
export const SecondaryPositive: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'md',
    type: 'positive',
    disabled: false,
  },
};

// Secondary Variant - Warning Type
export const SecondaryWarning: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'md',
    type: 'warning',
    disabled: false,
  },
};

// Secondary Variant - Negative Type
export const SecondaryNegative: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'md',
    type: 'negative',
    disabled: false,
  },
};

// Tertiary Variant - Main Type
export const TertiaryMain: Story = {
  args: {
    children: 'Button',
    variant: 'tertiary',
    size: 'md',
    type: 'main',
    disabled: false,
  },
};

export const TertiaryMainWithIcon: Story = {
  args: {
    children: 'Button',
    variant: 'tertiary',
    size: 'md',
    type: 'main',
    disabled: false,
    iconRight: 'ArrowForward',
  },
};

export const TertiaryMainHover: Story = {
  args: {
    children: 'Button',
    variant: 'tertiary',
    size: 'md',
    type: 'main',
    disabled: false,
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const TertiaryMainPressed: Story = {
  args: {
    children: 'Button',
    variant: 'tertiary',
    size: 'md',
    type: 'main',
    disabled: false,
  },
  parameters: {
    pseudo: {
      active: true,
    },
  },
};

export const TertiaryMainDisabled: Story = {
  args: {
    children: 'Button',
    variant: 'tertiary',
    size: 'md',
    type: 'main',
    disabled: true,
  },
};

// Size Variants
export const Small: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'sm',
    type: 'main',
    disabled: false,
  },
};

export const SmallWithIcon: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'sm',
    type: 'main',
    disabled: false,
    iconRight: 'KeyboardArrowDown',
  },
};

export const Medium: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    type: 'main',
    disabled: false,
  },
};

export const Large: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'lg',
    type: 'main',
    disabled: false,
  },
};

export const LargeWithIcon: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'lg',
    type: 'main',
    disabled: false,
    iconRight: 'KeyboardArrowDown',
  },
};

// All Sizes Comparison
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button variant="primary" size="sm" type="main">
        Small
      </Button>
      <Button variant="primary" size="md" type="main">
        Medium
      </Button>
      <Button variant="primary" size="lg" type="main">
        Large
      </Button>
    </div>
  ),
};

// All Sizes with Icons
export const AllSizesWithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button variant="primary" size="sm" type="main" iconRight="KeyboardArrowDown">
        Small
      </Button>
      <Button variant="primary" size="md" type="main" iconRight="KeyboardArrowDown">
        Medium
      </Button>
      <Button variant="primary" size="lg" type="main" iconRight="KeyboardArrowDown">
        Large
      </Button>
    </div>
  ),
};

// All Variants Comparison
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button variant="primary" size="md" type="main">
        Primary
      </Button>
      <Button variant="secondary" size="md" type="main">
        Secondary
      </Button>
      <Button variant="tertiary" size="md" type="main">
        Tertiary
      </Button>
    </div>
  ),
};

// All Variants with Icons
export const AllVariantsWithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button variant="primary" size="md" type="main" iconRight="KeyboardArrowDown">
        Primary
      </Button>
      <Button variant="secondary" size="md" type="main" iconRight="KeyboardArrowDown">
        Secondary
      </Button>
      <Button variant="tertiary" size="md" type="main" iconRight="KeyboardArrowDown">
        Tertiary
      </Button>
    </div>
  ),
};

// All Types Comparison
export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary" size="md" type="main">
        Main
      </Button>
      <Button variant="primary" size="md" type="positive">
        Positive
      </Button>
      <Button variant="primary" size="md" type="warning">
        Warning
      </Button>
      <Button variant="primary" size="md" type="negative">
        Negative
      </Button>
    </div>
  ),
};

// Icon Examples
export const IconExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Button variant="primary" size="md" type="main" iconLeft="Check">
          With Left Icon
        </Button>
        <Button variant="primary" size="md" type="main" iconRight="KeyboardArrowDown">
          With Right Icon
        </Button>
        <Button variant="primary" size="md" type="main" iconLeft="Check" iconRight="KeyboardArrowDown">
          With Both Icons
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Button variant="secondary" size="md" type="main" iconLeft="Check">
          Secondary with Icon
        </Button>
        <Button variant="tertiary" size="md" type="main" iconRight="ArrowForward">
          Tertiary with Icon
        </Button>
      </div>
    </div>
  ),
};

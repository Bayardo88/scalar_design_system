import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Z4MtKOfkNEzhMYJzN1q3kR/Scalar_Design_System-Components?node-id=66-11868&m=dev',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant of the avatar (1:1 aspect ratio)',
      table: {
        defaultValue: { summary: 'sm' },
        type: { summary: "'sm' | 'md' | 'lg'" },
      },
    },
    initials: {
      control: 'text',
      description: 'User initials to display (max 2 characters recommended)',
      table: {
        defaultValue: { summary: 'BV' },
      },
    },
    src: {
      control: 'text',
      description: 'Image URL for the avatar',
    },
    alt: {
      control: 'text',
      description: 'Alt text for the image',
      table: {
        defaultValue: { summary: 'User avatar' },
      },
    },
    themeMode: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Theme mode for colors',
      table: {
        defaultValue: { summary: 'light' },
      },
    },
    className: {
      control: 'text',
      description: 'Optional custom class name',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

// Sample image URL from Figma
const sampleImageUrl = 'https://www.figma.com/api/mcp/asset/25b08325-a871-453b-95a6-6187fbab7625';

/**
 * Default avatar with initials at small size (32x32px)
 */
export const Default: Story = {
  args: {
    initials: 'BV',
    size: 'sm',
  },
};

/**
 * Small avatar with initials (32x32px)
 */
export const SmallWithInitials: Story = {
  args: {
    initials: 'BV',
    size: 'sm',
  },
};

/**
 * Small avatar with image (32x32px)
 */
export const SmallWithImage: Story = {
  args: {
    src: sampleImageUrl,
    alt: 'User profile picture',
    size: 'sm',
  },
};

/**
 * Medium avatar with initials (48x48px)
 */
export const MediumWithInitials: Story = {
  args: {
    initials: 'BV',
    size: 'md',
  },
};

/**
 * Medium avatar with image (48x48px)
 */
export const MediumWithImage: Story = {
  args: {
    src: sampleImageUrl,
    alt: 'User profile picture',
    size: 'md',
  },
};

/**
 * Large avatar with initials (64x64px)
 */
export const LargeWithInitials: Story = {
  args: {
    initials: 'BV',
    size: 'lg',
  },
};

/**
 * Large avatar with image (64x64px)
 */
export const LargeWithImage: Story = {
  args: {
    src: sampleImageUrl,
    alt: 'User profile picture',
    size: 'lg',
  },
};

/**
 * All sizes with initials - comparison view
 */
export const AllSizesWithInitials: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Avatar initials="BV" size="sm" />
        <p style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>S (32px)</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar initials="BV" size="md" />
        <p style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>M (48px)</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar initials="BV" size="lg" />
        <p style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>L (64px)</p>
      </div>
    </div>
  ),
};

/**
 * All sizes with images - comparison view
 */
export const AllSizesWithImages: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Avatar src={sampleImageUrl} alt="User" size="sm" />
        <p style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>S (32px)</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar src={sampleImageUrl} alt="User" size="md" />
        <p style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>M (48px)</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar src={sampleImageUrl} alt="User" size="lg" />
        <p style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>L (64px)</p>
      </div>
    </div>
  ),
};

/**
 * Different initials examples
 */
export const DifferentInitials: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar initials="JD" size="md" />
      <Avatar initials="AB" size="md" />
      <Avatar initials="XY" size="md" />
      <Avatar initials="MK" size="md" />
      <Avatar initials="SC" size="md" />
    </div>
  ),
};

/**
 * Avatar on dark background
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
      <Avatar initials="BV" size="sm" themeMode="dark" />
      <Avatar initials="BV" size="md" themeMode="dark" />
      <Avatar initials="BV" size="lg" themeMode="dark" />
      <Avatar src={sampleImageUrl} alt="User" size="sm" themeMode="dark" />
      <Avatar src={sampleImageUrl} alt="User" size="md" themeMode="dark" />
      <Avatar src={sampleImageUrl} alt="User" size="lg" themeMode="dark" />
    </div>
  ),
};

/**
 * Mixed avatars - initials and images together
 */
export const MixedAvatars: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar initials="JD" size="md" />
      <Avatar src={sampleImageUrl} alt="User" size="md" />
      <Avatar initials="AB" size="md" />
      <Avatar src={sampleImageUrl} alt="User" size="md" />
      <Avatar initials="XY" size="md" />
    </div>
  ),
};

/**
 * Avatar group example - overlapping avatars
 */
export const AvatarGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Avatar initials="JD" size="md" />
      <div style={{ marginLeft: '-12px' }}>
        <Avatar src={sampleImageUrl} alt="User" size="md" />
      </div>
      <div style={{ marginLeft: '-12px' }}>
        <Avatar initials="AB" size="md" />
      </div>
      <div style={{ marginLeft: '-12px' }}>
        <Avatar initials="XY" size="md" />
      </div>
      <div style={{ marginLeft: '-12px' }}>
        <Avatar initials="+5" size="md" />
      </div>
    </div>
  ),
};

/**
 * Single character initial
 */
export const SingleCharacter: Story = {
  args: {
    initials: 'J',
    size: 'md',
  },
};

/**
 * With custom className
 */
export const WithCustomClass: Story = {
  args: {
    initials: 'BV',
    size: 'md',
    className: 'custom-avatar-class',
  },
};


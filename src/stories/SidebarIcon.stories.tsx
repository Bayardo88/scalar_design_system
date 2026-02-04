import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SidebarIcon } from '../components/SidebarIcon';

const meta: Meta<typeof SidebarIcon> = {
  title: 'Components/SidebarIcon',
  component: SidebarIcon,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Z4MtKOfkNEzhMYJzN1q3kR/Scalar_Design_System-Components?node-id=1-49231&m=dev',
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333333' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    style: {
      control: 'select',
      options: ['default', 'active'],
      description: 'Visual style variant',
      table: {
        defaultValue: { summary: 'default' },
        type: { summary: "'default' | 'active'" },
      },
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'pressed'],
      description: 'Interaction state',
      table: {
        defaultValue: { summary: 'default' },
        type: { summary: "'default' | 'hover' | 'pressed'" },
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
    icon: {
      control: false,
      description: 'Custom icon element to render',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the icon button',
      table: {
        defaultValue: { summary: 'Sidebar icon' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SidebarIcon>;

// Custom icon for stories
const ChartIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 12L6 8L9 11L14 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 4H14V8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SettingsIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M8 1V3M8 13V15M15 8H13M3 8H1M13 3L11.5 4.5M4.5 11.5L3 13M13 13L11.5 11.5M4.5 4.5L3 3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const HomeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 8L8 2L14 8V14H10V10H6V14H2V8Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Default sidebar icon with default style and state
 */
export const Default: Story = {
  args: {
    style: 'default',
    state: 'default',
    icon: <ChartIcon />,
  },
};

/**
 * Active sidebar icon - shows selected/active state with background
 */
export const Active: Story = {
  args: {
    style: 'active',
    state: 'default',
    icon: <ChartIcon />,
  },
};

/**
 * Default style with hover state
 */
export const DefaultHover: Story = {
  args: {
    style: 'default',
    state: 'hover',
    icon: <ChartIcon />,
  },
};

/**
 * Default style with pressed state
 */
export const DefaultPressed: Story = {
  args: {
    style: 'default',
    state: 'pressed',
    icon: <ChartIcon />,
  },
};

/**
 * All states comparison for default style
 */
export const AllDefaultStates: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center',
        padding: '16px',
        backgroundColor: '#333333',
        borderRadius: '8px',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <SidebarIcon style="default" state="default" icon={<ChartIcon />} />
        <p style={{ marginTop: '8px', fontSize: '10px', color: '#999' }}>Default</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <SidebarIcon style="default" state="hover" icon={<ChartIcon />} />
        <p style={{ marginTop: '8px', fontSize: '10px', color: '#999' }}>Hover</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <SidebarIcon style="default" state="pressed" icon={<ChartIcon />} />
        <p style={{ marginTop: '8px', fontSize: '10px', color: '#999' }}>Pressed</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <SidebarIcon style="active" state="default" icon={<ChartIcon />} />
        <p style={{ marginTop: '8px', fontSize: '10px', color: '#999' }}>Active</p>
      </div>
    </div>
  ),
};

/**
 * Sidebar navigation example with multiple icons
 */
export const SidebarNavigation: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        padding: '16px',
        backgroundColor: '#333333',
        borderRadius: '8px',
        width: 'fit-content',
      }}
    >
      <SidebarIcon style="active" state="default" icon={<HomeIcon />} ariaLabel="Home" />
      <SidebarIcon style="default" state="default" icon={<ChartIcon />} ariaLabel="Analytics" />
      <SidebarIcon style="default" state="default" icon={<SettingsIcon />} ariaLabel="Settings" />
    </div>
  ),
};

/**
 * Interactive sidebar icon - click to toggle active state
 */
export const Interactive: Story = {
  render: () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const icons = [
      { icon: <HomeIcon />, label: 'Home' },
      { icon: <ChartIcon />, label: 'Analytics' },
      { icon: <SettingsIcon />, label: 'Settings' },
    ];

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          padding: '16px',
          backgroundColor: '#333333',
          borderRadius: '8px',
          width: 'fit-content',
        }}
      >
        {icons.map((item, index) => (
          <SidebarIcon
            key={index}
            style={activeIndex === index ? 'active' : 'default'}
            state="default"
            icon={item.icon}
            ariaLabel={item.label}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    );
  },
};

/**
 * With different icons
 */
export const DifferentIcons: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        padding: '16px',
        backgroundColor: '#333333',
        borderRadius: '8px',
      }}
    >
      <SidebarIcon style="default" state="default" icon={<HomeIcon />} ariaLabel="Home" />
      <SidebarIcon style="default" state="default" icon={<ChartIcon />} ariaLabel="Analytics" />
      <SidebarIcon style="default" state="default" icon={<SettingsIcon />} ariaLabel="Settings" />
    </div>
  ),
};

/**
 * Using default built-in icon (no icon prop)
 */
export const WithDefaultIcon: Story = {
  args: {
    style: 'default',
    state: 'default',
  },
};

/**
 * Active state with default built-in icon
 */
export const ActiveWithDefaultIcon: Story = {
  args: {
    style: 'active',
    state: 'default',
  },
};

/**
 * On light background
 */
export const OnLightBackground: Story = {
  parameters: {
    backgrounds: { default: 'light' },
  },
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center',
        padding: '16px',
      }}
    >
      <SidebarIcon style="default" state="default" icon={<ChartIcon />} />
      <SidebarIcon style="active" state="default" icon={<ChartIcon />} />
    </div>
  ),
};


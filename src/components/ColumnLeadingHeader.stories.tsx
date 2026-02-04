import type { Meta, StoryObj } from '@storybook/react';
import { ColumnLeadingHeader } from './ColumnLeadingHeader';

const meta: Meta<typeof ColumnLeadingHeader> = {
  title: 'Components/Column Leading Header',
  component: ColumnLeadingHeader,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/1OL2YjVozJKsGPw73FHkmV/Table?node-id=23-1407&m=dev',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    property1: {
      control: 'select',
      options: ['Default', 'Selected'],
      description: 'Visual state of the header',
    },
    title: {
      control: 'text',
      description: 'Main title text',
    },
    subTitle: {
      control: 'text',
      description: 'Subtitle label text',
    },
    sub2: {
      control: 'text',
      description: 'Subtitle value text',
    },
    dropdown: {
      control: 'boolean',
      description: 'Show dropdown icon next to title',
    },
    leading: {
      control: false,
      description: 'Custom leading component (uses default if not provided)',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ColumnLeadingHeader>;

/**
 * Default state - white background with gray border
 * 
 * Shows the column header in its default unselected state.
 */
export const Default: Story = {
  args: {
    property1: 'Default',
    title: 'Public Company Ownership',
    subTitle: 'Fiscal Year End:',
    sub2: '12/31',
    dropdown: false,
  },
};

/**
 * Selected state - light blue background with blue border and left marker
 * 
 * Shows the column header when it's selected or active.
 */
export const Selected: Story = {
  args: {
    property1: 'Selected',
    title: 'Public Company Ownership',
    subTitle: 'Fiscal Year End:',
    sub2: '12/31',
    dropdown: false,
  },
};

/**
 * With dropdown icon
 * 
 * Shows the header with a dropdown icon next to the title.
 */
export const WithDropdown: Story = {
  args: {
    property1: 'Default',
    title: 'Public Company Ownership',
    subTitle: 'Fiscal Year End:',
    sub2: '12/31',
    dropdown: true,
  },
};

/**
 * Selected with dropdown
 * 
 * Shows the selected state with dropdown icon.
 */
export const SelectedWithDropdown: Story = {
  args: {
    property1: 'Selected',
    title: 'Public Company Ownership',
    subTitle: 'Fiscal Year End:',
    sub2: '12/31',
    dropdown: true,
  },
};

/**
 * Custom title and subtitle
 * 
 * Example with different content.
 */
export const CustomContent: Story = {
  args: {
    property1: 'Default',
    title: 'Revenue Analysis',
    subTitle: 'Period:',
    sub2: 'Q4 2024',
    dropdown: false,
  },
};

/**
 * Both states comparison
 * 
 * Shows default and selected states side by side for comparison.
 */
export const StatesComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Default State</h3>
        <ColumnLeadingHeader
          property1="Default"
          title="Public Company Ownership"
          subTitle="Fiscal Year End:"
          sub2="12/31"
        />
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Selected State</h3>
        <ColumnLeadingHeader
          property1="Selected"
          title="Public Company Ownership"
          subTitle="Fiscal Year End:"
          sub2="12/31"
        />
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
      <ColumnLeadingHeader
        property1="Selected"
        title="Public Company Ownership"
        subTitle="Fiscal Year End:"
        sub2="12/31"
      />
      <ColumnLeadingHeader
        property1="Default"
        title="Private Company Data"
        subTitle="Last Updated:"
        sub2="01/15/2025"
      />
      <ColumnLeadingHeader
        property1="Default"
        title="Financial Metrics"
        subTitle="Reporting Period:"
        sub2="Q4 2024"
      />
    </div>
  ),
};

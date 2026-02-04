import type { Meta, StoryObj } from '@storybook/react';
import { TitleItemRow } from './TitleItemRow';

const meta: Meta<typeof TitleItemRow> = {
  title: 'Components/Title Item Row',
  component: TitleItemRow,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/1OL2YjVozJKsGPw73FHkmV/Table?node-id=30-1360&m=dev',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['Default', 'Selected'],
      description: 'Visual state of the row',
    },
    style: {
      control: 'select',
      options: ['Default', 'Total', 'Data', 'Editable', 'Readable'],
      description: 'Style variant of the row',
    },
    titleRow: {
      control: 'text',
      description: 'Text content to display',
    },
  },
};

export default meta;

type Story = StoryObj<typeof TitleItemRow>;

/**
 * Default style + Default state
 * 
 * White background with gray border, dark blue text with light font weight.
 */
export const DefaultDefault: Story = {
  args: {
    state: 'Default',
    style: 'Default',
    titleRow: 'Title row',
  },
};

/**
 * Default style + Selected state
 * 
 * Light blue background with blue border and left marker, dark blue text.
 */
export const DefaultSelected: Story = {
  args: {
    state: 'Selected',
    style: 'Default',
    titleRow: 'Title row',
  },
};

/**
 * Total style + Default state
 * 
 * White background with gray border, dark blue text with bold font weight.
 */
export const TotalDefault: Story = {
  args: {
    state: 'Default',
    style: 'Total',
    titleRow: 'Title row',
  },
};

/**
 * Total style + Selected state
 * 
 * Light blue background with blue border and left marker, dark blue text with bold font weight.
 */
export const TotalSelected: Story = {
  args: {
    state: 'Selected',
    style: 'Total',
    titleRow: 'Title row',
  },
};

/**
 * Data style + Default state
 * 
 * White background with gray border, green text indicating sourced data.
 */
export const DataDefault: Story = {
  args: {
    state: 'Default',
    style: 'Data',
    titleRow: 'Title row',
  },
};

/**
 * Readable style + Default state
 * 
 * White background with gray border, gray text.
 */
export const ReadableDefault: Story = {
  args: {
    state: 'Default',
    style: 'Readable',
    titleRow: 'Title row',
  },
};

/**
 * Editable style + Default state
 * 
 * White background with gray border, blue text indicating editable content.
 */
export const EditableDefault: Story = {
  args: {
    state: 'Default',
    style: 'Editable',
    titleRow: 'Title row',
  },
};

/**
 * Custom title text
 * 
 * Example with custom content.
 */
export const CustomTitle: Story = {
  args: {
    state: 'Default',
    style: 'Default',
    titleRow: 'Revenue Analysis',
  },
};

/**
 * All style variations
 * 
 * Shows all style options in default state.
 */
export const AllStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Default Style</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <TitleItemRow state="Default" style="Default" titleRow="Title row" />
          <TitleItemRow state="Selected" style="Default" titleRow="Title row" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Total Style</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <TitleItemRow state="Default" style="Total" titleRow="Title row" />
          <TitleItemRow state="Selected" style="Total" titleRow="Title row" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Data Style</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <TitleItemRow state="Default" style="Data" titleRow="Title row" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Readable Style</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <TitleItemRow state="Default" style="Readable" titleRow="Title row" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Editable Style</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <TitleItemRow state="Default" style="Editable" titleRow="Title row" />
        </div>
      </div>
    </div>
  ),
};

/**
 * All combinations
 * 
 * Shows all state and style combinations side by side.
 */
export const AllCombinations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <TitleItemRow state="Default" style="Default" titleRow="Title row" />
      <TitleItemRow state="Default" style="Total" titleRow="Title row" />
      <TitleItemRow state="Selected" style="Default" titleRow="Title row" />
      <TitleItemRow state="Selected" style="Total" titleRow="Title row" />
      <TitleItemRow state="Default" style="Data" titleRow="Title row" />
      <TitleItemRow state="Default" style="Readable" titleRow="Title row" />
      <TitleItemRow state="Default" style="Editable" titleRow="Title row" />
    </div>
  ),
};

/**
 * Table row simulation
 * 
 * Shows how title rows look in a table context with different styles.
 */
export const TableRowSimulation: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', border: '1px solid #E5E5E5', borderRadius: '4px', overflow: 'hidden' }}>
      <TitleItemRow state="Default" style="Total" titleRow="Total Revenue" />
      <TitleItemRow state="Default" style="Data" titleRow="Q1 Revenue" />
      <TitleItemRow state="Selected" style="Readable" titleRow="Q2 Revenue" />
      <TitleItemRow state="Default" style="Editable" titleRow="Q3 Revenue" />
      <TitleItemRow state="Default" style="Readable" titleRow="Q4 Revenue" />
    </div>
  ),
};

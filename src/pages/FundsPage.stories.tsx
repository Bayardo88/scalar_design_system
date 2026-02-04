import type { Meta, StoryObj } from '@storybook/react';
import { FundsPage } from './FundsPage';

const meta: Meta<typeof FundsPage> = {
  title: 'Test Pages/Funds Page',
  component: FundsPage,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/1OL2YjVozJKsGPw73FHkmV/Table?node-id=1-1406&m=dev',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FundsPage>;

/**
 * Full Funds Page
 * 
 * A complete recreation of the Figma design showing a data table with funds information.
 * This page demonstrates how to use all the design system components together to create
 * a complete application page.
 * 
 * Features:
 * - Sidebar navigation
 * - Header with company name, breadcrumbs, and controls
 * - Navigation tabs
 * - Data table with column headers and rows
 * - All components use design tokens for styling
 */
export const Default: Story = {
  render: () => <FundsPage />,
};

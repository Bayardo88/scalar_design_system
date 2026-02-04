import type { Meta, StoryObj } from '@storybook/react';
import { CompaniesTable } from './CompaniesTable';

const meta: Meta<typeof CompaniesTable> = {
  title: 'Examples/Companies Table',
  component: CompaniesTable,
  tags: ['autodocs'],
  argTypes: {
    themeMode: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Theme mode for the table',
    },
  },
};

export default meta;

type Story = StoryObj<typeof CompaniesTable>;

// Sample company data
const sampleCompanies = [
  {
    id: '1',
    name: 'TechCorp Inc.',
    revenue: 2500000,
    growth: 15.5,
    employees: 450,
    status: 'positive' as const,
  },
  {
    id: '2',
    name: 'DataSystems Ltd.',
    revenue: 1800000,
    growth: 8.2,
    employees: 320,
    status: 'positive' as const,
  },
  {
    id: '3',
    name: 'CloudVentures',
    revenue: 3200000,
    growth: -2.1,
    employees: 580,
    status: 'warning' as const,
  },
  {
    id: '4',
    name: 'StartupHub',
    revenue: 850000,
    growth: 25.8,
    employees: 120,
    status: 'positive' as const,
  },
  {
    id: '5',
    name: 'Legacy Systems',
    revenue: 1200000,
    growth: -8.5,
    employees: 280,
    status: 'negative' as const,
  },
  {
    id: '6',
    name: 'Innovation Labs',
    revenue: 4500000,
    growth: 12.3,
    employees: 750,
    status: 'positive' as const,
  },
  {
    id: '7',
    name: 'Digital Solutions',
    revenue: 2100000,
    growth: 5.4,
    employees: 390,
    status: 'neutral' as const,
  },
  {
    id: '8',
    name: 'Future Tech',
    revenue: 3800000,
    growth: 18.7,
    employees: 620,
    status: 'positive' as const,
  },
];

/**
 * Default companies table with sample data
 * 
 * This example demonstrates the use of design tokens for:
 * - Colors (semantic colors for text, backgrounds, status indicators)
 * - Typography (sizes, weights, line heights, font family)
 * - Spacing (padding, margins, gaps)
 * - Sizing (component dimensions)
 * - Border radius
 */
export const Default: Story = {
  args: {
    companies: sampleCompanies,
    themeMode: 'light',
  },
};

/**
 * Companies table in dark mode
 * 
 * Shows how semantic colors adapt to dark theme
 */
export const DarkMode: Story = {
  args: {
    companies: sampleCompanies,
    themeMode: 'dark',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#1A1A1A',
        },
      ],
    },
  },
};

/**
 * Companies table with fewer companies
 */
export const SmallDataset: Story = {
  args: {
    companies: sampleCompanies.slice(0, 3),
    themeMode: 'light',
  },
};

/**
 * Companies table with all positive status
 */
export const AllPositive: Story = {
  args: {
    companies: sampleCompanies.map(company => ({
      ...company,
      status: 'positive' as const,
    })),
    themeMode: 'light',
  },
};

/**
 * Companies table with mixed statuses
 */
export const MixedStatuses: Story = {
  args: {
    companies: [
      {
        id: '1',
        name: 'High Performer',
        revenue: 5000000,
        growth: 30.5,
        employees: 1000,
        status: 'positive' as const,
      },
      {
        id: '2',
        name: 'Warning Company',
        revenue: 2000000,
        growth: -1.2,
        employees: 400,
        status: 'warning' as const,
      },
      {
        id: '3',
        name: 'Declining Business',
        revenue: 800000,
        growth: -15.8,
        employees: 150,
        status: 'negative' as const,
      },
      {
        id: '4',
        name: 'Stable Company',
        revenue: 1500000,
        growth: 0.5,
        employees: 300,
        status: 'neutral' as const,
      },
    ],
    themeMode: 'light',
  },
};

/**
 * Companies table with large revenue values
 */
export const LargeRevenue: Story = {
  args: {
    companies: [
      {
        id: '1',
        name: 'MegaCorp',
        revenue: 50000000,
        growth: 12.5,
        employees: 5000,
        status: 'positive' as const,
      },
      {
        id: '2',
        name: 'GlobalTech',
        revenue: 75000000,
        growth: 8.3,
        employees: 8000,
        status: 'positive' as const,
      },
      {
        id: '3',
        name: 'Enterprise Solutions',
        revenue: 120000000,
        growth: 15.2,
        employees: 12000,
        status: 'positive' as const,
      },
    ],
    themeMode: 'light',
  },
};

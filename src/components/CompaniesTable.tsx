import React from 'react';
import {
  getColorPrimitive,
  getSemanticColor,
  typographyPrimitives,
  spacing,
  sizing,
} from '../tokens';

interface CompanyData {
  id: string;
  name: string;
  revenue: number;
  growth: number;
  employees: number;
  status: 'positive' | 'warning' | 'negative' | 'neutral';
}

interface CompaniesTableProps {
  companies: CompanyData[];
  themeMode?: 'light' | 'dark';
  className?: string;
}

/**
 * Simple Bar Chart Component using design tokens
 */
const BarChart: React.FC<{ value: number; max: number; color: string; height?: number }> = ({
  value,
  max,
  color,
  height = 20,
}) => {
  const percentage = Math.min((value / max) * 100, 100);
  const borderRadius = spacing.radius.sm;

  return (
    <div
      style={{
        width: '100%',
        height: `${height}px`,
        backgroundColor: getSemanticColor('background', 'page', 'light'),
        borderRadius: `${borderRadius}px`,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          width: `${percentage}%`,
          height: '100%',
          backgroundColor: color,
          borderRadius: `${borderRadius}px`,
          transition: 'width 0.3s ease',
        }}
      />
    </div>
  );
};

/**
 * Companies Table Component
 * 
 * Displays a table of companies with revenue data and visual charts.
 * Uses design tokens for all styling (colors, typography, spacing, sizing).
 */
export const CompaniesTable: React.FC<CompaniesTableProps> = ({
  companies,
  themeMode = 'light',
  className = '',
}) => {
  // Get design tokens
  const textPrimary = getSemanticColor('text', 'primary', themeMode);
  const textSecondary = getSemanticColor('text', 'secondary', themeMode);
  const textTertiary = getSemanticColor('text', 'tertiary', themeMode);
  const bgPage = getSemanticColor('background', 'page', themeMode);
  const borderColor = getColorPrimitive('neutral', '200');
  
  // Typography tokens
  const fontFamily = typographyPrimitives.family.inter;
  const fontSizeM = typographyPrimitives.size.m;
  const fontSizeL = typographyPrimitives.size.l;
  const fontWeightSemiBold = typographyPrimitives.weight.semiBold;
  const fontWeightRegular = typographyPrimitives.weight.regular;
  const lineHeightM = typographyPrimitives.lineHeight.m;
  
  // Spacing tokens
  const paddingMd = spacing.button.md;
  const spacingMd = sizing.spacing.md;
  const spacingLg = sizing.spacing.lg;
  const radiusMd = spacing.radius.md;
  
  // Find max values for charts
  const maxRevenue = Math.max(...companies.map(c => c.revenue), 1);
  const maxEmployees = Math.max(...companies.map(c => c.employees), 1);

  // Get status color
  const getStatusColor = (status: CompanyData['status']): string => {
    switch (status) {
      case 'positive':
        return getSemanticColor('background', 'positive', themeMode);
      case 'warning':
        return getSemanticColor('background', 'warning', themeMode);
      case 'negative':
        return getSemanticColor('background', 'negative', themeMode);
      default:
        return getColorPrimitive('neutral', '500');
    }
  };

  const getStatusTextColor = (status: CompanyData['status']): string => {
    switch (status) {
      case 'positive':
        return getSemanticColor('text', 'positive', themeMode);
      case 'warning':
        return getSemanticColor('text', 'warning', themeMode);
      case 'negative':
        return getSemanticColor('text', 'negative', themeMode);
      default:
        return textSecondary;
    }
  };

  const tableStyles: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
    fontFamily,
    fontSize: `${fontSizeM}px`,
    lineHeight: `${lineHeightM}px`,
    color: textPrimary,
    backgroundColor: bgPage,
  };

  const headerCellStyles: React.CSSProperties = {
    padding: `${paddingMd.vertical}px ${paddingMd.horizontal}px`,
    textAlign: 'left',
    fontWeight: fontWeightSemiBold,
    fontSize: `${fontSizeM}px`,
    color: textSecondary,
    borderBottom: `2px solid ${borderColor}`,
    backgroundColor: getColorPrimitive('neutral', '100'),
  };

  const cellStyles: React.CSSProperties = {
    padding: `${paddingMd.vertical}px ${paddingMd.horizontal}px`,
    borderBottom: `1px solid ${borderColor}`,
    color: textPrimary,
  };

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number): string => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  const formatPercentage = (value: number): string => {
    const sign = value >= 0 ? '+' : '';
    return `${sign}${value.toFixed(1)}%`;
  };

  return (
    <div
      className={className}
      style={{
        padding: `${spacingLg}px`,
        backgroundColor: bgPage,
        borderRadius: `${radiusMd}px`,
        fontFamily,
      }}
    >
      <h2
        style={{
          fontFamily,
          fontSize: `${typographyPrimitives.size['2xl']}px`,
          fontWeight: typographyPrimitives.weight.bold,
          lineHeight: `${typographyPrimitives.lineHeight['2xl']}px`,
          color: textPrimary,
          marginBottom: `${spacingLg}px`,
          marginTop: 0,
        }}
      >
        Companies Overview
      </h2>
      
      <table style={tableStyles}>
        <thead>
          <tr>
            <th style={headerCellStyles}>Company</th>
            <th style={headerCellStyles}>Revenue</th>
            <th style={headerCellStyles}>Growth</th>
            <th style={headerCellStyles}>Employees</th>
            <th style={headerCellStyles}>Status</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => {
            const statusColor = getStatusColor(company.status);
            const statusTextColor = getStatusTextColor(company.status);
            
            return (
              <tr
                key={company.id}
                style={{
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = getColorPrimitive('neutral', '100');
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <td style={cellStyles}>
                  <div
                    style={{
                      fontWeight: fontWeightSemiBold,
                      fontSize: `${fontSizeL}px`,
                      color: textPrimary,
                    }}
                  >
                    {company.name}
                  </div>
                </td>
                <td style={cellStyles}>
                  <div style={{ marginBottom: `${spacingMd / 2}px` }}>
                    {formatCurrency(company.revenue)}
                  </div>
                  <BarChart
                    value={company.revenue}
                    max={maxRevenue}
                    color={getColorPrimitive('brand', '500')}
                    height={16}
                  />
                </td>
                <td style={cellStyles}>
                  <div
                    style={{
                      color: company.growth >= 0 
                        ? getSemanticColor('text', 'positive', themeMode)
                        : getSemanticColor('text', 'negative', themeMode),
                      fontWeight: fontWeightSemiBold,
                    }}
                  >
                    {formatPercentage(company.growth)}
                  </div>
                </td>
                <td style={cellStyles}>
                  <div style={{ marginBottom: `${spacingMd / 2}px` }}>
                    {formatNumber(company.employees)}
                  </div>
                  <BarChart
                    value={company.employees}
                    max={maxEmployees}
                    color={getColorPrimitive('accent', '500')}
                    height={16}
                  />
                </td>
                <td style={cellStyles}>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: `${spacingMd / 2}px ${spacingMd}px`,
                      backgroundColor: statusColor,
                      color: statusTextColor,
                      borderRadius: `${radiusMd}px`,
                      fontSize: `${typographyPrimitives.size.s}px`,
                      fontWeight: fontWeightSemiBold,
                      textTransform: 'capitalize',
                    }}
                  >
                    {company.status}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

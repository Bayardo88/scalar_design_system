import React from 'react';
import {
  getColorPrimitive,
  typographyPrimitives,
  spacing,
  sizing,
} from '../tokens';
import { ColumnLeadingHeader } from '../components/ColumnLeadingHeader';
import { ColumnHeader } from '../components/ColumnHeader';
import { TitleItemRow } from '../components/TitleItemRow';
import { DataCell } from '../components/DataCell';
import { Logo } from '../components/Logo';
import { LeadingHeaderSelector } from '../components/LeadingHeaderSelector';

/**
 * Funds Page Component
 * 
 * A full page recreation of the Figma design showing a data table with funds information.
 * This page demonstrates how to use all the design system components together to create
 * a complete application page.
 * 
 * Uses design tokens for all styling (colors, typography, spacing, sizing).
 */
export const FundsPage: React.FC = () => {
  // Design tokens
  const mSpacing = sizing.spacing.md;
  const lSpacing = sizing.spacing.lg;
  const xlSpacing = sizing.spacing.xl;
  const fontFamily = typographyPrimitives.family.inter;
  const fontSizeM = typographyPrimitives.size.m;
  const fontSizeL = typographyPrimitives.size.l;
  const lineHeightM = typographyPrimitives.lineHeight.m;
  const lineHeightL = typographyPrimitives.lineHeight.l;
  const fontWeightBold = typographyPrimitives.weight.bold;
  const fontWeightRegular = typographyPrimitives.weight.regular;
  const letterSpacing = typographyPrimitives.letterSpacing.none;

  // Page container
  const pageStyles: React.CSSProperties = {
    display: 'flex',
    width: '100%',
    minHeight: '100vh',
    backgroundColor: getColorPrimitive('neutral', '50'),
    fontFamily,
  };

  // Sidebar styles
  const sidebarStyles: React.CSSProperties = {
    width: '64px',
    height: '100vh',
    backgroundColor: getColorPrimitive('neutral', 'white'),
    borderRight: `1px solid ${getColorPrimitive('neutral', '200')}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: `${lSpacing}px`,
    gap: `${mSpacing}px`,
    position: 'sticky',
    top: 0,
    left: 0,
  };

  // Main content area
  const mainContentStyles: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: 'calc(100% - 64px)',
  };

  // Header styles
  const headerStyles: React.CSSProperties = {
    width: '100%',
    height: '96px',
    backgroundColor: getColorPrimitive('neutral', 'white'),
    borderBottom: `1px solid ${getColorPrimitive('neutral', '200')}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `0 ${lSpacing}px`,
    position: 'sticky',
    top: 0,
    zIndex: 10,
  };

  // Header left section
  const headerLeftStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: `${mSpacing}px`,
  };

  // Company name and breadcrumbs
  const companyInfoStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: `${sizing.spacing.xs}px`,
  };

  // Navigation tabs
  const navStyles: React.CSSProperties = {
    display: 'flex',
    gap: `${xlSpacing}px`,
    padding: `0 ${lSpacing}px`,
    borderBottom: `2px solid ${getColorPrimitive('brand', '500')}`,
    marginTop: `${sizing.spacing.xs}px`,
  };

  // Table container
  const tableContainerStyles: React.CSSProperties = {
    padding: `${lSpacing}px`,
    overflowX: 'auto',
  };

  // Table styles
  const tableStyles: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0,
  };

  // Table header row
  const headerRowStyles: React.CSSProperties = {
    display: 'flex',
    width: '1236px',
  };

  // Table body row
  const bodyRowStyles: React.CSSProperties = {
    display: 'flex',
    width: '1236px',
  };

  // Sample data for the table
  const tableData = [
    { title: 'Title row', cells: ['11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30'] },
    { title: 'Title row', cells: ['11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30'] },
    { title: 'Title row', cells: ['11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30'] },
    { title: 'Title row', cells: ['11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30'] },
    { title: 'Title row', cells: ['11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30'] },
    { title: 'Title row', cells: ['11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30'] },
    { title: 'Title row', cells: ['11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30'], selected: true },
    { title: 'Title row', cells: ['11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30'] },
    { title: 'Title row', cells: ['11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30'] },
    { title: 'Title row', cells: ['11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30'] },
    { title: 'Title row', cells: ['11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30', '11/11/30'] },
  ];

  return (
    <div style={pageStyles} data-name="Funds Page">
      {/* Sidebar */}
      <div style={sidebarStyles} data-name="Sidebar">
        <Logo size="Mid" />
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: getColorPrimitive('brand', '500'),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: getColorPrimitive('neutral', 'white'),
            fontSize: `${typographyPrimitives.size.s}px`,
            fontWeight: fontWeightBold,
            marginTop: 'auto',
            marginBottom: `${mSpacing}px`,
          }}
        >
          BV
        </div>
      </div>

      {/* Main Content */}
      <div style={mainContentStyles}>
        {/* Header */}
        <div style={headerStyles} data-name="Header">
          <div style={headerLeftStyles}>
            <Logo size="Mid" />
            <div style={companyInfoStyles}>
              <p
                style={{
                  fontFamily,
                  fontWeight: fontWeightBold,
                  fontSize: `${fontSizeL}px`,
                  lineHeight: `${lineHeightL}px`,
                  color: getColorPrimitive('brand', '800'),
                  margin: 0,
                }}
              >
                Vandelay Industries
              </p>
              <div style={{ display: 'flex', gap: `${sizing.spacing.xs}px`, alignItems: 'center' }}>
                <span
                  style={{
                    fontFamily,
                    fontSize: `${fontSizeM}px`,
                    lineHeight: `${lineHeightM}px`,
                    color: getColorPrimitive('neutral', '400'),
                  }}
                >
                  Scalar Valuation
                </span>
                <span style={{ color: getColorPrimitive('neutral', '300') }}>/</span>
                <span
                  style={{
                    fontFamily,
                    fontSize: `${fontSizeM}px`,
                    lineHeight: `${lineHeightM}px`,
                    color: getColorPrimitive('neutral', '400'),
                  }}
                >
                  breadcrumb01
                </span>
                <span style={{ color: getColorPrimitive('neutral', '300') }}>/</span>
                <span
                  style={{
                    fontFamily,
                    fontSize: `${fontSizeM}px`,
                    lineHeight: `${lineHeightM}px`,
                    color: getColorPrimitive('neutral', '400'),
                  }}
                >
                  breadcrumb02
                </span>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: `${mSpacing}px` }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <span
                style={{
                  fontFamily,
                  fontSize: `${fontSizeM}px`,
                  lineHeight: `${lineHeightM}px`,
                  color: getColorPrimitive('neutral', '400'),
                  marginBottom: `${sizing.spacing.xs}px`,
                }}
              >
                Measurement Date
              </span>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: `${sizing.spacing.xs}px`,
                  padding: `${sizing.spacing.xs}px ${mSpacing}px`,
                  border: `1px solid ${getColorPrimitive('neutral', '300')}`,
                  borderRadius: `${spacing.radius.sm}px`,
                  backgroundColor: getColorPrimitive('neutral', 'white'),
                }}
              >
                <span
                  style={{
                    fontFamily,
                    fontSize: `${fontSizeM}px`,
                    lineHeight: `${lineHeightM}px`,
                    color: getColorPrimitive('brand', '800'),
                  }}
                >
                  01/17/2024
                </span>
              </div>
            </div>
            <button
              style={{
                padding: `${sizing.spacing.xs}px ${mSpacing}px`,
                backgroundColor: getColorPrimitive('green', '400'),
                color: getColorPrimitive('neutral', 'white'),
                border: 'none',
                borderRadius: `${spacing.radius.sm}px`,
                fontFamily,
                fontSize: `${fontSizeM}px`,
                fontWeight: fontWeightBold,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: `${sizing.spacing.xs}px`,
              }}
            >
              Save
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div style={navStyles} data-name="Navigation">
          {['Summary', 'Financials', 'Cap Table', 'Valuation', 'Waterfall', 'Documents', 'Documents Generation Jobs'].map((tab) => (
            <button
              key={tab}
              style={{
                padding: `${mSpacing}px 0`,
                backgroundColor: 'transparent',
                border: 'none',
                fontFamily,
                fontSize: `${fontSizeM}px`,
                fontWeight: tab === 'Valuation' ? fontWeightBold : fontWeightRegular,
                color: tab === 'Valuation' ? getColorPrimitive('brand', '800') : getColorPrimitive('neutral', '400'),
                cursor: 'pointer',
                borderBottom: tab === 'Valuation' ? `2px solid ${getColorPrimitive('brand', '500')}` : '2px solid transparent',
                marginBottom: '-2px',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Table Container */}
        <div style={tableContainerStyles}>
          <div style={{ width: '1236px', margin: '0 auto' }}>
            {/* Table Header Row */}
            <div style={headerRowStyles}>
              <ColumnLeadingHeader
                title="Public Company Ownership"
                subTitle="Fiscal Year End:"
                sub2="12/31"
                property1="Default"
                leading={<LeadingHeaderSelector currency="USD" values="($) Thousands" leading={true} projection={true} />}
              />
              <ColumnHeader state="Selected" label="Column Header" />
              <ColumnHeader state="Default" label="Column Header" />
              <ColumnHeader state="Default" label="Column Header" />
              <ColumnHeader state="Default" label="Column Header" />
              <ColumnHeader state="Default" label="Column Header" />
              <ColumnHeader state="Default" label="Column Header" />
              <ColumnHeader state="New Column" label="Add new column +" />
            </div>

            {/* Table Body Rows */}
            {tableData.map((row, rowIndex) => (
              <div key={rowIndex} style={bodyRowStyles}>
                <TitleItemRow
                  titleRow={row.title}
                  state={row.selected ? 'Selected' : 'Default'}
                  style="Default"
                />
                {row.cells.map((cell, cellIndex) => (
                  <DataCell
                    key={cellIndex}
                    text={cell}
                    state={row.selected && cellIndex === 0 ? 'Selected' : 'Default'}
                    type={row.selected && cellIndex === 0 ? 'Editable' : 'Readable'}
                    hasIcon={true}
                    hasTooltipMarker={true}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

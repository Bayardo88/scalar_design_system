import React from 'react';
import {
  colorPrimitives,
  semanticColors,
  typographyPrimitives,
  compositeTypography,
  spacing,
  sizing,
  getColorPrimitive,
  getSemanticColor,
} from './index';

export const ColorPrimitivesDisplay: React.FC = () => {
  const colorFamilies = Object.keys(colorPrimitives) as Array<keyof typeof colorPrimitives>;
  
  return (
    <>
      {colorFamilies.map((family) => (
        <div key={family}>
          <h3 style={{ textTransform: 'capitalize', marginBottom: '16px' }}>{family} Colors</h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', 
            gap: '16px', 
            marginBottom: '32px' 
          }}>
            {Object.entries(colorPrimitives[family]).map(([shade, color]) => (
              <div key={shade} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div
                  style={{
                    width: '100%',
                    height: '80px',
                    backgroundColor: color as string,
                    border: shade === 'white' ? '1px solid #E5E5E5' : 'none',
                    borderRadius: '4px',
                  }}
                />
                <div style={{ fontSize: '12px', fontWeight: 600 }}>{shade}</div>
                <div style={{ fontSize: '11px', color: '#666', fontFamily: 'monospace' }}>{color as string}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export const SemanticColorsDisplay: React.FC<{ mode: 'light' | 'dark' }> = ({ mode }) => {
  const textColors = Object.keys(semanticColors[mode].text);
  const backgroundColors = Object.keys(semanticColors[mode].background);
  const isDark = mode === 'dark';
  
  return (
    <>
      <h3 style={{ textTransform: 'capitalize', marginBottom: '16px' }}>{mode} Mode</h3>
      
      <h4>Text Colors</h4>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', 
        gap: '16px', 
        marginBottom: '24px',
        backgroundColor: isDark ? '#1A1A1A' : 'transparent',
        padding: isDark ? '24px' : '0',
        borderRadius: isDark ? '8px' : '0',
      }}>
        {textColors.map((token) => {
          const color = getSemanticColor('text', token, mode);
          const needsDarkText = token.includes('primary') || token.includes('editable') || 
                                token.includes('readable') || token.includes('sourced');
          return (
            <div key={token} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div
                style={{
                  width: '100%',
                  height: '60px',
                  backgroundColor: color,
                  borderRadius: '4px',
                  border: color === '#ffffff' || color === '#000000' ? `1px solid ${isDark ? '#333' : '#E5E5E5'}` : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: needsDarkText ? (isDark ? '#000000' : '#ffffff') : (isDark ? '#ffffff' : '#000000'),
                  fontSize: '12px',
                  fontWeight: 600,
                }}
              >
                {token}
              </div>
              <div style={{ fontSize: '11px', color: isDark ? '#999' : '#666', fontFamily: 'monospace' }}>{color}</div>
            </div>
          );
        })}
      </div>

      <h4>Background Colors</h4>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', 
        gap: '16px', 
        marginBottom: '24px',
        backgroundColor: isDark ? '#1A1A1A' : 'transparent',
        padding: isDark ? '24px' : '0',
        borderRadius: isDark ? '8px' : '0',
      }}>
        {backgroundColors.map((token) => {
          const color = getSemanticColor('background', token, mode);
          const needsDarkText = token.includes('brand') || token.includes('positive') || token.includes('negative');
          return (
            <div key={token} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div
                style={{
                  width: '100%',
                  height: '60px',
                  backgroundColor: color,
                  borderRadius: '4px',
                  border: color === '#ffffff' || color === '#000000' ? `1px solid ${isDark ? '#333' : '#E5E5E5'}` : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: needsDarkText ? (isDark ? '#000000' : '#ffffff') : (isDark ? '#ffffff' : '#000000'),
                  fontSize: '12px',
                  fontWeight: 600,
                }}
              >
                {token}
              </div>
              <div style={{ fontSize: '11px', color: isDark ? '#999' : '#666', fontFamily: 'monospace' }}>{color}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export const TypographyPrimitivesDisplay: React.FC = () => {
  return (
    <>
      <h3>Font Family</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '32px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #E5E5E5' }}>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Token</th>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Value</th>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Preview</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(typographyPrimitives.family).map(([key, value]) => (
            <tr key={key} style={{ borderBottom: '1px solid #E5E5E5' }}>
              <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '12px' }}>{key}</td>
              <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '11px', color: '#666' }}>{value}</td>
              <td style={{ padding: '12px', fontFamily: value }}>The quick brown fox jumps over the lazy dog</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Font Sizes</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '32px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #E5E5E5' }}>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Token</th>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Size (px)</th>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Preview</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(typographyPrimitives.size).map(([key, value]) => (
            <tr key={key} style={{ borderBottom: '1px solid #E5E5E5' }}>
              <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '12px' }}>{key}</td>
              <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '11px', color: '#666' }}>{value}px</td>
              <td style={{ padding: '12px', fontSize: `${value}px` }}>The quick brown fox</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Font Weights</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '32px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #E5E5E5' }}>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Token</th>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Weight</th>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Preview</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(typographyPrimitives.weight).map(([key, value]) => (
            <tr key={key} style={{ borderBottom: '1px solid #E5E5E5' }}>
              <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '12px' }}>{key}</td>
              <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '11px', color: '#666' }}>{value}</td>
              <td style={{ padding: '12px', fontWeight: value, fontSize: '16px' }}>The quick brown fox</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Line Heights</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '32px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #E5E5E5' }}>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Token</th>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Line Height (px)</th>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Preview</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(typographyPrimitives.lineHeight).map(([key, value]) => (
            <tr key={key} style={{ borderBottom: '1px solid #E5E5E5' }}>
              <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '12px' }}>{key}</td>
              <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '11px', color: '#666' }}>{value}px</td>
              <td style={{ padding: '12px', lineHeight: `${value}px`, fontSize: '16px' }}>
                The quick brown fox jumps over the lazy dog
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Letter Spacing</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '32px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #E5E5E5' }}>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Token</th>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Letter Spacing (px)</th>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Preview</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(typographyPrimitives.letterSpacing).map(([key, value]) => (
            <tr key={key} style={{ borderBottom: '1px solid #E5E5E5' }}>
              <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '12px' }}>{key}</td>
              <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '11px', color: '#666' }}>{value}px</td>
              <td style={{ padding: '12px', letterSpacing: `${value}px`, fontSize: '16px' }}>The quick brown fox</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export const CompositeTypographyDisplay: React.FC = () => {
  return (
    <>
      {Object.entries(compositeTypography.desktopLarge.heading).map(([scale, weights]) => {
        const size = typographyPrimitives.size[scale as keyof typeof typographyPrimitives.size];
        const lineHeight = typographyPrimitives.lineHeight[scale as keyof typeof typographyPrimitives.lineHeight];
        
        return (
          <div key={scale} style={{ marginBottom: '40px' }}>
            <h3>Scale: {scale.toUpperCase()}</h3>
            <div style={{ display: 'grid', gap: '16px' }}>
              {Object.entries(weights).map(([weight, style]) => {
                const fontWeight = typographyPrimitives.weight[weight as keyof typeof typographyPrimitives.weight];
                return (
                  <div
                    key={weight}
                    style={{
                      padding: '16px',
                      border: '1px solid #E5E5E5',
                      borderRadius: '4px',
                      backgroundColor: '#FAFAFA',
                    }}
                  >
                    <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666', fontFamily: 'monospace' }}>
                      {scale} / {weight}
                    </div>
                    <div
                      style={{
                        fontFamily: typographyPrimitives.family.inter,
                        fontSize: `${size}px`,
                        lineHeight: `${lineHeight}px`,
                        fontWeight: fontWeight,
                        letterSpacing: '0px',
                      }}
                    >
                      The quick brown fox jumps over the lazy dog
                    </div>
                    <div style={{ marginTop: '8px', fontSize: '11px', color: '#999' }}>
                      Size: {size}px | Line Height: {lineHeight}px | Weight: {fontWeight} | Family: Inter
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export const SpacingTokensDisplay: React.FC = () => {
  return (
    <>
      <h3>Button Padding</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '32px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #E5E5E5' }}>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Size</th>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Horizontal (px)</th>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Vertical (px)</th>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Visual</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(spacing.button).map(([size, values]) => (
            <tr key={size} style={{ borderBottom: '1px solid #E5E5E5' }}>
              <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '12px' }}>{size}</td>
              <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '11px', color: '#666' }}>{values.horizontal}px</td>
              <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '11px', color: '#666' }}>{values.vertical}px</td>
              <td style={{ padding: '12px' }}>
                <div
                  style={{
                    display: 'inline-block',
                    padding: `${values.vertical}px ${values.horizontal}px`,
                    backgroundColor: '#037DE8',
                    color: 'white',
                    borderRadius: '4px',
                    fontSize: '12px',
                  }}
                >
                  Button
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Icon Sizes</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '24px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #E5E5E5' }}>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Size</th>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Dimensions (px)</th>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Visual</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(spacing.icon.size).map(([size, value]) => (
            <tr key={size} style={{ borderBottom: '1px solid #E5E5E5' }}>
              <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '12px' }}>{size}</td>
              <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '11px', color: '#666' }}>{value}×{value}px</td>
              <td style={{ padding: '12px' }}>
                <div
                  style={{
                    width: `${value}px`,
                    height: `${value}px`,
                    backgroundColor: '#037DE8',
                    borderRadius: '2px',
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Icon Gaps</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '24px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #E5E5E5' }}>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Size</th>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Gap (px)</th>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Visual</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(spacing.icon.gap).map(([size, value]) => (
            <tr key={size} style={{ borderBottom: '1px solid #E5E5E5' }}>
              <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '12px' }}>{size}</td>
              <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '11px', color: '#666' }}>{value}px</td>
              <td style={{ padding: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: `${value}px` }}>
                  <div style={{ width: '16px', height: '16px', backgroundColor: '#037DE8', borderRadius: '2px' }} />
                  <div style={{ width: '16px', height: '16px', backgroundColor: '#037DE8', borderRadius: '2px' }} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Border Radius</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '32px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #E5E5E5' }}>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Size</th>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Radius (px)</th>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Visual</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(spacing.radius).map(([size, value]) => (
            <tr key={size} style={{ borderBottom: '1px solid #E5E5E5' }}>
              <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '12px' }}>{size}</td>
              <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '11px', color: '#666' }}>{value}px</td>
              <td style={{ padding: '12px' }}>
                <div
                  style={{
                    width: '80px',
                    height: '40px',
                    backgroundColor: '#037DE8',
                    borderRadius: `${value}px`,
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export const SizingTokensDisplay: React.FC = () => {
  return (
    <>
      <h3>Spacing Scale</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '32px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #E5E5E5' }}>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Token</th>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Value (px)</th>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Visual</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(sizing.spacing).map(([token, value]) => (
            <tr key={token} style={{ borderBottom: '1px solid #E5E5E5' }}>
              <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '12px' }}>{token}</td>
              <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '11px', color: '#666' }}>{value}px</td>
              <td style={{ padding: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: `${Math.min(value, 80)}px`, height: '20px', backgroundColor: '#037DE8', borderRadius: '2px' }} />
                  <span style={{ fontSize: '11px', color: '#666' }}>{value}px</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Icon Sizes</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '32px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #E5E5E5' }}>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Size</th>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Dimensions (px)</th>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Visual</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(sizing.icon).map(([size, value]) => (
            <tr key={size} style={{ borderBottom: '1px solid #E5E5E5' }}>
              <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '12px' }}>{size}</td>
              <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '11px', color: '#666' }}>{value}×{value}px</td>
              <td style={{ padding: '12px' }}>
                <div
                  style={{
                    width: `${value}px`,
                    height: `${value}px`,
                    backgroundColor: '#037DE8',
                    borderRadius: '2px',
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Button Heights</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '24px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #E5E5E5' }}>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Size</th>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Height (px)</th>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Visual</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(sizing.button.height).map(([size, value]) => (
            <tr key={size} style={{ borderBottom: '1px solid #E5E5E5' }}>
              <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '12px' }}>{size}</td>
              <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '11px', color: '#666' }}>{value}px</td>
              <td style={{ padding: '12px' }}>
                <div
                  style={{
                    width: '120px',
                    height: `${value}px`,
                    backgroundColor: '#037DE8',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '12px',
                  }}
                >
                  Button
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Button Minimum Widths</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '24px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #E5E5E5' }}>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Size</th>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Min Width (px)</th>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Visual</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(sizing.button.minWidth).map(([size, value]) => (
            <tr key={size} style={{ borderBottom: '1px solid #E5E5E5' }}>
              <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '12px' }}>{size}</td>
              <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '11px', color: '#666' }}>{value}px</td>
              <td style={{ padding: '12px' }}>
                <div
                  style={{
                    width: `${value}px`,
                    height: '40px',
                    backgroundColor: '#037DE8',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '12px',
                  }}
                >
                  Button
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Input Sizes</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '32px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #E5E5E5' }}>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Property</th>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Value (px)</th>
            <th style={{ textAlign: 'left', padding: '12px', fontWeight: 600 }}>Visual</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #E5E5E5' }}>
            <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '12px' }}>height</td>
            <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '11px', color: '#666' }}>{sizing.input.height}px</td>
            <td style={{ padding: '12px' }}>
              <div
                style={{
                  width: '200px',
                  height: `${sizing.input.height}px`,
                  border: '1px solid #CCCCCC',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '12px',
                  fontSize: '14px',
                }}
              >
                Input field
              </div>
            </td>
          </tr>
          <tr style={{ borderBottom: '1px solid #E5E5E5' }}>
            <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '12px' }}>minWidth</td>
            <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '11px', color: '#666' }}>{sizing.input.minWidth}px</td>
            <td style={{ padding: '12px' }}>
              <div
                style={{
                  width: `${sizing.input.minWidth}px`,
                  height: `${sizing.input.height}px`,
                  border: '1px solid #CCCCCC',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '12px',
                  fontSize: '14px',
                }}
              >
                Input field
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Scale Values</h3>
      <p style={{ marginBottom: '16px', color: '#666' }}>
        Additional sizing values available for custom component sizing. These values are part of the Figma sizing scale.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '12px', marginBottom: '32px' }}>
        {Object.entries(sizing.scale).map(([token, value]) => (
          <div
            key={token}
            style={{
              padding: '12px',
              border: '1px solid #E5E5E5',
              borderRadius: '4px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '11px', color: '#666', marginBottom: '4px' }}>{token}</div>
            <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>{value}px</div>
            <div
              style={{
                width: `${Math.min(value, 80)}px`,
                height: '20px',
                backgroundColor: '#037DE8',
                borderRadius: '2px',
                margin: '0 auto',
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

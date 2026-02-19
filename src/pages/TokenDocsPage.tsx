import React, { useMemo, useState } from 'react';

// Load token doc - Vite will bundle or we fetch from public
const loadTokens = async (): Promise<Record<string, unknown>> => {
  try {
    const res = await fetch('/design-tokens.scalar.ai.json');
    if (res.ok) return await res.json();
  } catch {
    // ignore
  }
  return {};
};

const isColorValue = (v: unknown): v is string =>
  typeof v === 'string' && (v.startsWith('#') || v.startsWith('rgba') || v.startsWith('rgb'));

const getResolvedColor = (obj: unknown): string | null => {
  if (!obj || typeof obj !== 'object') return null;
  const o = obj as Record<string, unknown>;
  if (typeof o.$value === 'string' && isColorValue(o.$value)) return o.$value;
  const ext = o.$extensions as Record<string, unknown> | undefined;
  if (ext?.resolved && typeof ext.resolved === 'object') {
    const r = (ext.resolved as Record<string, string>).light ?? (ext.resolved as Record<string, string>).dark;
    return r ?? null;
  }
  if (ext?.resolvedRgba && typeof ext.resolvedRgba === 'object') {
    const r = (ext.resolvedRgba as Record<string, string>).light ?? (ext.resolvedRgba as Record<string, string>).dark;
    return r ?? null;
  }
  return null;
};

const Section: React.FC<{ title: string; id: string; children: React.ReactNode }> = ({ title, id, children }) => (
  <section id={id} style={{ marginBottom: 32, scrollMarginTop: 24 }}>
    <h2 style={{ fontSize: 20, fontWeight: 600, color: '#1a1a1a', marginBottom: 16, paddingBottom: 8, borderBottom: '1px solid #e5e5e5' }}>
      {title}
    </h2>
    {children}
  </section>
);

const Card: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
  <div
    style={{
      background: '#fff',
      borderRadius: 8,
      border: '1px solid #e5e5e5',
      padding: 20,
      marginBottom: 16,
      ...style,
    }}
  >
    {children}
  </div>
);

function renderTokenValue(value: unknown): React.ReactNode {
  if (value === null || value === undefined) return '—';
  if (typeof value === 'string') return value;
  if (typeof value === 'number') return String(value);
  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    return <pre style={{ margin: 0, fontSize: 12, overflow: 'auto' }}>{JSON.stringify(value, null, 2)}</pre>;
  }
  return String(value);
}

function ColorSwatch({ value }: { value: string }) {
  if (!isColorValue(value)) return <span>{value}</span>;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <span
        style={{
          width: 24,
          height: 24,
          borderRadius: 4,
          background: value,
          border: '1px solid rgba(0,0,0,0.1)',
          flexShrink: 0,
        }}
      />
      <code style={{ fontSize: 12 }}>{value}</code>
    </span>
  );
}

function FigmaVariablesTable({ defs }: { defs: Record<string, string> }) {
  const entries = Object.entries(defs);
  const [filter, setFilter] = useState('');
  const filtered = useMemo(
    () => (filter ? entries.filter(([k]) => k.toLowerCase().includes(filter.toLowerCase())) : entries),
    [entries, filter]
  );
  return (
    <Card>
      <input
        type="search"
        placeholder="Filter by name…”
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{
          width: '100%',
          maxWidth: 320,
          padding: '8px 12px',
          marginBottom: 16,
          border: '1px solid #e5e5e5',
          borderRadius: 6,
          fontSize: 14,
        }}
      />
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e5e5e5', textAlign: 'left' }}>
              <th style={{ padding: '8px 12px', fontWeight: 600 }}>Variable</th>
              <th style={{ padding: '8px 12px', fontWeight: 600 }}>Value</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(([name, value]) => (
              <tr key={name} style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: '#333' }}>{name}</td>
                <td style={{ padding: '8px 12px' }}>
                  {isColorValue(value) ? <ColorSwatch value={value} /> : <code>{value}</code>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

function ColorPalette({ family, tokens }: { family: string; tokens: Record<string, unknown> }) {
  const entries = Object.entries(tokens);
  return (
    <Card>
      <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: '#333' }}>{family}</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        {entries.map(([key, obj]) => {
          const val = obj && typeof obj === 'object' && '$value' in obj ? (obj as { $value: unknown }).$value : null;
          const color = typeof val === 'string' ? val : getResolvedColor(obj);
          return (
            <div
              key={key}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
              }}
            >
              <span
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 8,
                  background: color ?? '#eee',
                  border: '1px solid rgba(0,0,0,0.08)',
                }}
              />
              <span style={{ fontSize: 11, fontWeight: 600 }}>{key}</span>
              {color && <code style={{ fontSize: 10, color: '#666' }}>{color}</code>}
            </div>
          );
        })}
      </div>
    </Card>
  );
}

function SemanticColorsSection({ semantic }: { semantic: Record<string, Record<string, unknown>> }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {Object.entries(semantic).map(([category, tokens]) => (
        <Card key={category}>
          <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: '#333', textTransform: 'capitalize' }}>
            {category}
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {Object.entries(tokens).map(([name, obj]) => {
              const color = getResolvedColor(obj);
              const ref = obj && typeof obj === 'object' && '$value' in obj ? (obj as { $value: unknown }).$value : null;
              return (
                <div
                  key={name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '6px 10px',
                    background: '#f8fafc',
                    borderRadius: 6,
                  }}
                >
                  <span
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 4,
                      background: color ?? '#ccc',
                      border: '1px solid rgba(0,0,0,0.1)',
                    }}
                  />
                  <span style={{ fontSize: 12, fontWeight: 500 }}>{name}</span>
                  {color && <code style={{ fontSize: 11, color: '#666' }}>{color}</code>}
                  {typeof ref === 'object' && ref !== null && (
                    <span style={{ fontSize: 10, color: '#999' }}>{JSON.stringify(ref)}</span>
                  )}
                </div>
              );
            })}
          </div>
        </Card>
      ))}
    </div>
  );
}

function NestedTokenBlock({ data, depth = 0 }: { data: unknown; depth?: number }) {
  if (data === null || data === undefined) return null;
  if (typeof data !== 'object') {
    return <code style={{ fontSize: 12 }}>{String(data)}</code>;
  }
  if (Array.isArray(data)) {
    return (
      <ul style={{ margin: 0, paddingLeft: 16 }}>
        {data.map((item, i) => (
          <li key={i}>{renderTokenValue(item)}</li>
        ))}
      </ul>
    );
  }
  const obj = data as Record<string, unknown>;
  const hasNested = Object.values(obj).some((v) => v !== null && typeof v === 'object' && !Array.isArray(v));
  const isTokenObj = '$type' in obj || '$value' in obj;
  if (isTokenObj && typeof obj.$value !== 'object') {
    const color = getResolvedColor(obj);
    if (color) return <ColorSwatch value={color} />;
    return <code>{String(obj.$value ?? '')}</code>;
  }
  return (
    <div style={{ paddingLeft: depth > 0 ? 16 : 0, borderLeft: depth > 0 ? '2px solid #e5e5e5' : undefined }}>
      {Object.entries(obj).map(([k, v]) => (
        <div key={k} style={{ marginBottom: 8 }}>
          <span style={{ fontWeight: 600, fontSize: 12, color: '#333' }}>{k}</span>
          {hasNested && typeof v === 'object' && v !== null && !Array.isArray(v) ? (
            <NestedTokenBlock data={v} depth={depth + 1} />
          ) : (
            <span style={{ marginLeft: 8 }}>{renderTokenValue(v)}</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function TokenDocsPage() {
  const [data, setData] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  React.useEffect(() => {
    loadTokens()
      .then(setData)
      .catch(() => setError('Failed to load design-tokens.scalar.ai.json'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div style={{ padding: 48, textAlign: 'center', fontFamily: 'Inter, sans-serif', color: '#666' }}>
        Loading token documentation…
      </div>
    );
  }
  if (error || !data) {
    return (
      <div style={{ padding: 48, fontFamily: 'Inter, sans-serif', color: '#cb0000' }}>
        {error ?? 'No token data available. Ensure design-tokens.scalar.ai.json is in the public folder.'}
      </div>
    );
  }

  const meta = data.meta as Record<string, unknown> | undefined;
  const figmaVariableDefs = data.figmaVariableDefs as Record<string, string> | undefined;
  const modes = data.modes as string[] | undefined;
  const tokens = data.tokens as Record<string, unknown> | undefined;
  const flatTokens = data.flatTokens as unknown[] | undefined;

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f8fafc',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        color: '#1a1a1a',
      }}
    >
      <header
        style={{
          background: '#fff',
          borderBottom: '1px solid #e5e5e5',
          padding: '16px 24px',
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: '#037DE8' }}>
            {meta?.name ? String(meta.name) : 'Design Tokens'}
          </h1>
          <nav style={{ display: 'flex', gap: 16 }}>
            <a href="#meta" style={{ fontSize: 14, color: '#333', textDecoration: 'none' }}>About</a>
            <a href="#figma" style={{ fontSize: 14, color: '#333', textDecoration: 'none' }}>Figma variables</a>
            <a href="#tokens" style={{ fontSize: 14, color: '#333', textDecoration: 'none' }}>Tokens</a>
            <a href="#flat" style={{ fontSize: 14, color: '#333', textDecoration: 'none' }}>Flat</a>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
        <Section id="meta" title="About">
          <Card>
            <p style={{ margin: '0 0 8px', fontSize: 14 }}><strong>Version:</strong> {meta?.version ? String(meta.version) : '—'}</p>
            {meta?.generatedFrom && typeof meta.generatedFrom === 'object' && (
              <pre style={{ margin: 0, fontSize: 12, background: '#f5f5f5', padding: 12, borderRadius: 6, overflow: 'auto' }}>
                {JSON.stringify(meta.generatedFrom, null, 2)}
              </pre>
            )}
          </Card>
        </Section>

        {modes && modes.length > 0 && (
          <Section id="modes" title="Modes">
            <Card>
              <p style={{ margin: 0, fontSize: 14 }}><strong>Theme modes:</strong> {modes.join(', ')}</p>
            </Card>
          </Section>
        )}

        {figmaVariableDefs && Object.keys(figmaVariableDefs).length > 0 && (
          <Section id="figma" title="Figma variable definitions">
            <FigmaVariablesTable defs={figmaVariableDefs} />
          </Section>
        )}

        {tokens && (
          <Section id="tokens" title="Structured tokens">
            {tokens.color && (
              <>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Color primitives</h3>
                <div style={{ display: 'grid', gap: 16, marginBottom: 24 }}>
                  {Object.entries((tokens.color as Record<string, unknown>).primitive as Record<string, Record<string, unknown>>).map(([family, swatches]) => (
                    <ColorPalette key={family} family={family} tokens={swatches} />
                  ))}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Semantic colors</h3>
                <SemanticColorsSection semantic={(tokens.color as Record<string, unknown>).semantic as Record<string, Record<string, unknown>>} />
              </>
            )}
            {tokens.typography && (
              <Card style={{ marginTop: 24 }}>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Typography</h3>
                <NestedTokenBlock data={(tokens.typography as Record<string, unknown>).primitive} />
              </Card>
            )}
            {tokens.spacing && (
              <Card style={{ marginTop: 24 }}>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Spacing</h3>
                <NestedTokenBlock data={tokens.spacing} />
              </Card>
            )}
            {tokens.sizing && (
              <Card style={{ marginTop: 24 }}>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Sizing</h3>
                <NestedTokenBlock data={tokens.sizing} />
              </Card>
            )}
          </Section>
        )}

        {flatTokens && flatTokens.length > 0 && (
          <Section id="flat" title="Flat token list">
            <Card>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {flatTokens.map((t, i) => (
                  <li key={i} style={{ marginBottom: 8 }}>
                    {typeof t === 'object' && t !== null && 'name' in t ? (
                      <>
                        <code style={{ fontWeight: 600 }}>{(t as { name: string }).name}</code>
                        {' '}
                        {renderTokenValue((t as Record<string, unknown>).value ?? (t as Record<string, unknown>).modes)}
                      </>
                    ) : (
                      renderTokenValue(t)
                    )}
                  </li>
                ))}
              </ul>
            </Card>
          </Section>
        )}
      </main>
    </div>
  );
}

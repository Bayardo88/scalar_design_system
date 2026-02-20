import React from 'react';
import ReactDOM from 'react-dom/client';
import './tokens.css';
import {
  Button,
  Avatar,
  SidebarIcon,
  Sidebar,
  Checkbox,
  TitleItemRow,
  ColumnHeader,
  DataCell,
  ContentCell,
  Chip,
  ModalStatusCell,
  EvaluationStatusCell,
  Table,
} from '../ai-sources';

function App() {
  const [checked, setChecked] = React.useState(false);
  const [accepted, setAccepted] = React.useState(false);
  return (
    <div style={{ padding: 'var(--24)', maxWidth: 960, margin: '0 auto' }}>
      <h1 style={{ fontFamily: 'var(--family-inter)', color: 'var(--text-primary)', marginBottom: 'var(--16)' }}>
        Scalar Design System — AI Components
      </h1>

      <section style={{ marginBottom: 'var(--24)' }}>
        <h2 style={{ fontSize: 'var(--16)', marginBottom: 'var(--8)' }}>Button</h2>
        <div style={{ display: 'flex', gap: 'var(--8)', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button variant="brand" size="m">Label</Button>
          <Button variant="positive" size="m">Positive</Button>
          <Button variant="negative" size="s">Cancel</Button>
          <Button variant="warning" size="m">Warning</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--24)' }}>
        <h2 style={{ fontSize: 'var(--16)', marginBottom: 'var(--8)' }}>Avatar</h2>
        <div style={{ display: 'flex', gap: 'var(--16)', alignItems: 'center', flexWrap: 'wrap' }}>
          <Avatar name="Jane Doe" size="xs" />
          <Avatar name="JD" size="sm" />
          <Avatar name="Jane Doe" size="md" />
          <Avatar name="Jane Doe" size="lg" bordered />
        </div>
      </section>

      <section style={{ marginBottom: 'var(--24)' }}>
        <h2 style={{ fontSize: 'var(--16)', marginBottom: 'var(--8)' }}>Sidebar</h2>
        <div style={{ display: 'flex', gap: 'var(--8)' }}>
          <SidebarIcon icon="home" aria-label="Home" active />
          <SidebarIcon icon="dashboard" aria-label="Dashboard" />
          <SidebarIcon icon="settings" aria-label="Settings" />
        </div>
        <div style={{ marginTop: 'var(--16)', border: '1px solid var(--stroke-disable)', borderRadius: 'var(--8)', width: 220 }}>
          <Sidebar
            items={[
              { id: 'home', icon: 'home', label: 'Home', active: true },
              { id: 'dashboard', icon: 'dashboard', label: 'Dashboard' },
              { id: 'settings', icon: 'settings', label: 'Settings' },
            ]}
          />
        </div>
      </section>

      <section style={{ marginBottom: 'var(--24)' }}>
        <h2 style={{ fontSize: 'var(--16)', marginBottom: 'var(--8)' }}>Checkbox</h2>
        <div style={{ display: 'flex', gap: 'var(--16)', flexWrap: 'wrap' }}>
          <Checkbox label="Accept terms" checked={accepted} onChange={setAccepted} />
          <Checkbox label="Optional" defaultChecked size="s" />
          <Checkbox label="Checked" checked={checked} onChange={setChecked} />
        </div>
      </section>

      <section style={{ marginBottom: 'var(--24)' }}>
        <h2 style={{ fontSize: 'var(--16)', marginBottom: 'var(--8)' }}>Title Item Row</h2>
        <div style={{ border: '1px solid var(--stroke-disable)', borderRadius: 'var(--8)', overflow: 'hidden' }}>
          <TitleItemRow title="Name" value="Jane Doe" size="m" />
          <TitleItemRow title="Email" subtitle="We'll never share it" value="jane@example.com" />
        </div>
      </section>

      <section style={{ marginBottom: 'var(--24)' }}>
        <h2 style={{ fontSize: 'var(--16)', marginBottom: 'var(--8)' }}>Table (ColumnHeader + DataCell)</h2>
        <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--stroke-disable)', borderRadius: 'var(--8)', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
            <ColumnHeader size="m">Name</ColumnHeader>
            <ColumnHeader size="m">Date</ColumnHeader>
            <ColumnHeader size="m" align="right">Amount</ColumnHeader>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
            <DataCell size="m">Jane Doe</DataCell>
            <DataCell size="m" variant="secondary">Jan 15, 2025</DataCell>
            <DataCell size="m" align="right">$99.00</DataCell>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
            <ContentCell size="m" avatar={{ name: 'John Smith' }} />
            <DataCell size="m" variant="secondary">Jan 14, 2025</DataCell>
            <DataCell size="m" align="right">$120.00</DataCell>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--24)' }}>
        <h2 style={{ fontSize: 'var(--16)', marginBottom: 'var(--8)' }}>Chip & Status cells</h2>
        <div style={{ display: 'flex', gap: 'var(--8)', flexWrap: 'wrap', alignItems: 'center' }}>
          <Chip variant="success" icon="check_circle">Completed</Chip>
          <Chip variant="error">Failed</Chip>
          <Chip variant="brand" style="outlined">Info</Chip>
          <ModalStatusCell status="success">Done</ModalStatusCell>
          <EvaluationStatusCell status="warning">Pending</EvaluationStatusCell>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--24)' }}>
        <h2 style={{ fontSize: 'var(--16)', marginBottom: 'var(--8)' }}>Table component</h2>
        <Table
          showHeader={true}
          header={<TitleItemRow title="Users" value="2 total" size="m" />}
          columns={[
            { id: 'name', label: 'Name' },
            { id: 'date', label: 'Date', align: 'right' },
            { id: 'amount', label: 'Amount', align: 'right' },
          ]}
          rows={[
            { name: 'Jane Doe', date: 'Jan 15, 2025', amount: '$99.00' },
            { name: 'John Smith', date: 'Jan 14, 2025', amount: '$120.00' },
          ]}
          showPagination={true}
          pagination={<div style={{ fontSize: 'var(--12)', color: 'var(--text-secondary)' }}>Page 1 of 1</div>}
          size="m"
        />
      </section>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

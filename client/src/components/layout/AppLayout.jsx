/**
 * CPL — AppLayout Component
 * Main dashboard layout: Sidebar + TopNavbar + Content area.
 * Used for all protected (authenticated) routes.
 */

import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export default function AppLayout() {
  const [collapsed, setCollapsed] = useLocalStorage('cpl-sidebar-collapsed', false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-dark-950">
      {/* Sidebar */}
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Top Navbar */}
        <TopNavbar onMenuClick={() => setMobileOpen(true)} />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

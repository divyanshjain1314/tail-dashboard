"use client";

import Header from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { ReactNode, useEffect, useState } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [isMobile, setMobile] = useState(true);
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
    { isMobile && setMobileOpen(!isMobileOpen) }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMobile(true);
        setIsCollapsed(true)
      } else {
        setMobile(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="flex h-screen overflow-hidden bg-white dark:bg-boxdark">

      <Sidebar isCollapsed={isCollapsed}
        isMobile={isMobile}
        isMobileOpen={isMobileOpen}
        setMobileOpen={setMobileOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden transition-colors duration-300 bg-[#F1F5F9] dark:bg-[#101828]">

        <Header toggleSidebar={() => {
          toggleSidebar()
        }} />

        <main className="p-4 md:p-6 2xl:p-10">
          <div className="mx-auto max-w-screen-2xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
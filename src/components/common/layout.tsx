"use client";

import Header from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { ReactNode, useState } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  return (
    <div className="flex h-screen overflow-hidden bg-white dark:bg-boxdark">

      <Sidebar isCollapsed={isCollapsed} />

      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden transition-colors duration-300 bg-[#F1F5F9] dark:bg-[#101828]">

        <Header toggleSidebar={toggleSidebar} />

        <main className="p-4 md:p-6 2xl:p-10">
          <div className="mx-auto max-w-screen-2xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
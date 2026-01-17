"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { menuGroups } from './Menu';
import { useAppSelector } from '@/redux/hooks';

export const Sidebar = ({ isCollapsed, isMobile, isMobileOpen, setMobileOpen, toggleSidebar }: { isCollapsed: boolean; isMobile: boolean; isMobileOpen: boolean; setMobileOpen: (open: boolean) => void, toggleSidebar: () => void }) => {
    const pathname = usePathname();
    const { mode } = useAppSelector((state) => state.theme);
    const isDark = mode === 'dark';

    const [openMenus, setOpenMenus] = useState<string[]>(['Dashboard']);

    const toggleSubmenu = (name: string) => {
        setOpenMenus(prev =>
            prev.includes(name) ? prev.filter(item => item !== name) : [...prev, name]
        );
    };

    useEffect(() => {
        if (isMobile) setMobileOpen(false);
    }, [pathname, isMobile, setMobileOpen]);

    return (
        <>
            {isMobile && isMobileOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 transition-opacity"
                    onClick={toggleSidebar}
                />
            )}
            <aside className={`
                ${isMobile
                    ? `fixed inset-y-0 left-0 z-50 transition-transform duration-300 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`
                    : 'relative'} 
                ${isCollapsed && !isMobile ? 'w-20' : 'w-72'} 
                h-screen overflow-hidden flex flex-col border-r bg-white dark:bg-[#101828] border-slate-100 dark:border-[#2E3A47]
            `}>

                <div className="flex items-center gap-3 px-8 py-8 h-24">
                    <div className="min-w-10 h-10 bg-[#3C50E0] rounded-xl flex items-center justify-center  shadow-blue-100">
                        <span className="text-white font-bold text-xl">T</span>
                    </div>
                    {!isCollapsed && (
                        <span className={`text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-[#1C2434]'}`}>
                            TailAdmin
                        </span>
                    )}
                    {isMobile && (
                        <button
                            onClick={toggleSidebar}
                            className="ml-auto dark:text-white"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.21967 7.28131C5.92678 6.98841 5.92678 6.51354 6.21967 6.22065C6.51256 5.92775 6.98744 5.92775 7.28033 6.22065L11.999 10.9393L16.7176 6.22078C17.0105 5.92789 17.4854 5.92788 17.7782 6.22078C18.0711 6.51367 18.0711 6.98855 17.7782 7.28144L13.0597 12L17.7782 16.7186C18.0711 17.0115 18.0711 17.4863 17.7782 17.7792C17.4854 18.0721 17.0105 18.0721 16.7176 17.7792L11.999 13.0607L7.28033 17.7794C6.98744 18.0722 6.51256 18.0722 6.21967 17.7794C5.92678 17.4865 5.92678 17.0116 6.21967 16.7187L10.9384 12L6.21967 7.28131Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    )}
                </div>

                <div className={`flex flex-col overflow-y-auto custom-scrollbar px-4 pb-10 ${isDark ? "border-r border-[#1C2434]" : ""}`}>
                    {menuGroups.map((group, gIdx) => (
                        <div key={gIdx} className="mb-6">
                            {!isCollapsed && (
                                <h3 className={`text-[11px] font-semibold tracking-[2px] mb-4 ml-4 ${isDark ? 'text-[#8A99AF]' : 'text-slate-400'}`}>
                                    {group.name}
                                </h3>
                            )}

                            <nav className="flex flex-col gap-1">
                                {group.items.map((item, iIdx) => {
                                    const hasChildren = item.children && item.children.length > 0;
                                    const isOpen = openMenus.includes(item.name);
                                    const isActive = pathname === item.path || item.children?.some(c => c.path === pathname);

                                    return (
                                        <div key={iIdx} className="flex flex-col">
                                            <div
                                                onClick={() => hasChildren && !isCollapsed && toggleSubmenu(item.name)}
                                                className="cursor-pointer"
                                            >
                                                <Link
                                                    href={hasChildren ? '#' : item.path}
                                                    className={`group flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 ${isActive
                                                        ? (isDark ? 'bg-[#333A48] text-white' : 'bg-[#EFF4FB] text-[#3C50E0]')
                                                        : (isDark ? 'text-[#DEE4EE] hover:bg-[#333A48]' : 'text-[#64748B] hover:bg-slate-50')
                                                        } ${isCollapsed ? 'justify-center px-0' : ''}`}
                                                >
                                                    <FontAwesomeIcon
                                                        icon={item.icon}
                                                        className={`text-lg ${isActive ? (isDark ? 'text-white' : 'text-[#3C50E0]') : (isDark ? 'text-[#8A99AF] group-hover:text-white' : 'text-[#64748B] group-hover:text-[#3C50E0]')}`}
                                                    />

                                                    {!isCollapsed && (
                                                        <>
                                                            <span className={`flex-1 font-medium text-[15px] ${isActive ? 'font-semibold' : ''}`}>
                                                                {item.name}
                                                            </span>
                                                            {hasChildren && (
                                                                <FontAwesomeIcon
                                                                    icon={isOpen ? faChevronUp : faChevronDown}
                                                                    className="text-[10px] opacity-50"
                                                                />
                                                            )}
                                                        </>
                                                    )}
                                                </Link>
                                            </div>

                                            {hasChildren && isOpen && !isCollapsed && (
                                                <div className="pl-11 mt-1 flex flex-col gap-1 transition-all">
                                                    {item.children?.map((child, cIdx) => (
                                                        <div className={`flex items-center justify-between px-3 rounded-lg ${pathname === child.path
                                                            ? (isDark ? 'bg-[#333A48]' : 'bg-[#EFF4FB]')
                                                            : ''}`}
                                                            key={cIdx}
                                                        >
                                                            <Link
                                                                href={child.path}
                                                                className={`py-2 text-[14px] font-medium transition-colors ${pathname === child.path
                                                                    ? (isDark ? 'text-white' : 'text-[#3C50E0]')
                                                                    : (isDark ? 'text-[#8A99AF] hover:text-white' : 'text-[#64748B] hover:text-[#3C50E0]')
                                                                    }`}
                                                            >
                                                                {child.name}
                                                            </Link>
                                                            {child.isNew && (
                                                                <span className="ml-auto bg-[#E1F9F0] text-[#10B981] text-[10px] font-bold px-2 py-0.5 rounded-full">
                                                                    NEW
                                                                </span>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </nav>
                        </div>
                    ))}
                </div>
            </aside>
        </>
    );
};
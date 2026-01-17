"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { menuGroups } from './Menu';
import { useAppSelector } from '@/redux/hooks';

export const Sidebar = ({ isCollapsed }: { isCollapsed: boolean }) => {
    const pathname = usePathname();
    const { mode } = useAppSelector((state) => state.theme);
    const isDark = mode === 'dark';

    const [openMenus, setOpenMenus] = useState<string[]>(['Dashboard']);

    const toggleSubmenu = (name: string) => {
        setOpenMenus(prev =>
            prev.includes(name) ? prev.filter(item => item !== name) : [...prev, name]
        );
    };

    return (
        <aside className={`${isCollapsed ? 'w-20' : 'w-72'} h-screen transition-all duration-300 z-50 overflow-hidden flex flex-col border-r ${isDark
            ? 'bg-[#101828] border-[#2E3A47]'
            : 'bg-white border-slate-100'
            }`}>

            <div className="flex items-center gap-3 px-8 py-8 h-24">
                <div className="min-w-10 h-10 bg-[#3C50E0] rounded-xl flex items-center justify-center  shadow-blue-100">
                    <span className="text-white font-bold text-xl">T</span>
                </div>
                {!isCollapsed && (
                    <span className={`text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-[#1C2434]'}`}>
                        TailAdmin
                    </span>
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
    );
};
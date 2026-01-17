"use client";

import type React from "react";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";

interface DropdownItemProps {
  tag?: "a" | "button";
  href?: string;
  onClick?: () => void;
  onItemClick?: () => void;
  baseClassName?: string;
  className?: string;
  children: React.ReactNode;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  tag = "button",
  href,
  onClick,
  onItemClick,
  baseClassName = "flex w-full items-center gap-2.5 rounded-lg px-4 py-2 text-left text-sm font-medium transition-all duration-200",
  className = "",
  children,
}) => {
  const { mode } = useAppSelector((state) => state.theme);
  const isDark = mode === "dark";

  const themeClasses = isDark
    ? "text-[#DEE4EE] hover:bg-[#333A48] hover:text-white"
    : "text-[#64748B] hover:bg-slate-50 hover:text-[#3C50E0]";

  const combinedClasses = `${baseClassName} ${themeClasses} ${className}`.trim();

  const handleClick = (event: React.MouseEvent) => {
    if (tag === "button") {
      event.preventDefault();
    }
    if (onClick) onClick();
    if (onItemClick) onItemClick();
  };

  if (tag === "a" && href) {
    return (
      <Link href={href} className={combinedClasses} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={handleClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default DropdownItem;
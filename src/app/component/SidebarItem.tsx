"use client";
import { LucideIcon } from "lucide-react";
import React from "react";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  isLogout?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  isActive = false,
  isLogout = false,
  onClick,
}) => {
  // Dynamic classes based on state
  const textColor = isActive
    ? "text-white"
    : isLogout
    ? "text-red-500 hover:text-red-400"
    : "text-slate-600 hover:text-slate-800";

  const bgColor = isActive ? "bg-blue-600" : "hover:bg-slate-100";
  const iconColor = isActive ? "text-white" : "text-current";

  return (
    <button
      onClick={onClick}
      className={`flex gap-5 items-center mt-2 first:mt-0 ${textColor} ${bgColor} w-full text-left p-3 rounded-lg transition-colors duration-200`}
    >
      <Icon className={`w-5 h-5 shrink-0 ${iconColor}`} />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};

export default SidebarItem;
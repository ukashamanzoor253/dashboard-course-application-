"use client";
import React from "react";
import {
  LayoutDashboard,
  User,
  UserPlus,
  Users,
  BookOpen,
  History,
  Settings,
  LogOut,
 
} from "lucide-react";
import SidebarItem from "./SidebarItem";

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem, onItemClick }) => {
  return (
    <nav className="flex flex-col p-4 w-64 h-full bg-white rounded-xl shadow-sm">
      <div className="flex flex-col items-start w-full">
        <SidebarItem
          icon={LayoutDashboard}
          label="Dashboard"
          isActive={activeItem === "dashboard"}
          onClick={() => onItemClick("dashboard")}
        />
        <SidebarItem
          icon={User}
          label="My Profile"
          isActive={activeItem === "profile"}
          onClick={() => onItemClick("profile")}
        />
        <SidebarItem
          icon={BookOpen}
          label="Enrolled Courses"
          isActive={activeItem === "courses"}
          onClick={() => onItemClick("courses")}
        />
        <SidebarItem
          icon={UserPlus}
          label="Add New User"
          isActive={activeItem === "addUser"}
          onClick={() => onItemClick("addUser")}
        />
        <SidebarItem
          icon={Users}
          label="View Users"
          isActive={activeItem === "viewUsers"}
          onClick={() => onItemClick("viewUsers")}
        />
        <SidebarItem
          icon={History}
          label="Course History"
          isActive={activeItem === "history"}
          onClick={() => onItemClick("history")}
        />
        <SidebarItem
          icon={Settings}
          label="Settings"
          isActive={activeItem === "settings"}
          onClick={() => onItemClick("settings")}
        />
        
        <div className="mt-6 w-full border-t border-slate-200 pt-2">
          <SidebarItem
            icon={LogOut}
            label="Logout"
            isLogout
            onClick={() => onItemClick("logout")}
          />
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
"use client";
import React, { useState } from "react";
import { FaSearch, FaChevronDown, FaBell, FaBars, FaMoon, FaSun } from "react-icons/fa";
import Image from "next/image";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [showCourses, setShowCourses] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const suggestions = ["React", "Node.js", "Design Patterns", "Data Structures"];

  return (
    <header className={`flex flex-col justify-center items-center px-4 sm:px-10 md:px-16 py-5 w-full border-b border-slate-300 shadow-md ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="flex flex-wrap justify-between items-center w-full gap-6">
        {/* Left - Logo & Search */}
        <div className="flex gap-8 items-center flex-wrap flex-1 min-w-60">
          <div className="flex items-center gap-4">
            <FaBars className="w-6 h-6 cursor-pointer md:hidden" />
            <Image
              src="/assets/logo.png"
              width={120}
              height={60}
              alt="Logo"
              className="object-contain"
            />
          </div>

          {/* Search Box */}
          <div className="relative w-full max-w-md">
            <div className={`flex items-center gap-2 px-4 py-2 border rounded-full ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`}>
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search for anything"
                className={`flex-1 bg-transparent outline-none ${darkMode ? "text-white" : "text-black"}`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Static Suggestions */}
            {searchQuery.length > 0 && (
              <ul className={`absolute left-0 mt-2 w-full z-10 border rounded-lg shadow-lg ${darkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white text-black border-gray-200"}`}>
                {suggestions
                  .filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((item, idx) => (
                    <li
                      key={idx}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setSearchQuery(item)}
                    >
                      {item}
                    </li>
                  ))}
              </ul>
            )}
          </div>

          {/* Courses Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowCourses(!showCourses)}
              className="flex gap-2 items-center px-5 py-2 border border-orange-500 rounded-full text-orange-500"
            >
              Courses <FaChevronDown />
            </button>
            {showCourses && (
              <ul className="absolute z-10 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-600">
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Web Dev</li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">AI & ML</li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Marketing</li>
              </ul>
            )}
          </div>
        </div>

        {/* Center Nav */}
        <nav className="hidden md:flex gap-6 font-medium">
          <a href="#" className="hover:underline">Subscriptions</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
          </button>

          {/* Notification */}
          <button aria-label="Notifications" className="relative">
            <FaBell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500"></span>
          </button>

          {/* Profile */}
          <div className="flex items-center gap-2">
            <Image
              src="/assets/profile.jpg"
              width={44}
              height={44}
              alt="Profile"
              className="rounded-full"
            />
            <div className="text-sm">
              <p className="font-semibold">Charlotte A.</p>
              <p className="text-gray-500 dark:text-gray-300">Student</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

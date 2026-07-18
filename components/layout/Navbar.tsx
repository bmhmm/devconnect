"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-6">
      <nav
        className="
          flex
          min-h-16
          w-full
          max-w-7xl
          flex-col
          justify-between
          rounded-2xl
          border
          border-amber-900/10
          bg-amber-100/30
          px-8
          py-3
          backdrop-blur-xl
          shadow-[0_4px_30px_rgba(0,0,0,0.03)]
          md:flex-row
          md:items-center
          md:py-0
        "
      >
        {/* Top Bar: Logo & Hamburger */}
        <div className="flex items-center justify-between h-10 md:h-16 md:w-auto">
          {/* Logo */}
          <Link href="/" className="group text-2xl font-bold tracking-tight">
            <span className="text-slate-900 transition duration-300 group-hover:text-blue-600">
              Dev
            </span>
            <span className="text-blue-500 transition duration-300 group-hover:text-cyan-600">
              Connect
            </span>
          </Link>

          {/* Hamburger Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-800 hover:text-blue-600 md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Links & Buttons Layout */}
        <div
          className={`
            ${isOpen ? "flex" : "hidden"} 
            mt-4 
            flex-col 
            gap-6 
            pb-4
            md:mt-0 
            md:flex 
            md:flex-1
            md:flex-row 
            md:items-center 
            md:justify-between
            md:pb-0
          `}
        >
          {/* Center Links - Now centered in the middle of the navbar */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8 md:mx-auto">
            {["Developers", "Projects", "About"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="
                  relative
                  text-sm
                  font-semibold
                  text-slate-800
                  transition
                  duration-300
                  hover:text-blue-600

                  md:after:absolute
                  md:after:left-0
                  md:after:-bottom-1
                  md:after:h-[2px]
                  md:after:w-0
                  md:after:bg-blue-500
                  md:after:transition-all
                  md:after:duration-300
                  md:hover:after:w-full
                "
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col gap-4 border-t border-slate-900/10 pt-4 md:flex-row md:items-center md:gap-6 md:border-t-0 md:pt-0">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold text-slate-800 transition hover:text-blue-600"
            >
              Login
            </Link>

            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="
                inline-block
                text-center
                rounded-xl
                bg-blue-600
                px-5
                py-2.5
                font-medium
                text-white
                transition
                duration-300
                hover:scale-105
                hover:bg-blue-500
                hover:shadow-lg
                hover:shadow-blue-500/30
              "
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
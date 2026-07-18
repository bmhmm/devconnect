"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-6">
      <nav
        className="
          flex
          h-16
          w-full
          max-w-7xl
          items-center
          justify-between
          rounded-2xl
          border
          border-white/10
          bg-white/5
          px-8
          backdrop-blur-xl
          shadow-[0_0_40px_rgba(37,99,235,0.15)]
        "
      >
        {/* Logo */}
        <Link
          href="/"
          className="group text-2xl font-bold tracking-tight"
        >
          <span className="text-white transition duration-300 group-hover:text-blue-400">
            Dev
          </span>
          <span className="text-blue-500 transition duration-300 group-hover:text-cyan-400">
            Connect
          </span>
        </Link>

        {/* Center */}
        <div className="hidden items-center gap-8 md:flex">
          {["Developers", "Projects", "About"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="
                relative
                text-sm
                text-slate-300
                transition
                duration-300
                hover:text-white

                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:bg-blue-500
                after:transition-all
                after:duration-300

                hover:after:w-full
              "
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-slate-300 transition hover:text-white"
          >
            Login
          </Link>

          <Link
            href="/login"
            className="
              rounded-xl
              bg-blue-600
              px-5
              py-2.5
              font-medium
              transition
              duration-300
              hover:scale-105
              hover:bg-blue-500
              hover:shadow-lg
              hover:shadow-blue-500/40
            "
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
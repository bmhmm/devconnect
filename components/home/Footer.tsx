"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative border-t border-amber-900/10 bg-amber-50/40 text-slate-800 backdrop-blur-xl overflow-hidden">
      {/* Decorative Glow Accent behind footer */}
      <div className="absolute -top-24 left-1/2 -z-10 h-48 w-full max-w-4xl -translate-x-1/2 rounded-full bg-blue-500/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        {/* Main Section */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Brand Column (Spans 4 columns on large screens) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="group text-2xl font-bold tracking-tight">
                <span className="text-slate-900 transition duration-300 group-hover:text-blue-600">
                  Dev
                </span>
                <span className="text-blue-500 transition duration-300 group-hover:text-cyan-600">
                  Connect
                </span>
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
                The professional network built for developers to showcase projects, share skills, and grow meaningful connections.
              </p>
            </div>
            
            {/* Social Links grouped underneath */}
            <div className="mt-8 flex gap-5">
              <Link 
                href="https://github.com/bmhmm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/5 transition duration-300 hover:bg-blue-600"
              >
                <FaGithub className="h-5 w-5 text-slate-700 transition duration-300 group-hover:text-white" />
              </Link>
              <Link 
                href="#" 
                className="group flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/5 transition duration-300 hover:bg-blue-600"
              >
                <FaTwitter className="h-5 w-5 text-slate-700 transition duration-300 group-hover:text-white" />
              </Link>
              <Link 
                href="#" 
                className="group flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/5 transition duration-300 hover:bg-blue-600"
              >
                <FaLinkedin className="h-5 w-5 text-slate-700 transition duration-300 group-hover:text-white" />
              </Link>
            </div>
          </div>

          {/* Links Grid Columns (Spans 4 columns split into two parts) */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 lg:col-span-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Platform
              </h4>
              <ul className="mt-4 space-y-3">
                {["Developers", "Projects", "About"].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`/${item.toLowerCase()}`} 
                      className="text-sm font-medium text-slate-600 transition duration-200 hover:text-blue-600"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Resources
              </h4>
              <ul className="mt-4 space-y-3">
                {["Documentation", "Privacy", "Terms"].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-sm font-medium text-slate-600 transition duration-200 hover:text-blue-600"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Premium Newsletter / Action Column (Spans 4 columns) */}
          <div className="lg:col-span-4 rounded-2xl border border-amber-900/5 bg-amber-100/20 p-6 backdrop-blur-sm">
            <h4 className="text-sm font-bold text-slate-900">
              Stay updated
            </h4>
            <p className="mt-2 text-xs text-slate-600">
              Get notified when new projects launch or new developers join the ecosystem.
            </p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@domain.com"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs outline-none transition focus:border-blue-500"
                required
              />
              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-slate-900/5 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row text-xs font-medium text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} DevConnect. All rights reserved.
          </div>
          <div className="flex gap-4">
            <span>Built with Next.js & Supabase</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
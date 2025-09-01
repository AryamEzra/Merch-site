"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { Bell, Home } from "lucide-react";
import { ShoppingCartIcon } from "./ShoppingCartIcon";

const NAV_LINKS = [
  { label: "T-shirts", href: "/tshirts" },
  { label: "Accessories", href: "/accessories" },
  { label: "Collections", href: "/collections" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-light-100">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Link href="/" aria-label="Better Auth Home" className="flex items-center">
          <Image src="/logo.svg" alt="Better Auth" width={28} height={28} priority className="invert" />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-body text-dark-900 transition-colors hover:text-dark-700"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT: Search, Icons, Sign In */}
        <div className="hidden md:flex items-center gap-6">
          <SearchBar />
          <Link href="/">
            <Home className="w-5 h-5 text-gray-600" />
          </Link>
          <Bell className="w-5 h-5 text-gray-600" />
          <ShoppingCartIcon />
          <Link href="/login" className="text-body hover:underline">
            Sign in
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="mb-1 block h-0.5 w-6 bg-dark-900"></span>
          <span className="mb-1 block h-0.5 w-6 bg-dark-900"></span>
          <span className="block h-0.5 w-6 bg-dark-900"></span>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        className={`border-t border-light-300 md:hidden ${open ? "block" : "hidden"}`}
      >
        <ul className="space-y-2 px-4 py-3">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block py-2 text-body text-dark-900 hover:text-dark-700"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="flex items-center justify-between pt-2">
            <SearchBar />
            <ShoppingCartIcon />
            <Link href="/login" onClick={() => setOpen(false)}>
              Sign in
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

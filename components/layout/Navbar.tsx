"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navigationItems } from "@/data/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-3 z-50 w-full max-w-[var(--container-max-width)] mx-auto px-3">
      <nav
        aria-label="Navigasi Utama"
        className="w-full flex items-center justify-between px-6 py-4 rounded-[14px] border border-[var(--red-dark)] bg-[var(--bg-surface)] text-[var(--text-primary)]"
      >
        {/* Brand */}
        <a
          href="#top"
          className="flex items-center gap-3 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--red-primary)] focus-visible:outline-offset-2 rounded-sm"
        >
          <span className="font-serif text-3xl font-bold leading-none text-[var(--text-primary)]">
            K
          </span>
          <span className="text-base font-normal leading-none text-[var(--text-primary)]">
            Kelpinn
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="text-sm font-normal text-[var(--text-primary)] opacity-90 hover:opacity-100 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--red-primary)] focus-visible:outline-offset-2 rounded-sm"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          className="md:hidden p-2 rounded-md text-[var(--text-primary)] hover:text-[var(--red-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--red-primary)] focus-visible:outline-offset-2"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation Dropdown Panel */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden mt-2 p-4 rounded-[14px] border border-[var(--red-dark)] bg-[var(--bg-card)] text-[var(--text-primary)] shadow-lg"
        >
          <ul className="flex flex-col gap-3">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 rounded-md text-sm font-normal text-[var(--text-primary)] hover:bg-[var(--bg-surface)] hover:text-[var(--red-primary)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--red-primary)] focus-visible:outline-offset-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

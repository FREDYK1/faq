"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // helper to smooth scroll to a section by id and close mobile menu if open
  function smoothScrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  }

  useDropdownClose(open, setOpen, panelRef, buttonRef);

  // Focus management: when menu opens, focus first focusable item; when closes, restore focus
  useEffect(() => {
    if (open) {
      // focus first link or button inside panel
      const el = panelRef.current?.querySelector<HTMLElement>("a,button,[tabindex]:not([tabindex='-1'])");
      el?.focus();
    } else {
      // restore focus to hamburger button
      buttonRef.current?.focus();
    }
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-left">
          <Link href="#" className="logo">
            <img className="logo-icon" src="/FAQ-logo.svg" alt="" />
            <span className="logo-text">Attendace FAQ</span>
          </Link>
        </div>

        <nav className="header-center" aria-label="Primary">
          <Link href="#">Home</Link>
          <Link href="#">Pricing</Link>
          <a href="#faq" onClick={(e) => { e.preventDefault(); smoothScrollTo("faq"); }}>FAQ</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); smoothScrollTo("contact"); }}>Contact</a>
        </nav>

        <div className="header-right">
          <div className="search-wrapper">
            <input className="search-input" placeholder="Search FAQs" aria-label="Search FAQs" />
          </div>
          <button className="btn ghost">Login</button>
          <button className="btn solid">Sign Up</button>
        </div>

        <button
          ref={buttonRef}
          className="hamburger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((s) => !s)}
        >
          
        </button>
      </div>

      {/* Mobile dropdown panel (anchored) */}
      <div
        id="mobile-menu"
        ref={panelRef}
        className={`mobile-menu ${open ? "open" : ""}`}
        role="menu"
        aria-hidden={!open}
      >
        <nav className="mobile-nav" aria-label="Mobile">
          <Link href="#" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>Home</Link>
          <Link href="#" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>Pricing</Link>
          <a href="#faq" onClick={(e) => { e.preventDefault(); smoothScrollTo("faq"); }} tabIndex={open ? 0 : -1}>FAQ</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); smoothScrollTo("contact"); }} tabIndex={open ? 0 : -1}>Contact</a>

          <div className="mobile-auth">
            <button className="btn ghost" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>Login</button>
            <button className="btn solid" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>Sign Up</button>
          </div>
        </nav>
      </div>
    </header>
  );
}

// hook-like behavior: close on outside click / Escape
function useDropdownClose(open: boolean, setOpen: (v: boolean) => void, panelRef: React.RefObject<HTMLElement> | null, buttonRef: React.RefObject<HTMLElement> | null) {
  useEffect(() => {
    if (!open) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    function onClick(e: MouseEvent) {
      const target = e.target as Node;
      if (!panelRef?.current || !buttonRef?.current) return;
      if (panelRef.current.contains(target) || buttonRef.current.contains(target)) return;
      setOpen(false);
    }

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open, setOpen, panelRef, buttonRef]);
}

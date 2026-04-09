"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="logo">
			<Link href="/">
				<Image
				  src="/logo.png"
				  alt="Minerva Defense logo"
				  width={100}
				  height={100}
				  priority
				/>
			</Link>
        </div>

        <div className="links">
          <Link href="/">Home</Link>
          <Link href="/capabilities">Capabilities</Link>
          <Link href="/culture">Culture</Link>
          <Link href="/employees">Employees</Link>
        </div>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DarkModeToggle from "./DarkModeToggle";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
						<DarkModeToggle />
      <div className="nav-container">
        <div className="logo">
			<Link href="/">
				<Image
				  src="/logo.png"
				  alt="Minerva Defense logo"
				  width={65}
				  height={65}
				  priority
				/>
			</Link>
        </div>

        <div className="links">
          <Link href="/"><p className="text-gray-900 dark:text-gray-100">Home</p></Link>
          <Link href="/capabilities"><p className="text-gray-900 dark:text-gray-100">Capabilities</p></Link>
          <Link href="/culture"><p className="text-gray-900 dark:text-gray-100">Culture</p></Link>
          <Link href="/employees"><p className="text-gray-900 dark:text-gray-100">Employees</p></Link>
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
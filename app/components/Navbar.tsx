"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DarkModeToggle from "./DarkModeToggle";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
	  
  return (
    <nav className="nav bg-white dark:bg-black">
		<DarkModeToggle />
      <div className="nav-container">
        <div className="logo">
			<Link href="/">
				<Image className="dark:hidden"
				  src={"/logo-light.png"}
				  alt="Minerva Defense light mode logo"
				  width={100}
				  height={100}
				  priority
				/>
				<Image className="hidden dark:block"
				  src={"/logo-dark.png"}
				  alt="Minerva Defense dark mode logo"
				  width={100}
				  height={100}
				  priority
				/>
			</Link>
        </div>

        <div className="links">
          <Link href="/"><p className="text-gray-900 dark:text-gray-100">Home</p></Link>
          <Link href="/capabilities"><p className="text-gray-900 dark:text-gray-100">Capabilities</p></Link>
          <Link href="/culture"><p className="text-gray-900 dark:text-gray-100">Culture</p></Link>
          <Link href="/employees"><p className="text-gray-900 dark:text-gray-100">Employees</p></Link>
          <Link href="/contact"><p className="text-gray-900 dark:text-gray-100">Contact</p></Link>
        </div>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/capabilities" onClick={() => setOpen(false)}>Capabilities</Link>
          <Link href="/culture" onClick={() => setOpen(false)}>Culture</Link>
          <Link href="/employees" onClick={() => setOpen(false)}>Employees</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
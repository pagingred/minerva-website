"use client";

import { useState } from "react";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import Image from "next/image";
import DarkModeToggle from "./DarkModeToggle";
import "./navbar.css";

type TabButtonProps = {
  href: string;
  label: string;
};

const Tab = ({ href, label } : TabButtonProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

	return (
		<Link href={href}>
			<p className={`tab ${isActive ? 'accent-line text-gray-900 dark:text-gray-100' : 'text-gray-900 dark:text-gray-100'}`}>{label}</p>
		</Link>
	);
};

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
				  width={75}
				  height={75}
				  priority
				/>
				<Image className="hidden dark:block"
				  src={"/logo-dark.png"}
				  alt="Minerva Defense dark mode logo"
				  width={75}
				  height={75}
				  priority
				/>
			</Link>
        </div>

        <div className="links">
			<Tab href="/" label="Home"></Tab>
			<Tab href="/capabilities" label="Capabilities"></Tab>
			<Tab href="/culture" label="Culture"></Tab>
			<Tab href="/employees" label="Employees"></Tab>
			<Tab href="/careers" label="Careers"></Tab>
			<Tab href="/contact" label="Contact Us"></Tab>
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
          <Link href="/careers" onClick={() => setOpen(false)}>Careers</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
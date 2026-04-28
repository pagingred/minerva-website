// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950 text-zinc-400">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Grid */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-black dark:text-white text-lg font-semibold mb-4">
              Minerva Defense
            </h2>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Advancing the arts and sciences in service of national security and prosperity.
            </p>
          </div>

          {/* Column 1 */}
          <div>
            <h3 className="text-black dark:text-white text-sm font-medium mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/capabilities" className="hover:text-white transition">Capabilities</Link></li>
              <li><Link href="/culture" className="hover:text-white transition">Culture</Link></li>
              <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-black dark:text-white text-sm font-medium mb-4">
              Social
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="https://www.linkedin.com/company/minerva-defense-inc" className="hover:text-white transition">LinkedIn</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-black dark:text-white text-sm font-medium mb-4">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link href="/security" className="hover:text-white transition">Security</Link></li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Minerva Defense. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
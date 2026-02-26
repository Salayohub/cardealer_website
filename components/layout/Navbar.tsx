"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import CarSearchBar from "../search/CarSearchBar";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";
// import Mobilemenu from "components/layout//Header/MobileMenu";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Cars", href: "/cars" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // ✅ moved here

  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo1.png"
            alt="Excellent J & C Autos"
            width={40}
            height={40}
          />
          <span className="font-bold text-lg"></span>
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-medium ${
                  pathname === link.href
                    ? "text-red-600 border-b-2 border-red-600 pb-1"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Search */}
        <div className="hidden md:block w-64">
          <CarSearchBar />
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(true)} className="md:hidden">
          <Menu size={28} />
        </button>

        {/* <MobileMenu open={open} onClose={() => setOpen(false)} /> */}
      </div>
    </nav>
  );
}

// src/components/layout/Header.tsx
import React from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-background shadow z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-xl font-bold">Ankh Studio</div>
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>
                <a className="text-accent hover:text-white transition-colors duration-300">
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
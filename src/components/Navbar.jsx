import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Technical Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f3f3f3] border-b-2 border-black py-6">

      <div className="max-w-6xl mx-auto px-6">

        {/* Desktop */}
        <div className="hidden md:flex items-center justify-center">

          {links.map((link, i) => (
            <div key={link.href} className="flex items-center">

              <a
                href={link.href}
                className="px-4 py-1 text-sm font-medium tracking-widest uppercase hover:underline"
              >
                {link.label}
              </a>

              {i < links.length - 1 && (
                <span className="text-black/30 text-xs">|</span>
              )}

            </div>
          ))}

        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex justify-center">
          <button
            onClick={() => setOpen(!open)}
            className="border-2 border-black px-4 py-1 text-sm uppercase tracking-widest"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden flex flex-col items-center gap-4 mt-6">

            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-widest"
              >
                {link.label}
              </a>
            ))}

          </div>
        )}

      </div>
    </nav>
  );
}
"use client";
import { useState } from "react";

const HeaderPageComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Blogs", href: "/blogs" },
    { name: "podcast", href: "/podcast" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-600">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-800 hover:text-black transition-colors cursor-pointer hover:underline">
              Rahul Bhardwaj
            </h1>
          </div>

          <nav className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-black px-3 py-2 text-[16px] font-semibold hover:underline transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-black hover:bg-gray-100"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderPageComponent;

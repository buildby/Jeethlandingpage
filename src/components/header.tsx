import Link from 'next/link';
import React from 'react';

export const Header = () => {
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Solution', path: '/solution' },
    { title: 'Contact', path: '/contact' },
    { title: 'Try Demo', path: '/try-demo' },
  ]
  return (
    <header className="bg-white min-h-[64px] flex">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        {/* Logo on the left */}
        <Link className="flex items-center" href={'/'}>
          <img src="/logo.png" alt="Logo" className="h-[56px]" />
        </Link>

        <div className="flex items-center ">

          {/* Links on the right */}
          <nav className="hidden md:block">
            {
              navLinks.map(link => (
                <Link href={link.path} key={link.title} className="text-secondary font-semibold text-sm mx-4 py-2 hover:border-b-2 hover:border-b-primary">
                  {link.title}
                </Link>
              ))
            }
          </nav>

          {/* Rounded background download button */}
          <a href="#" className="bg-secondary text-white font-semibold ml-8 text-sm py-2 px-6 rounded-full  hover:bg-primary">
            Download
          </a>

        </div>
      </div>
    </header>
  );
}

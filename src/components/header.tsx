import Link from 'next/link';
import React from 'react';

export const Header = () => {
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Solution', path: '/solution' },
    { title: 'Contact', path: '/contact' },
    { title: 'Try Demo', path: '/demo' },
    { title: 'Contact', path: '/contact' }
  ]
  return (
    <header className="bg-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <Link className="flex items-center" href={'/'}>
          <img src="/logo.png" alt="Logo" className="" />
        </Link>

        <div className="flex items-center ">

          {/* Links on the right */}
          <nav className="">
            {
              navLinks.map(link => (
                <Link href={link.path} key={link.title} className="text-secondary font-semibold text-sm mx-4 py-2 hover:border-b-2 hover:border-b-primary">
                  {link.title}
                </Link>
              ))
            }
          </nav>

          {/* Rounded background download button */}
          <a href="#" className="ml-8 text-sm py-2 px-6 rounded-full bg-secondary hover:bg-primary">
            Download
          </a>

        </div>
      </div>
    </header>
  );
}

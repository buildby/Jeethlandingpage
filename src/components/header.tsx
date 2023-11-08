'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Modal from './Modal';
import ContactForm from './contact-form';
import { TryDemoForm } from './try-demo-form';

export const Header = () => {
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Solution', path: '/solution' },
  ]
  const [isContactFormOpen, setIsContactFormOpen] = useState(true);
  const openContactForm = () => setIsContactFormOpen(true);
  const closeContactForm = () => setIsContactFormOpen(false);

  const [isTryDemoFormOpen, setIsTryDemoFormOpen] = useState(false);
  const openTryDemoForm = () => setIsTryDemoFormOpen(true);
  const closeTryDemoForm = () => setIsTryDemoFormOpen(false);

  return (
    <>
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

            <button onClick={openContactForm} className="text-secondary font-semibold text-sm mx-4 py-2 hover:border-b-2 hover:border-b-primary">Contact</button>
            <button onClick={openTryDemoForm} className="text-secondary font-semibold text-sm mx-4 py-2 hover:border-b-2 hover:border-b-primary">Try Demo</button>
            {/* Rounded background download button */}
            <Link href="#" className="bg-secondary text-white font-semibold ml-8 text-sm py-2 px-6 rounded-full  hover:bg-primary">
              Download
            </Link>

          </div>
        </div>
      </header>

      {isContactFormOpen && (
        <Modal onClose={closeContactForm}>
          <div className="flex flex-row bg-white">
            <img src="modal-bg.png" alt="Empower your workforce" className="w-[305px]" />
            <ContactForm />
          </div>
        </Modal>
      )}

      {isTryDemoFormOpen && (
        <Modal onClose={closeTryDemoForm}>
          <div className="flex flex-row bg-white">
            <img src="modal-bg.png" alt="Empower your workforce" className="w-[305px]" />
            <TryDemoForm />
          </div>
        </Modal>
      )}
    </>
  );
}

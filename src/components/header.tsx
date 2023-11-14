'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Modal from './Modal';
import ContactForm from './contact-form';
import { TryDemoForm } from './try-demo-form';
import { useDispatch, useSelector } from 'react-redux';
import { closeContactForm, closeTryDemoForm, openContactForm, openTryDemoForm, selectIsContactFormModalOpen, selectIsTryDemoFormModalOpen } from '../store/slices/modal.slice';

export const Header = () => {
  const isContactFormOpen = useSelector(selectIsContactFormModalOpen);
  const isTryDemoFormOpen = useSelector(selectIsTryDemoFormModalOpen);

  const dispatch = useDispatch();

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Solution', path: '/solution' },
  ];

  /* Contact Form */
  const openContactFormModal = () => dispatch(openContactForm());
  const closeContactModal = () => dispatch(closeContactForm());

  /* Try Demo Form */
  const openTryDemoFormModal = () => dispatch(openTryDemoForm());
  const closeTryDemoModal = () => dispatch(closeTryDemoForm());

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="bg-white min-h-[64px] flex">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
          {/* Logo on the left */}
          <Link className="flex items-center" href={'/'}>
            <img src="/logo.png" alt="Logo" className="h-[56px]" />
          </Link>

          <div className="md:hidden">
            {/* Hamburger Menu Icon for Mobile */}
            <button onClick={toggleMobileMenu} className="text-secondary text-2xl">
              ☰
            </button>
          </div>

          <div className={`hidden md:flex items-center ${isMobileMenuOpen ? 'hidden' : ''}`}>
            {/* Links on the right (for larger screens) */}
            <nav>
              {navLinks.map((link) => (
                <Link
                  href={link.path}
                  key={link.title}
                  className="text-secondary font-semibold text-sm mx-4 py-2 hover:border-b-2 hover:border-b-primary"
                >
                  {link.title}
                </Link>
              ))}
            </nav>

            <button onClick={openContactFormModal} className="text-secondary font-semibold text-sm mx-4 py-2 hover:border-b-2 hover.border-b-primary">
              Contact
            </button>
            <button onClick={openTryDemoFormModal} className="text-secondary font-semibold text-sm mx-4 py-2 hover:border-b-2 hover.border-b-primary">
              Try Demo
            </button>

            <Link target="_blank" href="https://staging.portal.jeeth.co.in/" className="bg-primary text-white font-semibold ml-8 text-sm py-2 px-6 rounded-full hover:bg-secondary">
              Login
            </Link>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <nav className="bg-white p-4 flex flex-col items-start">
            {navLinks.map((link) => (
              <Link href={link.path} key={link.title} className="block text-secondary font-semibold text-sm py-2 hover.border-b-2 hover.border-b-primary">
                {link.title}
              </Link>
            ))}
            <button onClick={openContactFormModal} className="text-secondary font-semibold text-sm py-2 hover:border-b-2 hover.border-b-primary">
              Contact
            </button>
            <button onClick={openTryDemoFormModal} className="text-secondary font-semibold text-sm py-2 hover:border-b-2 hover.border-b-primary">
              Try Demo
            </button>

            <Link href="#" className="bg-secondary text-white font-semibold text-sm py-2 px-6 rounded-full hover:bg-primary">
              Download
            </Link>
          </nav>
        </div>
      )}

      {isContactFormOpen && (
        <Modal onClose={closeContactModal}>
          <div className="flex flex-row bg-white">
            <img className="hidden md:block w-[305px]" src="modal-bg.png" alt="Empower your workforce" />
            <ContactForm />
          </div>
        </Modal>
      )}

      {isTryDemoFormOpen && (
        <Modal onClose={closeTryDemoModal}>
          <div className="flex flex-row bg-white">
            <img className="hidden md:block w-[305px]" src="modal-bg.png" alt="Empower your workforce" />
            <TryDemoForm />
          </div>
        </Modal>
      )}
    </>
  );
};

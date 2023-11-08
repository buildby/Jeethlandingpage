'use client';
import React from 'react';

const Modal = ({ onClose, children }: {
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto">
      <div className="relative mx-auto max-w-md w-full">
        <div className="bg-white rounded-lg shadow-xl">
          <div className="p-4">{children}</div>
          <div className="p-4 bg-gray-100 flex justify-end">
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

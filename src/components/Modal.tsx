import React from 'react';

const Modal = ({ onClose, children }: {
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative mx-auto">
        <div className="p-0 flex justify-end">
          <button onClick={onClose} className="text-white focus:outline-none">Close</button>
        </div>
        <div className="bg-white rounded-3xl shadow-xl">
          <div className="p-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

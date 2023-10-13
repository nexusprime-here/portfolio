'use client'

import { useState } from 'react';

function StartModal() {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-60 z-[60] ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
        <p className="text-2xl font-semibold mb-4 text-white">Click here to start</p>
    </div>
  );
}

export default StartModal;

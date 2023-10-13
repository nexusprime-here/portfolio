'use client'

import { useState } from 'react';

function StartModal() {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-70 z-50 ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-white p-6 rounded-lg text-center">
        <p className="text-lg font-semibold mb-4">Click here to start</p>
        <button
          onClick={closeModal}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default StartModal;

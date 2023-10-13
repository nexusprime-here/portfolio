'use client'

import { useState } from 'react';

function StartModal() {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div
		data-open={isOpen}
		className='fixed top-0 left-0 w-full h-full data-[open=false]:hidden flex justify-center items-center bg-black bg-opacity-80 backdrop-blur-md z-[60]'
		onClick={closeModal}
		id='start-modal'
    >
        <p className="text-6xl mb-4 text-white">Click here to start</p>
    </div>
  );
}

export default StartModal;

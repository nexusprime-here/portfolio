'use client'

import { useState } from 'react';

function CustomMouse() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (event) => {
    setMousePos({ x: event.clientX, y: event.clientY });
  }

  return <div style={{ top: mousePos.y, left: mousePos.x }} className='fixed z-[9999] w-10 h-10 bg-red-500' onMouseMove={onMouseMove}>

  </div>
}

export default CustomMouse;

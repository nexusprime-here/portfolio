'use client';

import Image from "next/image";
import { cn } from '@/lib/utils';
import Start from "./sections/start";
import About from "./sections/about";
import Contact from "./sections/contact";
import Timeline from "./sections/timeline";
import { Projects } from "./sections/projects";

export default function Home() {
  return (
    <>
      <Start />
      <About />
      <Timeline />
      <Projects />
      <Contact />
    </>
  )
}

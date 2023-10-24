'use client'

import { Section } from "@/components/section";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { Avatar } from "@/components/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

export default function Home() {
	return (
		<>
			<Section id="home" className="flex flex-col items-center justify-center">
				<div className="flex flex-col items-center">
					<h1 className="text-4xl sm:text-6xl lg:text-[5rem] select-none font-mono font-light">
						Nexus Prime
					</h1>
					<p className="lg:text-2xl select-none font-extralight">
						Fullstack Developer
					</p>
				</div>

				<div className="grid grid-cols-3 grid-rows-2 sm:flex sm:flex-row sm:space-x-10 mt-16">
					<LangIcon className="row-start-1 col-start-2" name="zig" svg />
					<LangIcon className="row-start-2 col-start-1" name="js" svg />
					<LangIcon className="row-start-2 col-start-3" name="py" svg />
				</div>
			</Section>

			<Section
				id="aboutme"
				className="relative flex flex-col sm:space-x-1 md:space-x-20 sm:flex-row items-center justify-center"
			>
				<div>
					<Avatar className="h-28 w-28 md:h-60 md:w-60">
						<AvatarImage src="/avatar.jpeg" />
					</Avatar>
				</div>

				<main className="md:w-[40%]">
					<h3 className="font-semibold w-full text-center">About me</h3>
					<p className="mt-4 text-center">
						I&apos;m very dedicated to my profession as a programmer, but I also have a strong ability in team planning and organization.
						<br />
						My real name is Nícolas Estevão, and I&apos;m currently 18 years old.
						My primary language is Javascript, but I also often work with Zig and Python.
					</p>
					<br />
					<h5 className="font-semibold">Other things about me:</h5>
					<ul className="list-disc ml-10">
						<li>Working on dropshipping stores using Shopify</li>
						<li>Interest in compilers and interpreters</li>
						<li>Learning about performance in JS</li>
						<li>Using Next.js in my web applications</li>
						<li>Using the superset Typescript</li>
					</ul>
				</main>
			</Section>
		</>
	)
}

function LangIcon({ svg, png, name, className }: { svg?: boolean, png?: boolean, name: string, className?: string }) {
	return (
		<div className={twMerge(
			"rounded-full border border-gray-400 p-4 backdrop-blur-sm",
			className
		)}>
			<div className="h-full flex items-center justify-center">
				<Image
					src={`/icons/${name}.${svg ? 'svg' : png ? 'png' : ''}`}
					className="rounded-sm"
					alt={name}
					width={28}
					height={28}
				/>
			</div>
		</div>
	)
}
'use client'

import ChevronDown from "@/components/ChevronDown";
import { Section } from "@/components/section";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { Avatar } from "@/components/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

export default function Home() {
	return (
		<>
			<Section id="home" className="h-full w-full flex flex-col items-center justify-center">
				<div className="flex flex-col items-center">
					<h1 className="text-4xl sm:text-6xl lg:text-[5rem] select-none font-mono font-light">
						Nexus Prime
					</h1>
					<p className="lg:text-2xl select-none font-extralight">
						Fullstack Developer
					</p>
				</div>

				<div className="grid grid-cols-3 grid-rows-2 sm:flex sm:flex-row sm:space-x-10 mt-16">
					<LangIcon name="zig" svg className="row-start-1 col-start-2" />
					<LangIcon name="js" svg className="row-start-2 col-start-1" />
					<LangIcon name="py" svg className="row-start-2 col-start-3" />
				</div>
			</Section>

			<Section id="aboutme" className="relative h-full w-full flex items-center justify-center">
				<Avatar className="h-60 w-60">
					<AvatarImage src="/avatar.webp" />
				</Avatar>

				<main className="ml-32" >
					<ul className="list-disc space-y-2">
						<li>Minha linguagem principal é Javascript</li>
						<li>Trabalhando em lojas dropshipping usando Shopify</li>
						<li>Interesse em compiladores e interpretadores</li>
						<li>Tenho 18 anos atualmente</li>
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
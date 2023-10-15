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
					<LangIcon className="row-start-1 col-start-2" name="zig" svg />
					<LangIcon className="row-start-2 col-start-1" name="js" svg />
					<LangIcon className="row-start-2 col-start-3" name="py" svg />
				</div>
			</Section>

			<Section 
				id="aboutme" 
				className="relative h-full w-full flex flex-col sm:flex-row items-center justify-center space-x-2"
			>
				<div>
					<Avatar className="h-60 w-60">
						<AvatarImage src="/avatar.jpeg" />
					</Avatar>

					<p className="text-xs">"Você não é nada sozinho, acredite nas pessoas!"</p>
				</div>

				<main className="w-[40%]">
				<h1 className="font-semibold text-xl w-full text-center">About me</h1>

					<p className="mt-5">
						Me dedico muito à minha profissão como programador, mas também tenho grande
						capacidade de planejamento e organização de equipe. 
						<br />
						Meu nome real é Nícolas Estevão, e eu tenho 18 anos atualmente.
						Minha principal linguagem é Javascript, mas eu também costumo trabalhar
						com Zig e Python.
					</p>
					<br />
					
					Outras coisas sobre mim:
					<ul className="list-disc space-y-2">
						<li>Trabalhando em lojas dropshipping usando Shopify</li>
						<li>Interesse em compiladores e interpretadores</li>
						<li>Aprendendo sobre performance em JS</li>
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
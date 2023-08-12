import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import Profile from "./profile";
import { Card, CardHeader, CardDescription, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

function Panel() {
	return (
		<Section className="
			sm:grid sm:grid-cols-[35%,auto] sm:grid-rows-4
		">
			<Profile className="row-span-1 sm:row-span-4" />
			<MyWork />
			<div className="grid grid-cols-2">
				<Languages />
				<Techs />
			</div>
		</Section>
	)
}

export default Panel;

function MyWork() {
	return (
		<Card className="row-span-2">
			<CardHeader>
				<CardDescription>Meu trabalho</CardDescription>
			</CardHeader>
			<CardContent>
				sou desenvolvedor Fullstack a mais de 3 anos. Criei muitos projetos que estão disponíveis aqui mesmo, e estou sempre em busca de novos conhecimentos!
			</CardContent>
		</Card>
	)
}

function Languages() {
	const langs = [
		{
			name: "Javascript",
			icon: "js.svg",
			redirect: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/"
		},
		{
			name: "Zig",
			icon: "zig.svg",
			redirect: "https://ziglang.org/"
		},
		{
			name: "Python",
			icon: "py.svg",
			redirect: "https://www.python.org/"
		}
	];

	return (
		<Card>
			<CardHeader>
				<CardDescription>Linguagens</CardDescription>
			</CardHeader>

			<CardContent className="flex justify-around space-x-2">
				{langs.map(l => (
					<HoverCard key={l.name}>
						<HoverCardTrigger>
							<Image
								src={`/icons/${l.icon}`}
								alt={`${l.name} img`}
								height={35}
								width={35}
							/>
						</HoverCardTrigger>
						<HoverCardContent>
							eita
						</HoverCardContent>
					</HoverCard>
				))}
			</CardContent>
		</Card>
	)
}
function Techs() {
	const techs = [
		{
			name: "Typescript",
			icon: "ts.svg",
			redirect: "https://www.typescriptlang.org/"
		},
		{
			name: "React",
			icon: "react.png",
			redirect: "https://react.dev/"
		},
		{
			name: "Expo",
			icon: "expo.png",
			redirect: "https://expo.dev/"
		},
		{
			name: "Nextjs",
			icon: "nextjs.png",
			redirect: "https://nextjs.org/"
		},
		{
			name: "Node",
			icon: "node.png",
			redirect: "https://nodejs.org/"
		}
	];

	return (
		<Card>
			<CardHeader>
				<CardDescription>Tecnologias</CardDescription>
			</CardHeader>
			<CardContent>
				<ScrollArea className="flex">
					{techs.map(t => (
						<HoverCard key={t.name}>
							<HoverCardTrigger>
								<Image
									src={`/icons/${t.icon}`}
									alt={`${t.name} img`}
									height={35}
									width={35}
								/>
							</HoverCardTrigger>
							<HoverCardContent>
								eita
							</HoverCardContent>
						</HoverCard>
					))}
				</ScrollArea>
			</CardContent>
		</Card>
	)
}
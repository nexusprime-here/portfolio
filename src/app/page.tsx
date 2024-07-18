'use client';

import { Section } from "@/components/section";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ContractRole } from "@/constants";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from 'lucide-react';
import { Projects } from "./sections";

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

        <div className="grid grid-cols-2 grid-rows-2 sm:flex sm:flex-row sm:space-x-10 mt-16">
          <LangIcon className="row-start-1 col-start-2" name="zig" svg />
          <LangIcon className="row-start-2 col-start-1" name="js" svg />
          <LangIcon className="row-start-2 col-start-3" name="py" svg />
          <LangIcon className="row-start-2 col-start-3" name="lua" svg />
        </div>
      </Section>

      <Section
        id="about"
        className="relative flex flex-col"
      >
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-4xl flex md:text-6xl w-3/4 md:w-1/2 mt-16 text-center">Já são 5 anos à seu serviço!</h1>
          <h4 className="text-foreground/60 font-light text-sm text-center mt-2 md:mt-0 md:text-xl w-2/3 md:w-auto">Sempre aprendendo algo novo e trabalhando em novas ideias</h4>
          <Button className="md:w-36 md:h-12 text md:text-lg mt-8" asChild><Link href='#contact'>Me contate</Link></Button>
        </div>
        <div className="flex flex-row space-x-3 md:space-x-6 mt-0 md:mt-10 justify-evenly w-full md:w-auto overflow-x-scroll md:overflow-x-visible">
          <ACard
            title="Websites"
            description="Sites avançados com elementos 3D e componentes interativos usando React e NextJS"
            icons={[
              { src: 'js.svg', alt: 'Javascript' },
              { src: 'react.png', alt: "React" },
              { src: 'nextjs.png', alt: 'NextJs' }
            ]}
          />
          <ACard
            title="Data Science"
            description="Machine Learning and other tricks using High-Level technologies, like Python and Mojo"
            icons={[{ src: 'py.svg', alt: 'Python' }, { src: 'mojo.svg', alt: 'Mojo' }]}
          />
          <ACard
            title="Games"
            description="Roblox Studio, MTA and Godot Engine experience using Lua, Typescript and GDScript"
            icons={[{ src: 'lua.svg', alt: 'Lua' }, { src: 'gdscript', alt: 'GDScript' }]}
          />
          <ACard
            title="Low-Level Programs"
            description="Programas com alta performance usando linguagens de baixo nível como Zig"
            icons={[
              { src: 'zig.svg', alt: 'Zig' }
            ]}
          />
        </div>
      {/*   <div className="flex flex-row mt-16 md:px-20 [&>#separator]:mx-16 [&>div>p]:text-center [&>div>p]:text-foreground/80 [&>div>h4]:font-bold [&>div>h4]:mb-2 [&>div]:flex [&>div]:flex-col [&>div]:items-center"> */}
      {/*     <div> */}
      {/*       <h4>Me</h4> */}
      {/*       <p> */}
      {/*         Meu nome real é Nícolas Estevão. Tenho atualmente 19 anos e estou cursando Data Science na Fatec. */}
      {/*         Comecei desde cedo a pensar em empreender, por causa do buffet que meu pai tinha em minha infância. */}
      {/*         Minha língua nativa é Português do Brasil, mas também posso falar em Ingles. */}
      {/*         Meu objetivo de vida, é empreender. Criar projetos que sejam úteis para a sociedade, */}
      {/*         investir em idéias e pessoas capazes e capacitar micro empresas a crescer sem precedentes. */}
      {/*       </p> */}
      {/*     </div> */}
      {/*     <Separator orientation="vertical" /> */}
      {/*     <div> */}
      {/*       <h4>Work</h4> */}
      {/*       <p> */}
      {/*         Comecei a estudar Web Desenvolvimento em 2019, com conteúdos gratuitos na internet, */}
      {/*         e desde então estudo da mesma forma, buscando em fóruns e comunidades o que eu preciso aprender. */}
      {/*         Em meu tempo livre, estou sempre me dedicando a produzir uma nova idéia e construir um novo projeto, */}
      {/*         então sempre estou praticando. O que me torna diferente de muitos desenvolvedores, */}
      {/*         é minha obcessão ao meu trabalho, pois estou sempre me dedicando muito a aprender mais um pouco sobre tecnologia. */}
      {/*       </p> */}
      {/*     </div> */}
      {/*   </div> */}
      </Section>
      <Projects />
      <Section id="contact">
        <form action={console.log} className="2xl:px-[50vh] xl:px-[30vh] md:px-[10vh] pt-36 sm:space-y-5 space-y-2">
          <div className="flex flex-col items-center mb-14">
            <h1 className="font-bold sm:text-4xl text-2xl">Me envie uma mensagem!</h1>
            <h3 className="sm:text-2xl text-lg">Será um prazer conhecê-lo</h3>
          </div>
          <div className="flex flex-row sm:space-x-5 space-x-2">
            <Input placeholder="De:" className="sm:text-lg sm:h-12" />
            <Select>
              <SelectTrigger className="sm:h-12">
                <SelectValue className="text-lg bg-red-500" placeholder="Do que você precisa?" />
              </SelectTrigger>
              <SelectContent className="text-lg">
                <SelectItem value={ContractRole.FullstackDev}>Programador Fullstack</SelectItem>
                <SelectItem value={ContractRole.GameDev}>Programador de Games</SelectItem>
                <SelectItem value={ContractRole.DataScienceDev}>Programador Data Science</SelectItem>
                <SelectItem value={ContractRole.Marketing}>Marketing Digital</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Textarea className="h-56 sm:text-lg" placeholder="Me conte mais.." />

          <Button type="submit" className="sm:h-12 sm:w-64 sm:text-lg">
            Enviar
            <ArrowRight className="ml-2" height={20} width={20}/>
          </Button>
        </form>
      </Section>
    </>
  )
}

function ACard({ title, description, icons, className }: { title: string, description: string, icons: { src: string, alt: string }[], className?: string }) {
  return (
    <CardContainer className={cn('h-10', className)}>
      <CardBody className="relative border border-white/20 rounded-[.5rem] p-1 md:p-6 pt-4 md:pt-12 flex flex-col items-center h-40 md:h-52 w-48 md:w-auto">
        <CardItem as='h4' translateZ='140' className="font-bold mb-2 text-sm md:text-xl">{title}</CardItem>
        <CardItem as='p' translateZ='120' className="text-center text-foreground/80 text-xs md:text-sm">{description}</CardItem>
        <CardItem translateZ="120" className="flex flex-row space-x-5 mt-4">
          {icons.map((img, i) => <Image key={i} width={25} height={25} className="rounded w-[17px]" src={`/icons/${img.src}`} alt={img.alt} />)}
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}

function LangIcon({ svg, png, name, className }: { svg?: boolean, png?: boolean, name: string, className?: string }) {
  return (
    <div className={cn(
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

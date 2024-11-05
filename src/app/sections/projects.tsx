import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PRIVATE_REPO = Symbol();

const projects = [
  { 
    name: 'Chateau d France',
    description: 'Website empresarial para um buffet de crepe que atende a cidade são paulo e arredores.',
    repo: PRIVATE_REPO,
    view: 'https://www.chateaudfrance.com.br/'
  },
  {
    name: 'CMDK - Discord',
    description: 'Script instalável no Discord, que permite o usuário extender as funcionalidades do atalho “Ctrl + K”. Instalando este plugin, será possivel não somente ir para páginas de usuários/servidores/canais, mas também habilitar e desabilitar configurações de usuário e gerenciar configurações de servidor.',
    repo: PRIVATE_REPO,
  },
  {
    name: "Neo",
    description: "Linguagem de programação fortemente tipada sem runtime para transpilação, com um forte LSP para ser usado em contextos com linguagens faltando features ou com um LSP fraco",
    repo: "https://github.com/overheat-org/neo"
  },
  {
    name: "Newvim",
    description: "IDE vim based de janela para Mac, Windows e Linux.",
    repo: "https://github.com/overheat-org/newvim"
  },
  {
    name: 'Diseact',
    description: 'Pacote javascript que implementa elementos JSX para criar componentes e comandos para o Discord.',
    repo: 'https://github.com/overheat-org/diseact'
  },
  {
    name: 'Site Zulu Main',
    description: 'Jogo roleplay do roblox de uma organização secreta responsável pela detecção e contenção de entidades, lugares e objetos que desafiam as leis da natureza chamados de "SCP". Trabalhei criando alguns componentes de interface gráfica e desenvolvi algumas IAs, os SCPs.',
    repo: PRIVATE_REPO,
    view: 'https://www.roblox.com/games/5608492409/SCP-Site-Zulu'
  },
  {
    name: 'Nexus Store',
    description: 'E-Commerce mobile',
    repo: 'https://github.com/nexusprime-here/nexus_store'
  },
  {
    name: 'Bony',
    description: 'Um bot de discord de uso único para o "Servidor da Fhany". Suas funcionalidades eram mais relacionadas à funcionalidades agradáveis para nitro boosters e utilidades para a dona do servidor. Esteve ativo entre 2020 à 2022.',
    repo: 'https://github.com/nexusprime-here/fhany_bot'
  },
];

export function Projects() {
  const ViewSourceBtn = ({ project }: { project: typeof projects[number] }) => {
    const isPrivate = project.repo == PRIVATE_REPO;
    console.log(project)
    const text = isPrivate ? 'Source Privado' : 'Ver Source';
    
    return <Button
      size="sm"
      disabled={isPrivate}
      asChild={!isPrivate}
    >
      {typeof project.repo == 'string'
        ? <Link href={project.repo}>{text}</Link>
        : text
      }
    </Button>
  }

  return <Section id="projects">
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center gap-y-5 sm:gap-y-20 lg:gap-y-40">
      {projects.map((p, i) => (
        <div key={i} className="border border-white/25 rounded-lg py-5 px-5 h-80 lg:w-[320px] grid grid-rows-5">
          <h3 className="text-center font-semibold">{p.name}</h3>
          <p className="text-white/80 row-span-3 overflow-hidden">{p.description}</p>
          <div className="flex items-center justify-around">
            <ViewSourceBtn project={p} />
            {p.view ? <Button size="sm" asChild><Link href={p.view}>Ver Projeto</Link></Button> : null}
          </div>
        </div>
      ))}
    </div>
  </Section>
}

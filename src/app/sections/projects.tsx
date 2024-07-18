import { Section } from "@/components/section";
import { describe } from "node:test";

const PRIVATE_REPO = Symbol();

const projects = [
  { 
    name: 'Chateau d France',
    description: 'Website empresarial para um buffet de crepe que atende a cidade são paulo e arredores.',
    repo: PRIVATE_REPO,
    view: 'https://www.chateaudfrance.com.br/'
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
  {
    name: 'Diseact',
    description: 'Pacote javascript que implementa elementos JSX para criar componentes e comandos para o Discord.',
    repo: 'https://github.com/overheat-org/diseact'
  },
  {
    name: 'CMDK - Discord',
    description: 'Script instalável no Discord, que permite o usuário extender as funcionalidades do atalho “Ctrl + K”. Instalando este plugin, será possivel não somente ir para páginas de usuários/servidores/canais, mas também habilitar e desabilitar configurações de usuário, gerenciar configurações de servidor e facilitar a navegação entre páginas do Discord. Ainda está em desenvolvimento.',
    repo: PRIVATE_REPO,
  }
]

export function Projects() {
  return <Section id="projects">
    <div className="grid grid-cols-2 md:grid-cols-4">
      {projects.map(p => (
        <div className="border border-white/2">
          <h3>{p.name}</h3>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  </Section>
}

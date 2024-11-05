import {} from 'framer-motion'
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { ACard } from "../page";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

function About() {
    return (
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
            <div className="flex flex-row mt-16 md:px-20 [&>#separator]:mx-16 [&>div>p]:text-justify [&>div>p]:text-foreground/80 [&>div>h4]:font-bold [&>div>h4]:mb-2 [&>div]:flex [&>div]:flex-col [&>div]:items-center">
              <div>
                <h4>Me</h4>
                <p>
                  Meu nome é Nícolas Estevão. Tenho atualmente 19 anos e estou cursando Administração.
                  Comecei desde cedo a pensar em empreender, por causa do buffet que meu pai tinha em minha infância.
                  Minha língua nativa é Português do Brasil, mas também posso me comunicar em Ingles.
                  Meu objetivo de vida é empreender. Criar projetos que sejam úteis para a sociedade,
                  investir em idéias e pessoas capazes para capacitar startups a surgirem e se desenvolverem.
                </p>
              </div>
              <Separator orientation="vertical" />
              <div>
                <h4>Work</h4>
                <p>
                  Comecei a estudar Web Desenvolvimento em 2019, com conteúdos gratuitos na internet,
                  e desde então estudo da mesma forma, buscando em fóruns e comunidades o que eu preciso aprender.
                  Em meu tempo livre, estou sempre me dedicando a produzir uma nova idéia e construir um novo projeto,
                  então sempre estou praticando. O que me torna diferente de muitos desenvolvedores,
                  é minha obcessão ao meu trabalho, minha grande capacidade de me socializar, e minha criatividade sem precedentes.
                </p>
              </div>
            </div>
        </Section>
    )
}

export default About;

const AnimatedText = ({ text }: { text: string }) => {
    return (
      <div style={{ display: "flex" }}>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: index * 0.1, // Ajuste o delay entre as letras
              duration: 0.5, // Duração do fade in para cada letra
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    );
  };
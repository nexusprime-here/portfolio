import { Section } from "@/components/section";
import { TimelineEntry, Timeline as Tl } from "@/components/ui/timeline";

const data: TimelineEntry[] = [
    {
        title: "Novembro de 2018",
        content: "Começando a aprender programação com JavaScript, HTML e CSS por conta própria"
    },
    {
        title: "Março de 2019",
        content: "Usando NodeJS e consumindo API do Discord"
    },
    {
        title: "Novembro de 2020",
        content: "Aprendendo React para começar a produzir websites mais complexos"
    },
    {
        title: "2020",
        content: "Aprendendo lua e explorando a engine do roblox"
    },
    {
        title: "Janeiro de 2021",
        content: "Deltha Ad: Começando meu primeiro projeto complexo, esse projeto era uma forma de monetizar servidor de Discord com anúncios, mas para não atrapalhar meus estudos acabei tendo que cancelá-lo."
    },
    {
        title: "Julho de 2022",
        content: "Estudando sobre interpretadores e compiladores"
    },
    {
        title: "2023",
        content: "Aprendendo a linguagem Zig"
    }
]

function Timeline() {
    return <Section id="timeline" className="overflow-hidden">
        <Tl data={data} />
    </Section>
}

export default Timeline;
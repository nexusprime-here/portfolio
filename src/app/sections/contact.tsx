import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ContractRole } from "@/constants";
import { ArrowRight } from "lucide-react";

function Contact() {
    return (
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
                <SelectItem value={ContractRole.Administrator}>Administrador</SelectItem>
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
    )
}

export default Contact;
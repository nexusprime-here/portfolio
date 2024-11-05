import { motion } from 'framer-motion';
import { Section } from "@/components/section";

function Start() {
    return (
        <Section id="start" className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <motion.h1 
            transition={{ delay: .3, duration: .3, type: 'spring' }}
            initial={{ scale: 0 }} 
            whileInView={{ scale: 1 }} 
            className="text-4xl sm:text-6xl lg:text-[5rem] select-none font-mono font-light"
          >
            Nexus Prime
          </motion.h1>
          <p className="lg:text-2xl select-none font-extralight">
            Desenvolvedor Fullstack & Administrador
          </p>
        </div>
      </Section>
    )
}

export default Start;
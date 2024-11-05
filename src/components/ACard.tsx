'use client'

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { cn } from "@/lib/utils"
import Image from "next/image"

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

export default ACard
import type React from "react"
import Image from "next/image"
import type { StaticImageData } from "next/image"

type Icon = {
  src?: string | StaticImageData
  component?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  url?: string
  alt?: string
}

type ExperienceBlockProps = {
  title?: string
  company?: string
  date?: string
  description?: string
  logo?: Icon
  skills?: string
}

const ExperienceBlock: React.FC<ExperienceBlockProps> = ({ title, company, date, description, logo, skills }) => {
  if (!logo?.src) {
    return null
  }

  const imageAlt = logo?.alt || title || "Company logo"

  return (
    <section className="bg-gray-950 w-full">
      <div className="container">
        <div className="border-2 border-orange-400 rounded-lg p-6 block w-full h-auto min-h-[200px] ml-4">
          <div className="flex">
            <div className="rounded-lg">
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={imageAlt}
                width={80}
                height={80}
                className="object-contain rounded-lg"
              />
            </div>

            <div className="text-left ml-4">
              <h2 className="text-2xl font-semibold text-gray-200">{title}</h2>
              <h3 className="text-1xl font-semibold text-gray-400">{company}</h3>
              <h3 className="text-xs font-semibold text-gray-400">{date}</h3>
            </div>
          </div>
          <div className="text-gray-200 mt-2 text-left">
            <p>{description}</p>
          </div>
          <div className="text-gray-200 text-left mt-1 font-bold">
            <p>{skills}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceBlock

import type React from "react"
import Image from "next/image"
import type { StaticImageData } from "next/image"

type Icon = {
  src?: string | StaticImageData
  component?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  url?: string
  alt?: string
}

type EducationBlockProps = {
  univ?: string
  major?: string
  date?: string
  description?: string
  logo?: Icon
  courses?: string
  grade?: string
}

const EducationBlock: React.FC<EducationBlockProps> = ({ univ, major, date, description, logo, courses, grade }) => {
  if (!logo?.src) {
    return null
  }

  const imageAlt = logo?.alt || univ || "univ logo"

  return (
    <section className="bg-gray-950 w-full">
      <div className="container">
        <div className="border-2 border-orange-400 rounded-lg p-6 block w-full h-auto min-h-[200px] mr-4">
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
              <h2 className="text-2xl font-semibold text-gray-200">{univ}</h2>
              <h3 className="text-1xl font-semibold text-gray-400">{major}</h3>
              <h3 className="text-xs font-semibold text-gray-400">{date}</h3>
            </div>
          </div>
          <h3 className="text-sm font-bold text-gray-200 mt-2">Grade:{grade}</h3>
          <div className="text-gray-200 text-left">
            <p>{description}</p>
          </div>
          <div className="text-gray-200 text-left mt-1 font-bold">
            <p>{courses}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationBlock

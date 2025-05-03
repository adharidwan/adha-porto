import React from "react"
import Image from "next/image"
import type { StaticImageData } from "next/image"

type Icon = {
  src?: string | StaticImageData
  component?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  url?: string
  alt?: string
}

interface TechBadgeProps {
  name: string
  icon?: Icon
}

const TechBadge: React.FC<TechBadgeProps> = ({ name, icon }) => (
  <div className="flex items-center gap-2 px-3 py-2 bg-gray-900 rounded-lg w-full hover:bg-gray-800 transition-colors h-full">
    <div className="w-6 h-6 flex-shrink-0">
      {icon?.src && (
        <Image
          src={icon.src || "/placeholder.svg"}
          alt={icon.alt || name}
          width={24}
          height={24}
          className="object-contain w-full h-full"
        />
      )}
      {icon?.component && React.createElement(icon.component, { width: 24, height: 24, className: "text-current" })}
      {icon?.url && (
        <Image
          src={icon.url || "/placeholder.svg"}
          alt={icon.alt || name}
          width={24}
          height={24}
          className="object-contain w-full h-full"
        />
      )}
    </div>
    <span className="text-gray-300 text-sm truncate">{name}</span>
  </div>
)

interface TechStackProps {
  title?: string
  badges: TechBadgeProps[]
}

const TechStack: React.FC<TechStackProps> = ({ title, badges }) => {
  return (
    <div className="border-2 border-orange-400 rounded-lg p-4 md:p-6 h-full flex flex-col">
      <h2 className="text-center text-2xl md:text-4xl font-semibold text-gray-300 mb-4 md:mb-6">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-4 auto-rows-fr">
        {badges.map((badge, index) => (
          <TechBadge key={badge.name + index} icon={badge.icon} name={badge.name} />
        ))}
      </div>
    </div>
  )
}

export default TechStack

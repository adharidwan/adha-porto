// TechStack.tsx
import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

type Icon = {
  src?: string | StaticImageData;
  component?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  url?: string;
  alt?: string;
};

interface TechBadgeProps {
  name: string;
  icon?: Icon;
}

const TechBadge: React.FC<TechBadgeProps> = ({ name, icon }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg">
    <div className="w-5 h-5">
      {icon?.src && (
        <Image src={icon.src} alt={icon.alt || name} width={80} height={80} className="object-contain" />
      )}
      {icon?.component && React.createElement(icon.component, { width: 40, height: 40, className: "text-current" })}
      {icon?.url && <img src={icon.url} alt={icon.alt || name} className="w-5 h-5 object-contain" />}
    </div>
    <span className="text-gray-300">{name}</span>
  </div>
);

interface TechStackProps {
  title?: string;
  badges: TechBadgeProps[];  // Accept badges as a prop
  isLast?: boolean;
}

const TechStack: React.FC<TechStackProps> = ({ title, badges,isLast }) => {
  return (
    <section className="bg-gray-950 py-2">
      <div className="container mx-auto text-center">
        <div className="border-2 border-orange-400 rounded-lg p-6 inline-block h-64">
          <h2 className="text-4xl font-semibold text-gray-300 mb-6">{title}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3">
            {badges.map((badge, index) => (
              <div key={badge.name + index} className='w-40'>
                <TechBadge name={badge.name} icon={badge.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

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
    <div className="w-6 h-6">
      {icon?.src && (
        <Image src={icon.src} alt={icon.alt || name} width={80} height={80} className="object-contain" />
      )}
      {icon?.component && React.createElement (icon.component, { width: 40, height: 40, className: "text-current" })}
      {icon?.url && <Image src={icon.url} alt={icon.alt || name} className="w-5 h-5 object-contain" />}
    </div>
    <span className="text-gray-300">{name}</span>
  </div>
);

interface TechStackProps {
  title?: string;
  badges: TechBadgeProps[];
}

const TechStack: React.FC<TechStackProps> = ({ title, badges }) => {
  return (
    <div className="border-2 border-orange-400 rounded-lg p-6">
      <h2 className="text-center text-4xl font-semibold text-gray-300 mb-6">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {badges.map((badge, index) => (
          <div key={badge.name + index} className='w-40'>
            <TechBadge key={badge.name + index} icon={badge.icon} name={badge.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;

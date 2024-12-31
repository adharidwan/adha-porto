import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

type Icon = {
    src?: string | StaticImageData;
    component?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    url?: string;
    alt?: string;
};

type EducationBlockProps = {
    major?: string;
    univ?: string;
    date?: string;
    description?: string;
    logo?: Icon;
    courses?: string;
}

const EducationBlock: React.FC<EducationBlockProps> = ({ major, univ, date, description, logo,courses}) => {
    if (!logo?.src) {
        return null;
    }

    const imageAlt = logo?.alt || major || 'univ logo';


    return(
        <section className="bg-gray-950">
            <div className="container ">
                <div className='border-2 border-orange-400 rounded-lg p-6 block w-full md:w-[800px] h-auto min-h-[200px] ml-8'>
                    <div className='flex'>
                        <div className='rounded-lg'>
                            <Image src={logo.src} alt={imageAlt} width={80} height={80} className="object-contain rounded-lg" />
                        </div>

                        <div className='text-left ml-4'>
                            <h2 className='text-2xl font-semibold text-gray-200'>{major}</h2>
                            <h3 className='text-1xl font-semibold text-gray-400'>{univ}</h3>
                            <h3 className='text-xs font-semibold text-gray-400'>{date}</h3>
                        </div>
                    </div>
                    <div className='text-gray-200 mt-2 text-left'>
                        <p>{description}</p>
                    </div>
                    <div className='text-gray-200 text-left mt-1 font-bold'>
                        <p>{courses}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EducationBlock;
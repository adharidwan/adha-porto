import React from 'react';

type TimelineProps = {
    isLast?: boolean;
}

const Timeline: React.FC<TimelineProps> = ({ isLast = false }) => {
    return (
        <div>
            <div className="ml-32 top-4 w-3 h-3 bg-orange-400 rounded-full z-10" />
            {!isLast && (
                <div className="ml-[132px] top-7 w-0.5 h-52 bg-orange-500" />
            )}
        </div>
    );
}

export default Timeline;
import React from 'react';

type TimelineProps = {
    isLast?: boolean;
}

const Timeline: React.FC<TimelineProps> = ({ isLast = false }) => {
    return (
        <div>
            <div className="ml-[126px] w-4 h-4 bg-orange-400 rounded-full z-10 relative">
                <div className="absolute -inset-1 bg-orange-400/30 rounded-full animate-pulse" />
            </div>
            {!isLast && (
                <div className="ml-[132px] top-7 w-0.5 h-52 bg-gradient-to-b from-orange-500 to-orange-400/20 " />
            )}
        </div>
    );
}

export default Timeline;
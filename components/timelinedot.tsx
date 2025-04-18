import React from 'react';

type TimelineProps = {
    isLast?: boolean;
    position?: 'left' | 'right'; // Add position prop to determine which side the timeline is on
    gap?: number; // Gap in pixels between timeline and content block
}

const Timeline: React.FC<TimelineProps> = ({ 
    isLast = false, 
    position = 'left', // Default to left positioning
    gap = 16 // Default 16px gap (equivalent to ml-4 or mr-4)
}) => {
    // Create style object for the container based on position and gap
    const containerStyle: React.CSSProperties = {
        marginLeft: position === 'left' ? 0 : `${gap}px`,
        marginRight: position === 'right' ? 0 : `${gap}px`,
    };

    // Determine line position based on timeline position
    const linePosition = position === 'left' ? 'left-2' : 'right-2';

    return (
        <div className="relative" style={containerStyle}>
            <div className="w-4 h-4 bg-orange-400 rounded-full z-10 relative">
                <div className="absolute -inset-1 bg-orange-400/30 rounded-full animate-pulse" />
            </div>
            {!isLast && (
                <div className={`absolute ${linePosition} top-4 w-0.5 h-52 bg-gradient-to-b from-orange-500 to-orange-400/20`} />
            )}
        </div>
    );
}

export default Timeline;

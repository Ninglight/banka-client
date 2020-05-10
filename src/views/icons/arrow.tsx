import React from 'react'

type Props = {
    size?: number;
    rotation?: number;
    className?: string;
}

const ArrowIcon: React.FC<Props> = ({ size, rotation, className }) => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" transform={`rotate(${rotation})`} width={size} height={size} className={className} viewBox="0 0 24 24">
            <path fill="currentColor" d="M12.71,12.54a1,1,0,0,0-1.42,0l-3,3A1,1,0,0,0,9.71,17L12,14.66,14.29,17a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Zm-3-1.08L12,9.16l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-3-3a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,1.42,1.42Z"/>
        </svg>
    );
};

export default ArrowIcon;
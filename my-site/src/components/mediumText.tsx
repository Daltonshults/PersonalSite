import React from 'react';

type LargeTextProps=
{
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

const MediumText: React.FC<LargeTextProps> = ( { children, style }) => {
    return (
    <div
    style={
        {
            fontSize: "28px",
            fontWeight: "bold",
            ...style
        }
    }
    >
        {children}
    </div>
    )
}

export default MediumText;
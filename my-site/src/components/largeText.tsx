import React from 'react';

type LargeTextProps=
{
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

const LargeText: React.FC<LargeTextProps> = ( { children, style={fontSize: "47px", fontWeight: "bolder"} }) => {
    return (
    <div
    style={
        style
    }
    >
        {children}
    </div>
    )
}

export default LargeText;
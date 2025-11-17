import React from 'react';

type SmallTextProps=
{
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

const SmallText: React.FC<SmallTextProps> = ( { children, style={ fontSize: "24px", marginBottom: "1rem"} }) => {
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

export default SmallText;
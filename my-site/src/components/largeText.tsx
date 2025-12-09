import React from 'react';

type LargeTextProps=
{
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

const LargeText: React.FC<LargeTextProps> = ( { children, style }) => {
    return (
    <div
    style={ {
        fontSize: "47px",
        fontWeight: "bolder",
        ...style
        }
    }
    >
        {children}
    </div>
    )
}

export default LargeText;
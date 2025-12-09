import React from "react";
import SmallText from "./smallText";


type BulletPointsProps = {
  style?: React.CSSProperties;
  items: string[];
};

const BulletPoints: React.FC<BulletPointsProps> = ( { style, items} ) => {
    return (
        <ul
            style={
                {
                    margin: ".5rem 5rem 2.5rem 5rem",
                    ...style
                }
            }
        >
            {items.map((item, i) =>(
                <li key={i} style={style}><SmallText>{item}</SmallText></li>
            ))}
        </ul>   
    ) 
};

export default BulletPoints
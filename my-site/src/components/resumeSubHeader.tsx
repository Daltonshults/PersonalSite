import React from "react";
import MediumText from "./mediumText";

type SubHeaderProps = {
    children?: React.ReactNode
    style?: React.CSSProperties
};

const SubHeader: React.FC<SubHeaderProps> = ({ children, style }) => {
    return (
        <MediumText
            style={
                {
                    margin: "2.5rem 5rem 0rem 5rem",
                    ...style
                }
            }
        >{children}</MediumText>
    )
}

export default SubHeader
import React from "react";
import LargeText from "./largeText";


type ResumeHeaderProps = {
    children: React.ReactNode
    style?: React.CSSProperties
}

const ResumeHeader: React.FC<ResumeHeaderProps> = ( {children, style} ) => {
    return (
        <LargeText 
            style = {
                {
                    justifySelf: "center",
                    alignSelf: "center",
                    margin: "5rem",
                    ...style
                }
            }
            >{children}</LargeText>
    )
}

export default ResumeHeader;
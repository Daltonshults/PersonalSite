import React from "react";


const Footer: React.FC = () => {
    return (
        <div
            style={
                {
                    padding: "5rem",
                    height: "20rem",
                    display: "flex",
                    alignItems: "center"
                }
            }
        >
            <div
                style={{
                    padding: "5rem",
                    height: "20rem",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%"
                }}
            >
                <h1>Hello World!</h1>
                <h1>Hello World!</h1>
                <h1>Hello World!</h1>
            </div>
        </div>
    )
};

export default Footer;
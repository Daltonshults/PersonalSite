import React from "react";
import { useState } from "react";

const Header: React.FC = () => {

    const [hovered, setHovered] = useState<boolean>(false); 

    const titles: string[] = [ 
        "Summa Cum Laude", 
        "Computer Science", 
        "Dalton Shults",
        "Undergraduate Researcher", 
        "Full-Stack Developer"
    ];

    const rowH: number = 50;
    const REPEATS: number = 3;

    return (
        <header
        style={
            { 
                textAlign: "center", 
                padding: "10px", 
                backgroundColor: "#f5f5f5",
                overflow: "hidden",
                height: "350px"
            }
        }
        >
            <div style={
                    { 
                        display: "flex", 
                        flexDirection: "column", 
                        alignItems: "flex-start", 
                        gap: "5", 
                        whiteSpace: "nowrap"
                    }
                }
            >
            {
            Array.from( { length: REPEATS}).map( (_, repeatIndex) =>
            titles.map((text, i) => (
                <div key={i} style=
                {
                    { 
                        height: rowH, 
                        position: "relative", 
                        overflow: "visible" 
                    }
                }
                >
                    <div
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        style={
                            {
                                position: "absolute",
                                left: -50,
                                top: -350,
                                fontSize: text === "Dalton Shults" ? 56 : 36,
                                fontWeight: "bold",
                                whiteSpace: "nowrap",
                                transform: "rotate(13deg)",
                                transformOrigin: "left center",
                                color: hovered ? "rgb(150,150, 150)" : "rgb(0, 0, 0)",
                                transition: "color 0.3s ease",
                            }
                        }
                    >
                        {(`${text}` + "\u00A0\u00A0\u00A0").repeat(10)}
                    </div>
                </div>
            )))}
            </div>
        </header>
    );
};

export default Header;
import React from "react";
import { useState } from "react";
import { titles } from "../data/headerText";

const Header: React.FC = () => {

    const [hovered, setHovered] = useState<boolean>(false); 

    const rowH: number = 55;
    const REPEATS: number = 3;

    return (
        <header
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={
            { 
                textAlign: "center", 
                padding: "10px", 
                backgroundColor: "#3e3d3dff",
                overflow: "hidden",
                position: "relative",
                height: "20rem",

            }
        }
        >
            <div style={
                    { 
                        position: "relative",
                        left: -100,
                        top: -350,
                        whiteSpace: "nowrap",
                        transform: hovered ? "rotate(0deg)" : "rotate(13deg)",
                        transition: "transform 0.5s ease",
                        transformOrigin: "left center",
                    }
                }
            >
            {
            Array.from( { length: REPEATS}).map( () =>
            titles.map((text, i) => (
                <div key={i} style=
                {
                    { 
                        height: rowH, 
                        marginBottom: "5px",
                        overflow: "visible", 
                        display: "flex",
                        alignItems: "center"
                        
                    }
                }
                >
                    <div
                        style={
                            {
                                fontSize: text === "Dalton Shults" ? 56 : 36,
                                fontWeight: "bold",
                                whiteSpace: "nowrap",
                                color: hovered ?  "rgba(0, 0, 0, 0.3)"  : "rgba(240, 240, 240, 0.8)",
                                transition: "color 0.3s ease, font-size 0.5s ease",
                                justifySelf: "center",


                            }
                        }
                    >
                        {(`${text}` + "\u00A0\u00A0\u00A0").repeat(10)}
                    </div>
                </div>
            )))}
            </div>
            <div
                style={
                    {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)", 
                        fontSize: "10rem",
                        fontWeight: "bold",
                        zIndex: 999,
                        pointerEvents: "none",
                        opacity: hovered ? 1 : 0,
                        transition: "opacity 0.6s ease",
                        whiteSpace: "nowrap",
                        color: "white"
                    }
                }
            >Dalton Shults</div>
        </header>
    );
};

export default Header;
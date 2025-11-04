import React from "react";


const AboutMe: React.FC = () =>  {

    return (
        <div
        style={
            {
                display: "flex",
            }
        }
        >
            <h1
            style={
                {
                    flex: "1",
                    backgroundColor: "lightgray"
                }
            }
            >hello1
            </h1>
            <h1
            style={
                {
                    flex: "3",
                    backgroundColor: "lightgray"
                }
            }
            >hello2
            </h1>

        </div>
    )
};

export default AboutMe;
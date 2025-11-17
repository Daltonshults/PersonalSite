import React from "react";
import { useState } from 'react';
import LargeText from "./largeText";
import SmallText from "./smallText";


const AboutMe: React.FC = () =>  {

    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <div
        style={
            {
                display: "flex",
            }
        }
        >
            <div
            style={
                {
                    display: "flex",
                    flex: "1",
                    backgroundColor: "lightgray",
                    margin: "5%",
                    justifyContent: "center",
                    alignItems: "center"

                }
            }
            >
                <img 
                onMouseEnter = {() => setHovered(true)}
                onMouseLeave = {() => setHovered(false)}
                style={
                    {
                        borderRadius: "50%",
                        width: "80%",
                        aspectRatio: "1 / 1",
                        objectFit: "cover",
                        display: "block",

                    }
                }
                src= {hovered ? "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/108089180721037.650fb50bd637a.png" : "https://i.ytimg.com/vi/C0cALbLd70o/maxresdefault.jpg" } alt="" />
            </div>
            <div
            style={
                {
                    flex: "3",
                    backgroundColor: "lightgray",
                    paddingLeft: "5%",
                    paddingTop: "2%"
                }
            }
            >
                <LargeText
                >About Me
                </LargeText>

                <SmallText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eius facere magnam impedit nesciunt rem tenetur nam consequuntur, blanditiis voluptatem magni nulla cum dicta ipsum, voluptas corrupti, alias iusto dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam et corporis corrupti porro exercitationem nostrum laboriosam. Porro adipisci sed, nobis illum deserunt quas amet autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facere doloremque voluptatem provident. Culpa nobis veniam eius animi temporibus! Rerum, debitis sed? Laboriosam quia distinctio corporis doloremque asperiores accusamus numquam?
                </SmallText>

                <SmallText>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa sapiente sunt magnam veniam sed voluptatibus distinctio aut! Similique minima nesciunt deleniti dolores, iure in corporis suscipit illum quasi quaerat!
                </SmallText>
            </div>

        </div>
    )
};

export default AboutMe;
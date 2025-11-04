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
                style={
                    {
                        borderRadius: "50%",
                        width: "80%",
                        aspectRatio: "1 / 1",
                        objectFit: "cover",
                        display: "block",

                    }
                }
                src="https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/108089180721037.650fb50bd637a.png" alt="" />
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
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eius facere magnam impedit nesciunt rem tenetur nam consequuntur, blanditiis voluptatem magni nulla cum dicta ipsum, voluptas corrupti, alias iusto dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam et corporis corrupti porro exercitationem nostrum laboriosam. Porro adipisci sed, nobis illum deserunt quas amet autem!</p>
            </div>

        </div>
    )
};

export default AboutMe;
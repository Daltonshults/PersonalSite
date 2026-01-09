import React from "react";
import { useState } from "react";
import LargeText from "./largeText";
import SmallText from "./smallText";
import { Parallax } from "react-parallax";

import natureImage from "../assets/img/nature-6952817_1280.jpg";

const AboutMe: React.FC = () => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "rgba(0, 64, 10, 0.22)",
        margin: "1rem",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <div
      style={{
        flex: "0 0 25vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            position: "relative",
            width: "22vw",
            height: "22vw",
            aspectRatio: "1 / 1",
            borderRadius: "8px",
            overflow: "hidden",
          }}
          >
          <img
            src="https://i.ytimg.com/vi/C0cALbLd70o/maxresdefault.jpg"
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "opacity 0.6s ease",
              opacity: hovered ? 0 : 1,
            }}
            />

          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/108089180721037.650fb50bd637a.png"
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "opacity 0.6s ease",
              opacity: hovered ? 1 : 0,
            }}
            />
        </div>
      </div>


      <Parallax 
        bgImage={`${natureImage}`}
        style={{flex: 3}}
        strength={300}
        renderLayer={() => (
            <div
              style={{
                position: "absolute",
                inset: 0, 
                backgroundColor: "rgba(128, 128, 128, 0.4)",
              }}
            />
          )}>
            <div
            style={
              {
                padding: "5rem 5rem 0.5rem 5rem"
              }
            }>
            <LargeText style={{color: "white"}}>About Me</LargeText>

            <SmallText style={{color: "white"}}>
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Iste eius facere magnam 
              impedit nesciunt rem tenetur nam consequuntur, 
              blanditiis voluptatem magni nulla cum dicta ipsum, 
              voluptas corrupti, alias iusto dolorem...
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum expedita alias molestiae labore facilis, molestias voluptas deleniti similique maxime aliquid enim quidem fugit dolore maiores. Modi obcaecati magnam culpa similique deserunt pariatur nisi? Ducimus ipsa libero modi quisquam architecto sit, temporibus nobis magni, sint beatae harum nemo, distinctio accusantium dolores.
            </SmallText>

            <SmallText style={{color: "white"}}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa
              sapiente sunt magnam veniam sed voluptatibus distinctio aut! ...
            </SmallText>

            </div>
      </Parallax>
    </div>
  );
};

export default AboutMe;

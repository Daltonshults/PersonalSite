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
      }}
    >
      <div
        style={{
          display: "flex",
          flex: "1",
          width: "100%",
          margin: "5%",
          padding: "1rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            borderRadius: "50%",
            width: "100%",
            aspectRatio: "1 / 1",
            objectFit: "cover",
            display: "block",
          }}
          src={
            hovered
              ? "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/108089180721037.650fb50bd637a.png"
              : "https://i.ytimg.com/vi/C0cALbLd70o/maxresdefault.jpg"
          }
          alt=""
        />
      </div>

      <Parallax 
        bgImage={`${natureImage}`}
        style={{flex: 3}}
        strength={300}
        renderLayer={() => (
            <div
              style={{
                position: "absolute",
                inset: 2, 
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

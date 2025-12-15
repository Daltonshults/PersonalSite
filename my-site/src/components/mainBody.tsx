import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Experience from "./experience";
import LanguagesTechnologies from "./languagesTechnologies";
import CourseWork from "./courseWork";
import "./mainBody.css"


// TODO: Add text from resume
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    position: "absolute"
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "static"
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    position: "absolute"
  })
};

const pages = [0, 1, 2];

const MainBody: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  const goPrev = () => {
    setDirection(-1);
    setPage((prev) => (prev === 0 ? pages.length - 1 : prev - 1));
  };

  const goNext = () => {
    setDirection(1);
    setPage((next) => (next === pages.length - 1 ? 0 : next + 1));
  };

    // const buttonStyle = {
    //     margin: ".25rem",
    //     padding: "1.5rem 2.5rem 1.5rem 2.5rem",
    //     fontSize: "36px",
    //     borderRadius: "10%",
    //     color: "rgb(255, 255, 255)",
    //     backgroundColor: "rgb(2, 64, 11)"
    // }

  type indicatorDotProps = {
    color?: string
    page: number
    index: number
  };

  const IndicatorDot = ({ color = "lightgray", page, index }: indicatorDotProps) => {
        return (
            <div
            key={index}
            onClick={() => setPage(page)}
            style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: color,
                margin: "0 6px",
                cursor: "pointer",
                opacity: "60%"
            }}
            />
        );
    };

  type IndicatorProps = {

    page?: number
    index?: number

  }

  const Indicator = ( { page }: IndicatorProps ) => {

    const dots = [];

    for (let i: number = 0; i < pages.length; i++ ) {
        if ( page === i )
        {
            dots.push(
                <IndicatorDot color="black" page={i} index={i} key={i}/>
            );
        }
        else {
            dots.push(
                <IndicatorDot color="darkgray" page={i} index={i} key={i}/>
            );
        }
    };

    return (
        <div
            style={
                {
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "center",
                    margin: "1.5rem"
                }
            }
        >{dots}</div>
    )
  };

  return (
    <div
        style={
            {
                margin: "1rem"
            }
        }
    >
    <div
        >
        <div style={{ position: "relative", overflow: "scroll", height: "30rem" }}>
        <AnimatePresence mode="wait" custom={direction}>
            <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            >
            {page === 0 ? (
                <Experience />
            ) : page === 1 ? (
                <LanguagesTechnologies />
            ) : (
                <CourseWork />
            )}
            </motion.div>
        </AnimatePresence>
        </div>
    </div>
    <div>
        <Indicator page={page} index={page}/>
    </div>
    <div
    style={
        {
            display: "flex",
            alignContent: "center",
            justifyContent: "center"
        }
    }
    >
        <button 
            className="my-button"
        onClick={goPrev}>{"<"}</button>
        <button 
            className="my-button"
        onClick={goNext}>{">"}</button>
    </div>
    </div>
  );
};

export default MainBody;

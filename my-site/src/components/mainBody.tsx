import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ComponentOne from "./compOne";
import ComponentTwo from "./compTwo";
import ComponentThree from "./compThree";
import { div } from "framer-motion/client";

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
    setPage((prev) => (prev === pages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
        style={
            {
                minHeight: "2rem"
            }
        }
    >
    <div
        style={{
            minHeight: "500px"
        }}
        >
        <div style={{ position: "relative", overflow: "hidden" }}>
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
                <ComponentOne />
            ) : page === 1 ? (
                <ComponentTwo />
            ) : (
                <ComponentThree />
            )}
            </motion.div>
        </AnimatePresence>
        </div>
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
        style={
            {
                fontSize: "24px"
            }
        }
        onClick={goPrev}>{"(<"}</button>
        <button 
        style={
            {
                fontSize: "24px"
            }
        }
        onClick={goNext}>{">)"}</button>
    </div>
    </div>
  );
};

export default MainBody;

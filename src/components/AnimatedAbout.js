import React from "react";
import { motion } from "framer-motion";

const AnimatedTextCharacter = ({ text, title }) => {
    const letters = Array.from(text);
    const titles = Array.from(title)

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.04 * i },
        }),
    };
    const container2 = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 2.5 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: -20,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <div className="flex flex-col justify-center">
            <motion.div
                className="mt-12 justify-center md:justify-start md:mt-0 md:max-w-screen-lg pt-2 md:mx-0"
                style={{ overflow: "hidden", display: "flex", fontSize: "3.5rem", layout: 'wrap' }}
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {letters.map((letter, index) => (
                    <motion.span variants={child} key={index}>
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                ))}
            </motion.div>
            <motion.div
                className="justify-center md:justify-start md:mt-0  md:max-w-screen-lg pt-2 md:mx-0"
                style={{ layout: "wrap", display: "flex", fontSize: "1.5rem" }}
                variants={container2}
                initial="hidden"
                animate="visible"
            >
                {titles.map((letter, index) => (
                    <motion.span variants={child} key={index} >
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    );
};

export default AnimatedTextCharacter;
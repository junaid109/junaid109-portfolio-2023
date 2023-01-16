import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { useTypewriter } from "react-simple-typewriter";

type Props = {};

export default function Hero(props: Props) {

    const [text, count] = 
    useTypewriter({
        words: [
        "Hi, I'm Junaid Malik", 
    "Guy-who-loves-technology",
    "<Button>Click Me</Button>",
        ],
        loop: true,
        delaySpeed: 1000,
        deleteSpeed: 50,
        typeSpeed: 100,
        
        });

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-col items-center justify-center space-y-2 text-center"
            >
                <h1 className="text-6xl font-bold text-gray-300">
                    Hi, I'm Junaid Malik   
                </h1>
                <p className="text-2xl text-gray-400">
                    I'm a Full Stack Developer
                </p>
            </motion.div>
           </div>
    );
}
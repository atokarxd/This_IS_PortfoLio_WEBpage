'use client';
import backgroundPic from "../assets/image/picture/desert-photo-main.jpeg";
import "../Styles/Introduce_style.css";
import MouseScrolling from "./MouseScrollingAnimation.jsx";

import { useTypewriter } from "react-simple-typewriter";
import { useRef, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";



function Introduce(props) {
    const [text] = useTypewriter({
        words: ["Gamer", "Large Company", "Company", "Kitty", "Husky", "Princess of Dubai", "Artist", "MKKP supporter"],
        loop: {},
        typeSpeed: 80,

    })
        //<p>Welcome {text}</p>

    let refu = useRef(null);
    let mousRef = useRef(null);

    const [showMouse, setShowMouse] = useState(true);
    useEffect(() => {
        if(props.progressY > 10) {
            setShowMouse(false)
        } else {
            setShowMouse(true)
        }
    })

    return(
        <>
            <section className="introduce" ref={refu}>
                <p>Welcome {text}</p>
                    <AnimatePresence>
                        { showMouse && (
                            <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{ type: 'spring', damping: 300 }}
                            exit={{opacity: 0}}
                            className="ScrollingEffect">
                                <MouseScrolling />
                            </motion.div>
                        )}
                    </AnimatePresence>
                <div className="background">
                    <div className="overlay-background"></div>
                    <img src={backgroundPic} alt="Background" id="desert-background"></img>
                </div>
            </section>
        </>
    )
}

export default Introduce;
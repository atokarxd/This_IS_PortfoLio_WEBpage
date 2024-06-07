import Contact from "./Contact.jsx";
import About from "./About.jsx";
import Project from "./Project.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Introduce from "./Introduce.jsx";
import Intro from "./Intro.jsx";

import styles from "../Styles/progress_bar.module.css";

import React, { useEffect, useState } from "react";
import { useSpring, useScroll, motion, AnimatePresence } from "framer-motion";


function MainContent() {
    //let test = false;
    //console.log(window.innerHeight);

    const [showMain, setShowMain] = useState(true);
    const [header, setHeader] = useState("");
    const [page, setPage] = useState("");

    const [offset, setOffset] = useState(0);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const onScroll = () => setOffset(window.scrollY);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    useEffect(() => {
        setPage("");
        /*if(offset < window.innerHeight + 970) {
            setHeader("Hidden");
        } else*/ if(offset >= window.innerHeight / 100) {
            setHeader("sticky");
        } else {
            setHeader("");
        }
    }, [offset])


    useEffect(() => { 
        //console.log(offset)
        //console.log(window.innerHeight)

        if(Math.floor((window.innerHeight * 2 + window.innerHeight*0.2)) == Math.floor(offset)) {
            setShowMain(false);
            window.scrollTo({top: 0});
        }
    })

    function clickButton(ujheader, ujpage) {
        setHeader(ujheader);
        setPage(ujpage);
    }

    return(
        <>      
            { showMain ? 
                <>
                    <AnimatePresence>
                        { showMain && (
                            <motion.div
                                initial={{ opacity: 0, y: 100}}
                                animate={{ opacity: 1, y: 0}}
                                transition={{
                                type: "spring",
                                duration: 1,
                                bounce: 0.5
                                }}
                                exit={{opacity: 0}}
                            >
                                <Intro />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </>
                :
                <>
                    <Header name={header} click={clickButton} />
                    <div id="page" className={page}>
                        <motion.div className={styles.progress_bar} style={{ scaleX }} />
                        <Introduce progressY={offset} />
                        <About />
                        <Project />
                        <Contact />
                        <Footer />
                    </div>
                </>
            }
        </>
    )
}

export default MainContent;
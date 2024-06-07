import "../Styles/Intro_style.css";
import desertPhotoMain from "../assets/image/picture/desert-photo-main.jpeg";
import blackFlower from "../assets/image/picture/black-flower.jpeg";
import greekPhoto from "../assets/image/picture/greek-photo.jpeg";
import japanPhoto from "../assets/image/picture/japan-photo.jpeg";
import oceanPhoto from "../assets/image/picture/ocean-photo.jpeg";
import womanPhoto from "../assets/image/picture/woman-photo.jpeg";
import artistPhoto from "../assets/image/picture/artist-photo.jpeg"

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";


function Intro({children}) {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
    const scale10 = useTransform(scrollYProgress, [0, 1], [1, 10]);

    const opacity_main = useTransform(scrollYProgress, [0, 1], [1, 1])
    const opacity_all_round = useTransform(scrollYProgress, [0, 1], [1, 0])

    const pictures = [
        {
            src: desertPhotoMain,
            scale: scale4,
            opacity: opacity_main
        },
        {
            src: blackFlower,
            scale: scale5,
            opacity: opacity_all_round
        },
        {
            src: greekPhoto,
            scale: scale9,
            opacity: opacity_all_round
        },
        {
            src: japanPhoto,
            scale: scale8,
            opacity: opacity_all_round
        },
        {
            src: oceanPhoto,
            scale: scale6,
            opacity: opacity_all_round
        },
        {
            src: womanPhoto,
            scale: scale6,
            opacity: opacity_all_round
        },
        {
            src: artistPhoto,
            scale: scale10,
            opacity: opacity_all_round
        }
    ]

    return(
        <div ref={container} className="container">
            <div className="sticky">
                {
                    pictures.map(({src, scale, opacity}, index) => {
                        return <motion.div style={{scale: scale, opacity: opacity}} key={index} className="el">
                            <div className="imageContainer">
                                <img src={src} alt="Main Photo"></img>
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    );
}

export default Intro
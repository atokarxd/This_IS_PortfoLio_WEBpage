import "../Styles/Contact_style.css";


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import ThreeDCard from "../Script/ThreeDCard";

gsap.registerPlugin(ScrollTrigger);

function Contact() {

    const red_circle = useRef();
    const white_circle = useRef();
    

    useEffect(() => {
        gsap.fromTo(red_circle.current, {x: 0, y: 0}, {x: 250, y: -200, scrollTrigger: {
            trigger: ".contact",
            start: 'top 20%',
            end: "bottom 120%",
            scrub: 10
        }})
    }, [])

    useEffect(() => {
        gsap.fromTo(white_circle.current, {x: 0, y: 0, opacity: 1}, {x: -300, y: 700,opacity:0.7 , scrollTrigger: {
            trigger: ".contact",
            start: 'top 20%',
            end: "bottom 120%",
            scrub: 10
        }})
    }, [])


    



    return(
        <section id="contact" className="contact">
            <div className="front__text">
                <h2>Got a <span className="text__color">PROJECT</span> idea?<br />Let’s bring it to life.</h2>
                <form action="" autoComplete="on" method="post">
                    <div className="name-section">
                        <label htmlFor="name">Your name<sup>*</sup></label>
                        <input type="text" id="name" name="name" placeholder="Steve Wozniak" />
                    </div>
                    <div className="mail-section">
                        <label htmlFor="mail">Your E-mail<sup>*</sup></label>
                        <input type="text" id="mail" name="mail" placeholder="steve.wozniak@gmail.com" />
                    </div>
                    <div className="idea-short-section">
                        <label>Your idea in short<sup>*</sup></label>
                        <textarea name="message" id="message" rows="1" cols="30" placeholder="Modernization of the Woz.org website"></textarea>
                    </div>
                    <input type="submit" value="Let's do it!" />
                </form>
            </div>
            <div className="background">
                <div className="filter"> </div>
                <div className="red__round" ref={red_circle}>
                    <svg width="350" height="350">
                        <circle cx="175" cy="175" r="170" fill="var(--clr-red)" />
                    </svg>
                </div>
                <div className="white__round" ref={white_circle}>
                    <svg width="700" height="700">
                        <circle cx="350" cy="350" r="300" fill="white" />
                    </svg>
                </div>
            </div>
        </section>
    );
}

export default Contact;
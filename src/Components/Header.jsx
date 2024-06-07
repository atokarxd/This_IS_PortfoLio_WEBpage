import Noxlogo from "../assets/image/noxlogo.png"
import "../Styles/Header_style.css";

import { Link } from "react-scroll";

//<img src={Noxlogo} alt="Nox logo" id="littleLogo"></img>

const Header = (props) => {
    return(
        <header className={props.name} id="myHeader">
            <abbr title="Homepage"><Link to="introduce" spy={true} smooth={true} offset={50} duration={500}>
                <svg id="littleLogo" width="137" height="94" viewBox="0 0 137 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.0001 22C27.9998 19 56.3334 70.5 68.5 94C68.5 94 108.5 18.5 120 22C131.5 25.5 129 35.5 119.5 40C132 35 149.5 23 122.5 4C115.5 -0.5 102.554 -4.40003 97.5 22C66.5 11 39.5 22 39.5 22C34 -7.62939e-06 28 -2.50001 15.4999 3.99998C-11.5002 20.5 2.33332 33.5 17.0001 40C11.5 37.5625 2.45645 25.9665 17.0001 22Z" fill="white"/>
                </svg>
                </Link></abbr>
            <nav>
                <Link to="aboutme" spy={true} smooth={true} offset={50} duration={500} >About me</Link>
                <Link to="project" spy={true} smooth={true} offset={50} duration={500}>Project</Link>
                <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
                <button id="openmenu" onClick={() => props.click("", "menuopen")}>
                    <span></span>
                    <span></span>
                </button>
            </nav>
        </header>
    );
}

export default Header
import "../Styles/Footer_style.css";

import FramerMagnetic from "../Script/FramerMagnetic";

function Footer() {

    return(
        <footer>
            <div id="left-footer">
                <p>©{new Date().getFullYear()}</p>
                <p>NOX</p>
            </div>
            <div id="center-footer">
                <a>{new Date().getMinutes() > 9 ? new Date().getHours() + ":" + new Date().getMinutes() : new Date().getHours() + ":0" + new Date().getMinutes()}</a>
            </div>
            <div id="right-footer">
                <div>
                    <a className="main-text">Social</a>
                    <FramerMagnetic>
                        <a href="https://www.google.com" target="_blank">LinkedIn</a>
                    </FramerMagnetic>
                    <FramerMagnetic>
                        <a href="https://www.google.com" target="_blank">YouTube</a>
                    </FramerMagnetic>
                    <FramerMagnetic>
                        <a href="https://www.google.com" target="_blank">Instagram</a>
                    </FramerMagnetic>
                    <FramerMagnetic>
                        <a href="https://www.google.com" target="_blank">FaceBook</a>
                    </FramerMagnetic>
                    <FramerMagnetic>
                        <a href="https://www.google.com" target="_blank">GitHub</a>
                    </FramerMagnetic>
                    <FramerMagnetic>
                        <a href="https://www.google.com" target="_blank">X</a>
                    </FramerMagnetic>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
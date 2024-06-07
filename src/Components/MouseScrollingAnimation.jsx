import "../Styles/MouseScrollingAnimation_style.css";


function MouseScrollingAnimation() {
    return(
        <div class="hero__scroller">
            <div class="hero__scroller-wrapper">
                <svg class="mouse-outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.9 91"><path class="st0" stroke-linecap="round" stroke-miterlimit="10" d="M27.4 3.6C14.2 3.6 3.5 14.3 3.5 27.5v36c0 13.2 10.7 23.9 23.9 23.9s23.9-10.7 23.9-23.9v-36c.1-13.2-10.6-23.9-23.9-23.9z"></path></svg>
                <svg class="mouse-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.4 91"><path stroke-linecap="round" stroke-miterlimit="10" d="M27.4 87.5c-13.2 0-23.9-10.7-23.9-23.9v-36c0-13.2 10.7-23.9 23.9-23.9"></path></svg>
                <svg class="mouse-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.4 91"><path stroke-linecap="round" stroke-miterlimit="10" d="M27.4 87.5c-13.2 0-23.9-10.7-23.9-23.9v-36c0-13.2 10.7-23.9 23.9-23.9"></path></svg>  
            </div>
        </div>
    )
}

export default MouseScrollingAnimation;
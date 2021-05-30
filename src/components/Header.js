import React from 'react'
import Typed from "react-typed"

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Want some help related to</h1>
                <Typed 
                    className="typed-text"
                    strings={["Web Devlopment", "Web Design", "Graphics Design", "Video Editing"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer"> Contact me </a>
            </div>
        </div>
    )
}

export default Header

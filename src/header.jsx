import React, { Component } from "react";
import "./css/header.css"
// Images
import PlayLogo from "./img/heading_btn_play_img.png"
import Salad from "./img/heading_salad.png"

class Header extends Component{

    render(){
        return(
            <header className="site_header">
                <div className="site_header_container container">
                    <nav className="site_navbar">
                        <h1 className="logo">
                            Tammy <span>Food</span>
                        </h1>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Menu</li>
                            <li>Blog</li>
                            <li>Contact Us</li> 
                        </ul>
                    </nav>
                    <div className="heading">
                        <div className="left">
                            <p className="topName">
                                Fast Delivery
                            </p>
                            <h2>
                                Discover Your Favourite Food and <span>Test Forever</span>
                            </h2>
                            <p className="left_text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                            <div className="left_btn_box">
                                <button className="getStarted">
                                    Get Started
                                </button>
                                <button className="play">
                                    <img src={PlayLogo} alt="Play_logo" /> More Information
                                </button>
                            </div>
                        </div>
                        <div className="right">
                            <img src={Salad} alt="Salad" />
                        </div>
                    </div>
                </div>
            </header>
        )
    }

}
export default Header;
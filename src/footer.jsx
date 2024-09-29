import React, { Component } from "react";
import "./css/footer.css"
// Images
import Email from "./img/email.png"
import PhoneNumber from "./img/phone_number.png"
import Send from "./img/send.png"

class Footer extends Component{
    
    render() {
      return (
        <div>
            <div className="emailNumber container">
                <div className="email">
                    <img src={Email} alt="Email" />
                    <h2>
                        info@youremail.com
                    </h2>
                </div>
                <span></span>
                <div className="phoneNumber">
                    <img src={PhoneNumber} alt="PhoneNumber" />
                    <h2>
                        +880 321 655 9985
                    </h2>
                </div>
            </div>
            <footer className="site_footer">
                <div className="footer_container container">
                    <div className="logoBox">
                        <h1 className="logo">
                            Tammy <span>Food</span>
                        </h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                        <div className="iconBox">
                            <i class='bx bxl-facebook'></i>
                            <span></span>
                            <i class='bx bxl-instagram'></i>
                            <span></span>
                            <i class='bx bxl-twitter'></i>
                            <span></span>
                            <i class='bx bxl-youtube'></i>
                        </div>
                    </div>
                    <div className="linkBox">
                        <h2>
                            QUICK LINKS
                        </h2>
                        <ul>
                            <li>
                                About Us
                            </li>
                            <li>
                                Menu
                            </li>
                            <li>
                                Blog
                            </li>
                            <li>
                                Conatct Us
                            </li>
                        </ul>
                    </div>
                    <div className="letterBox">
                        <h2>
                            NEWS LETTERS
                        </h2>
                        <p>
                            Subscribe our newsletter to get our latest
                            update & news
                        </p>
                        <div className="input_box">
                            <input type="text" placeholder="Your email address" />
                            <button>
                                <img src={Send} alt="Send" />
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
      )
    };

}
export default Footer;
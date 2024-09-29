import React, { Component } from "react";
import "./css/WebApp.css"
// Image
import playMarket from "./img/playmarket.png"
import AppStore from "./img/appstore.png"
import Phone from "./img/phone.png"

class WebApp extends Component{

    render(){
        return(
            <div className="WebApp container">
                <div className="webAppLeft">
                    <h3>
                        To Get 15% Discount Download The App
                    </h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <div className="downloadBtn">
                        <button>
                            <img src={playMarket} alt="playMarket" />
                            <div>
                                <span>
                                    Download on the
                                </span>
                                Google play
                            </div>
                        </button>
                        <button>
                            <img src={AppStore} alt="AppStore" />
                            <div>
                                <span>
                                    Download on the
                                </span>
                                App Store
                            </div>
                        </button>
                    </div>
                </div>
                <div className="webAppRight">
                    <img src={Phone} alt="Phone" />
                </div>
            </div>
        )
    }

}
export default WebApp;
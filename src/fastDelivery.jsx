import React, { Component } from "react";
import "./css/fastDelivery.css"
import FastDeliveryImg from "./img/faster_delivery.png"

class FastDelivery extends Component {

    render(){
        return(
            <div className="fastDelivery">
                <div className="container">
                    <div className="fastDeliveryLeft">
                        <img src={FastDeliveryImg} alt="FastDelivery" />
                    </div>
                    <div className="FastDeliveryRight">
                        <p className="topName">
                            Our Target
                        </p>
                        <h2>
                            We Earn Your Trust and are Diligent in Your Case
                        </h2>
                        <p className="FastDeliverytext">
                            When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, <br /> <br />

                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <button className="FastDeliveryBtn">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}
export default FastDelivery;
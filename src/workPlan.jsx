import React, { Component } from "react";
import "./css/workPlan.css"
// Images
import List from "./img/list_icon.png"
import ListFatstCar from "./img/list&farterCar.png"
import FastCar from "./img/faster_car_icon.png"
import FastCarDollor from "./img/FasterCar&dollor.png"
import Dollor from "./img/dolor_icon.png"

class WorkPlan extends Component{

    render(){
        return(
            <div className="container">
                <div className="title_box">
                    <h3>
                        How it works
                    </h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                    </p>
                </div>
                <div className="companets">
                    <div>
                        <img className="icon1" src={List} alt="List" />
                        <h4>
                            Order Now
                        </h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                        </p>
                    </div>
                    <img src={ListFatstCar} alt="ListFastCar" />
                    <div className="second">
                        <img className="icon2" src={FastCar} alt="FastCar" />
                        <h4>
                            Get Delivery
                        </h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                        </p>
                    </div>
                    <img src={FastCarDollor} alt="FastCarDollor" />
                    <div>
                        <img className="icon3" src={Dollor} alt="Dollor" />
                        <h4>
                            Payment
                        </h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                        </p>
                    </div>
                </div>
            </div>
        )
    }

}
export default WorkPlan;
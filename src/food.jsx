import React, { Component } from "react";
import "./css/food.css"
import firstFood from "./img/food1.png"
import secondFood from "./img/food2.png"
import thirdFood from "./img/food3.png"
import forthFood from "./img/food4.png"
import fifthFood from "./img/food5.png"
import sixthFood from "./img/food6.png"
import addCarzunku from "./img/links_logo.png"
import poroductLink from "./img/shop_logo.png"
import Left from "./img/left.png"
import right from "./img/right.png"

class Food extends Component {
    
    render(){
        return(
            <div className="container">
                <div className="food_title_box">
                    <h2>
                        Our Delicious Dish
                    </h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                    </p>
                </div>
                <div className="allFoodBox">
                    <ul>
                        <li>
                            <img src={firstFood} alt="firstFood" />
                            <h4>
                                New York Vega
                            </h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting....
                            </p>
                            <div className="costAddBox">
                                <p>
                                    $7.10
                                    {/* Paginatoin,reyting */}
                                </p>
                                <div className="btnBox">
                                    <button className="addCarzunu">
                                        <img src={addCarzunku} alt="addCarzunku" />
                                    </button>
                                    <button className="foodLink">
                                        <img src={poroductLink} alt="poroductLink" />
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={secondFood} alt="secondFood" />
                            <h4>
                                New York Vega
                            </h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting....
                            </p>
                            <div className="costAddBox">
                                <p>
                                    $7.10
                                </p>
                                <div className="btnBox">
                                    <button className="addCarzunu">
                                        <img src={addCarzunku} alt="addCarzunku" />
                                    </button>
                                    <button className="foodLink">
                                        <img src={poroductLink} alt="poroductLink" />
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={thirdFood} alt="thirdFood" />
                            <h4>
                                New York Vega
                            </h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting....
                            </p>
                            <div className="costAddBox">
                                <p>
                                    $7.10
                                </p>
                                <div className="btnBox">
                                    <button className="addCarzunu">
                                        <img src={addCarzunku} alt="addCarzunku" />
                                    </button>
                                    <button className="foodLink">
                                        <img src={poroductLink} alt="poroductLink" />
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={forthFood} alt="forthFood" />
                            <h4>
                                New York Vega
                            </h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting....
                            </p>
                            <div className="costAddBox">
                                <p>
                                    $7.10
                                </p>
                                <div className="btnBox">
                                    <button className="addCarzunu">
                                        <img src={addCarzunku} alt="addCarzunku" />
                                    </button>
                                    <button className="foodLink">
                                        <img src={poroductLink} alt="poroductLink" />
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={thirdFood} alt="thirdFood" />
                            <h4>
                                New York Vega
                            </h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting....
                            </p>
                            <div className="costAddBox">
                                <p>
                                    $7.10
                                </p>
                                <div className="btnBox">
                                    <button className="addCarzunu">
                                        <img src={addCarzunku} alt="addCarzunku" />
                                    </button>
                                    <button className="foodLink">
                                        <img src={poroductLink} alt="poroductLink" />
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={fifthFood} alt="fifthFood" />
                            <h4>
                                New York Vega
                            </h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting....
                            </p>
                            <div className="costAddBox">
                                <p>
                                    $7.10
                                </p>
                                <div className="btnBox">
                                    <button className="addCarzunu">
                                        <img src={addCarzunku} alt="addCarzunku" />
                                    </button>
                                    <button className="foodLink">
                                        <img src={poroductLink} alt="poroductLink" />
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={sixthFood} alt="sixthFood" />
                            <h4>
                                New York Vega
                            </h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting....
                            </p>
                            <div className="costAddBox">
                                <p>
                                    $7.10
                                </p>
                                <div className="btnBox">
                                    <button className="addCarzunu">
                                        <img src={addCarzunku} alt="addCarzunku" />
                                    </button>
                                    <button className="foodLink">
                                        <img src={poroductLink} alt="poroductLink" />
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={firstFood} alt="firstFood" />
                            <h4>
                                New York Vega
                            </h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting....
                            </p>
                            <div className="costAddBox">
                                <p>
                                    $7.10
                                </p>
                                <div className="btnBox">
                                    <button className="addCarzunu">
                                        <img src={addCarzunku} alt="addCarzunku" />
                                    </button>
                                    <button className="foodLink">
                                        <img src={poroductLink} alt="poroductLink" />
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="scrol_box">
                    <ul>
                        <li>
                            <img src={Left} alt="left" />
                        </li>
                        <li className="number">
                            1
                        </li>
                        <li className="number">
                            2
                        </li>
                        <li className="number">
                            3
                        </li>
                        <li className="number">
                            4
                        </li>
                        <li className="number">
                            5
                        </li>
                        <li>
                            <img src={right} alt="right" />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}
export default Food;
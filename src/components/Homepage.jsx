import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/Homepage.css";
import Card from "../elements/Card";

function Homepage(){
    return(
        <>
            <div className="PageCard">
                <div className="text">
                    <p className="text-1">Selamat Sore</p>
                    <p className="text-2">Login Terakhir Pada 10.30 am / 04-04-2022</p>
                </div>
                <div className="Card">
                    <Card/>
                </div>
            </div>
        </>
    )
}
export default Homepage;
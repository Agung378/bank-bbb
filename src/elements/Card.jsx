import React from "react";
import "../assets/style/Card.css";
import Cardnew from "../assets/image/cardnew.png";


function Card(){
    return(
        <>
        <div className="container">
            <div className="Card">
                <img src={Cardnew} alt="" />
                <div className="Frame92">
                    <div className="Frame91">
                        <p>Rekening Saya</p>
                        <p>Jumlah Saldo             :</p>
                    </div>
                    <div className="Frame90">
                        <p>Nama                     : Agus</p>
                        <p>Nomor Rekening           : </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card;
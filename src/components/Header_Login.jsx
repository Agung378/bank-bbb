import React from 'react';
import Ind from '../assets/icon/IDP.svg';
import Eng from '../assets/icon/EN.svg';

export default function Header_Login() {

    return (

        <>
            <header className='header sticky-top'>
                <div className='row'>
                    <div className='col-sm-10 p-3 '>
                        <div className='logo '>
                            <h3 style={{fontWeight: "bold"}}>myEasy</h3>
                            <h5>By Bank BBB</h5>
                        </div>
                    </div>
                    <div className='col-sm-2 p-3 '>
                        <div className='logo-image '>
                            <img src={Ind} className='ind' /> ID &nbsp;
                            <img src={Eng} className='Eng' /> EN
                        </div>
                    </div>
                </div>

            </header>
        </>
    )



}
import React from 'react';
import Ind from '../assets/icon/ID.svg';
import Eng from '../assets/icon/EN.svg';
import MYEZ from '../assets/image/myEasy.png'
import '../assets/style/HeaderMain.css'

export default function Header() {

    return (

        <>
            <header className='header-main sticky-top'>
                <div className='row'>
                    <div className='col-sm-10 p-3 '>
                        <div>
                            <h4>Internet Banking</h4>
                            <img src={MYEZ} style={{marginLeft: 50}}></img>
                            <h5>By Bank BBB</h5>
                        </div>
                    </div>
                    <div className='col-sm-2 p-3 '>
                        <div className='logo-image ' style={{color: "black"}}>
                            <img src={Ind} className='ind'  /> ID &nbsp;
                            <img src={Eng} className='Eng' /> EN
                        </div>
                    </div>
                </div>
                
            </header>
        </>
    )



}
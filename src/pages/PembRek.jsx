import React, { useContext } from 'react';
import "../assets/style/PembRek.css";
import Footer from '../components/Footer';
import Header from '../components/Header';
import Stepper_Page, { MultiStep } from '../components/Stepper_Page';
import Form_Rek from '../elements/Form_Rek';
import Review from '../elements/From_Review';
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel';



export default function PembRek() {
    
    return (
        <>
            <Header />
                <div className='container'>
                    <Stepper_Page/>
             
                </div>
            <Footer />
        </>
    )

}

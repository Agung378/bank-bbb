import { Button, Input, InputLabel, TextField } from '@mui/material';
import React from 'react';
import "../assets/style/PembRek.css";
import Footer from '../components/Footer';
import Header from '../components/Header';
import InputField from './element_form/Input_Form';
import Form_Rek from './Form_Rek';


export default function FormVal() {
    const database = 
        {
            PIN: "123456"
        }
    ;

    

    return (
        <>
            
                <div className='container'>
                    <h1 style={{marginLeft:'60px'}}>Validasi</h1>
                    <div className='container w-25 mt-5' style={{marginLeft: '290px', marginBottom:'80px'}}>
                        <h6>Masukkan PIN ATM Anda</h6>
                        <TextField type="password" className='form-control' />
                    </div>
                    
                    
                </div>
                {/* <Button className='d-flex' style={{backgroundColor: '#8A05BE', color:'white', marginLeft: '1118px'}}>Submit Data</Button> */}
        
        </>
    )

}
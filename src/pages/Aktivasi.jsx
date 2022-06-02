import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
Alert, 
AlertTitle, 
Dialog,
Button,
Typography
} from '@mui/material';
import "../assets/style/Status.css";
import Navbar from '../elements/Navbar';
import { useNavigate } from 'react-router-dom';
import { Email, EmailOutlined } from '@mui/icons-material';
// import { Navbar } from 'react-bootstrap';
export default function Aktivasi() {
    const [successMessages, setSuccessMessages] = useState(false)

    let navigate = useNavigate()

    const handleSubmit = () => {
        setSuccessMessages(!successMessages);
    }

    const Login = () => {
        navigate('/')
      }
    return (
        <>
            <Header/>
            <Navbar/>
            <div className='container'  style={{marginTop:'-300px'}}>
                <h4 className='text-center '>Aktivasi Tabungan Investasi</h4>
                <div className='aktifv' style={{color:'black'}}>
                    <table className='aktivate'>
                        <tbody>
                            <tr>
                                <td>Nomor Rekening Sumber dana</td>
                                <td>: 64378*********</td>
                            </tr>
                            <tr>
                                <td>Setoran Rutin Bulanan</td>
                                <td>: Rp &nbsp;100000</td>
                            </tr>
                            <tr>
                                <td>Jangka Waktu</td>
                                <td>: 3 bulan</td>
                            </tr>
                            <tr>
                                <td>Tujuan</td>
                                <td>: Tabungan dan Investasi</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='akemail' style={{ marginLeft: '410px', marginTop: '50px' }}>
                    <h6>Masukan Email untuk Aktivasi Tabungan</h6>

                    <input type="email" name="" /><br />

                    <button className='btn mt-3' type="submit" style={{ background: '#500388', color: 'white' }} onClick={handleSubmit}>Kirim</button>
                </div>


            </div>
            <Dialog open={successMessages}  >
            <Alert
              severity=""
            //   color="success"
            //   role="button"              
              // onClose={onClose}           
            //   sx={{               
            //     "& .MuiAlert-icon": {
            //       color: "green",
            //       fontSize: "80px"
                // }
            //   }}
            className='px-5'
            >
                <EmailOutlined className='d-flex' style={{marginLeft:'120px',marginBottom:'20px', fontSize:'100px'}}/>
              <AlertTitle className='text-center' style={{marginBottom:'20px'}}>Link Aktivasi Terkirim!</AlertTitle>
              <Typography className='text-center'>Untuk aktivasi akun, silahkan login kembali<br/> menggunakan link yang telah dikirim via email!<br/> </Typography>
              <Button onClick={Login} className='d-flex' style={{backgroundColor: '#8A05BE', color: 'white', float:'right', marginTop:'8px', height: '30px'}}>OK</Button>
            </Alert>
          </Dialog>
            <Footer />
        </>

    )
}
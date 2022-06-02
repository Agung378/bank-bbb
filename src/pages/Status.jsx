import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Statuss from '../assets/image/status.png';
import "../assets/style/Status.css";
import { useNavigate } from 'react-router-dom';
import Navbar from '../elements/Navbar';
export default function Status() {
    const history = useNavigate();
    let navigate = useNavigate();
    const handleBelum =()=>{
        navigate('/Aktivasi')
    }
  

    return (
        <>
            <Header />
            <Navbar/>
            {/* <NavbarHome /> */}
            <div className='container' style={{marginTop:'-300px'}}>
                <h4 className='text-center mt-4'>Status Tabungan Berjangka</h4>
                <h6 className='text-center mt-4'>Jenis Tabungan Anda</h6>
                <div style={{marginLeft:'350px'}}>
                    <img src={Statuss} />
                    <div style={{marginTop:'-280px', marginBottom:'300px', marginLeft:'40px'}}>
                        <h6 style={{color:'white', marginBottom:'50px'}}>Tabungan Saya</h6>
                        <table>
                            <tbody >
                                <tr>
                                    <td className='text-white'>Jenis Tabungan </td>
                                    <td className='text-white'>&nbsp;:&nbsp; Investasi</td>
                                </tr>
                                <tr>
                                    <td className='text-white'>Tanggal Pembuatan</td>
                                    <td className='text-white'>&nbsp;: &nbsp;20/04/22</td>
                                </tr>
                            </tbody>
                            <button onClick={handleBelum} className='btn text-danger' style={{ background: 'white', border: '1px solid red', paddingLeft: '30px', paddingRight: '30px', marginTop:'80px'}}>Belum Aktif</button>
                        </table>



                    </div>

                </div>
                <div className='sudahaktif mt-5'>
                    {/* <img src={Statusi} /> */}
                </div>



            </div>





            <Footer />
        </>
    )

}

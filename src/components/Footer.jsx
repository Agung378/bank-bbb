import React from "react";

import footer from '..//assets/image/footer.png';
import footer1 from '..//assets/image/footer1.png';

export default function Footer() {
    return (
        <>
            <footer className='footer mt-5 sticky-bottom'>
                <div className='container'>
                    <div className='row p-2' style={{marginLeft: 40}}>
                        <div className="col-sm-2 p-2"><img src={footer} /></div>
                        <div className="col-sm-2 p-2" style={{marginTop: 15, marginLeft: -60}}>Bank BBB telah terdaftar dan di awasi oleh Otoritas Jasa Keuangan Indonesia </div>
                        <div className="col-sm-2 p-2"><img src={footer1} style={{marginLeft: 60}} /></div>
                        <div className="col-sm-3 p-2" style={{marginTop: 10, marginLeft: 10}}>Bank ini merupakan peserta Penjaminan Lembaga Penjamin Simpanan </div>
                        <div className="col-sm-3 p-2 mt-2 d-flex"style={{marginLeft: 50}}><h2>myEasy</h2>&nbsp;<h5 className='p-2'>by Bank BBB</h5></div>


                        {/* <div className='col-sm-4 p-3 '>
                        <img src={footer} className='ind' /> Bank BBB telah terdaftar dan diawasi oleh Otoritas Jasa Keuangan Indonesia

                    </div>
                    <div className='col-sm-4 p-3 '>

                        <img src={footer1} className='ind' />


                    </div>
                    <div className='col-sm-4 p-3 '>

                        <h2>gahdgajd</h2>


                    </div> */}
                    </div>

                </div>

            </footer>
        </>
    )
}


import React from 'react';


export default function ReviewRek(props) {
    const {formValues} = props;
    const {Norek, Setoran, Jangka, Tujuan, Keterangan, NOHP, Email} = formValues;
    return (
        <>
                <div className='container'>
                    <h1>Review Data</h1>
                    <div className='container mt-3' style={{ justifyContent: 'center'}}>
      
                    <table className='table table-borderless mb-5' style={{ marginLeft: '24%'}} >
                
                        <thead>
                        <tr>
                            <th scope="col" style={{width:'500px'}}></th>
                            <th scope="col" style={{width:'0px'}}></th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody className='col-3'>
                        <tr>
                            <td>Nomor Rekening Sumber Dana</td>
                            <td>:&nbsp;</td>
                            <td>
                            {Norek}
                            </td>
                        </tr>
                        <tr>
                            <td>Setoran Rutin Bulanan</td>
                            <td>:&nbsp;</td>
                            <td>
                                Rp {Setoran}
                            </td>

                        </tr>
                        <tr>
                            <td>Jangka Waktu</td>
                            <td>:&nbsp;</td>
                            <td>
                                {Jangka}
                            </td>
                        </tr>
                        <tr>
                            <td>Tujuan</td>
                            <td>:&nbsp;</td>
                            <td>
                            {Tujuan}
                            </td>
                        </tr>
                        <tr>
                            <td>Keterangan</td>
                            <td>:&nbsp;</td>
                            <td>
                                {Keterangan}
                            </td>
                        </tr>
                        <tr>
                            <td>Nomor Handphone</td>
                            <td>:&nbsp;</td>
                            <td>
                                {NOHP}
                            </td>
                        </tr>
                        <tr>
                            <td>Alamat Email</td>
                            <td>:&nbsp;</td>
                            <td>
                                {Email}
                            </td>
                        </tr>
                        <tr>
                            <td>Notifikasi</td>
                            <td>:&nbsp;</td>
                            <td>
                                E-mail
                            </td>
                        </tr>
                        <tr>
                            <td>Perpanjang Otomatis</td>
                            <td>:&nbsp;</td>
                            <td>
                                Yes
                            </td>
                        </tr>
                        
                        </tbody>
                    </table>

                </div>
            </div>
            
        </>
    )

}
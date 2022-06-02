import React, { useContext } from 'react';
import SelectField from './element_form/Select_Form';
import SK from '../components/SK';
import { Link } from 'react-router-dom';
import { Checkbox, Radio } from '@mui/material';
import { dataContex } from './Form/StepContex';
import InputField from './element_form/Input_Form';
import CheckboxField from './element_form/Checkbox_Form';

const Sumber = [
    {
        value: null,
        label: 'none'
    },
    {
        value: '00000948',
        label: '00000948'
    },
    {
        value: '00000123',
        label: '00000123'
    }
]

const Waktu = [
    {
        value: null,
        label: ' '
    },
    {
        value: '1 Bulan',
        label: '1 Bulan'
    },
    {
        value: '2 Bulan',
        label: '2 Bulan'
    },
    {
        value: '3 Bulan',
        label: '3 Bulan'
    },
    {
        value: '4 Bulan',
        label: '4 Bulan'
    },
    {
        value: '5 Bulan',
        label: '5 Bulan'
    },
    {
        value: '6 Bulan',
        label: '6 Bulan'
    },
    {
        value: '7 Bulan',
        label: '7 Bulan'
    },
    {
        value: '8 Bulan',
        label: '8 Bulan'
    },
    {
        value: '9 Bulan',
        label: '9 Bulan'
    },
    {
        value: '10 Bulan',
        label: '10 Bulan'
    },
    {
        value: '11 Bulan',
        label: '11 Bulan'
    },
    {
        value: '12 Bulan',
        label: '12 Bulan'
    }
]

const TujuanBuat = [
    {
        value: null,
        label: ' '
    },{
        value: 'Pendidikan',
        label: 'Pendidikan'
    },{
        value: 'Konsumtif',
        label: 'Konsumtif'
    },{
        value: 'Pensiun',
        label: 'Pensiun'
    },{
        value: 'Rekreasi',
        label: 'Rekreasi'
    },{
        value: 'Ibadah Haji',
        label: 'Ibadah Haji'
    }
]

const features = 'menubar=yes, location=yes, resizable=no, scrollbar=yes, status=no, height=800, width=800'

export default function Form_Rek(props){
    // const { userData, setUserData, submittedData } = useContext(dataContex)
    const {
        formField: {
            Norek,
            Setoran,
            Jangka,
            Tujuan,
            Keterangan,
            NOHP,
            Email,
            Notifikasi1,
            Notifikasi2,
            Notifikasi3,
            Yes,
            No
        }
      } = props;

    return(
        <>
        
        <div className='container mt-5' style={{ justifyContent: 'center'}}>
      
            <form>
                <table className='table table-borderless mb-3' style={{marginLeft: '14%'}} >
                    <tbody>
                    <tr>
                        <td>Nomor Rekening Sumber Dana*</td>
                        <td>:&nbsp;</td>
                        <td>
                        <SelectField name={Norek.name} value={Sumber.value} className='form-select mb-3 w-50' data={Sumber}/>

                        </td>
                    </tr>
                    <tr>
                        <td>Setoran Rutin Bulanan*</td>
                        <td>:&nbsp;</td>
                        <td>
                            <InputField name={Setoran.name} className='form-control mb-3 w-50'  type="text" placeholder="Rp."/>
                        </td>

                    </tr>
                    <tr>
                        <td>Jangka Waktu*</td>
                        <td>:&nbsp;</td>
                        <td>
                            <SelectField name={Jangka.name} className='form-select mb-3 w-50' data={Waktu}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Tujuan*</td>
                        <td>:&nbsp;</td>
                        <td>
                        <SelectField name={Tujuan.name} className='form-select mb-3 w-50' data={TujuanBuat}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Keterangan</td>
                        <td>:&nbsp;</td>
                        <td>
                            <InputField name={Keterangan.name} className='form-control mb-3 w-50' type="text" placeholder="Masukkan Keterangan"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Nomor Handphone*</td>
                        <td>:&nbsp;</td>
                        <td>
                            <InputField name={NOHP.name} className='form-control mb-3 w-50' type="text" placeholder="08XXXXXXX"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Alamat Email*</td>
                        <td>:&nbsp;</td>
                        <td>
                            <InputField name={Email.name} className='form-control mb-3 w-50' type="text" placeholder="Ex: abcdef@gmail.com"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Notifikasi*</td>
                        <td>:&nbsp;</td>
                        <td>
                            <input name={Notifikasi1.name} className='form-check-input'  type="radio"   /> SMS &nbsp; &nbsp;
                            <input name={Notifikasi2.name} className='form-check-input'  type="radio" /> Email &nbsp; &nbsp;
                            <input name={Notifikasi3.name} className='form-check-input mb-3' type="radio"  /> SMS & Email
                        </td>
                    </tr>
                    <tr>
                        <td>Perpanjang Otomatis*</td>
                        <td>:&nbsp;</td>
                        <td>
                            <input name={Yes.name} className='form-check-input' type="radio" /> YES &nbsp; &nbsp;
                            <input name={No.name} className='form-check-input' type="radio" /> NO
                        </td>
                    </tr>
                    
                    </tbody>
                </table>
                <div>
                <p className='d-flex mt-5' style={{justifyContent:'center'}}>Klik &nbsp; <p onClick={() => window.open("/SK", "_blank", features)} style={{color: '#2962ff'}}> di sini</p> 
                    &nbsp; untuk membaca ketentuan-ketentuan Tabungan Berjangka </p>
                    <div className='d-flex mb-5' style={{ height:'25px', justifyContent:'center', marginTop:'-25px'}}>
                        <CheckboxField className='d-flex'/>
                        <p className='d-flex'>Saya telah membaca, menyetuju, dan memahami Tabungan Berjangka dan Ringkasan Produk dan layanan</p>
                    </div>
                </div>
               
                    <h5 className='text-danger'>Catatan:</h5>
                    <div className='catatan mb-3' style={{background:'#D0CECE', padding:20,}}>
                        <p>sLorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                             when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                             It has survived not only five centuries, but also the leap into electronic typesetting, 
                             remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </form>
        </div>
        </>
    )
}
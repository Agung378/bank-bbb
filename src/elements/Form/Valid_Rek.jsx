import * as Yup from 'yup'
import Input_Rek from './Input_Rek'

const {
    formField: {
        Norek,
        Setoran,
        Jangka,
        Tujuan,
        NOHP,
        Email,
    }
} = Input_Rek

export default [
    Yup.object().shape({
        [Norek.name]: Yup.string().required(`${Norek.requiredErrorMsg}`),
        [Setoran.name]: Yup.string().required(`${Setoran.requiredErrorMsg}`),
        [Jangka.name]: Yup.string().required(`${Jangka.requiredErrorMsg}`),
        [Tujuan.name]: Yup.string().required(`${Tujuan.requiredErrorMsg}`),
        // [Keterangan.name]: Yup.string().required(`${Keterangan.requiredErrorMsg}`),
        [NOHP.name]: Yup.string().required(`${NOHP.requiredErrorMsg}`),
        [Email.name]: Yup.string().required(`${Email.requiredErrorMsg}`)
    })
]
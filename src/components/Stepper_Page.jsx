import React, { Fragment, useState } from 'react';
import {
  Stepper,
  Step,
  StepButton,
  Button,
  Typography,
  CircularProgress,
  Alert, 
  AlertTitle, 
  Dialog
} from '@mui/material';
import { Formik, Form } from 'formik';
import Form_Rek from '../elements/Form_Rek';
import Review from '../elements/From_Review';
import FormVal from '../elements/Form_Val';

import Input_Rek from '../elements/Form/Input_Rek';
import Value_Rek from '../elements/Form/Value_Rek';
import Valid_Rek from '../elements/Form/Valid_Rek';
import { useNavigate } from 'react-router-dom';
import { fontSize } from '@mui/system';

const steps = ['Pengisian Form', 'Review Data', 'Validasi'];
const {formId, formField} = Input_Rek

function Steper(step) {
  switch(step) {
    case 0: 
      return <Form_Rek formField={formField}/>
    case 1:
      return <Review/>
    case 2:
      return <FormVal/>
    default:
      return <h1>Not Found</h1>
  }
}

export default function Stepper_Page() {
  const [activeStep, setActiveStep] = useState(0)
  const currentValidationSchema = Valid_Rek[activeStep]
  const isLastStep = activeStep === steps.length - 1;
  const [successMessages, setSuccessMessages] = useState(false);
  const [errorMessages, setErrorMessages] = useState(false);

  const database = [{PIN: '123456'}]

  const onClose = () => {
    setSuccessMessages(false)
  }
  
  let navigate = useNavigate()

  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async function _submitForm( actions) {
    var {PIN} = document.forms[0]
    const userData = database.find((user) => user.PIN === PIN.value )

    if(userData)
    {
      if(userData.PIN !== PIN.value) {
        setErrorMessages(!errorMessages);
    } else {
        await _sleep(1000)
        actions.setSubmitting(false)
    }
  }
    
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm( actions);
      // actions.setSubmitting(true)
      setSuccessMessages(!successMessages);
    }
    else {
      setActiveStep(activeStep + 1)
      actions.setTouched({})
      actions.setSubmitting(false)
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1)
  }

  const Home = () => {
    navigate('/Home')
  }

  return(
    <Fragment className='d-flex'>
      <Typography style={{marginLeft:'-0.5%', fontFamily: 'IBM Plex Sans'}} component="h1" variant="h4">Pembukaan Tabungan Rekening Berjangka</Typography>
      <Stepper className='d-flex w-50 '  activeStep={activeStep} style={{marginLeft:'25%', fontFamily: 'IBM Plex Sans'}}>
        {steps.map(label => (
          <Step key={label}>
            <StepButton  onClick={_handleSubmit}>{label}</StepButton>
          </Step>
        ))}
      </Stepper>
      <Fragment>
        {activeStep === steps.length ? 
        (
          <>
          
          
          </>
        ) : (
          <Formik initialValues={Value_Rek} validationSchema={currentValidationSchema} onSubmit={_handleSubmit}>
            {({isSubmitting}) => (
              <Form id={formId}>
                {Steper(activeStep)}
              {/* <div style={{marginLeft: '650px',}}>
              
                 </div> */}
                <div className='d-flex' style={{marginLeft:840}}>
                {activeStep !== 0 && (
                  <Button className='d-flex' style={{border:"2px solid #8A05BE", maxHeight:40, color:'#8A05BE',paddingLeft:70, paddingRight:60, marginLeft:'-250px'}}onClick={_handleBack}>Kembali</Button>
                )}
                &nbsp;   &nbsp;
                  <Button style={{background:'#8A05BE', paddingLeft:70, paddingRight:70,}}  disabled={isSubmitting} name='PIN' type="submit" variant="contained">
                    {isLastStep ? 'Lanjutkan' : 'Lanjut'}
                  </Button>
                 
                  {isSubmitting && (
                    <CircularProgress size={24} />
                  )}
                </div>
             
              </Form>

            )}
            </Formik>
        )}
      </Fragment>
      <Dialog open={successMessages}  >
            <Alert
              severity="success"
              color="success"
              role="button"              
              // onClose={onClose}           
              sx={{               
                "& .MuiAlert-icon": {
                  color: "green",
                  fontSize: "80px"
                }
              }}
            >
              <AlertTitle className='text-center'>Selamat!</AlertTitle>
              Akun Anda Telah Tervalidasi!<br/> 
              <Button onClick={Home} className='d-flex' style={{backgroundColor: '#8A05BE', color: 'white', float:'right', marginTop:'8px', height: '30px'}}>OK</Button>
            </Alert>
          </Dialog>
          <Dialog open={errorMessages}  >
            <Alert
              severity="error"
              color="success"
              role="button"              
              onClose={onClose}           
              sx={{               
                "& .MuiAlert-icon": {
                  color: "green",
                  fontSize: "80px"
                }
              }}
            >
              <AlertTitle className='text-center'>Selamat!</AlertTitle>
              Akun Anda Telah Tervalidasi!<br/> 
              {/* <Button onClick={Home} className='d-flex' style={{backgroundColor: '#8A05BE', color: 'white', float:'right', marginTop:'8px', height: '30px'}}>OK</Button> */}
            </Alert>
          </Dialog>
    </Fragment>
  )
}

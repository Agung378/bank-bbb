import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Alert, AlertTitle, Dialog } from '@mui/material';

export default function Form_Login() {
    const [errorMessages, setErrorMessages] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const history = useNavigate();

    let navigate = useNavigate();

    const database = [
        {
            id: "12345",
            password: "admin"
        },
        {
            id: "1234",
            password: "admin2"
        }
    ];

    const errors = {
        id: "",
        pass: ""
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { id, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.id === id.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // history.push('Api');
                // Invalid password
                setErrorMessages(!errorMessages);

            } else {
                setIsSubmitted(true);
                navigate('/Home')

            }
        } else {
            // Username not found
            setErrorMessages({ name: "id", message: errors.id });
        }


    };

    const onClose = () => {
        setErrorMessages(false)
    }

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label className='form-label' >User ID <br />
                <input type="text" name="id" placeholder='User ID' /> {renderErrorMessage("id")}
            </label><br />
            <label className='form-label' >Password <br />
                <input type="password" name="pass" placeholder='password' />
                {renderErrorMessage("pass")}
            </label><br />

            <button className='submit' type='submit' value="Login" >Masuk</button>
        </form>
        <Dialog open={errorMessages} >
        <Alert
          severity="error"
          color="error"
          role="button"
          
          onClose={onClose}
        //   closeText="Doesn't Work!"
          sx={{
            // width: '80%',
            // margin: 'auto',
            "& .MuiAlert-icon": {
              color: "red"
            }
            //backgroundColor: "green"
          }}
        >
          <AlertTitle>Error!</AlertTitle>
          Password atau UserID anda salah!
        </Alert>
      </Dialog>
      </>
    )

}
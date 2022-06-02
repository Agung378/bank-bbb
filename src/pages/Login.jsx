import React from "react";
import "../assets/style/Login.css";
import Header_Login from '../components/Header_Login';
import Footer from '../components/Footer';
import Form_Login from '../elements/Form_Login';

export default function Login() {
    // const [details, setDetails] = useState({ id: "", password: "" });

    //     Login(details);
    // }
    
    // const rootElement = document.getElementById("root");
    // ReactDOM.render(<Logiin />, rootElement);

    return (
        <>

            <Header_Login />
            <div className='container'>
                <div className='row'>
                    <div className='colom1 col-md-8 '>
                        <h1>Selamat datang <br /> di myEasy Bank BBB</h1>
                    </div>
                    <div className='colom2 col-md-auto' style={{marginTop: 90, width:350, marginLeft: 30}}>
                        <h6>Login ke Internet Banking</h6>


                        <Form_Login />


                    </div>

                </div>
            </div>


            <div className='container'>
                <div className='section'>
                    <h3 className='text-center'>Promotion and Advertising</h3>

                </div>

            </div>

            <Footer />


        </>

    )
}
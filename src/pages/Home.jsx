import React from "react";
import "../assets/style/Login.css";
import Footer from '../components/Footer';
import Header from "../components/Header";
import Navbar from "../elements/Navbar";
import '../assets/style/Navbar.css';
import Homepage from "../components/Homepage";

export default function Home() {
    return(
        <><Header />
        <Navbar />
        <Homepage/>
        
        <Footer /></>
    )
}
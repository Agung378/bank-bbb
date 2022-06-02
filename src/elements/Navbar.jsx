import { Link } from "react-router-dom";
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "../assets/style/Navbar.css";
import { Sidebar } from "./Sidebar";
import { IconContext } from "react-icons";


function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(
        <>
        <div className="Navbar-menu">
        <IconContext.Provider value={{color: "black"}}>
            <div className="Navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} style={{marginLeft: 30,marginTop: 10,}} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} style={{marginTop:'307px', marginLeft:'-2px'}}>
                <ul className="nav-menu-items">
                    <li className="nav-toggle">
                        <div to="#" className="menu-bars">
                            <FaIcons.FaBars onClick={showSidebar} style={{marginRight:2}} /><p style={{margiLeft:5, marginTop: -5,}}>Menu Bank BBB</p>
                        </div>
                    </li>
                    {Sidebar.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
            </div>
        </>
    )
}

export default Navbar;
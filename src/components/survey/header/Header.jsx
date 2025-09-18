//import React, { useState } from "react";
import logo from "../../../assets/images/logo.png";
import ProgressBar from "./ProgressBar";
import { Link } from "react-router-dom";
 
const Header = ({ progressBar }) => {
    return (
        <>
            <header className="header">
                <Link to="/" className="logo-link">
                    <img src={logo} alt="Sayahalloween" className="logo-img" />
                </Link>
                <ProgressBar progress={progressBar}></ProgressBar>
            </header>

        </>
    )
}

export default Header
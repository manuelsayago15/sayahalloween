//import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import ProgressBar from "./ProgressBar";
 
const Header = () => {
    return (
        <>
            <header className="header">
                <div>
                    <img src={logo} alt="Sayahalloween" />
                </div>
                <ProgressBar></ProgressBar>
            </header>

        </>
    )
}

export default Header
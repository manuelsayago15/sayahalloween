//import React, { useState } from "react";
import logo from "../../../assets/images/logo.png";
import ProgressBar from "./ProgressBar";
 
const Header = ({ progressBar }) => {
    return (
        <>
            <header className="header">
                <div>
                    <img src={logo} alt="Sayahalloween" />
                </div>
                <ProgressBar progress={progressBar}></ProgressBar>
            </header>

        </>
    )
}

export default Header
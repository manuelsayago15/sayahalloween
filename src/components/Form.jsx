//import React, { useState } from "react";
import Header from './Header'
import Phase1 from './phase1/Phase1'

const Form = () => {
    let title = 'Sayahalloween'
    return (
        <>
            <Header title={title}></Header>
            <Phase1></Phase1>
            <footer>Copyright © 2025</footer>
        </>
    )
}

export default Form
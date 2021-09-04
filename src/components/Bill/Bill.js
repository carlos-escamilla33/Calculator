import React, { useState } from "react";
import "./Bill.css"
import Tip from "../Tip/Tip.js"
import PeopleTotal from "../PeopleTotal/PeopleTotal.js"

const Bill = () => {
    return (
        <form className="container">
            <p className="title">Bill</p>
            <input
            className="billInput"
            placeholder="$"
             />
             <p>Select Tip %</p>
             <Tip />
             <PeopleTotal />
        </form>
    )
}

export default Bill;
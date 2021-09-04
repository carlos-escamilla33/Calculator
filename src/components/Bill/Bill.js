import React, { useState } from "react";
import Tip from "../Tip/Tip.js"
import PeopleTotal from "../PeopleTotal/PeopleTotal.js"

const Bill = () => {
    return (
        <form>
            <p>Bill</p>
            <input
            placeholder="$"
             />
             <p>Select Tip %</p>
             <Tip />
             <PeopleTotal />
        </form>
    )
}

export default Bill;
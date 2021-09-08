import React, { useState } from "react";
import { TextField, Container, Typography } from "@material-ui/core";
import Tip from "../Tip/Tip.js"
import PeopleTotal from "../PeopleTotal/PeopleTotal.js"
import "./Bill.css"

const Bill = () => {
    const [bill, setBill] = useState(0);

    const billHandler = (event) => {
        event.preventDefault();
        setBill(event.target.value)
    }

    return (
        <Container className="container">
            <form>
                <Typography>Bill</Typography>
                <TextField
                    id="outlined-size-small"
                    variant="outlined"
                    label="$ Amount $"
                    size="small"
                    value={bill}
                    onChange={billHandler}
                />
                <Typography>Select Tip %</Typography>
                <Tip />
                <PeopleTotal />
            </form>
        </Container>
    )
}

export default Bill;
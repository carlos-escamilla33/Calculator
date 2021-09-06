import React, { useState } from "react";
import { TextField, Container, Typography } from "@material-ui/core";
import Tip from "../Tip/Tip.js"
import PeopleTotal from "../PeopleTotal/PeopleTotal.js"
import "./Bill.css"

const Bill = () => {
    return (
        <Container className="container">
            <form>
                <Typography>Bill</Typography>
                <TextField
                    id="outlined-size-small"
                    variant="outlined"
                    label="$ Amount $"
                    size="small"
                />
                <Typography>Select Tip %</Typography>
                <Tip />
                <PeopleTotal />
            </form>
        </Container>
    )
}

export default Bill;
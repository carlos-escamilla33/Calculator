import React, { useState } from "react";
import { TextField, Container, Button } from "@material-ui/core";
import Tip from "../Tip/Tip.js";
import PeopleTotal from "../PeopleTotal/PeopleTotal.js";
import "./Bill.css";

const Bill = (props) => {
    const { bill, setBill } = props;

    const billHandler = (event) => {
        setBill(Number(event.target.value))
    }

    // sconst buttonHandler = (event) => {
    //     event.preventDefault();

    // }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(bill);
        setBill("")
    }

    return (
        <Container className="container">
            <form onSubmit={submitHandler}>
                <TextField
                    id="outlined-size-small"
                    variant="outlined"
                    label="$ Enter Amount $"
                    size="small"
                    type="number"
                    value={bill}
                    onChange={billHandler}
                />
                <Tip bill={bill} />
                <PeopleTotal />
                <div className="submit">
                    <Button
                        type="submit"
                        variant="outlined"
                        color="primary"
                    >Submit</Button>
                </div>
            </form>
        </Container>
    )
}

export default Bill;
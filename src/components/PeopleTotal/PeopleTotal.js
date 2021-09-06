import React from "react";
import { TextField } from "@material-ui/core"

const PeopleTotal = () => {
    return (
        <div>
            <TextField
                variant="outlined"
                label="Number of People"
                size="small"
            />
        </div>
    )
}

export default PeopleTotal;
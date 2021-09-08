import React from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core"
import "./Tip.css"

const Tip = (props) => {
    const { bill } = props;

    const tipPercent = [
        {
            id: 1,
            percentage: 5
        },
        {
            id: 2,
            percentage: 10
        },
        {
            id: 3,
            percentage: 15
        },
        {
            id: 4,
            percentage: 25
        }
    ];

    return (
        <div className="contain">

            {
                tipPercent.map((percent) => {
                    return (
                        <div className="btn" key={percent.id}>
                            <Button
                                className="btn"
                                variant="contained"
                                color="primary"
                            >
                                {`${percent.percentage}%`}
                            </Button>
                        </div>
                    )
                })
            }
            <TextField
                className="customInput"
                label="Custom Tip %"
                id="outlined-size-small"
                variant="outlined"
                size="small"
            >Custom
            </TextField>
        </div>
    )
}

export default Tip;
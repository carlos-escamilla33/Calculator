import React from "react";
import { spacing } from "@material-ui/system";
import { Button } from "@material-ui/core"
import "./Tip.css"

const Tip = () => {
    return (
        <div>
            <div className="btn">
                <Button
                    className="btn"
                    variant="contained"
                    color="primary">5%</Button>
            </div>
            <div className="btn">
                <Button
                    variant="contained"
                    color="primary">10%</Button>
            </div>
            <div className="btn">
                <Button
                    variant="contained"
                    color="primary">15%</Button>
            </div>
            <div className="btn"> 
                <Button
                    variant="contained"
                    color="primary">25%</Button>
            </div>
            <div className="btn">
                <Button
                    variant="outlined">Custom</Button>
            </div>
        </div>
    )
}

export default Tip;
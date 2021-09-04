import React from "react";
import "./Tip.css"

const Tip = () => {
    return (
        <div className="btnContainer">
            <div>
                <button>5%</button>
            </div>
            <div>
                <button>10%</button>
            </div>
            <div>
                <button>15%</button>
            </div>
            <div>
                <button>25%</button>
            </div>
            <div>
                <button className="btnLast customBtn">Custom</button>
            </div>
        </div>
    )
}

export default Tip;
import "./BlockBox.css";
import React from "react";

const BlockBox = (props:any) =>{
    let classes = `box ${props.className != undefined ? props.className : ""}`;
    return(
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default BlockBox;
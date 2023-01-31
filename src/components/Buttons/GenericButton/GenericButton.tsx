import ButtonElement from "../../../@Types/ButtonElement";
import React from 'react';
import "./GenericButton.css";

const GenericButton = (props:ButtonElement)=>{
  const classe:string = props.className === undefined ? "GenericButton" : props.className;
    return (
        <>
            <button
                className={classe}
                disabled={props.disabled}
                onClick={props.startClick}
            >
                {props.text}
            </button>
        </>
    );
}

export default GenericButton;
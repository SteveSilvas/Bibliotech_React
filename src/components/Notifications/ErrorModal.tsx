import  './NotificationsModal.css';
import React from 'react';

const ErrorModal = (props:any) => {

   return (
        <div className="box">
            <div className="panel error shadow">
                <span className="message">
                    {props.textMessage}
                </span>
                <button className="confirm shadow" onClick={props.hideModal}>OK</button>
            </div>
        </div>
    );
}



export default ErrorModal;

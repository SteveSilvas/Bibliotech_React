import './NotificationsModal.css';
import React from 'react';

const SuccessModal = (props:any) => {

   return (
        <div className="box success shadow">
            <div className="panel success shadow">
                <span className="message">
                    {props.textMessage}
                </span>
                <button className="confirm success shadow" onClick={props.hideModal}>OK</button>
            </div>
        </div>
    );
}



export default SuccessModal;
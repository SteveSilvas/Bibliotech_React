import BlockBox from '../BlockBox/BlockBox';
import  './NotificationsModal.css';
import React from 'react';

const ErrorModal = (props:any) => {

   return (
        <BlockBox>
            <div className="panel error shadow">
                <span className="message">
                    {props.textMessage}
                </span>
                <button className="confirm shadow" onClick={props.hideModal}>OK</button>
            </div>
        </BlockBox>
    );
}



export default ErrorModal;

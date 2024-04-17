import BlockBox from '../BlockBox/BlockBox';
import './NotificationsModal.css';
import React from 'react';

const SuccessModal = (props:any) => {

   return (
        <BlockBox>
            <div className="panel success shadow">
                <span className="message">
                    {props.textMessage}
                </span>
                <button className="confirm success shadow" onClick={props.hideModal}>OK</button>
            </div>
        </BlockBox>
    );
}



export default SuccessModal;
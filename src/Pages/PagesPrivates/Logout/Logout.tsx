
import { useState } from "react";
import React from 'react';
import GenericButton from "../../../components/Buttons/GenericButton/GenericButton";
import "./Logout.css";
import { useNavigate } from "react-router-dom";
import Confirm from "../../../components/Confirm/Confirm";
// import {  } from '@react-oauth/google';

const LogoutPage = (props: any) => {
    const [confirm, setConfirm] = useState<boolean | undefined>(undefined);
    const [showConfirmModal, setShowConfirModal] = useState<boolean>(true);
    const navigate = useNavigate();

    function renderConfirm() {
        // const onLogout = UseGoogleLogout({
        //     // clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        //     onLogoutSuccess: handleLogoutSuccess,
        //     onFailure: handleLogoutFailure,
        // })
        const onLogout=()=>{
            props.setAuthenticated(false);
            navigate("/")
        }
        
        const handleOnChoise = (value:boolean)=>{
            if(value) onLogout();
            else(setShowConfirModal(false))
        }

        return (
            <Confirm 
                message="Deseja mesmo sair?" 
                showThis={showConfirmModal}
                onChoise={handleOnChoise}
            />
        );
    }


    return (
        <div className="LogoutPage">
            {renderConfirm()}
            {confirm ? <></> : <></>}
        </div>
    );
}

export default LogoutPage;
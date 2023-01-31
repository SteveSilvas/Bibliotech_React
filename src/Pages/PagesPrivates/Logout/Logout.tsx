
import { useState } from "react";
import React from 'react';
import GenericButton from "../../../components/Buttons/GenericButton/GenericButton";
import "./Logout.css";
import { Navigate, useNavigate } from "react-router-dom";
// import {  } from '@react-oauth/google';

const LogoutPage = (props: any) => {
    const [confirm, setConfirm] = useState<boolean | undefined>(undefined);
    var navigate = useNavigate();

    function renderConfirm() {
        const handleLogoutSuccess=()=>{
            alert("Logout success")
        }
        
        
        const handleLogoutFailure=()=>{
            alert("Logout ERROR")
        }
        
        // const onLogout = UseGoogleLogout({
        //     // clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        //     onLogoutSuccess: handleLogoutSuccess,
        //     onFailure: handleLogoutFailure,
        // })
        const onLogout=()=>{
            props.setAuthenticated(false);
        }
       
        return (
            <div>
                <h1>Deseja mesmo sair?</h1>
                <GenericButton className="LoginButton LoginButtonGoogle" startClick={() => navigate('/app')} text="Não" />
                <GenericButton className="LoginButton LoginButtonGoogle" startClick={onLogout} text="Sim" />
            </div>
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
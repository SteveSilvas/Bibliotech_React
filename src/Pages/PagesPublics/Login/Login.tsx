import React, { useState } from "react";
import GenericButton from "../../../components/Buttons/GenericButton/GenericButton";
import GenericInput from "../../../components/Input/GenericInput/GenericInput";
import "./Login.css";
import { GoogleLogin } from '@react-oauth/google';
import api from '../../../services/Api';

const LoginPage = (props: any) => {
    const [email, setEmail] = useState<string>("");
    const [pass, setPass] = useState<string>("");

    function handleStartLogin(e:any) {
        e.preventDefault();
        try {
            api.post(`/users/login`, {
                data:{
                    Email: email,
                    Pass: pass
                }
            })
            .then((res)=>{
                props.setUserLogged(res.data);
            })
            .catch((err) => 
            
            props.setNotificationsModal({
                showModal: true,
                textMessage: err,
                typeMessage: 0,
            }))

        } catch (error) {
            
        }
    }

    function handleChangeEmail(email:string) {
        setEmail(email);
    }

    function handleChangePass(pass:string) {
        setPass(pass)
    }

    function successLogin() {
        props.setUserLogged({Name: "logado com google"});
        props.setAuthenticated(true);
    }

    function errorLogin() {
        props.setAuthenticated(false);

        props.setNotificationsModal({
            showModal: true,
            textMessage: "Erro ao logar com google",
            typeMessage: 0,
        });
    }

    return (
        <div className="LoginPage">
            <section className="LoginSection">
                <strong className="LoginTitle">Login</strong>
                <form className="LoginForm">
                    <div className="LoginFormRow">
                        <label>Email:</label>
                        <GenericInput type="email" placeholder="ex: meuEmail@gmail.com" changeValue={(value)=>handleChangeEmail(value)} />
                    </div>
                    <div className="LoginFormRow">
                        <label>Senha: </label>
                        <GenericInput type="password" placeholder="ex: B3$546gdc&@" changeValue={(value)=>handleChangePass(value)} />
                    </div>
                    <div className="LoginFormRow">
                        <a className="LinkPassword" href="google.com">Esqueci minha senha</a>
                    </div>
                    <div className="LoginFormRow">
                        {/* <GenericButton className="LoginButton LoginButtonGoogle" text="Entrar com Google" /> */}
                        <GoogleLogin
                            // buttonText="Entrar com Google"
                            onSuccess={successLogin}
                            onError={errorLogin}
                        />
                    </div>

                    <nav className="LoginFormRow">
                        <button className="LoginButton" onClick={(e:any)=>handleStartLogin(e)}> Entrar </button>
                    </nav>
                </form>
            </section>
        </div>
    );
}

export default LoginPage;
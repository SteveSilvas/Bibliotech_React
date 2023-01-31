import React from "react";
import GenericButton from "../../../components/Buttons/GenericButton/GenericButton";
import GenericInput from "../../../components/Input/GenericInput/GenericInput";
import "./Login.css";
import { GoogleLogin } from '@react-oauth/google';

const LoginPage = (props:any) => {
 
        function handleStartLogin() {
            alert("changeValue");
        }

        function successLogin(){
            // window.location.href="/app/profile";
            props.setIsLoggedIn(true);
        }

        function errorLogin(){
            props.setIsLoggedIn(false);
        }

    return (
        <div className="LoginPage">
            <section className="LoginSection">
                <strong className="LoginTitle">Login</strong>
                <form className="LoginForm">
                    <div className="LoginFormRow">
                        <label>Email:</label>
                        <GenericInput type="email" placeholder="ex: meuEmail@gmail.com" />
                    </div>
                    <div className="LoginFormRow">
                        <label>Senha: </label>
                        <GenericInput type="password" placeholder="ex: B3$546gdc&@" />
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
                        <GenericButton className="LoginButton" startClick={handleStartLogin} text="Entrar" />
                    </nav>
                </form>
            </section>
        </div>
    );
}

export default LoginPage;
import { useState } from "react";
import React from 'react';
import GenericButton from "../../../../components/Buttons/GenericButton/GenericButton";
import GenericInput from "../../../../components/Input/GenericInput/GenericInput";
import "./Register.css";
import api from '../../../../services/Api';
import UserType from "../../../../@Types/UserType";
// import Validator from "../../functions/validators/Validators";
import Converters from "../../../../functions/Converters";
const Register = () => {
    const dateMinimum = new Date(1900, 1, 1);

    const [name, setName] = useState<string>("");
    const [birth, setBirth] = useState<Date>(dateMinimum);
    const [email, setEmail] = useState<string>("");
    const [pass, setPass] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function handleStartRegister() {
        const user: UserType = {
            Name: name,
            Birth: birth,
            Email: email,
            Pass: pass,
            Password: password
        };

        if(!validateFields(user)) return;

        api.post('users/add', user)
        .then(()=>{
            alert ("Usuário salvo com sucesso");
        })
        .catch((err) => console.log(err))
    }

    function validateFields(user: UserType):boolean{

        if(!user.Name) {
            alert("preencha o Nome");
            return false;
        }
        if(!user.Birth) {
            alert("preencha o Nascimento");
            return false;
        }
        if(!user.Email) {
            alert("preencha o Email");
            return false;
        }
        if(!user.Pass) {
            alert("preencha o Pass");
            return false;
        }
        if(!user.Password) {
            alert("preencha o Password");
            return false;
        }
        return true
    }

    function handleChangeName(name: string): void {
        setName(name);
    }

    function handleChangeBirth(birth: string): void {
        setBirth(Converters.StringToDate(birth));
    }

    function handleChangeEmail(email: string): void {
        setEmail(email);
    }

    function handleChangePass(pass: string): void {
        setPass(pass);
    }

    function handleChangePassword(password: string): void {
        setPassword(password);
    }

    return (
        <div className="RegisterPage">
            <section className="RegisterSection">
                <strong className="RegisterTitle">Cadastrar</strong>
                <div className="RegisterForm">
                    <div className="RegisterFormRow">
                        <label>Nome:</label>
                        <GenericInput class="Input" type="text" changeValue={handleChangeName} placeholder="ex: Meu Nome Completo" />
                    </div>

                    <div className="RegisterFormRow">
                        <label>Nascimento:</label>
                        <input className="Input" type="date" onChange={()=>handleChangeBirth} />
                    </div>

                    <div className="RegisterFormRow">
                        <label>Email:</label>
                        <GenericInput class="Input" type="text" changeValue={handleChangeEmail} placeholder="ex: MeuEmail@gmail.com" />
                    </div>

                    <div className="RegisterFormRow">
                        <label>Senha:</label>
                        <GenericInput class="Input" type="text" changeValue={handleChangePass} placeholder="ex: M243656MDSF&@#%" />
                    </div>

                    <div className="RegisterFormRow">
                        <label>Confirme a senha:</label>
                        <GenericInput class="Input" type="text" changeValue={handleChangePassword} placeholder="ex: M243656MDSF" />
                    </div>

                    <nav className="LoginFormRow">
                        <GenericButton className="RegisterButton" startClick={handleStartRegister} text="Salvar" />
                    </nav>
                </div>
            </section>
        </div>
    );
}

export default Register;
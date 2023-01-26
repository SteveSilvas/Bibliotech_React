
import GenericButton from "../../components/Buttons/GenericButton/GenericButton";
import GenericInput from "../../components/Input/GenericInput/GenericInput";
import "./Login.css"
const LoginPage = () => {

    function handleStartLogin() {
        alert("changeValue");
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
                        <GenericButton className="LoginButton LoginButtonGoogle" text="Entrar com Google" />
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
import { Link } from "react-router-dom";
import React from 'react';
function NavigatorPublic(){
    return (
        <>
            <nav className="LeftNav">
                <Link className="Link" to="/">Home</Link>

            </nav>
            <nav className="RightNav">
                <Link className="Link" to="/register">Cadastrar</Link>
                <Link className="Link" to="/login">Logar</Link>
            </nav>
        </>
    );
}

export default NavigatorPublic;
import React from "react";
import { Link } from "react-router-dom";

function NavigatorPrivate(){
    return (
        <>
            <nav className="LeftNav">
                <Link className="Link" to="/app">Home</Link>

            </nav>
            <nav className="RightNav">
                <Link className="Link" to="/app/books">Books</Link>
                <Link className="Link" to="/app/profile">Perfil</Link>
                <Link className="Link" to="/app/logout">Sair</Link>
            </nav>
        </>
    );
}
export default NavigatorPrivate;
import React from "react";
import { Link } from "react-router-dom";
import "./NavigatorBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookAtlas } from "@fortawesome/free-solid-svg-icons";

const NavigatorBar = (props:any) => {
    return(
    <section className="NavigatorBar">
        <figcaption className="FigureLogo">
            <FontAwesomeIcon icon={faBookAtlas} className="IconLogo"/>
        </figcaption>
        <nav className="LeftNav">
            <Link className="Link" to="/">Home</Link>

        </nav>
        <nav className="RightNav">
            <Link className="Link" to="/register">Cadastrar</Link>
            <Link className="Link" to="/login">Logar</Link>
        </nav>
    </section>
    );
}

export default NavigatorBar;
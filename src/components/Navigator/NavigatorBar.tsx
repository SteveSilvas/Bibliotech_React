import React from "react";
import "./NavigatorBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookAtlas } from "@fortawesome/free-solid-svg-icons";
import NavigatorPublic from "./NavigatorPublic";
import NavigatorPrivate from "./NavigatorPrivate";

const NavigatorBar = (props: any) => {
 

    return (
        <section className="NavigatorBar">
            <figcaption className="FigureLogo">
                <FontAwesomeIcon icon={faBookAtlas} className="IconLogo" />
            </figcaption>
            {props.isLoggedIn ? <NavigatorPrivate/> : <NavigatorPublic/>}
        </section>
    );
}

export default NavigatorBar;
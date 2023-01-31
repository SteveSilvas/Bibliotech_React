import React from "react";
import "./Panel.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";


const Panel = (props: any) => {
    let classe: string = props.className || "PanelContainer";
    function renderAddButton() {
        return (
            <nav className='Row Right'>
                <FontAwesomeIcon className='AddIcon' title='Adicionar' icon={faSquarePlus} onClick={() => props.onClickAdd(true)} />
            </nav>
        );
    }
    return (
        <section className={classe}>
            <strong className="PanelTitle">
                {props.title}

            </strong>

            {props.showAdd && renderAddButton()}

            <div className="PanelContent">
                {props.children}
            </div>
        </section>
    );
}

export default Panel;
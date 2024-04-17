import React, { useState } from "react";
import "./Confirm.css"
import GenericButton from "../Buttons/GenericButton/GenericButton";
import Panel from "../Panel/Panel";
import BlockBox from "../BlockBox/BlockBox";

const Confirm = (props: any) => {

    const [showThis, setShowThis] = useState<boolean>(props.showThis);

    const handleConfirmFalse = () => {
        props.onChoise(false);
        setShowThis(false);
    }

    const handleConfirmTrue = () => {
        props.onChoise(true);
        setShowThis(false);
    }


    return showThis ?
        <BlockBox>
            <div className="ConfirmModalPanel">
                <Panel title={props.message} >
                    <nav>
                        <GenericButton className="Cancel" startClick={handleConfirmFalse} text="Não" />
                        <GenericButton className="Confirm" startClick={handleConfirmTrue} text="Sim" />
                    </nav>
                </Panel>
            </div>
        </BlockBox>
        : <></>;
    ;
}


export default Confirm;
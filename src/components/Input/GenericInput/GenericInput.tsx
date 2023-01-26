import InputElement from "../../../@Types/InputElement";
import "./GenericInput.css";

const GenericInput = (props: InputElement) => {
    return (
        <>
            <input
                className={`GenericInput ${props.class}`}
                type={props.type}
                disabled={props.disabled}
                value={props.value}
                placeholder={props.placeholder}
                onChange={(e) => props.changeValue? props.changeValue(e.target.value) : "" }
            />
        </>
    );
}

export default GenericInput;
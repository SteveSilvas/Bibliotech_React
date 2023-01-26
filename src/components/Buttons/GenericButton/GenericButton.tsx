import ButtonElement from "../../../@Types/ButtonElement";


const GenericButton = (props:ButtonElement)=>{
  
    return (
        <>
            <button
                className={props.className}
                disabled={props.disabled}
                onClick={props.startClick}
            >
                {props.text}
            </button>
        </>
    );
}

export default GenericButton;
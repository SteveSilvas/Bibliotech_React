import { useState } from "react";
import styles from "./styles.module.css";

function GetCepButton(props:any){
    const [cep, setCep] = useState(props.cep);
    const [endereco, setEndereco] = useState();

    const classes = props.className;
    var url = `https://viacep.com.br/ws/${cep}/json/`;

    function RequestGetCep(e:any){
        e.preventDefault();
        fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'aplication/json'
            }
        })
        .then((resp) => resp.json())
        .then(resp =>{ 
            setEndereco(resp);
            props.setEndereco(resp);
        })
        .catch((err) => console.log(err))
    }

    function handleChangeInputCep(e:any){
        e.preventDefault();
        let cepLimpo = getNumbers(e.target.value);
        cepLimpo = fatiaString(cepLimpo, 8);
        e.target.value = cepLimpo;
        setCep(cepLimpo)
    }

    function getNumbers(text:string){
        if (!text)
            return "";
        return text.replace(/\D+/g, '');
    }

    function fatiaString(value:string, amount:number){
        if(value.length <= amount) {
            return value;
        }
        return value.substring(0, amount);
    }

    function handleKeyDownEnter(e:any){
        if(e.key === 'Enter'){
            RequestGetCep(e);
        }
    }

    return (
        <div className={classes}>
            <input className={styles.inputCEP} type="text" onChange={(e) => handleChangeInputCep(e)} value={props.cep} onKeyDown={(e) => handleKeyDownEnter(e)}/>  
            <button className={styles.buttonCEP} type="submit" onClick={RequestGetCep}>Buscar</button>       
        </div>
    );
}
export default GetCepButton;
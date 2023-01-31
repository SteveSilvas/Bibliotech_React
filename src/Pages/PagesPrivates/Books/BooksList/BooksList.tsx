import React, { useEffect, useState } from "react";
import "./BooksList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import Panel from "../../../../components/Panel/Panel";
import api from '../../../../services/Api';
import GenericList from "../../../../components/GenericList/GenericList";

const BooksList = (props: any)=>{
    const [booksList, setBooksList] = useState();
    
    const facets = [
        {width: "1", name: "ID"},
        {width: "1", name: "Titulo"},
        {width: "1", name: "Autor"},
        {width: "1", name: "Categoria"},
        {width: "1", name: "Data de Criação"},
        {width: "1", name: "Origem de Criação"},
    ]

    function requestBooks(){
        api.get("/books", {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            }
        })
            .then((resp) => {
                setBooksList(resp.data);
            })
            .catch((ex) => console.log);
    }

    useEffect(()=>{
        requestBooks();
    }, []);

    const onDelete=()=>{
        alert("Delete")
    }
    return(
        <Panel className="BooksList" title="Lista de Livros" showAdd={true} onClickAdd={props.enableAddIcon}>
            <GenericList facets={facets} datas={booksList} onDelete={onDelete}/>
        </Panel>
    );
}

export default BooksList;
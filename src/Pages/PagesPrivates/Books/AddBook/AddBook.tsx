import React, { useEffect, useState } from "react";
import "./AddBook.css";
import GenericButton from "../../../../components/Buttons/GenericButton/GenericButton";
import GenericInput from "../../../../components/Input/GenericInput/GenericInput";
import CategoryType from "../../../../@Types/CategoryType";
import api from '../../../../services/Api';

const AddBook = (props: any) => {
    const [categories, setCategories] = useState<CategoryType[]>();

    const [title, setTitle] = useState<string>();
    const [creationDate, setCreationDate] = useState<Date>();
    const [origin, setOrigin] = useState<string>();
    const [author, setAuthor] = useState<string>();
    const [categoryId, setCategoryId] = useState<string>();

    useEffect(() => {
        requestCategories();
    }, []);

    async function requestCategories() {
        api.get("/category", {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            }
        })
            .then((resp) => {
                setCategories(resp.data);
            })
            .catch((ex) => console.log);
    }


    function handleChangeTitle(e:string) {
        setTitle(e);
    }

    function handleChangeCreationDate(e:any) {
        setCreationDate(e.target.value);
    }

    function handleChangeOrigin(e:string){
        setOrigin(e);
    }

    function handleChangeAuthor(e:string) {
        setAuthor(e)
    }

    function handleChangeCategory(e:any) {
        setCategoryId(e.target.value)
    }

    function handleStartRegister() {
        let data = buildDatas();
        api.post("/books/add", {data})
            .then((resp) => {
                props.setNotificationsModal({
                    showModal:true,
                    textMessage: resp.data,
                    typeMessage: 1,
                });
                props.closeAddBook();
            })
            .catch((err) => 
            props.setNotificationsModal({
                showModal:true,
                textMessage: err,
                typeMessage: 0,
            }));
    }

    function buildDatas(){
        return  {
            Title: title,
            Autor: author,
            CreationDate: creationDate,
            CreationLocality: origin,
            CategoryId: categoryId
        };
    }

    function renderCategoriesOptions() {
        if (!categories) return;
        let options: any = [];

        categories.map((cat) => {
            options.push(
                <option key={cat.Id} value={cat.Id}> {cat.Description}</option>
            )
        });

        return options;
    }

    return (
        <div className="AddBooksPage">
            <section className="AddBooksSection">
                <strong className="RegisterTitle">Adicionar Livro</strong>
                <div className="RegisterForm">
                    <div className="AddBookFormRow">
                        <label>Titulo:</label>
                        <GenericInput class="Input" type="text" changeValue={(e)=>handleChangeTitle(e)} placeholder="ex: O pequeno príncipe" />
                    </div>

                    <div className="AddBookFormRow">
                        <label>Data de Criação:</label>
                        <input className="Input" type="date" onChange={(e) => handleChangeCreationDate(e)} />
                    </div>

                    <div className="AddBookFormRow">
                        <label>Origem de Criação:</label>
                        <GenericInput class="Input" type="text" changeValue={(e)=>handleChangeOrigin(e)} placeholder="Bahia-Brazil" />
                    </div>

                    <div className="AddBookFormRow">
                        <label>Autor:</label>
                        <GenericInput class="Input" type="text" changeValue={(e)=>handleChangeAuthor(e)} placeholder="Autor" />
                    </div>

                    <div className="AddBookFormRow">
                        <label>Categoria:</label>
                        <select className="select" onChange={(e)=>handleChangeCategory(e)}>
                            {renderCategoriesOptions()}
                        </select>
                    </div>

                    <nav className="LoginFormRow">
                        <GenericButton startClick={props.closeAddBook} className="GenericButton" text="Voltar" />
                        <GenericButton startClick={handleStartRegister} text="Salvar" />

                    </nav>
                </div>
            </section>
        </div>
    );
}

export default AddBook;
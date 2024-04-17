import React, { useEffect, useState } from "react";
import "./BooksList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import Panel from "../../../../components/Panel/Panel";
import api from '../../../../services/Api';
import GenericList from "../../../../components/GenericList/GenericList";

const BooksList = (props: any) => {
    const [booksList, setBooksList] = useState();

    function requestBooks() {
        api.get("/books", {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            }
        })
            .then((resp) => {
                setBooksList(resp.data);
            })
            .catch((err) =>
                props.setNotificationsModal({
                    showModal: true,
                    textMessage: err,
                    typeMessage: 0,
                }));
    }

    useEffect(() => {
        requestBooks();
    }, []);

    const onDelete = () => {
        alert("Delete")
    }

    type BookType = {
        Id: number,
        Title: string,
        Autor: string,
        Category: string,
        CategoryId?: number,
        CreationDate?: string,
        CreationLocality?: string,
        createdAt: Date,
        updatedAt: Date
    }

    const renderBooksList = () => {
        if (!booksList) return;
        let array: [BookType] = booksList;
        let booksComponents: any = [];
        array.map((book: any, i:number) => {
            let category = book.Category;
            booksComponents.push(
                    <BookFigure key={i}
                        Id={book.Id}
                        Title={book.Title}
                        Autor={book.Autor}
                        Category={category != undefined ? category.Description : ""}
                        CategoryId={book.CategoryId}
                        CreationDate={book.CreationDate}
                        CreationLocality={book.CreationLocality}
                    />
            )
        });

        return booksComponents;

    }


    const BookFigure = (props: any) => {
        return (
            <div className="BooksListFigure">
                <span>{props.Id}</span>
                <strong>{props.Title}</strong>
                <strong>{props.Autor}</strong>
                <span>{props.Category}</span>
                <span>{props.CategoryId}</span>
                <span>{props.CreationDate}</span>
                <span>{props.CreationLocality}</span>
            </div>
        );
    }
    return (
        <Panel className="BooksList" title="Lista de Livros" showAdd={true} onClickAdd={props.enableAddIcon}>
            {/* <GenericList facets={facets} datas={booksList} onDelete={onDelete}/> */}
            <div className="BooksBox">
                {renderBooksList()}
            </div>
        </Panel>
    );
}

export default BooksList;
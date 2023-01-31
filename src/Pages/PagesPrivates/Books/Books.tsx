import "./Books.css";
import React, { useState } from "react";
import BooksList from "./BooksList/BooksList";
import AddBook from "./AddBook/AddBook";
import "./Books.css";
import GenericButton from "../../../components/Buttons/GenericButton/GenericButton";
import Categories from "./BooksCategories/BooksCategories";

const Books = () => {
    const [showList, setShowList] = useState(true);
    const [showAdd, setShowAdd] = useState(false);
    const [showCategory, setShowCategory] = useState(false);

    function handleEnableAddBook(){
        setShowAdd(true);
        setShowList(false);
    }

    function handleCloseAddBook(){
        setShowAdd(false);
        setShowList(true);
    }

    function clearChoise(){
        setShowAdd(false);
        setShowList(false);
        setShowCategory(false);
    }

    function handleShowList(){
        clearChoise();
        setShowList(true);
    }

    
    function handleShowCategory(){
        clearChoise();
        setShowCategory(true);
    }


    function handleShowAdd(){
        clearChoise();
        setShowAdd(true);
    }

    function BooksHeader(){
        return(
            <div>
                <GenericButton text="Listar" startClick={handleShowList}/>
                <GenericButton text="Categorias" startClick={handleShowCategory}/>
                <GenericButton text="Adicionar" startClick={handleShowAdd}/>
            </div>
        );
    }

    return (
        <div className="BooksPage">
            <BooksHeader/>
            {showCategory ? <Categories/> : ""}
            {showList ? <BooksList enableAddIcon={handleEnableAddBook}></BooksList> : ""}
            {showAdd ? <AddBook closeAddBook={handleCloseAddBook}></AddBook> : ""}
        </div>
    );
}

export default Books;

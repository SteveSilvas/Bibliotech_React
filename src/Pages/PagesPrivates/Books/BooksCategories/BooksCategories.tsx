import { useState, useEffect } from 'react';
import React from 'react';
import api from '../../../../services/Api';
import './booksCategories.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import CategoryType from '../../../../@Types/CategoryType';
import Panel from '../../../../components/Panel/Panel';
import GenericButton from '../../../../components/Buttons/GenericButton/GenericButton';
export default function Categories() {

    const [category, setCategory] = useState<CategoryType>();
    const [categoryList, setCategoryList] = useState<CategoryType[]>();
    const [showAdd, setShowAdd] = useState<boolean>(false);

    useEffect(() => {
        requestCategories();
    }, []);



    function saveCategory(): void {
        api.post('category/add', {
            Description: category
        })
            .then((resp) => {
                alert("success")
                console.log(resp);
                requestCategories();
                setShowAdd(true);
            })
            .catch((err) => console.log(err))
    }

    async function requestCategories() {
        api.get("/category", {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            }
        })
            .then((resp) => {
                setCategoryList(resp.data);
            })
            .catch((ex) => console.log);
    }

    async function onDelete(id: number) {
        api.delete("/category/delete", {
                data: { Id: id }
            })
            .then((resp) => {
                alert("success")
                console.log(resp);
            })
            .catch((err) => console.log(err))
    }

    function handleChangeCategory(e: any) {
        setCategory(e.target.value);
    }

    function buildCategoriesList() {
        if (!categoryList) return;

        let elementos: any = [];
        elementos.push(
            <div className='CategoryRow TitleRow'>
                <span className='FieldCategory'>ID</span>
                <span className='FieldCategory'>Descrição</span>
                <span className='FieldCategory'>Excluir</span>
            </div>
        );

        categoryList.map((cat, i) => {
            const categoryElement = (
                <div className='CategoryRow' key={i}>
                    <span className='FieldCategory'>{cat.Id}</span>
                    <span className='FieldCategory'>{cat.Description}</span>
                    <FontAwesomeIcon
                        icon={faTrash}
                        className='FieldCategory TrashIcon'
                        onClick={() => onDelete(Number(cat.Id))}
                        title='Excluir Categoria'
                    />
                </div>
            );

            elementos.push(categoryElement);
        });

        return elementos;
    }

    function renderCategoriesList() {
        return (
            <Panel title="Categorias" showAdd={true} onClickAdd={handleShowAdd}>
                {buildCategoriesList()}
            </Panel>
        );
    }

    function renderAddCategory() {
        return (
            <Panel title="Cadastrar Categorias">
                <div className='AddCategory'>
                    <input
                        type="text"
                        onChange={handleChangeCategory}
                        onKeyDown={(e) => { if (e.key === 'Enter') saveCategory() }}
                        placeholder='Ex: Poesia'
                    />
                    <GenericButton startClick={saveCategory} text="Salvar" />
                    <GenericButton startClick={handleHideAdd} text="Voltar para Lista" />
                </div>
            </Panel>
        );
    }

    function handleShowAdd() {
        setShowAdd(true);
    }
    function handleHideAdd() {
        setShowAdd(false);
    }
    return (
        <div className='Root'>
            {!showAdd && renderCategoriesList()}
            {showAdd && renderAddCategory()}

        </div>
    )
}

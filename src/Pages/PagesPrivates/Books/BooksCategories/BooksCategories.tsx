import { useState, useEffect } from 'react';
import React from 'react';
import api from '../../../../services/Api';
import './booksCategories.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import CategoryType from '../../../../@Types/CategoryType';
import Panel from '../../../../components/Panel/Panel';
import GenericButton from '../../../../components/Buttons/GenericButton/GenericButton';
import MessageModalType from '../../../../@Types/MessageModalType';
import SuccessModal from '../../../../components/Notifications/SuccessModal';
import ErrorModal from '../../../../components/Notifications/ErrorModal';
export default function Categories() {

    const [category, setCategory] = useState<CategoryType>();
    const [categoryList, setCategoryList] = useState<CategoryType[]>();
    const [showAdd, setShowAdd] = useState<boolean>(false);
    const [messageModal, setMessageModal] = useState<MessageModalType>()
  
    useEffect(() => {
        requestCategories();
    }, []);



    function saveCategory(): void {
        api.post('category/add', {
            Description: category
        })
            .then((resp) => {
                requestCategories();
                setMessageModal({
                    showModal:true,
                    textMessage: resp.data,
                    typeMessage: 1,
                })
                setShowAdd(false);
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
                setMessageModal({
                    showModal:true,
                    textMessage: resp.data,
                    typeMessage: 1,
                });
                requestCategories();
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

    const renderModal = () =>{
        if(!messageModal) return;
        if(messageModal.showModal){
            return messageModal.textMessage ?
             renderSuccessModal()
             :
             renderErrorModal();
        }
    }

    const renderSuccessModal = ()=>{
        if(!messageModal) return;
            return (
                <SuccessModal
                    hideModal={hideModalHandler}
                    textMessage={messageModal.textMessage}
                />
            );
    }

    const renderErrorModal = ()=>{
        if(!messageModal) return;

        return (
            <ErrorModal
                hideModal={hideModalHandler}
                textMessage={messageModal.textMessage}
            />
        );
    }

    const hideModalHandler = ()=>{
        setMessageModal({
            showModal: false,
            textMessage: "",
            typeMessage: 0
        })
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
            {renderModal()}
            {!showAdd && renderCategoriesList()}
            {showAdd && renderAddCategory()}

        </div>
    )
}

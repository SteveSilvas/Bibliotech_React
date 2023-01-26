import { useState, useEffect } from 'react';
import api from '../../services/Api';
import './booksCategories.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import CategoryType from '../../@Types/CategoryType';
export default function Categories() {

    const [category, setCategory] = useState<CategoryType>();
    const [categoryList, setCategoryList] = useState<CategoryType[]>();

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
            })
            .catch((err) => console.log(err))
    }

    async function requestCategories() {
        alert("req")
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

    function handleChangeCategory(e: any) {
        setCategory(e.target.value);
    }

    function renderCategoriesList() {
        if (!categoryList) return;

        let elementos: any = [];
        elementos.push(
            <div className='CategoryRow TitleRow'>
                <span className='FieldCategory'>ID</span>
                <span className='FieldCategory'>Descrição</span>
            </div>
        );

        categoryList.map((cat) => {
            const categoryElement = (
                <div className='CategoryRow'>
                    <span className='FieldCategory'>{cat.Id}</span>
                    <span className='FieldCategory'>{cat.Description}</span>
                </div>
            );

            elementos.push(categoryElement);
        });


        return elementos;


    }

    function renderAddCategory() {
        return (
            <section className=''>
                <h2>Cadastrar Categorias</h2>
                <input type="text" onChange={handleChangeCategory} onKeyDown={(e) => { if (e.key === 'Enter') saveCategory() }} />
                <button onClick={saveCategory}>Salvar</button>
            </section>
        );
    }

    return (
        <div className='Root'>
            <div className='CategoryList'>
                <h1>Categorias</h1>
                <FontAwesomeIcon icon={faSquarePlus} />

                {renderCategoriesList()}
            </div>
            {renderAddCategory()}
        </div>
    )
}

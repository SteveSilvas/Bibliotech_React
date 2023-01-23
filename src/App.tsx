import React, { useState } from 'react';
import './App.css';
import api from './services/Api';

function App() {
  const [genericList, setGenericList] = useState();
  const [category, setCategory] = useState();

  function saveCategory(): void {
    api.post('category',{
      Description: category
    })
      .then((resp) => console.log(resp))
      .then(resp => { console.log(resp); })
      .catch((err) => console.log(err))
  }

  async function listCategory() {
    console.log("categoria escolhida "+ category);
    api.get("/status", {
      headers:{
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
      }
    })
    .then((resp) => {
      console.log(resp);
      setGenericList(resp.data);

    })
    .catch((ex)=>console.log);
  }

  function handleChangeCategory(e:any){
    setCategory(e.target.value);
  }

  return (

    <div className="App">
      <input type="text"  onChange={handleChangeCategory}/>
      <button onClick={listCategory}>Listar</button>
      <button onClick={saveCategory}>Salvar</button>

      <p>{genericList}</p>
    </div>
  );
}

export default App;

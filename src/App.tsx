import React, { useState, useEffect } from 'react';
import './App.css';
import api from './services/Api';

function App() {
  const [category, setCategory] = useState();

  useEffect(() =>{

  }, []);

  function saveCategory(): void {
    api.post("https:127.0.0.1:4200/category/add",{
      Description: "Tirinha"
    })
      .then((resp) => console.log(resp))
      .then(resp => { console.log(resp); })
      .catch((err) => console.log(err))
  }

  function listCategory(): void {
    api
    .get('start')
    .then((response) => console.log(response))
    .catch((err) => console.log(err))
  }


  function handleChangeCategory(e: any) {
    setCategory(e.target.value);
  }

  return (

    <div className="App">
      <input type="text" onChange={(e) => handleChangeCategory(e)} />
      <button onClick={listCategory}>Listar</button>
      <button onClick={saveCategory}>Salvar</button>
    </div>
  );
}

export default App;

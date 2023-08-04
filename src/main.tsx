import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

//Quando criamos componentes no React ? Existem 2 casos. No primeiro caso, criamos um componente para representar algo que se repete em tel multiplas vezes, como um post em uma rede social. 
// No segundo caso, criamos um componente quando é possivel separar algo de um componente maior para que possa ser manipulado em outro repositório, tornando o código mais legível e limpo, tornando mais fácil e otimizado o processo de manutenção.
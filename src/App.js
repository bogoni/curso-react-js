import React, { useEffect, useState } from 'react';
import Titulo from './components/Titulo';
import Button from './components/Button';
import Menu from './components/Menu';
import './assets/scss/main.scss';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './Theme'

import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
//nao precisa de ; eh o bloco que demarca inicio e fim
  const aula = <> primeira aula</>

  const chapters = ['um', 'dois']

  const aula2 = (num) => {
    return (
      <> aula {num}</>
    )
  }
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('State mudou ...', count);
  }, [count])
   return (
    <ThemeProvider theme={light}>
    <Menu/>
    <Titulo aula='Aula 02'><p>Teste teste teste <b>teste negrito</b></p></Titulo>
    <Titulo turma='turma134'/>

    <h2>{aula}</h2>
    <h2>{aula2(2)}</h2>
 


{chapters.map((c, index) => {
  return <p key={index}>{c}</p>
})}

<Button variant='Warning' onClick={() => {
    setCount(count+1);}}>Incrementa</Button>

<br/>
<Button variant='Success' onClick={() => {
    setCount(count-1);}}>Decrementa</Button>

<br/>
Count: {count}
</ThemeProvider>
  );
}

export default App;

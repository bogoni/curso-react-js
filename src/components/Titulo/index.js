import React from 'react';

const Titulo = ({aula, turma, children}) => {

    return <>
    <h1>Bem Vindo!</h1>
    {turma && <h2>Turma: {turma}</h2>}
    <hr/>
    {aula}
    <br/>
    {children}
    </>
}

Titulo.defaultProps= {
    aula : 'N/D'
}
export default Titulo;
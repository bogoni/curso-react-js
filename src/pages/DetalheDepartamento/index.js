import React from 'react'
import { useParams } from 'react-router-dom'

const DetalheDepartamento = () => {
  const { idDepartamento } = useParams()
  return (
    <>
      <h1>Detalhes do departamento</h1>
      <ul><li>id: {idDepartamento} </li></ul>
    </>
  )
}

export default DetalheDepartamento
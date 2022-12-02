import React, {useEffect, useState} from 'react'
import Row from './styles'
import { Link } from 'react-router-dom'
import { getDepartamentos } from '../../services/departamentos'
import Loader from '../../components/Loader'

const Departamentos = () =>{
  const [departamentos, setDepartamentos] = useState()
  const [msg, setMsg] = useState('')
  const [showLoading, setShowLoading] = useState(true)
  const loadDepartamentos = async () => {
    try{
      const departamentos =  await getDepartamentos()
      setDepartamentos(departamentos)
      setMsg('')
      setShowLoading(false)
    } catch(e){
      setMsg(`Server error - code: ${e.response.status}`)
      console.error('Exception:', e.response.status)
      setShowLoading(false)
    }
  }

  useEffect(() => {
    if(!departamentos) {
      loadDepartamentos()
    }
  },[departamentos])

   
  return (
    <>
      <h1>Departamentos</h1>
      {showLoading && <Loader/>}
      <h3>{msg}</h3>
      {departamentos && departamentos.map(({nome, id_departamento}) => {
        return (
          <Row key={id_departamento}>
            <Link to={`${id_departamento}`}>{nome}</Link>
          </Row>
        )                
      }
      )}
    </>
  )
}

export default Departamentos
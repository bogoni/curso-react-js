import React, { useState } from "react";
import Button from "../../components/Button";
import { Container, Mensagem } from "./styles";
import { postDepartamento } from '../../services/departamentos'
import Loader from "../../components/Loader";
import  { useNavigate } from 'react-router-dom'

const FormDepartamento = () => {

    const navigate = useNavigate(); 

    const [nome, setNome] = useState('');
    const [sigla, setSigla] = useState('');
    const [msg, setMsg] = useState('');
    const [showLoader, setShowLoader] = useState(false);

    const validaForm = () => {
        if(nome === ''){
            setMsg('Preencha o nome');
            return false;
        }
        if(sigla === ''){
            setMsg('Preencha a sigla')
            return false;
        }
        setMsg('');
        return true;
    }

    const  salvar = async () => {
        if(validaForm()){
           setShowLoader(true);
            try{
            const resp = await postDepartamento({
                nome, sigla
            });       
            setShowLoader(false);  
            navigate('/departamentos');
            } catch(e){
                setMsg(`Server error - code: ${e.response.status}`);
                console.error('Exception:', e.response.status);
                setShowLoader(false);
            }  
        }
    }
    return (
        <Container>
        <h1>Cadastrar Departamento</h1>
        <input type='text'
        placeholder='Nome' 
        value={nome}   name="nome" onChange={e => setNome(e.target.value)} />
        <input type='text' 
        placeholder='Sigla' value={sigla}   name="sigla" onChange={e => setSigla(e.target.value)} />
        <Button variant='Success' onClick={() => salvar()}>
            {showLoader ? <Loader fullScreen={false}>Carregando</Loader> : 'Salvar'}</Button>
        <Mensagem>{msg}</Mensagem>
        </Container>
    )
}

export default FormDepartamento;
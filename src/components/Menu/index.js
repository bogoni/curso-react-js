import React, { useContext } from 'react'
import { LinkNav, Nav, UserContainer } from './styles.js'
import UserContext from '../../context/UserContext.js'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCounter, selectCounter, updateCounter } from '../../store/counter/counterSlice'

const Menu = () => {
  const dispatch = useDispatch()
  const counter = useSelector(selectCounter)
  const {user, dtCriacao} = useContext(UserContext)
  return <Nav>
                
    <LinkNav to='/'><h1>Curso de React JS</h1></LinkNav> 
    <LinkNav to='/departamentos'>Departamentos</LinkNav> 
    <LinkNav to='/departamentos/new'>Add Departamento</LinkNav>
    <LinkNav to='/User'>Usuário</LinkNav>
    <UserContainer><p>{user}</p> <p>{dtCriacao}</p><p>Contador: {counter}</p>
    </UserContainer>
  </Nav>
}

export default Menu
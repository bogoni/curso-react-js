import React from 'react';
import { Nav, LinkNav } from './styles.js'


const Menu = () => {
    return <Nav>
                
                <LinkNav to='/'><h1>Curso de React JS</h1></LinkNav> 
                <LinkNav to='/departamentos'>Departamentos</LinkNav> 
                <LinkNav to='/departamentos/new'>Add Departamento</LinkNav>
            </Nav>
}

export default Menu;
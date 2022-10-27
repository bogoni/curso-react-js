import React from 'react';
import { Nav, LinkNav } from './styles.js'

const Menu = () => {
    return <Nav>
                <h1>Curso de React JS</h1>
                <LinkNav active={true} href='#'>Departamentos</LinkNav> 
                <LinkNav href='#'>Add Departamento</LinkNav>
            </Nav>
}

export default Menu;
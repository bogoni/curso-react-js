import React from "react";
import loading from '../../assets/img/loader.svg';
import {Container} from './styles.js';

const Loader = ({ children, fullScreen=true }) => {
  return (
    <Container fullScreen={fullScreen}>
        <img src={loading} alt="Loading"/>
        { children }
    </Container>
    
  )
};


export default Loader;
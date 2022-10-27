import React from 'react';
import { StyledButton } from './styles.js'

const Button = ({onClick, children, variant}) => {
    return <StyledButton variant={variant} onClick={onClick}>{children}</StyledButton>
}

export default Button;
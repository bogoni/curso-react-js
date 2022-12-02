import React from 'react'
import PropTypes, { any } from 'prop-types'
import { StyledButton } from './styles.js'

const Button = ({onClick, children, variant}) => {
  return <StyledButton variant={variant} onClick={onClick}>{children}</StyledButton>
}
Button.propTypes = {
  variant: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default Button
import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
    padding: 10px;
    border-radius: 4px;
    ${props =>
        props.variant === 'Success' ?
            css`         
                    background: #198754;
                    color: white;
                ` 
        : props.variant === 'Danger' ?
            css`         
                background: #dc3545;
                color: white;
                ` 
        : props.variant === 'Warning' ?
            css`         
                background: #ffc107;
            ` 
        :
            css`         
                background: #e1e1e1;
            `
    }`;




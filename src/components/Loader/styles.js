import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${props => {
        if(props.fullScreen){
            return(`
            position: absolute;
            background: rgba(0, 0, 0, 0.4);
            top: 0;
            left: 0;
            `)
        }
    }}
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    `;




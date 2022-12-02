import styled from 'styled-components'

const Row = styled.div`
    background: ${({ theme }) => theme.colors.background };      
    margin: 10px auto;
    padding: 10px ;
    width: 60%;
    a {
        color: ${({ theme }) => theme.colors.mainColor };
        text-decoration: none;
    }
    &:hover{
        background: ${({ theme }) => theme.colors.mainColor };  
        a{
            color: ${({ theme }) => theme.colors.background };
        }
    }

`

export default Row

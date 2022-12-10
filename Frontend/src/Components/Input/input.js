import styled from 'styled-components/macro'

const Input = styled.input`
    border: 0 ;
    outline: 0;
    background: transparent;
    border-bottom: 2px solid black; 
    padding: 1rem ; 
    width: 60%;  

   
    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 1rem ; 
        align-item: left;
        justify-content: left;

    
    }
}

`; 

export default Input;
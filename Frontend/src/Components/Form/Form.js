import styled from 'styled-components/macro'

const Form = styled.form`
  display: grid; 
  grid-gap: 20px; 
  width: 50%;
  height: 50%;
  h3{
    justify-content: center;
    align-item: center;

  }

  @media screen and (max-width: 768px){
    align-item: center;
    width: 90%;
  }
    
`; 

export default Form;
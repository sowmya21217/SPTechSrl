import React, { useState } from "react";
import styled from 'styled-components';
import Dropdown from "../../Components/Dropdown";
import Footer from "../../Components/Footer /Footer";
import Header from "../../Components/Header/Header";
import GlobalStyle from "../globalStyles";

const Section= styled.div`
width: 90%;
padding: 6rem 2rem;
h1{
  text-align: center;
} 

 p{
  margin-bottom: 2rem;
  @media screen and(max-width: 768px){
    width: 50%;
    padding: 1rem; 
   
  }
 }

}
 
`;

const About = ({
  heading,
  paragraphOne,
  paragraphTwo,
  paragraphThree,
  paragraphFour,
  paragraphFive
 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div style={{background: 'lightgrey'}}>
       <GlobalStyle />
      <Header toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Section>
         <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <p>{paragraphThree}</p>
          <p>{paragraphFour}</p>
          <p>{paragraphFive}</p>  
    </Section>
    <Footer style ={{position: 'fixed'}}/>
    </div>
   
    
  );
}
export default About;

import React, { useState } from "react";
import styled from "styled-components";
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
`;
const Section1= styled.div`
padding: 1rem;
 
h3{
  text-align: center;
}
 
`;


const Services = ({
  heading,
  paragraphOne,
  heading1,
  paragraphTwo,
  paragraphThree,
  paragraphFour,
  heading2,
  heading3,
  heading4,
  heading5,
  paragraphFive
 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div>
       <GlobalStyle />
      <Header toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Section>
      <h1>{heading} </h1>
      <p>{paragraphOne}</p>
      <h1>{heading1} </h1>
      <p>{paragraphTwo}</p>
      <p>{paragraphThree}</p>
      <p> {paragraphFour}</p>
      </Section>
      <Section1>
      <h3>{heading2}</h3>
      <h3>{heading3}</h3>
      <h3>{heading4}</h3>
      <h3>{heading5}</h3>
      <p>{paragraphFive}</p>
      </Section1>
      <Footer />
    </div>
  );
};
export default Services;

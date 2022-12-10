import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "../../Components/Dropdown";
import Footer from "../../Components/Footer /Footer";
import Header from "../../Components/Header/Header";
import GlobalStyle from "../globalStyles";

const Section = styled.div`
width: 10%;

padding: 6rem 40rem;
h1{
  text-align: center;
  
}
`;

const Career = ({heading}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };
    return(
        <div style={{background: 'lightgrey'}}>
            <GlobalStyle />
            <Header toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
             <Section>
                 <h1>{heading}</h1>
             </Section>
            <Footer />
        </div>
    );
}
export default Career;
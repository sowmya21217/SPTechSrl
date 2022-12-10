import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "../../Components/Dropdown";
import Footer from "../../Components/Footer /Footer";
import Header from "../../Components/Header/Header";
import GlobalStyle from "../globalStyles";

const Section = styled.div`
width: 90%;
padding: 6rem 2rem;
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
        <div>
            <GlobalStyle />
            <Header toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
             <Section>
                 <h1>{heading}</h1>
             </Section>
            <Footer style ={{position: 'fixed' , padding: '1rem'}}/>
        </div>
    );
}
export default Career;
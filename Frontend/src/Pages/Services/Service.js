import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "../../Components/Dropdown";
import Footer from "../../Components/Footer /Footer";

import Header from "../../Components/Header/Header";
import GlobalStyle from "../globalStyles";

const Section = styled.div`
  width: 90%;
  padding: 3rem 7rem;
  h2 {
    text-align: center;
  }
  P {
    line-height: 1.5rem;
    margin: 1.5;
    padding: 1rem;
    padding-right: 2rem;
  }
`;
const Section1 = styled.div`
  padding: 1rem 7rem;

  h2 {
    text-align: center;
  }
  p {
    line-height: 1.5rem;
    margin-right: 0rem;
    padding: 1rem;
    padding-right: 1rem;
    text-align: left;
  }
`;

const Services = ({
  heading,
  paragraph,
  paragraphOne,
  heading1,
  paragraphTwo,
  paragraphThree,
  paragraphFour,
  heading2,
  heading3,
  paragraphFive,
  paragraphSix,
  paragraphSeven,
  paragraphEight,
  paragraphNine,
  paragraphTen,
  paragraphEleven,
  paragraphTwelve,
  paragraphThirteen,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ background: "lightgrey" }}>
      <GlobalStyle />
      <Header toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <h1 style={{ textAlign: "center", paddingTop: "4rem" }}>Our services</h1>
      <Section>
        <h2>{heading} </h2>
        <p>{paragraph}</p>
        <p>{paragraphOne}</p>
        <p>{paragraphTwo}</p>
        <p>{paragraphThree}</p>
        <p> {paragraphFour}</p>
        <p> {paragraphFive}</p>
      </Section>
      <Section1>
        <h2>{heading1}</h2>
        <p>{paragraphSix}</p>
        <p>{paragraphSeven}</p>
        <p>{paragraphEight}</p>
        <p>{paragraphNine}</p>
        <p>{paragraphTen}</p>
      </Section1>
      <Section>
        <h2>{heading2}</h2>
        <p>{paragraphEleven}</p>
        <p>{paragraphTwelve}</p>
      </Section>
      <Section1>
        <h2>{heading3}</h2>
        <p>{paragraphThirteen}</p>
      </Section1>

      <Footer />
    </div>
  );
};
export default Services;

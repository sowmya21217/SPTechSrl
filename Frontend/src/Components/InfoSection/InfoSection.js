import React from "react";
import styled from "styled-components/macro";
import { Button } from "../Button/Button";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 1rem 0rem;
  background: lightgrey;
`;
const Container = styled.div`
  padding: 3rem calc((100vw-1300px) / 2);
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 300px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1 rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }
`;

const ColumnRight = styled.div`
   padding: 1rem 2rem;
   order: ${({ reverse }) => (reverse ? "1" : "2")};
   display: flex;
   justify-content: center;
   align-items: center;

   @media screen and (max-width: 768px){
    order: ${({ reverse }) => (reverse ? "2" : "1")};
   }

   img{
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        width: 90%;
        height: 90%:
    }
   }
`;

const InfoSection = ({ heading, paragraphOne, reverse, image }) => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <Button to='/services' primary="true">
            View More
          </Button>
        </ColumnLeft>
        <ColumnRight>
          <img src={image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;

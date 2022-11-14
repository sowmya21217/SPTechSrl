import React from "react";
import styled  from "styled-components/macro";
import { footerData } from "../../data/MenuData";

const Footer1 = styled.footer`
  background: grey;
  position:relative;
  bottom: 0;
  left: 0;
  right: 0;
  height: auto;
  width: 100vw;
  padding: 0px 0px;
  color: #fff;

`;

const Content = styled.div`
 display: flex;
 align-items: center;
 marign-right: -48px;
 justify-content: space-between;
 padding: 1rem 2rem;
 width: 100%;
 color: #fff;

  @media screen and (max-width: 768px){
  display: none;
  } 
`;

const FooterMenuLinks = styled.div``;

const CopyRight = styled.div`
  text-align: center;
  justify-content: center;
  textdecoration: none;
  color: black;

`;


const Footer = () => {
  return (
    <Footer1>
      <Content>
        {footerData.map((item,index) => {
          return(
            <FooterMenuLinks to={item.link} key ={index}>
            {item.title}
            </FooterMenuLinks>
          )})}
      </Content>
      <CopyRight>
        <p>copyright &copy; 2022 SP Tech Srl Company.  All rights reserved</p>          
      </CopyRight>
    </Footer1>
  );
};
export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { footerData } from "../../data/MenuData";

const Footer1 = styled.footer`
  padding: 80px 60px;
  background: grey;
  position: relative;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
  color: #fff;
`;

const Content = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 3rem 2rem;
 width: 100%;
 color: white;
 cursor: pointer;
 text-decoration: none;


  @media screen and (max-width: 768px){
    height: 20px;
  }

  } 
`;

const FooterMenuLinks = styled(Link)`
  text-decoration: none;
  color: white;


  ${Content};
`;

const CopyRight = styled.div`
  text-align: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  
`;

const Footer = () => {
  return (
    <Footer1>
      <Content>
        {footerData.map((item, index) => {
          return (
            <FooterMenuLinks to={item.link} key={index}>
              {item.title}<br></br>{item.content}
            </FooterMenuLinks>
          );
        })}
      </Content>
      <CopyRight>
        <p>copyright &copy; 2022 SP Tech Srl Company. All rights reserved</p>
      </CopyRight>
    </Footer1>
  );
};
export default Footer;

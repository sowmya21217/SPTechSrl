import React from "react";
import styled ,{css} from 'styled-components';
import { Link } from 'react-router-dom';
import { menuData } from "../../data/MenuData";
import { Button } from "../Button/Button";
import Bars from '../../images/bars.svg';

const Nav = styled.nav`
   height: 60px;
   display: flex;
   justify-content: space-between;
   padding: 1rem 2rem;
   z-index: 100;
   position: fixed;
   width: 100%;
   backgroundColor: transparent;
   shadowOpacity: 0,
   z-index: 10;

   &:hover{
    background:lightgrey;
    }

`;



const NavLink = css`
  color: white;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;

`

const Logo = styled(Link)`
  
  font-Weight: bold; 
  font-size: 2rem;
 
  ${NavLink}

  img {
    width: 2.5rem;
    height: 2rem;
  }
  p{
    font-size: 0.9rem;
    padding-bottom: 1rem;
  }
`;

const MenuBars = styled.i`
  display: none;

  @media screen and (max-width: 768px){
    display: Block;
    background-image: url(${Bars});
    background-size: contain;
    height: 30px;
    width: 30px;
    cursor: pointer;
    top: 0;
    right: 0;
    transfrom: translate(-50%, 25%);
    
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  marign-right: -48px;


  @media screen and (max-width: 768px){
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  font-Weight: bold; 
  font-size: 1rem;
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px){
    display: none;
  }
`;


const Header = ({ toggle }) => {

  return (
    <Nav>
      <Logo to="/"><img src="Images/logo.png"  alt="favicon"/>SP TECH SRL<p> &reg;</p></Logo>
      <MenuBars  onClick={toggle}/>
      <NavMenu>
        {menuData.map((item,index) => {
          return(
          <NavMenuLinks to={item.link} key ={index}>
            {item.title}
          </NavMenuLinks>
        )})}
      </NavMenu>
      <NavBtn>
        <Button to="/Contacts" primary='true'>Contact Us</Button>
      </NavBtn>
    </Nav>
  );
}

export default Header;

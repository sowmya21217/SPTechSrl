import React from "react";
import styled ,{css} from 'styled-components/macro';
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
   background: grey;

`;



const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`

const Logo = styled(Link)`
  font-style: italic;
  ${NavLink}
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
      <Logo to="/">SPTECHSRL</Logo>
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
        <Button to="/contacts" primary='true'>Contact Us</Button>
      </NavBtn>
    </Nav>
  );
}

export default Header;

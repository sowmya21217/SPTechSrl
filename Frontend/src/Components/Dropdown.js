import React from 'react';
import styled from 'styled-components/macro';
import { menuData } from '../data/MenuData';
import { Button } from './Button/Button';
import { Link } from 'react-router-dom';
import { HiBars3 } from 'react-icons/hi2';



const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #cd853f;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-ot;
  opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

const Icon = styled.div`
   position: absolute;
   top: 1.2rem;
   right: 1.5rem;
   background: transparent;
   font-size: 2rem;
   cursor: pointer;
   outline: none;

`;
const CloseIcon = styled(HiBars3)`
  color: #000d1a;
`;
const DropdownWrapper = styled.div``;
const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;
const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover{
    color: #000d1a;
  }

`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;




const Dropdown = ({isOpen, toggle}) => {
    return(
        <DropdownContainer isOpen={isOpen} Onclick={toggle}>
          <Icon onClick={toggle}> 
            <CloseIcon />
          </Icon>
          <DropdownWrapper>
            <DropdownMenu>
                {menuData.map((item, index) => {
                    return(
                        <DropdownLink to={item.link} key={index}>
                            {item.title}
                        </DropdownLink>
                    );
                })}
            </DropdownMenu>
            <BtnWrap>
                <Button primary="true" round="true" big="true" to="/contacts">
                    Conatct Us
                </Button>
            </BtnWrap>
          </DropdownWrapper>
        </DropdownContainer>
    )

}
export default Dropdown;
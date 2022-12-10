import styled from 'styled-components';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Input from '../../Components/Input/input';
import Header from '../../Components/Header/Header';
import { Form } from 'react-router-dom';
import Dropdown from '../../Components/Dropdown';
import GlobalStyle from '../../Pages/globalStyles';

const Section = styled.div`
  padding: 1rem;
  padding-bottom: 7rem;
 
`;


const WrapperGrid = styled.div`
   padding: 1rem calc((100vw-1300px) / 2);
   width: 90%;
   height: 400px;
   padding: 7rem 1rem;
   @media screen and(max-width: 768px){
    width: 20%;
    padding: 1rem; 



`;

const Textarea = styled.textarea`
    border: 0; 
    padding: 1rem calc((100vw-1300px) / 2);
    padding: 1rem; 
    width: 60%;
    border-bottom: 2px solid black;

    @media screen and(max-width: 768px){
        width: 50%;
        padding: 1rem; 
    }
`; 

const Head = styled.div`
    font-size: 3rem;
    text-align: left;
    justify-content: center;
    align-items: center;
`;

const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ise5vps', 'template_v47mpyr', form.current, 'XDLPvveLEL-V-VNzn')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };
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
  <Form ref={form} onSubmit={sendEmail}>   
    <WrapperGrid>
      <Head>Contact Us </Head>
      <Input  placeholder="Name"  type="text" name="name" />
      <Input  placeholder="Company" type="text" name="company" />
      <Input placeholder="Email" type="email" name="email" />
      <Textarea placeholder="Message" name="message" rows="5" ></Textarea><br></br>
      <Input style={{width: 100, border: '1px solid black', backgroundColor: 'black', color: 'white' }} to="/" primary ='true' type='submit' value='send' />
    </WrapperGrid>
   </Form>
  </Section>
  </div>
);
}

export default ContactForm;

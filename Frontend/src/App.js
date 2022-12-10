import React, { useState } from "react";
import Header from "./Components/Header/Header";
import GlobalStyle from "./Pages/globalStyles";
import Hero from "./Components/Hero/Hero";
import { SliderData } from "./data/SlideData";
import Dropdown from "./Components/Dropdown";
import Footer from "./Components/Footer /Footer";
import InfoSection from "./Components/InfoSection/InfoSection";
import {
  InfoData,
  InfoDataFour,
  InfoDataThree,
  InfoDataTwo,
} from "./data/InfoData";
import InfoSection1 from "./Components/InfoSection1/InfoSection1";
import ContactForm from "./Components/ContactForm/ContactForm";
import Section from "./Components/Section/Section";


const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <div>
      <GlobalStyle />
      <Header toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <Section />
      <InfoSection {...InfoData} />
      <InfoSection1 {...InfoDataTwo} />
      <InfoSection {...InfoDataThree} />
      <InfoSection1 {...InfoDataFour} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;

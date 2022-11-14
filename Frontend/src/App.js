import React, { useState} from 'react';
import Header from './Components/Header/Header';
import GlobalStyle from './Pages/globalStyles';
import Hero from './Components/Hero/Hero';
import { SliderData } from './data/SlideData'
import Dropdown from './Components/Dropdown';
import Footer from './Components/Footer /Footer';
import InfoSection from './Components/InfoSection/InfoSection';
import { InfoData, InfoDataFour, InfoDataThree, InfoDataTwo } from './data/InfoData';
import InfoSection1 from './Components/InfoSection1/InfoSection1';



function App(){
  const [isOpen,setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  return (
    <>
      <GlobalStyle />
      <Header toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero  slides={SliderData}/> 
      <InfoSection buttonLable={undefined} paragraphTwo={undefined} {...InfoData} />
      <InfoSection1 paragraphTwo={undefined} buttonLable={undefined} {...InfoDataTwo} />
      <InfoSection paragraphTwo={undefined} buttonLable={undefined} {...InfoDataThree} />
      <InfoSection1 paragraphTwo={undefined} buttonLable={undefined} {...InfoDataFour} />
      <Footer />
    </>
  );
}

export default App;

import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer /Footer';
import Content from './Components/Content/Content';

class App extends React.Component{
  render(){
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
      
    </div>
    
  );
  }
}

export default App;

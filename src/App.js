import React from 'react';
import Header from './components/Header';
import Feature from './components/Feature';
import About from './components/About';
import Presentation from './components/Presentation';
import aboutimage from './images/frame 19.png';
import aboutimage1 from './images/download.png';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
        <Header/>
        <Feature/>
        <About image={aboutimage} title='Li batteries, which can be reused in the production of new products' button='Get the Details'/>
        <Presentation />
        <About image={aboutimage1} title='Download and get the Details' button='Download'/>
        <Contact/>
    </div>
  );
}

export default App;

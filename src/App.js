import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import './App.css'

function App() {

  const [sections] = useState([
    { name: 'About' },
    { name: 'Portfolio' },
    { name: 'Resume' },
    { name: 'Contact' }
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);

  function render () {
    if (currentSection.name === "About") {
      return <About></About>
    }
    if (currentSection.name === "Contact") {
      return <Contact></Contact>
    }
    if (currentSection.name === 'Portfolio') {
      return <Portfolio></Portfolio>
    }
    if (currentSection.name === 'Resume') {
      return <Resume></Resume>
    }
  }
 

  return (
    <div>
      <header>
        <Header 
          sections={sections}
          setCurrentSection={setCurrentSection} 
          currentSection={currentSection}>          
        </Header>
      </header>
      <main>
        {render()}
      </main>
      <Footer></Footer>
    </div>

  );
}

export default App;

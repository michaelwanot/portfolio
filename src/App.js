import React from 'react';
import Header from './components/Header';
import { Contacts } from './components/Sections/Contacts';
import { Footer } from './components/Sections/Footer';
import { Home } from './components/Sections/Home';
import { Skills } from './components/Sections/Skills';


function App() {
  return (
    <div className="App">
      <Header navItems={['home', 'skills', 'contacts']}/>
      <Home />
      <Skills />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Hero from './Hero/Hero';
import Adventages from './Adventages/Adventages';
import Servises from './Servises/Servises';
import Projects from './Projects/Projects';
import Contacts from './Contacts/Contacts';
import Media from './Media/Media';
import BrifFaq from './BrifFaq/BrifFaq';

export function App() {
  return (
    <div className="App">
      <Hero />
      <Adventages />
      <Servises />
      <Projects />
      <Contacts />
      <BrifFaq />
      <Media />
    </div>
  );
}

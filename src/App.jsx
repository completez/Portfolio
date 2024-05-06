import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/Nevbar.jsx"
import Menu from "./components/Menu"
import About from "./components/About"
import Skill from "./components/Skill"
import Project from "./components/Project"
import Certificate from "./components/Certificate"
import Contact from "./components/Contact"
import AudioPlayer from "./components/Audio"
import musicSrc from "./assets/song.mp3"

export default function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Menu />
        <About />
        <Skill />
        <Project />
        <Certificate />
        <Contact />
        <AudioPlayer src={musicSrc} />
      </>
    </Router>
  );
}

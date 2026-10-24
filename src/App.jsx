// import { useState } from "react";
import "./assets/css/index.css";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";


// import { Route, Routes } from "react-router-dom";

export default function App() {
  // const [isOnePage, setIsOnePage] = useState(true);


  return (
    <>
      <Header />
      <div id="hero"><Hero /></div>
      <div id="skills"><Skills /></div>
      <div id="experience"><Experience /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </>
  );
}



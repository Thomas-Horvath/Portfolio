import React from 'react';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Quote from '../../components/Quote/Quote';
import Skills from '../../pages/Skills/Skills';
import MainProjekt from '../../pages/MainProjekt/MainProjekt';
import Blog from '../../pages/Blog/Blog';
import Contact from '../../pages/Contact/Contact';
import Footer from '../Footer/Footer';
import PageUpBtn from '../PageUpBtn/PageUpBtn';

const Main = () => {
  return (
    <>
        <Home />
        <About /> 
        <Quote />
        <Skills />
        <MainProjekt />
        <Blog />
        <Contact />
        <Footer/>
        <PageUpBtn/>
    </>
  )
}

export default Main
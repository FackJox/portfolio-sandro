import React from 'react';

import About from '../components/About/About';
// import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Portfolio from '../components/Portfolio/Portfolio';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';



const Home = () => {
  return (
    <Layout>
      <Section grid>     
        <Hero />
      </Section>
      <About />
      <Projects />
      <Skills />
      <Portfolio />
    </Layout>
  );
};

export default Home;

// pages/index.tsx
import type { NextPage } from "next";
import Layout from "../src/components/layout/Layout";
import Hero from "../src/components/sections/Hero";
import About from "../src/components/sections/About";
import Services from "../src/components/sections/Services";
import TechnologyStack from "../src/components/sections/TechnologyStack";
import Projects from "../src/components/sections/Projects";
import Testimonials from "../src/components/sections/Testimonials";
import Contact from "../src/components/sections/Contact";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <TechnologyStack />
      <Projects />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default Home;
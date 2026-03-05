import About from "./sections/About";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Line from "./sections/Line";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Skills from "./sections/Skills";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Line />
      <About />
      <Line />
      <Skills />
      <Line />
      <Services />
      <Line />
      <Projects />
      <Line />
      <Clients />
      <Line />
      <Contact />
      <Line />
      <Footer />
    </>
  );
}

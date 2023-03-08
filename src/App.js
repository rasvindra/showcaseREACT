import './App.css';
import Header from "./components/Header";
import AboutME from "./components/Header";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactMEForm";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="portfolio-app">
      <Header />
      <AboutME/>
      <Projects/>
      <ContactForm/>
      <Footer/>

    </div>
  );
}

export default App;

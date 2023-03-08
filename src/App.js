import './App.css';
import Header from "./components/Header";
import AboutME from "./components/Header";
import Projects from "./components/Projects";
import ContactMEForm from "./components/ContactMEForm";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="portfolio-app">
      <Header/>
      <AboutME/>
      <Projects/>
      <ContactMEForm/>
      <Footer/>

    </div>
  );
}

export default App;

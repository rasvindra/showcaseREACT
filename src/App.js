import './App.css';
import Header from "./components/Header";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="portfolio-app">
      <Header />
      <Projects/>
      <ContactForm/>
      <Footer/>



    </div>
  );
}

export default App;

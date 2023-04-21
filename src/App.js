import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Motivation from "./components/Motivation";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Motivation/>
      <Footer/>
    </div>
  );
}

export default App;

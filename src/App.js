import Feedback from "./Compounds/Feedback";
import Footer from "./Compounds/Footer";
import Hero from "./Compounds/Hero";
import Navbar from "./Compounds/Navbar";
import Newsletter from "./Compounds/Newsletter";
import Partner from "./Compounds/Partner";
import Result from "./Compounds/Result";
import Support from "./Compounds/Support";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feedback />
      <Partner />
      <Support />
      <Result />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

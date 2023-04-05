import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Home from "./components/pages/Home";
import Mushi from "./components/pages/Mushi";
import BeerV2 from "./components/pages/BeerV2";
import GameReviews from "./components/pages/GameReviews";
import CodeArt from "./components/pages/CodeArt";
import BeerFrontend from "./components/pages/BeerFrontend";
import Contact from "./components/pages/Contact";
import "./styles/App.css";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/mushi-app" element={<Mushi />} />
        <Route path="/game-review-app" element={<GameReviews />} />
        <Route path="/brewdog-frontend" element={<BeerFrontend />} />
        <Route path="/beer-v2" element={<BeerV2 />} />
        <Route path="/code-art" element={<CodeArt />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

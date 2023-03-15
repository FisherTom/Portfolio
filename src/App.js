import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Home from "./components/pages/Home";
import Mushi from "./components/pages/Mushi";
import GameReviews from "./components/pages/GameReviews";
import CodeArt from "./components/pages/CodeArt";
import BeerFrontend from "./components/pages/BeerFrontend";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <div className="star"></div>
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mushi-app" element={<Mushi />} />
        <Route path="/game-review-app" element={<GameReviews />} />
        <Route path="/brewdog-frontend" element={<BeerFrontend />} />
        <Route path="/code-art" element={<CodeArt />} />
      </Routes>
    </div>
  );
}

export default App;

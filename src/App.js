import Bio from "./components/Bio";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <Bio />
      <Projects />
    </div>
  );
}

export default App;

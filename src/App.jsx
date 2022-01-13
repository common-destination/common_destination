import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.scss";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import ScrollbarAnimation from "./components/scrollbarAnimation";

function App() {
  ScrollbarAnimation();
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Main />
      </div>
    </Router>
  );
}

export default App;

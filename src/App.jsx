import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.scss";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import * as scrollbarAnimation from "./components/scrollbarAnimation";

function App() {
  scrollbarAnimation.ScrollbarAnimation();

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

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home.js";
import NoteState from "./context/notes/NotesState.js";
import Alert from "./components/Alert.js";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert massege="hii how are u?"/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;

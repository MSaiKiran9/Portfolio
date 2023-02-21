import Nav from "./Nav"
import "./root.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Projects } from "./Project";
import { About } from "./About";
import Home from "./Home";
import { useEffect, useState } from "react";
import Animation from "./Animation";


function App() {
  const [load, setLoad] = useState(false)
  useEffect(() => {
    setLoad(true);
    setTimeout(() => { setLoad(false) }, 1500)
    window.addEventListener('beforeunload', (event) => {
      setLoad((prev) => !prev)
    });
    return () => {
      clearTimeout()
      window.removeEventListener("boforeunload", (event) => { setLoad((prev) => !prev) })
    }
  }, [])
  return (
    <>{
      load ? <Animation /> : <Router basename="/Portfolio">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Projects />} />
        </Routes>
      </Router>
    }

    </>
  );
}

export default App;

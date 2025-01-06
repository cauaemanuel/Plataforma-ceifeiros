import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
       
        <Route path="/" element={<div></div>} />
      
      </Routes>
    </Router>
  );
}

export default App;

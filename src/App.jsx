import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import { HomePage } from "./components/home/HomePage.jsx";

function App() {
  return (
    <Router>
      <Header /> 
      <HomePage/>
      
      <Routes>
        <Route exact path="/"/>
      
      </Routes>
    </Router>
  );
}

export default App;

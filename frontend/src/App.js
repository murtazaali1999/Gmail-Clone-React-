import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import EmailList from './Components/EmailList';
import { Mail } from "@mui/icons-material";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="side-email">
          <Sidebar />
          <Routes>
            <Route path="/" element={<EmailList />} />
            <Route path="/mail" element={<Mail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./styles/dashboard.css";
import Dashboard from "./Pages/Dashboard";
import Sidebar from './components/common/Sidebar';
import Header from './components/common/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* Add other routes */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

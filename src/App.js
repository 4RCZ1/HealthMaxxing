import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import AddNew from "./components/AddNew/AddNew";
import AddNewMedicine from "./components/AddNew/AddNewMedicine";

const NotFound = () => {
  return <h1 style={{width:"100%", textAlign:"center"}}>404 Not Found</h1>
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/add" element={<AddNew/>}/>
          <Route path="/add/medicine" element={<AddNewMedicine/>}/>
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
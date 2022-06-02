import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SK from './components/SK';
import Stepper_Page from './components/Stepper_Page';
import Aktivasi from './pages/Aktivasi';
import Home from './pages/Home';
import Login from './pages/Login';
import PembRek from './pages/PembRek';
import Status from './pages/Status';




function App() {
  return (
    <div className="app">
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path='/PembRek' element={<PembRek/>} />
        <Route path='/SK' element={<SK/>} />
        <Route path='/Status' element={<Status/>} />
        <Route path='/Aktivasi' element={<Aktivasi/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

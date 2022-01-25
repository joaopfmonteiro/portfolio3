import React from 'react';
import './App.css';
import About from './About';
import Resume from './Resume';
import Work from './Work';
import Contact from './Contact';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>

      <hr />
      <Routes>
      <Route exact path="/" component={<Body/>} />
      </Routes>
      <Routes>
      <Route path="/about" element={<About/>} />
      </Routes>
      <Routes>
      <Route path="/resume" element={<Resume/>} />
      </Routes>
    </div>
  </Router>
);

export default App;

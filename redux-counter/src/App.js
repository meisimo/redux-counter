import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'

import './App.css';
import CounterPage from './pages/CounterPage';
import History from './pages/Historial';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Counter</Link>
        </li>
        <li>
          <Link to="/history">history</Link>
        </li>
      </ul>
    </nav>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CounterPage />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  )
}

export default App;

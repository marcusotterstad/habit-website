import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Habits from '../features/habits/Habits';

import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function App() {
  return (
    <Router>
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><Link className="Link" to="/">Habit Tracker</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link className="Link" to="/today">Daily Habits</Link></Nav.Link>
            <Nav.Link><Link className="Link" to="/statistics">Statistics</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
          <Route path="/today" element={<Habits />} />
      </Routes>

    </div>
    </Router>
  );
}

export default App;

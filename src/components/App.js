import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

//components
import Habits from '../features/habits/Habits';


//style
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Statistics from './Statistics/Statistics';


function App() {
  return (
    <Router>
    <div className="App">

      <Navbar bg="dark" variant="dark" style={{height: "10vh"}}>
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
          <Route path="/statistics" element={<Statistics />} />
      </Routes>

    </div>
    </Router>
  );
}

export default App;

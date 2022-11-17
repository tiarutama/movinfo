import './style/movinfoPage.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';
import Search from './components/Search';
import Popular from './components/Popular';

function App() {
  return (
    <>
    <Router>
      <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="/"><h5>MOVINFO</h5></Navbar.Brand>
            <Nav>
              <Nav.Link href="/search">Search Movie</Nav.Link>
            </Nav>
        </Container>
      </Navbar>

      <Routes>
      <Route path="/" element={<Popular />} />
      <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
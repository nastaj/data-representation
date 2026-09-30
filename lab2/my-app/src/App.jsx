import './App.css'
import Content from './components/Content'
import Header from './components/Header'
import Footer from './components/Footer'
import { Nav, Navbar, Container } from 'react-bootstrap'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Main App component that serves as a gateway to the app
function App() {
  return (
    <>
      {/* Router enables client-side routing */}
      <Router>
        {/* Navbar, Container etc. are Bootstrap components */}
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              {/* After clicking the Nav.Links, user moves to specified path */}
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          {/* When user enters specified path, browser paints the specified element/component immediately without refreshing the browser */}
          <Route path="/" element={<Content />} />
          <Route path="/read" element={<Header />} />
          <Route path="/create" element={<Content />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
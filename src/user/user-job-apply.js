import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';

function Userjobapply() {
  const [keywords, setKeywords] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality here
    console.log("Keywords:", keywords);
    console.log("Location:", location);
    console.log("Category:", category);
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#home" className="font-weight-bold">
            <h2 className="navbar-title">CAREERHIVE</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Form inline onSubmit={handleSearch} className="d-flex flex-wrap">
                <FormControl
                  type="text"
                  placeholder="Keywords"
                  className="mr-2 mb-2"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                />
                <FormControl
                  type="text"
                  placeholder="Location"
                  className="mr-2 mb-2"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <Form.Control
                  as="select"
                  className="mr-2 mb-2"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Category</option>
                  <option value="software">Software Developer</option>
                  <option value="design">Python Developer</option>
                  <option value="marketing">Software Testing</option>
                  <option value="sales">Content Writer</option>
                  <option value="customer_service">PHP Developer</option>
                </Form.Control>
                <Button variant="outline-success" type="submit" className="mb-2">Search</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <h1 className="mb-4">Apply Jobs</h1>
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Web Developer</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">
                  <FaMapMarkerAlt /> Chennai
                </Card.Subtitle>
                <Card.Text>
                  We are in need of a web developer for our company. <br />Salary: ₹2-3 lacs
                </Card.Text>
                <Button variant="success" href="#">Apply Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Userjobapply;

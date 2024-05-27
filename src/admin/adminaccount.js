import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Adminaccount = () => {
  const [data, setData] = useState({
    name: "Sam",
    position: "Administrator",
    email: "sam16@gmail.com",
    
    phone: "9787805434",
    permissions: "Full access to all features, including user management and job postings",
    department: "Administration"
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make a request to your server to save the updated data
    console.log('Updated data:', data);
    setIsEditing(false);
  };

  return (
    <Container>
      <h1 className="text-center my-4">Admin Account</h1>
      {isEditing ? (
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} controlId="name">
            <Form.Label column sm={2}>Name</Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="position">
            <Form.Label column sm={2}>Position</Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="position"
                value={data.position}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="email">
            <Form.Label column sm={2}>Email</Form.Label>
            <Col sm={10}>
              <Form.Control
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="phone">
            <Form.Label column sm={2}>Phone</Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="phone"
                value={data.phone}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="permissions">
            <Form.Label column sm={2}>Permissions</Form.Label>
            <Col sm={10}>
              <Form.Control
                as="textarea"
                rows={3}
                name="permissions"
                value={data.permissions}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="department">
            <Form.Label column sm={2}>Department</Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="department"
                value={data.department}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Button variant="primary" type="submit" className="mr-2">
            Save
          </Button>
          <Button variant="secondary" onClick={() => setIsEditing(false)}>
            Cancel
          </Button>
        </Form>
      ) : (
        <div>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Position:</strong> {data.position}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phone}</p>
          <p><strong>Permissions:</strong> {data.permissions}</p>
          <p><strong>Department:</strong> {data.department}</p>
          <Button variant="primary" onClick={() => setIsEditing(true)}>
            Edit
          </Button>
        </div>
      )}
    </Container>
  );
}

export default Adminaccount;

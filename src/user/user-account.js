import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

function Useraccount() {
    const [data, setData] = useState({
        full_name: "Jeeva",
        date_of_birth: "2000-02-05",
        phone_number: "9745324532",
        email: "jeeva@gmail.com",
        education: "Bachelor's Degree",
        certifications: "Certified Professional",
        address: "Chennai",
        language_spoken: "English"
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
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-center mb-4">
                                {isEditing ? 'Edit Your Account' : 'Your Account'}
                            </Card.Title>
                            {isEditing ? (
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="fullName">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="full_name"
                                            value={data.full_name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="dateOfBirth">
                                        <Form.Label>Date of Birth</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="date_of_birth"
                                            value={data.date_of_birth}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="phoneNumber">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="phone_number"
                                            value={data.phone_number}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="education">
                                        <Form.Label>Education</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="education"
                                            value={data.education}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="certifications">
                                        <Form.Label>Certifications</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="certifications"
                                            value={data.certifications}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="address">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="address"
                                            value={data.address}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="languageSpoken">
                                        <Form.Label>Language Spoken</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="language_spoken"
                                            value={data.language_spoken}
                                            onChange={handleChange}
                                            required
                                        />
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
                                    <p><strong>Full Name:</strong> {data.full_name}</p>
                                    <p><strong>Date of Birth:</strong> {data.date_of_birth}</p>
                                    <p><strong>Phone Number:</strong> {data.phone_number}</p>
                                    <p><strong>Email:</strong> {data.email}</p>
                                    <p><strong>Education:</strong> {data.education}</p>
                                    <p><strong>Certifications:</strong> {data.certifications}</p>
                                    <p><strong>Address:</strong> {data.address}</p>
                                    <p><strong>Language Spoken:</strong> {data.language_spoken}</p>
                                    <Button variant="primary" onClick={() => setIsEditing(true)}>
                                        Edit
                                    </Button>
                                </div>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Useraccount;

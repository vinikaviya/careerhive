import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './postjob.css';

function Postjobdata() {
    const [data, setData] = useState([]);
    const [value, setValue] = useState({
        title: "",
        category: "",
        job_nature: "",
        vacancy: "",
        salary: "",
        location: "",
        description: "",
        benafits: "",
        responsibility: "",
        qualifications: "",
        keywords: "",
        name: "",
        office_location: "",
        website: ""
    });

    const input = (event) => {
        const { name, value } = event.target;
        setValue((prevValue) => ({
            ...prevValue,
            [name]: value,
        }));
    };

    const clearInputFields = () => {
        setValue({
            title: "",
            category: "",
            job_nature: "",
            vacancy: "",
            salary: "",
            location: "",
            description: "",
            benafits: "",
            responsibility: "",
            qualifications: "",
            keywords: "",
            name: "",
            office_location: "",
            website: ""
        });
    };

    const saveJob = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/postjobdata', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(value)
            });

            if (response.ok) {
                const result = await response.json();
                setData([...data, result]);
                clearInputFields();
                alert('Job saved successfully!');
            } else {
                const error = await response.json();
                alert('Failed to save job: ' + error.message);
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };

    return (
        <Container>
            <h1 className="mt-4">Post Job</h1>
            <Form>
                <Form.Group as={Row} controlId="title">
                    <Form.Label column sm="2">Title</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            name="title"
                            onChange={input}
                            value={value.title}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="category">
                    <Form.Label column sm="2">Category</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            name="category"
                            onChange={input}
                            value={value.category}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="job_nature">
                    <Form.Label column sm="2">Job Nature</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            as="select"
                            name="job_nature"
                            onChange={input}
                            value={value.job_nature}
                        >
                            <option value="">Select Job Nature</option>
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                        </Form.Control>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="vacancy">
                    <Form.Label column sm="2">Vacancy</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="number"
                            name="vacancy"
                            onChange={input}
                            value={value.vacancy}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="salary">
                    <Form.Label column sm="2">Salary</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            name="salary"
                            onChange={input}
                            value={value.salary}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="location">
                    <Form.Label column sm="2">Location</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            name="location"
                            onChange={input}
                            value={value.location}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="description">
                    <Form.Label column sm="2">Description</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            onChange={input}
                            value={value.description}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="benafits">
                    <Form.Label column sm="2">Benafits</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            name="benafits"
                            onChange={input}
                            value={value.benafits}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="responsibility">
                    <Form.Label column sm="2">Responsibility</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="responsibility"
                            onChange={input}
                            value={value.responsibility}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="qualifications">
                    <Form.Label column sm="2">Qualifications</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            name="qualifications"
                            onChange={input}
                            value={value.qualifications}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="keywords">
                    <Form.Label column sm="2">Keywords</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            name="keywords"
                            onChange={input}
                            value={value.keywords}
                        />
                    </Col>
                </Form.Group>

                <h2>Company Details</h2>

                <Form.Group as={Row} controlId="name">
                    <Form.Label column sm="2">Name</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            name="name"
                            onChange={input}
                            value={value.name}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="office_location">
                    <Form.Label column sm="2">Office Location</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            name="office_location"
                            onChange={input}
                            value={value.office_location}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="website">
                    <Form.Label column sm="2">Website</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            name="website"
                            onChange={input}
                            value={value.website}
                        />
                    </Col>
                </Form.Group>
                <div className='jopost-btn'>
                    <Button variant="primary" onClick={clearInputFields} className="mr-2">Clear</Button>
                    <Button variant="success" onClick={saveJob}>Save Job</Button>
                </div>
            </Form>
        </Container>
    );
}

export default Postjobdata;

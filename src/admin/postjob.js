// import React, { useState } from 'react';
// import './postjob.css'; // Ensure to create this CSS file

// function Postjob() {
//     const [data, setData] = useState([]);
//     const [value, setValue] = useState({
//         title: "",
//         category: "",
//         job_nature: "",
//         vaccancy: "",
//         salary: "",
//         location: "",
//         description: "",
//         benafits: "",
//         responsibility: "",
//         qualifications: "",
//         keywords: " "
//     });

//     const input = (event) => {
//         const { name, value } = event.target;
//         setValue((prevValue) => ({
//             ...prevValue,
//             [name]: value,
//         }));
//     };

//     const clearInputFields = () => {
//         setValue({
//             title: "",
//             category: "",
//             job_nature: "",
//             vaccancy: "",
//             salary: "",
//             location: "",
//             description: "",
//             benafits: "",
//             responsibility: "",
//             qualifications: "",
//             keywords: " "
//         });
//     };

//     return (
//         <>
//             <h1>Post Job</h1>
//             <div className="form-group">
//                 <label htmlFor="title">Title</label>
//                 <input type="text" id="title" name="title" onChange={input} value={value.title} className="form-control" />
//             </div>

//             <div className="form-group">
//                 <label htmlFor="category">Category</label>
//                 <input type="text"  name="category" onChange={input} value={value.category} className="form-control" />
//             </div>

//             <div className="form-group">
//                 <label htmlFor="job_nature">Job Nature</label>
//                 <select id="job_nature" name="job_nature" onChange={input} value={value.job_nature} className="form-control">
//                     <option value="">Select Job Nature</option>
//                     <option value="Full-Time">Full-Time</option>
//                     <option value="Part-Time">Part-Time</option>
//                 </select>
//             </div>

//             <div className="form-group">
//                 <label htmlFor="vaccancy">Vaccancy</label>
//                 <input type="text" name="vaccancy" onChange={input} value={value.vaccancy} className="form-control" />
//             </div>

//             <div className="form-group">
//                 <label htmlFor="salary">Salary</label>
//                 <input type="text"  name="salary" onChange={input} value={value.salary} className="form-control" />
//             </div>

//             <div className="form-group">
//                 <label htmlFor="location">Location</label>
//                 <input type="text"  name="location" onChange={input} value={value.location} className="form-control" />
//             </div>
            
//             <div className="form-group">
//                 <label htmlFor="description">Description</label>
//                 <input type="text"  name="description" onChange={input} value={value.description} className="form-control" />
//             </div>

//             <div className="form-group">
//                 <label htmlFor="benafits">Benafits</label>
//                 <input type="text"  name="benafits" onChange={input} value={value.benafits} className="form-control" />
//             </div>

//             <div className="form-group">
//                 <label htmlFor="responsibility">Responsibility</label>
//                 <input type="text"  name="responsibility" onChange={input} value={value.responsibility} className="form-control" />
//             </div>

//             <div className="form-group">
//                 <label htmlFor="description">Description</label>
//                 <input type="text"  name="description" onChange={input} value={value.description} className="form-control" />
//             </div>

//             <div className="form-group">
//                 <label htmlFor="qualifications">Qualifications</label>
//                 <input type="text"  name="qualifications" onChange={input} value={value.qualifications} className="form-control" />
//             </div>

//             <div className="form-group">
//                 <label htmlFor="keywords">Keywords</label>
//                 <input type="text"  name="keywords" onChange={input} value={value.keywords} className="form-control" />
//             </div>

//             <div className="form-group">
//                 <label htmlFor="description">Description</label>
//                 <input type="text"  name="description" onChange={input} value={value.description} className="form-control" />
//             </div>

//             <h2>Company Details</h2>

//             <div className="form-group">
//                 <label htmlFor="name">Name</label>
//                 <input type="text"  name="name" onChange={input} value={value.name} className="form-control" />
//             </div>

//             <div className="form-group">
//                 <label htmlFor="location">Location</label>
//                 <input type="text"  name="description" onChange={input} value={value.location} className="form-control" />
//             </div>
            
//             <div className="form-group">
//                 <label htmlFor="website">Website</label>
//                 <input type="text"  name="website" onChange={input} value={value.website} className="form-control" />
//             </div>
//             <div>
//                 <button>Save Job</button>
//             </div>
//         </>
//     );
// }

// export default Postjob;


import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './postjob.css'; 
function Postjob() {
    const [data, setData] = useState([]);
    const [value, setValue] = useState({
        title: "",
        category: "",
        job_nature: "",
        vaccancy: "",
        salary: "",
        location: "",
        description: "",
        benafits: "",
        responsibility: "",
        qualifications: "",
        keywords: "",
        name: "",
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
            vaccancy: "",
            salary: "",
            location: "",
            description: "",
            benafits: "",
            responsibility: "",
            qualifications: "",
            keywords: "",
            name: "",
            website: ""
        });
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

                <Form.Group as={Row} controlId="vaccancy">
                    <Form.Label column sm="2">Vaccancy</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            name="vaccancy"
                            onChange={input}
                            value={value.vaccancy}
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
                            type="text"
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
                            type="text"
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

                <Form.Group as={Row} controlId="company_location">
                    <Form.Label column sm="2">Location</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            name="company_location"
                            onChange={input}
                            value={value.location}
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
                <Button   variant="primary" onClick={clearInputFields}>Clear</Button>  
             
                <Button  variant="success" >Save Job</Button>
                </div>
            </Form>
        </Container>
    );
}

export default Postjob;

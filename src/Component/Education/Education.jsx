import React from 'react'
import { Form ,Button,FloatingLabel} from 'react-bootstrap'
const Education = () => {
  return (
    <div className='education'>
        <h1>Tell us about your education</h1>
        <p>Include every school, even if you're still there or didn't graduate.</p>
       <Form className='container'>
       <Form.Group className="mb-3" >
        <Form.Label>School Name</Form.Label>
        <Form.Control type="input" placeholder="e.g Leipzig-University" /> 
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>School Location</Form.Label>
        <Form.Control type="input" placeholder="e.g Leipzig,Germany" /> 
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Label>School Location</Form.Label>
      <Form.Select aria-label="Default select example">
      <option>Select menu</option>
      <option value="1">High school Diploma </option>
      <option value="2">GED</option>
      <option value="3">Bachelor of Arts</option>
      <option value="4">Associate of Arts</option>
      <option value="5">Associate of Science</option>
      <option value="6">Associate of Applied Science</option>
      <option value="7">Bachelor of Science</option>
      <option value="8">BBA</option>
      <option value="9">MBA</option>
      <option value="10">Master of Science</option>
      <option value="11">J.D</option>
      <option value="12">M.D</option>
      <option value="13">Ph.D</option>
      <option value="14">Enter a different degree</option>
      <option value="15">No Degree</option>
    </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Enter a different degree</Form.Label>
        <Form.Control type="input" placeholder="e.g. Bachelor's" /> 
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Field of Study</Form.Label>
        <Form.Control type="input" placeholder="e.g. Music" /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Form.Group>
   
          <FloatingLabel controlId="floatingTextarea2">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "400px"}}
            />
          </FloatingLabel>
      </Form.Group>
       </Form>

       <div>
       <Button variant="outline-light" type="submit">
        Back
      </Button>
      <Button variant="outline-danger" type="submit">
        Next
      </Button>
       </div>
    </div>
  )
}

export default Education
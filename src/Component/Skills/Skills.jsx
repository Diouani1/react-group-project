import "./Skills.scss"
import React from 'react'
import { Container,Form,Button,ListGroup} from "react-bootstrap"
const Skills = () => {

  return (
    <div className="skills">
       <Container className="left">
       <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Subheading</div>
          Cras justo odio
        </div>
      </ListGroup.Item> 
      </ListGroup>
        </Container> 
       <Container className="right"></Container> 
    </div>
  )
}

export default Skills
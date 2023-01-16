import React from "react";
import ImageFileChooser from "./UploadPhoto/ImageFileChooser";
import ImageFilePreviewer from "./UploadPhoto/ImageFilePreviewer";
import "./HeadingPage.scss";
import PersonalDetails from "./PersonalDetails";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HeadingPage() {
  return (
    <Container>
      <Row>
        <Col lg="2" sm={8}>
          <ImageFilePreviewer />
          <ImageFileChooser />
        </Col>
        <Col>
          <PersonalDetails />
        </Col>
      </Row>

      <Row className="buttons">
        <Col className="right">
          <NavLink to="workhistory">
            <Button variant="danger">Next</Button>
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
}

export default HeadingPage;

import React from "react";
import ImageFileChooser from "Component/HeadingPage/UploadPhoto/ImageFileChooser";
import ImageFilePreviewer from "Component/HeadingPage/UploadPhoto/ImageFilePreviewer";
import "./HeadingPage.scss";
import PersonalDetails from "Component/HeadingPage/PersonalDetails";
// import Button from "react-bootstrap/Button";
// import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HeadingPage() {
  return (
    <div style={{ padding: "5% 0 1rem" }}>
      <Container>
        <Row>
          <Col
            lg={2}
            sm={12}
            md={3}
            className="d-flex flex-column align-items-center"
          >
            <ImageFilePreviewer />
            <ImageFileChooser />
          </Col>
          <Col>
            <PersonalDetails />
          </Col>
        </Row>
        {/* <Row className="buttons">
          <Col className="right">
            <NavLink to="workhistory">
              <Button variant="danger">Next</Button>
            </NavLink>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default HeadingPage;

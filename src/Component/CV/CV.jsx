import "./cv.css";
import { useContext } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DataUeser } from "../../DataOfUser";
const CV = () => {
  const {setColor, style, diStyle } = useContext(DataUeser);

  const navigate = useNavigate();
  return (
    <div className="cv">
      <Container fluid>
        <Row className="justify-content-md-center my-4">
          <Col className="d-flex justify-content-around mx-2" xs="2">
            <Button variant="primary"   onClick={()=> {setColor("blue"); console.log("first")}}></Button>{" "}
            <Button variant="secondary" onClick={()=> setColor("grey")}></Button>{" "}
            <Button variant="success"   onClick={()=> setColor("green")}></Button>{" "}
            <Button variant="warning"   onClick={()=> setColor("yellow")}></Button>{" "}
            <Button variant="danger"    onClick={()=> setColor("red")}></Button> 
            <Button variant="info"      onClick={()=> setColor("lightblue")}></Button>{" "}
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-column align-items-end mx-2" xs="2">
            <Button variant="light" onClick={() => diStyle({ type: "style1" })}>
              Style One
            </Button>
            <Button variant="light" onClick={() => diStyle({ type: "style2" })}>
              Style Two
            </Button>
            <Button variant="light" onClick={() => diStyle({ type: "style3" })}>
              Style Three
            </Button>
            <Button variant="light" onClick={() => diStyle({ type: "style1" })}>
              Style Four
            </Button>
            <Button variant="light" onClick={() => diStyle({ type: "style2" })}>
              Style Five
            </Button>
          </Col>
          <Col className="mx-2">
            {style}
          </Col>
          <Col className="d-flex flex-column align-items-start mx-2" xs="2">
            <Button variant="light">Step One</Button>
            <Button variant="light">Step Two</Button>
            <Button variant="light">Step Three</Button>
            <Button variant="light">Step Four</Button>
            <Button variant="light">Step Five</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CV;

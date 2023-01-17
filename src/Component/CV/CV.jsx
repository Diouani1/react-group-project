import "./cv.css";
import { useContext } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DataUeser } from "../../DataOfUser";
import { PrintPdfContext } from "context/PrintPdfContext";
const CV = () => {
  const { setColor, style, diStyle, color } = useContext(DataUeser);

  const { printPdfRef, handlePrint } = useContext(PrintPdfContext);

  const navigate = useNavigate();
  return (
    <div className="cv">
      <Container>
        <Row className="justify-content-md-center my-4">
          <Col
            className="d-flex justify-content-around mx-2"
            style={{ maxWidth: "360px" }}
          >
            <Button
              variant="primary"
              onClick={() => {
                setColor("#6666ff");
                console.log("first");
              }}
            ></Button>{" "}
            <Button
              variant="secondary"
              onClick={() => setColor("grey")}
            ></Button>{" "}
            <Button
              variant="success"
              onClick={() => setColor("green")}
            ></Button>{" "}
            <Button
              variant="warning"
              onClick={() => setColor("#cccc00")}
            ></Button>{" "}
            <Button
              variant="danger"
              onClick={() => setColor("#ff5c33")}
            ></Button>
            <Button variant="info" onClick={() => setColor("#00bfff")}></Button>{" "}
          </Col>
        </Row>
        <Row>
          <Col className="style" lg={2} xs={12} sm={12} md={12}>
            <Button onClick={() => diStyle({ type: "style1" })}>
              Style One
            </Button>
            <Button onClick={() => diStyle({ type: "style2" })}>
              Style Two
            </Button>
            <Button onClick={() => diStyle({ type: "style3" })}>
              Style Three
            </Button>
            <Button onClick={() => diStyle({ type: "style1" })}>
              Style Four
            </Button>
            <Button onClick={() => diStyle({ type: "style2" })}>
              Style Five
            </Button>
          </Col>

          <Col
            // lg={10}
            className="mx-2"
            style={{
              border: `1px solid ${color}`,
              minHeight: "80vh",
              width: "60%",
              padding: "0",
            }}
          >
            <div ref={printPdfRef} style={{ height: "fit-content" }}>
              {style}
            </div>
          </Col>

          <Col className="style" lg={2} md={12} xs={12} sm={12}>
            <Button variant="success" onClick={() => navigate("/")}>
              Personal Details{" "}
            </Button>
            <Button variant="success" onClick={() => navigate("/workhistory")}>
              Work History{" "}
            </Button>
            <Button variant="success" onClick={() => navigate("/education")}>
              Education{" "}
            </Button>
            <Button variant="success" onClick={() => navigate("/skills")}>
              Skills{" "}
            </Button>
            <Button variant="success" onClick={() => navigate("/language")}>
              Language{" "}
            </Button>
            <Button variant="success" onClick={() => navigate("/personality")}>
              Personality{" "}
            </Button>
            <Button style={{ backgroundColor: color }} onClick={handlePrint}>
              Print Resume
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CV;

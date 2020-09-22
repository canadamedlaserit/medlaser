import React from "react"
import { Row, Col, Container, Button } from "react-bootstrap"
import "./quizhome.scss"
//router
import { Link } from "gatsby"
import pic1 from "../../images/laser-hair-emoval-women-image.png"
import pic2 from "../../images/laser-skin-tightening.png"
export default function HomeQuiz() {
  return (
    <>
      <section id="assessment-section">
        <Col>
          <Row
            className="flex justify-content-center py-5"
            style={{
              backgroundColor: "#000000",
              color: "#FFFFFF",
              height: "50vh",
              //              paddingTop: "25vh",
            }}
          >
            <Col lg={5} md={10} className="text-center headerWrap">
              <h1 className="headerTitle">Self Assessment Test</h1>
              <p className="headerdesc">
                Canada MedLaser is all about giving the best services to all our
                clients. We want to hear from you, so that we can serve you
                better! Let’s do an assessment now.
              </p>
            </Col>
          </Row>
          <Row style={{ height: "50vh" }}>
            <Col
              md={6}
              className="text-center bottomWrap"
              style={{
                backgroundImage: `url(${pic1})`,
                backgroundBlendMode: "overlay",
                backgroundColor: "rgba(0,0,0,0.4)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h1 className="textCFont">Laser Hair Removal Assessment</h1>
              <Link to="/test">
                <Button className="testButton">
                  <span className="buttonFont">Lets gets started</span>
                </Button>
              </Link>
            </Col>
            <Col
              className="text-center bottomWrap"
              md={6}
              style={{
                backgroundImage: `url(${pic2})`,
                backgroundBlendMode: "overlay",
                backgroundColor: "rgba(0,0,0,0.4)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h1 className="textCFont">Skin Assessment</h1>
              <Link>
                <Button disabled className="testButton">
                  <span className="buttonFont">Coming Soon</span>
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </section>
    </>
  )
}

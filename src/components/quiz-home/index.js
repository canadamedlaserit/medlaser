import React from "react"
import { Row, Col, Button } from "react-bootstrap"
import "./quizhome.scss"
//router
import { Link } from "gatsby"
//import { pic1, pic2 } from "../../images"
import antiAging from "../../images/anti-aging.jpg"
import coolSculpting from "../../images/coolsculpting.jpg"
import laserHairRemoval from "../../images/laser-hair-removal.jpg"
import skinTreatment from "../../images/skin-treatment.jpg"

const tests = [
  {
    name: "Laser Hair Removal Assessment",
    image: `url(${laserHairRemoval})`,
    route: "/laser-hair-removal-assessment/",
  },
  {
    name: "CoolSculpting Assessment",
    image: `url(${coolSculpting})`,
    route: "/cool-sculpting-assessment/",
  },
  {
    name: "Skin Treatment Assessment",
    image: `url(${skinTreatment})`,
    route: "/skin-treatments-assessment/",
  },
  {
    name: "Anti-Aging Assessment",
    image: `url(${antiAging})`,
    route: "/anti-aging-assessment/",
  },
]
export default function HomeQuiz() {
  return (
    <>
      <section>
        <Col>
          <Row
            className="flex justify-content-center py-5"
            style={{
              backgroundColor: "#000000",
              color: "#FFFFFF",
              height: "50vh",
              paddingTop: "25vh",
            }}
          >
            <Col
              lg={5}
              md={10}
              className="text-center"
              style={{ marginTop: "10vh" }}
            >
              <h1 className="headerTitle">Self Assessment Test</h1>
              <p className="headerdesc">
                Canada MedLaser is all about giving the best services to all our
                clients. We want to hear from you, so that we can serve you
                better! Let’s do an assessment now.
              </p>
            </Col>
          </Row>
          <Row>
            {tests.map(data => (
              <Col
                md={6}
                className="text-center bottomWrap headerBackground"
                style={{
                  backgroundImage: data.image,
                }}
              >
                <h1 className="textCFont">{data.name}</h1>
                <Link to={data.route}>
                  <Button className="testButton">
                    <span className="buttonFont">Lets gets started</span>
                  </Button>
                </Link>
              </Col>
            ))}
            {/* <Col
              className="text-center bottomWrap"
              md={6}
              style={{
                backgroundImage: `url(${coolSculpting})`,
                backgroundBlendMode: "overlay",
                backgroundColor: "rgba(0,0,0,0.4)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h1 className="textCFont">CoolSculpting Assessment</h1>
              <Link to="/coolsculpting">
                <Button className="testButton">
                  <span className="buttonFont">Lets gets started</span>
                </Button>
              </Link>
            </Col>
            {/* </Row>
          <Row style={{ height: "60vh" }}> 
            <Col
              md={6}
              className="text-center bottomWrap"
              style={{
                backgroundImage: `url(${skinTreatment})`,
                backgroundBlendMode: "overlay",
                backgroundColor: "rgba(0,0,0,0.4)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h1 className="textCFont">Skin Treatment Assessment</h1>
              <Link to="/skin-treatments">
                <Button className="testButton">
                  <span className="buttonFont">Lets gets started</span>
                </Button>
              </Link>
            </Col>
            <Col
              className="text-center bottomWrap"
              md={6}
              style={{
                backgroundImage: `url(${antiAging})`,
                backgroundBlendMode: "overlay",
                backgroundColor: "rgba(0,0,0,0.4)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h1 className="textCFont">Anti-Aging Assessment</h1>
              <Link to="/anti-aging">
                <Button className="testButton">
                  <span className="buttonFont">Lets gets started</span>
                </Button>
              </Link>
            </Col> */}
          </Row>
        </Col>
      </section>
    </>
  )
}

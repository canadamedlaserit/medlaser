import Layout from "../components/Layout"
import React from "react"

import teamImg from "../images/Copy of Copy of Untitled (4).png"
import { Container, Col, Row } from "react-bootstrap"
import person1 from "../images/DSC_0921.png"
import person2 from "../images/DSC_9321.png"
import person3 from "../images/DSC_0022.png"
import teamIcon from "../images/contraceptive.svg"

const OurTeam = () => {
  return (
    <Layout>
      <Container fluid className="our-team-container">
        <div className="our-team-inner">
          <Row>
            <Col lg={4} md={12}>
              <div className="our-team-head">
                <h2>Our Team</h2>
              </div>
            </Col>
            <Col lg={8} md={12}>
              <div className="our-team-content">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div class="our-team-img-container">
        <div class="our-team-img-inner">
          <img src={teamImg} class="our-team-img" />
        </div>
      </div>
      <Container fluid className="our-team-person-container">
        <div className="our-team-person-inner">
          <Row>
            <Col lg={4} sm={6}>
              <div>
                <img src={person1} className="our-team-person-img" />
                <p className="our-team-person-name">Louis Nelson</p>
                <p className="our-team-person-desig">Clinic Director</p>
              </div>
            </Col>
            <Col lg={4} sm={6}>
              <div>
                <img src={person2} className="our-team-person-img" />
                <p className="our-team-person-name">Louis Nelson</p>
                <p className="our-team-person-desig">Clinic Director</p>
              </div>
            </Col>
            <Col lg={4} sm={6}>
              <div>
                <img src={person3} className="our-team-person-img" />
                <p className="our-team-person-name">Louis Nelson</p>
                <p className="our-team-person-desig">Clinic Director</p>
              </div>
            </Col>
            <Col lg={4} sm={6}>
              <div>
                <img src={person1} className="our-team-person-img" />
                <p className="our-team-person-name">Louis Nelson</p>
                <p className="our-team-person-desig">Clinic Director</p>
              </div>
            </Col>
            <Col lg={4} sm={6}>
              <div>
                <img src={person2} className="our-team-person-img" />
                <p className="our-team-person-name">Louis Nelson</p>
                <p className="our-team-person-desig">Clinic Director</p>
              </div>
            </Col>
            <Col lg={4} sm={6}>
              <div>
                <img src={person3} className="our-team-person-img" />
                <p className="our-team-person-name">Louis Nelson</p>
                <p className="our-team-person-desig">Clinic Director</p>
              </div>
            </Col>

            <Col lg={4} sm={6}>
              <div>
                <img src={person1} className="our-team-person-img" />
                <p className="our-team-person-name">Louis Nelson</p>
                <p className="our-team-person-desig">Clinic Director</p>
              </div>
            </Col>
            <Col lg={4} sm={6}>
              <div>
                <img src={person2} className="our-team-person-img" />
                <p className="our-team-person-name">Louis Nelson</p>
                <p className="our-team-person-desig">Clinic Director</p>
              </div>
            </Col>
            <Col lg={4} sm={6}>
              <div>
                <img src={person3} className="our-team-person-img" />
                <p className="our-team-person-name">Louis Nelson</p>
                <p className="our-team-person-desig">Clinic Director</p>
              </div>
            </Col>

            <Col lg={4} sm={6}>
              <div>
                <img src={person1} className="our-team-person-img" />
                <p className="our-team-person-name">Louis Nelson</p>
                <p className="our-team-person-desig">Clinic Director</p>
              </div>
            </Col>
            <Col lg={4} sm={6}>
              <div>
                <img src={person2} className="our-team-person-img" />
                <p className="our-team-person-name">Louis Nelson</p>
                <p className="our-team-person-desig">Clinic Director</p>
              </div>
            </Col>
            <Col lg={4} sm={6}>
              <div>
                <img src={person3} className="our-team-person-img" />
                <p className="our-team-person-name">Louis Nelson</p>
                <p className="our-team-person-desig">Clinic Director</p>
              </div>
            </Col>

            <Col lg={4} sm={6}>
              <div>
                <img src={person1} className="our-team-person-img" />
                <p className="our-team-person-name">Louis Nelson</p>
                <p className="our-team-person-desig">Clinic Director</p>
              </div>
            </Col>
            <Col lg={4} sm={6}>
              <div>
                <img src={person2} className="our-team-person-img" />
                <p className="our-team-person-name">Louis Nelson</p>
                <p className="our-team-person-desig">Clinic Director</p>
              </div>
            </Col>
            <Col lg={4} sm={6}>
              <div>
                <img src={person3} className="our-team-person-img" />
                <p className="our-team-person-name">Louis Nelson</p>
                <p className="our-team-person-desig">Clinic Director</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container fluid className="our-team-info">
        <div className="our-team-info-icon">
          <img src={teamIcon} />
        </div>
        <h1 className="our-team-info-head">
          Want to become a part of our team?
        </h1>
        <p>Write us on our email maple@canadamedlaser.ca</p>
      </Container>
    </Layout>
  )
}
export default OurTeam

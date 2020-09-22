import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button } from "react-bootstrap"
import "./_index.scss"


const AssessmentTest = () => {
  //   const data = useStaticQuery(graphql`
  //     {
  //       wordpressPage(slug: { eq: "assessment-test" }) {
  //         acf {
  //           title
  //           description
  //         }
  //       }
  //     }
  //   `)

  const assessmentTest = { title: "", description: "" }

  return (
    <section id="assessment-test-section">
      <Container>
        <Row className="justify-content-center ">
          <Col lg={6} md={8} className="text-center">
            <h1 dangerouslySetInnerHTML={{ __html: assessmentTest.title }} />
            <div
              dangerouslySetInnerHTML={{ __html: assessmentTest.description }}
            />
            <div className="btn-section">
              <Link to="/alcohol-test">
                <Button>Alcohol Test</Button>
              </Link>
              <Link to="/drug-test">
                <Button>Drug Test</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AssessmentTest

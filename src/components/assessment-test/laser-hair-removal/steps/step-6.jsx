import React from "react"
import { Container, Col, Button } from "react-bootstrap"

const Step6 = ({
  values,
  setFieldValue,
  handleNext,
  handlePrev,
  hanldleAnswers,
}) => {
  return (
    <>
      <div className="questionDiv">
        <Col lg={5} md={10} className="text-align-center">
          <h1>
            Do you have any of the following medical conditions: Cancer,
            diabetes, skin diseases/skin lesions, seizure disorder, blood
            clotting abnormalities, G6PD deficiency, psoriasis/vitiligo/lupus,
            HIV/AIDS OR are you pregnant or breastfeeding?
          </h1>
        </Col>
      </div>
      <Container fluid>
        <Col
          md={10}
          lg={4}
          className="flex justify-content-center text-center"
          style={{ margin: "auto", padding: "2em" }}
        >
          <ul className="radio-btn">
            <li>
              <input
                type="radio"
                id="option1"
                name="question6"
                value="Yes"
                checked={values.question6 === "Yes"}
                onChange={() => {
                  setFieldValue("question6", "Yes")
                  hanldleAnswers("red")

                  handleNext()
                }}
              />
              <label htmlFor="option1">Yes</label>
            </li>
            <li>
              <input
                type="radio"
                id="option2"
                name="question6"
                value="No"
                checked={values.question6 === "No"}
                onChange={() => {
                  setFieldValue("question6", "No")
                  hanldleAnswers("green")

                  handleNext()
                }}
              />
              <label htmlFor="option2">No</label>
            </li>
            <li style={{ display: "flex" }}>
              <Button className="next-btn ml-2 py-3" onClick={handlePrev}>
                Back
              </Button>
              <Button className="next-btn ml-2 py-3" onClick={handleNext}>
                Next
              </Button>
            </li>
          </ul>
        </Col>
      </Container>
    </>
  )
}

export default Step6

import React from "react"
import { Col, Button, Container } from "react-bootstrap"

const Step6 = ({
  currentStep,
  values,
  setQuestionAnswer,
  handleNext,
  handlePrev,
}) => {
  return (
    <div style={{ display: currentStep === 6 ? "block" : "none" }}>
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
                name="question6"
                value="Yes"
                checked={values.question6 === "Yes"}
                readOnly={true}
              />
              <label onClick={() => setQuestionAnswer("question6", "Yes")}>
                Yes
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="question6"
                value="No	"
                checked={values.question6 === "No	"}
                readOnly={true}
              />
              <label onClick={() => setQuestionAnswer("question6", "No")}>
                No
              </label>
            </li>
          </ul>
          <li style={{ display: "flex" }}>
            <Button className="next-btn ml-2 py-3" onClick={handlePrev}>
              Back
            </Button>
            <Button className="next-btn ml-2 py-3" onClick={handleNext}>
              Next
            </Button>
          </li>
        </Col>
      </Container>
    </div>
  )
}

export default Step6

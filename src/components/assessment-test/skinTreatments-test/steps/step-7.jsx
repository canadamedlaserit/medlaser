import React from "react"
import { Col, Button, Container } from "react-bootstrap"

const Step7 = ({
  currentStep,
  values,
  setQuestionAnswer,
  handleNext,
  handlePrev,
}) => {
  return (
    <div style={{ display: currentStep === 7 ? "block" : "none" }}>
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
            <fieldset>
              <li>
                <input
                  type="radio"
                  name="question7"
                  value="Yes"
                  checked={values.question7 === "Yes"}
                />
                <label
                  onClick={() => setQuestionAnswer("question7", "Yes", "red")}
                >
                  Yes
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question7"
                  value="No"
                  checked={values.question7 === "No"}
                />
                <label onClick={() => setQuestionAnswer("question7", "No")}>
                  No
                </label>
              </li>
            </fieldset>
            <li style={{ display: "flex" }}>
              <input type="radio" />
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
    </div>
  )
}

export default Step7

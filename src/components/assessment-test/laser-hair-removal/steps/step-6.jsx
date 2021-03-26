import React from "react"
import { Container, Col, Button } from "react-bootstrap"

const Step6 = ({
  currentStep,
  values,
  handleNext,
  handlePrev,
  setQuestionAnswer,
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
            <fieldset>
              <li>
                <input
                  type="radio"
                  name="question6"
                  value="Yes"
                  readOnly={true}
                  checked={values.question6 === "Yes"}
                />
                <label onClick={() => setQuestionAnswer("question6", "Yes")}>
                  Yes
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question6"
                  value="No"
                  readOnly={true}
                  checked={values.question6 === "No"}
                />
                <label onClick={() => setQuestionAnswer("question6", "No")}>
                  No
                </label>
              </li>
            </fieldset>
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
    </div>
  )
}

export default Step6

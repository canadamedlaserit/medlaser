import React from "react"
import { Col, Button, Container } from "react-bootstrap"

const Step2 = ({
  currentStep,
  values,
  handleNext,
  handlePrev,
  setQuestionAnswer,
}) => {
  return (
    <div style={{ display: currentStep === 2 ? "block" : "none" }}>
      <div className="questionDiv">
        <Col className="text-align-center">
          <h1>How often do you remove your hair?</h1>
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
                  name="question2"
                  value="Every week"
                  checked={values.question2 === "Every week"}
                  readOnly={true}
                />
                <label
                  onClick={() => setQuestionAnswer("question2", "Every week")}
                >
                  Every week
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question2"
                  value="Every 2 weeks"
                  checked={values.question2 === "Every 2 weeks"}
                  readOnly={true}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer("question2", "Every 2 weeks")
                  }
                >
                  Every 2 weeks
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="option3"
                  name="question2"
                  value="Once a month"
                  checked={values.question2 === "Once a month"}
                  readOnly={true}
                />
                <label
                  onClick={() => setQuestionAnswer("question2", "Once a month")}
                >
                  Once a month
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question2"
                  value="Every 2 months"
                  checked={values.question2 === "Every 2 months"}
                  readOnly={true}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer("question2", "Every 2 months")
                  }
                >
                  Every 2 months
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

export default Step2

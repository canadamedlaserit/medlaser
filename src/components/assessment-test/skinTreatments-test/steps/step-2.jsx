import React from "react"
import { Col, Button, Container } from "react-bootstrap"

const Step2 = ({
  currentStep,
  values,
  setQuestionAnswer,
  handleNext,
  handlePrev,
}) => {
  return (
    <div style={{ display: currentStep === 2 ? "block" : "none" }}>
      <div className="questionDiv">
        <Col lg={6} md={10} className="text-align-center">
          <h1>How long have you been suffering with this skin concern?</h1>
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
            <field>
              <li>
                <input
                  type="radio"
                  name="question2"
                  value="For as long as I can remember"
                  checked={values.question2 === "For as long as I can remember"}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer(
                      "question2",
                      "For as long as I can remember"
                    )
                  }
                >
                  For as long as I can remember
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question2"
                  value="Since my teenage years"
                  checked={values.question2 === "Since my teenage years"}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer("question2", "Since my teenage years")
                  }
                >
                  Since my teenage years
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question2"
                  value="Since the past couple of years/months"
                  checked={
                    values.question2 === "Since the past couple of years/months"
                  }
                />
                <label
                  onClick={() =>
                    setQuestionAnswer(
                      "question2",
                      "Since the past couple of years/months"
                    )
                  }
                >
                  Since the past couple of years/months
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question2"
                  value="I just noticed it recently"
                  checked={values.question2 === "I just noticed it recently"}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer("question2", "I just noticed it recently")
                  }
                >
                  I just noticed it recently
                </label>
              </li>
            </field>
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

import React from "react"
import { Container, Col, Button } from "react-bootstrap"

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
          <h1>
            How long have you been considering getting treatment on that
            stubborn fat?
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
                  name="question2"
                  value="Forever!"
                  checked={values.question2 === "Forever!"}
                  readOnly={true}
                />
                <label
                  onClick={() => setQuestionAnswer("question2", "Forever!")}
                >
                  Forever!
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question2"
                  value="The idea just popped into my head"
                  checked={
                    values.question2 === "The idea just popped into my head"
                  }
                  readOnly={true}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer(
                      "question2",
                      "The idea just popped into my head"
                    )
                  }
                >
                  The idea just popped into my head
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question2"
                  value="For the past year or two"
                  checked={values.question2 === "For the past year or two"}
                  readOnly={true}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer("question2", "For the past year or two")
                  }
                >
                  For the past year or two
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question2"
                  value="For a couple of months"
                  checked={values.question2 === "For a couple of months"}
                  readOnly={true}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer("question2", "For a couple of months")
                  }
                >
                  For a couple of months
                </label>
              </li>
              <li style={{ display: "flex" }}>
                <Button className="next-btn ml-2 py-3" onClick={handlePrev}>
                  Back
                </Button>
                <Button className="next-btn ml-2 py-3" onClick={handleNext}>
                  Next
                </Button>
              </li>
            </fieldset>
          </ul>
        </Col>
      </Container>
    </div>
  )
}

export default Step2

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
          <h1>How soon are you hoping to start treating your skin concern?</h1>
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
                  value="ASAP. HELP!"
                  checked={values.question6 === "ASAP. HELP!"}
                />
                <label
                  onClick={() => setQuestionAnswer("question6", "ASAP. HELP!")}
                >
                  ASAP. HELP!
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question6"
                  value="I’d probably have to sleep on it… Depends on the treatment I’m advised to do	"
                  checked={
                    values.question6 ===
                    "I’d probably have to sleep on it… Depends on the treatment I’m advised to do	"
                  }
                />
                <label
                  onClick={() =>
                    setQuestionAnswer(
                      "question6",
                      "I’d probably have to sleep on it… Depends on the treatment I’m advised to do	"
                    )
                  }
                >
                  I’d probably have to sleep on it… Depends on the treatment I’m
                  advised to do
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question6"
                  value="I’m only interested in a consultation.  No urgency to start treatment "
                  checked={
                    values.question6 ===
                    "I’m only interested in a consultation.  No urgency to start treatment "
                  }
                />
                <label
                  onClick={() =>
                    setQuestionAnswer(
                      "question6",
                      "I’m only interested in a consultation.  No urgency to start treatment "
                    )
                  }
                >
                  I’m only interested in a consultation. No urgency to start
                  treatment
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

export default Step6

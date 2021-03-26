import React from "react"
import { Col, Button, Container } from "react-bootstrap"

const Step4 = ({
  currentStep,
  values,
  setQuestionAnswer,
  handleNext,
  handlePrev,
}) => {
  return (
    <div style={{ display: currentStep === 4 ? "block" : "none" }}>
      <div className="questionDiv">
        <Col lg={5} md={10} className="text-align-center">
          <h1>How did you enjoy the treatment and results?</h1>
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
                name="question4"
                value="Loved it"
                checked={values.question4 === "Loved it"}
                readOnly={true}
              />
              <label onClick={() => setQuestionAnswer("question4", "Loved it")}>
                Loved it
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="question4"
                value="Meh, I was underwhelmed	"
                checked={values.question4 === "Meh, I was underwhelmed"}
                readOnly={true}
              />
              <label
                onClick={() =>
                  setQuestionAnswer("question4", "Meh, I was underwhelmed	")
                }
              >
                Meh, I was underwhelmed
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="question4"
                value="I told you, I’ve never had treatments before!"
                checked={
                  values.question4 ===
                  "I told you, I’ve never had treatments before!"
                }
                readOnly={true}
              />
              <label
                onClick={() =>
                  setQuestionAnswer(
                    "question4",
                    "I told you, I’ve never had treatments before!"
                  )
                }
              >
                I told you, I’ve never had treatments before!
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

export default Step4

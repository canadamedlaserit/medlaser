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
          <h1>How soon do you want to see that fat fade away?</h1>
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
                  value="Yesterday!"
                  checked={values.question6 === "Yesterday!"}
                  readOnly={true}
                />
                <label
                  onClick={() => setQuestionAnswer("question6", "Yesterday!")}
                >
                  Yesterday!
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question6"
                  value="I have an event next year, so I’m planning ahead!"
                  checked={
                    values.question6 ===
                    "I have an event next year, so I’m planning ahead!"
                  }
                  readOnly={true}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer(
                      "question6",
                      "I have an event next year, so I’m planning ahead!"
                    )
                  }
                  htmlFor="option2"
                >
                  I have an event next year, so I’m planning ahead!
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question6"
                  value="Meh, I’m in no rush"
                  checked={values.question6 === "Meh, I’m in no rush"}
                  readOnly={true}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer("question6", "Meh, I’m in no rush")
                  }
                >
                  Meh, I’m in no rush
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question6"
                  value="Not sure, depends on whether I’m a candidate"
                  checked={
                    values.question6 ===
                    "Not sure, depends on whether I’m a candidate"
                  }
                  readOnly={true}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer(
                      "question6",
                      "Not sure, depends on whether I’m a candidate"
                    )
                  }
                >
                  Not sure, depends on whether I’m a candidate
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

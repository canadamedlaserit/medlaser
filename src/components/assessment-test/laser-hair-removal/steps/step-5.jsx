import React from "react"
import { Container, Col, Button } from "react-bootstrap"

const Step5 = ({
  currentStep,
  values,
  handleNext,
  handlePrev,
  setQuestionAnswer,
}) => {
  return (
    <div style={{ display: currentStep === 5 ? "block" : "none" }}>
      <div className="questionDiv">
        <Col className="text-align-center">
          <h1>When would you like to get started on your treatment?</h1>
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
                  name="question5"
                  value="You mean if I start now, I’ll be hair-free by THIS TIME, next year?! Sign me up asap!"
                  readOnly={true}
                  checked={
                    values.question5 ===
                    "You mean if I start now, I’ll be hair-free by THIS TIME, next year?! Sign me up asap!"
                  }
                />
                <label
                  onClick={() =>
                    setQuestionAnswer(
                      "question5",
                      "You mean if I start now, I’ll be hair-free by THIS TIME, next year?! Sign me up asap!"
                    )
                  }
                >
                  You mean if I start now, I’ll be hair-free by THIS TIME, next
                  year?! Sign me up asap!
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question5"
                  readOnly={true}
                  value="Woah, slow down.  I’m in no rush.  Just looking to do some research first"
                  checked={
                    values.question5 ===
                    "Woah, slow down.  I’m in no rush.  Just looking to do some research first"
                  }
                />
                <label
                  onClick={() =>
                    setQuestionAnswer(
                      "question5",
                      "Woah, slow down.  I’m in no rush.  Just looking to do some research first"
                    )
                  }
                >
                  Woah, slow down. I’m in no rush. Just looking to do some
                  research first
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question5"
                  readOnly={true}
                  value="Depends on how my consultation goes.  If I feel comfortable, I can start asap	"
                  checked={
                    values.question5 ===
                    "Depends on how my consultation goes.  If I feel comfortable, I can start asap	"
                  }
                />
                <label
                  onClick={() =>
                    setQuestionAnswer(
                      "question5",
                      "Depends on how my consultation goes.  If I feel comfortable, I can start asap"
                    )
                  }
                >
                  Depends on how my consultation goes. If I feel comfortable, I
                  can start asap{" "}
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question5"
                  readOnly={true}
                  value="Really depends.  I have to talk to my partner/spouse before committing"
                  checked={
                    values.question5 ===
                    "Really depends.  I have to talk to my partner/spouse before committing"
                  }
                />
                <label
                  onClick={() =>
                    setQuestionAnswer(
                      "question5",
                      "Really depends.  I have to talk to my partner/spouse before committing"
                    )
                  }
                >
                  Really depends. I have to talk to my partner/spouse before
                  committing
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

export default Step5

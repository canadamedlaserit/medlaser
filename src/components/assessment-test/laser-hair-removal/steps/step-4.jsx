import React from "react"
import { Container, Col, Button } from "react-bootstrap"

const Step4 = ({
  currentStep,
  values,
  handleNext,
  handlePrev,
  setQuestionAnswer,
}) => {
  return (
    <div style={{ display: currentStep === 4 ? "block" : "none" }}>
      <div className="questionDiv">
        <Col lg={5} md={10} className="text-align-center">
          <h1>
            Have you ever had laser hair removal in the area you are hoping to
            have treated?
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
                  name="question4"
                  value="Yes, and I loved the results!"
                  checked={values.question4 === "Yes, and I loved the results!"}
                  readOnly={true}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer(
                      "question4",
                      "Yes, and I loved the results!"
                    )
                  }
                >
                  Yes, and I loved the results!
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question4"
                  value="Yes, but it didn’t work very well"
                  readOnly={true}
                  checked={
                    values.question4 === "Yes, but it didn’t work very well"
                  }
                />
                <label
                  onClick={() =>
                    setQuestionAnswer(
                      "question4",
                      "Yes, but it didn’t work very well"
                    )
                  }
                >
                  Yes, but it didn’t work very well
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question4"
                  readOnly={true}
                  value="No"
                  checked={values.question4 === "No"}
                />
                <label onClick={() => setQuestionAnswer("question4", "No")}>
                  No
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question4"
                  value="No, but I’ve been considering it for a while"
                  readOnly={true}
                  checked={
                    values.question4 ===
                    "No, but I’ve been considering it for a while"
                  }
                />
                <label
                  onClick={() =>
                    setQuestionAnswer(
                      "question4",
                      "No, but I’ve been considering it for a while"
                    )
                  }
                >
                  No, but I’ve been considering it for a while
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

export default Step4

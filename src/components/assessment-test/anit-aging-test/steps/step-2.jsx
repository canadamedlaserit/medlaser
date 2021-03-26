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
          <h1>When did you start noticing that your skin is visibly aging?</h1>
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
                  value="Ugh, it’s been a while"
                  checked={values.question2 === "Ugh, it’s been a while"}
                  readOnly={true}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer("question2", "Ugh, it’s been a while")
                  }
                >
                  Ugh, it’s been a while
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question2"
                  value="Like a week! It feels as if I’ve aged 5 years overnight"
                  checked={
                    values.question2 ===
                    "Like a week! It feels as if I’ve aged 5 years overnight"
                  }
                  readOnly={true}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer(
                      "question2",
                      "Like a week! It feels as if I’ve aged 5 years overnight"
                    )
                  }
                >
                  Like a week! It feels as if I’ve aged 5 years overnight
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question2"
                  value="I’m gradually noticing signs of aging, which I’d like to address"
                  checked={
                    values.question2 ===
                    "I’m gradually noticing signs of aging, which I’d like to address"
                  }
                  readOnly={true}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer(
                      "question2",
                      "I’m gradually noticing signs of aging, which I’d like to address"
                    )
                  }
                >
                  I’m gradually noticing signs of aging, which I’d like to
                  address
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question2"
                  value="I’m not really aging. Just hoping to focus on preventative treatments	"
                  checked={
                    values.question2 ===
                    "I’m not really aging. Just hoping to focus on preventative treatments	"
                  }
                  readOnly={true}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer(
                      "question2",
                      "I’m not really aging. Just hoping to focus on preventative treatments	"
                    )
                  }
                >
                  I’m not really aging. Just hoping to focus on preventative
                  treatments{" "}
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

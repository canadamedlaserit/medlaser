import React from "react"
import { Col, Button, Container } from "react-bootstrap"
import { Link } from "gatsby"

const Step1 = ({ values, setQuestionAnswer, handleNext }) => {
  return (
    <>
      <div className="questionDiv">
        <Col lg={6} md={10} className="text-align-center">
          <h1>
            Ready? Okay! Tell us about your skin. What is your number one skin
            concern?
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
                  name="question1"
                  value="Acne scars"
                  checked={values.question1 === "Acne scars"}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer("question1", "Acne scars", "yellow")
                  }
                >
                  Acne scars
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question1"
                  value="Aging/hollowness/deep wrinkles"
                  checked={
                    values.question1 === "Aging/hollowness/deep wrinkles"
                  }
                />
                <label
                  onClick={() =>
                    setQuestionAnswer(
                      "question1",
                      "Aging/hollowness/deep wrinkles",
                      "baby blue"
                    )
                  }
                >
                  Aging/hollowness/deep wrinkles
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question1"
                  value="Acne/oily skin/enlarged pores"
                  checked={values.question1 === "Acne/oily skin/enlarged pores"}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer(
                      "question1",
                      "Acne/oily skin/enlarged pores",
                      "purple"
                    )
                  }
                >
                  Acne/oily skin/enlarged pores
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question1"
                  value="Dry skin"
                  checked={values.question1 === "Dry skin"}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer("question1", "Dry skin", "blue")
                  }
                >
                  Dry skin
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question1"
                  value="Fine lines"
                  checked={values.question1 === "Fine lines"}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer("question1", "Fine lines", "grey")
                  }
                >
                  Fine lines
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question1"
                  value="Skin laxity"
                  checked={values.question1 === "Skin laxity"}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer("question1", "Skin laxity", "teal")
                  }
                >
                  Skin laxity
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question1"
                  value="Acne and acne scars"
                  checked={values.question1 === "Acne and acne scars"}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer(
                      "question1",
                      "Acne and acne scars",
                      "dark green"
                    )
                  }
                >
                  Acne and acne scars
                </label>
              </li>
            </fieldset>
            <li style={{ display: "flex" }}>
              <Link
                className="next-btn ml-2 py-3"
                to="/assessment"
                style={{ color: "#fff" }}
              >
                cancel
              </Link>

              <Button className="next-btn ml-2  py-3" onClick={handleNext}>
                Next
              </Button>
            </li>
          </ul>
        </Col>
      </Container>
    </>
  )
}

export default Step1

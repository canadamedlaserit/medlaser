import React from "react"
import { Col, Button, Container } from "react-bootstrap"
import { Link } from "gatsby"

const Step1 = ({ values, setFieldValue, handleNext, hanldleAnswers }) => {
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
            <li>
              <input
                type="radio"
                id="option1"
                name="question1"
                value="Acne scars"
                checked={values.question1 === "Acne scars"}
                onChange={() => {
                  setFieldValue("question1", "Acne scars")
                  hanldleAnswers("yellow")
                  handleNext()
                }}
              />
              <label htmlFor="option1">Acne scars</label>
            </li>
            <li>
              <input
                type="radio"
                id="option2"
                name="question1"
                value="Aging/hollowness/deep wrinkles"
                checked={values.question1 === "Aging/hollowness/deep wrinkles"}
                onChange={() => {
                  setFieldValue("question1", "Aging/hollowness/deep wrinkles")
                  hanldleAnswers("baby blue")
                  handleNext()
                }}
              />
              <label htmlFor="option2">Aging/hollowness/deep wrinkles</label>
            </li>
            <li>
              <input
                type="radio"
                id="option3"
                name="question1"
                value="Acne/oily skin/enlarged pores"
                checked={values.question1 === "Acne/oily skin/enlarged pores"}
                onChange={() => {
                  setFieldValue("question1", "Acne/oily skin/enlarged pores")
                  hanldleAnswers("purple")
                  handleNext()
                }}
              />
              <label htmlFor="option3">Acne/oily skin/enlarged pores</label>
            </li>
            <li>
              <input
                type="radio"
                id="option4"
                name="question1"
                value="Dry skin"
                checked={values.question1 === "Dry skin"}
                onChange={() => {
                  setFieldValue("question1", "Dry skin")
                  hanldleAnswers("blue")
                  handleNext()
                }}
              />
              <label htmlFor="option4">Dry skin</label>
            </li>
            <li>
              <input
                type="radio"
                id="option5"
                name="question1"
                value="Fine lines"
                checked={values.question1 === "Fine lines"}
                onChange={() => {
                  setFieldValue("question1", "Fine lines")
                  hanldleAnswers("grey")
                  handleNext()
                }}
              />
              <label htmlFor="option4">Fine lines</label>
            </li>
            <li>
              <input
                type="radio"
                id="option6"
                name="question1"
                value="Skin laxity"
                checked={values.question1 === "Skin laxity"}
                onChange={() => {
                  setFieldValue("question1", "Skin laxity")
                  hanldleAnswers("teal")
                  handleNext()
                }}
              />
              <label htmlFor="option4">Skin laxity</label>
            </li>
            <li>
              <input
                type="radio"
                id="option7"
                name="question1"
                value="Acne and acne scars"
                checked={values.question1 === "Acne and acne scars"}
                onChange={() => {
                  setFieldValue("question1", "Acne and acne scars")
                  hanldleAnswers("dark green")
                  handleNext()
                }}
              />
              <label htmlFor="option4">Acne and acne scars</label>
            </li>
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

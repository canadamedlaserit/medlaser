import React from "react"
import { Container, Col, Button } from "react-bootstrap"
import { Link } from "gatsby"

const Step1 = ({ values, setFieldValue, handleNext, hanldleAnswers }) => {
  return (
    <>
      <div className="questionDiv">
        <Col lg={6} md={10} className="text-align-center">
          <h1>
            First thing’s first. What concerns you the most about your skin?
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
                value="Thinness and laxity"
                checked={values.question1 === "Thinness and laxity"}
                onChange={() => {
                  setFieldValue("question1", "Thinness and laxity")
                  hanldleAnswers("Yellow")
                  handleNext()
                }}
              />
              <label htmlFor="option1">Thinness and laxity</label>
            </li>
            <li>
              <input
                type="radio"
                id="option2"
                name="question1"
                value="Fine lines and wrinkles"
                checked={values.question1 === "Fine lines and wrinkles"}
                onChange={() => {
                  setFieldValue("question1", "Fine lines and wrinkles")
                  hanldleAnswers("baby blue")
                  handleNext()
                }}
              />
              <label htmlFor="option2">Fine lines and wrinkles</label>
            </li>
            <li>
              <input
                type="radio"
                id="option3"
                name="question1"
                value="Hollowness (around eyes, cheeks, temples, etc.)"
                checked={
                  values.question1 ===
                  "Hollowness (around eyes, cheeks, temples, etc.)"
                }
                onChange={() => {
                  setFieldValue(
                    "question1",
                    "Hollowness (around eyes, cheeks, temples, etc.)"
                  )
                  hanldleAnswers("baby blue")
                  handleNext()
                }}
              />
              <label htmlFor="option3">
                Hollowness (around eyes, cheeks, temples, etc.)
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="option4"
                name="question1"
                value="I just feel like I’m looking tired"
                checked={
                  values.question1 === "I just feel like I’m looking tired"
                }
                onChange={() => {
                  setFieldValue(
                    "question1",
                    "I just feel like I’m looking tired"
                  )
                  hanldleAnswers("green")
                  handleNext()
                }}
              />
              <label htmlFor="option4">
                I just feel like I’m looking tired
              </label>
            </li>
            <li style={{ display: "flex" }}>
              <Button className="next-btn ml-2 py-3">
                <Link to="/assessment" style={{ color: "#fff" }}>
                  cancel
                </Link>
              </Button>

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

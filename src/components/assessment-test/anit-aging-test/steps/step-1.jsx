import React from "react"
import { Container, Col, Button } from "react-bootstrap"
import { Link } from "gatsby"

const Step1 = ({ values, setQuestionAnswer, handleNext }) => {
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
            <fieldset>
              <li>
                <input
                  type="radio"
                  name="question1"
                  value="Thinness and laxity"
                  checked={values.question1 === "Thinness and laxity"}
                  readOnly={true}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer(
                      "question1",
                      "Thinness and laxity",
                      "Yellow"
                    )
                  }
                >
                  Thinness and laxity
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question1"
                  value="Fine lines and wrinkles"
                  checked={values.question1 === "Fine lines and wrinkles"}
                  readOnly={true}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer(
                      "question1",
                      "Fine lines and wrinkles",
                      "baby blue"
                    )
                  }
                >
                  Fine lines and wrinkles
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question1"
                  value="Hollowness (around eyes, cheeks, temples, etc.)"
                  checked={
                    values.question1 ===
                    "Hollowness (around eyes, cheeks, temples, etc.)"
                  }
                  readOnly={true}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer(
                      "question1",
                      "Hollowness (around eyes, cheeks, temples, etc.)",
                      "baby blue"
                    )
                  }
                >
                  Hollowness (around eyes, cheeks, temples, etc.)
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question1"
                  value="I just feel like I’m looking tired"
                  checked={
                    values.question1 === "I just feel like I’m looking tired"
                  }
                  readOnly={true}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer(
                      "question1",
                      "I just feel like I’m looking tired"
                    )
                  }
                >
                  I just feel like I’m looking tired
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

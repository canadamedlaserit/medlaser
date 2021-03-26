import React from "react"
import { Col, Button, Container } from "react-bootstrap"
import { Link } from "gatsby"

const Step1 = ({ values, handleNext, setQuestionAnswer }) => {
  return (
    <>
      <div className="questionDiv">
        <Col lg={5} md={10} className="text-align-center">
          <h1>
            Let’s get started! Tell us about your current method of hair
            removal. How do you normally remove your hair?
          </h1>
        </Col>
      </div>
      <Container fluid>
        <Col
          md={10}
          lg={4}
          className="flex justify-content-center text-center"
          style={{ margin: "auto" }}
        >
          <ul className="radio-btn">
            <fieldset>
              <li>
                <input
                  type="radio"
                  name="question1"
                  value="Wax/tweeze/epilate"
                  checked={values.question1 === "Wax/tweeze/epilate"}
                  readOnly={true}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer("question1", "Wax/tweeze/epilate")
                  }
                >
                  Wax/tweeze/epilate
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question1"
                  value="Shave"
                  checked={values.question1 === "Shave"}
                  readOnly={true}
                />
                <label onClick={() => setQuestionAnswer("question1", "Shave")}>
                  Shave
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question1"
                  value="Keep it au naturel"
                  checked={values.question1 === "Keep it au naturel"}
                  readOnly={true}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer("question1", "Keep it au naturel")
                  }
                >
                  Keep it au naturel
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question1"
                  value="One or more of the above methods"
                  checked={
                    values.question1 === "One or more of the above methods"
                  }
                />
                <label
                  onClick={() =>
                    setQuestionAnswer(
                      "question1",
                      "One or more of the above methods"
                    )
                  }
                >
                  One or more of the above methods
                </label>
              </li>
            </fieldset>
            <li style={{ display: "flex" }}>
              {/* <input type="radio" /> */}

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

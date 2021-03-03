import React from "react"
import { Link } from "gatsby"
import { Container, Col, Button } from "react-bootstrap"

const Step1 = ({ setQuestionAnswer, values, handleNext }) => {
  return (
    <>
      <div className="questionDiv">
        <Col lg={6} md={10} className="text-align-center">
          <h1>
            Ready? Let’s go! If you had to choose one area of your body, on
            which area would you like to see fat loss?
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
                  value="Abdomen/midsection/love handles/bra fat"
                  checked={
                    values.question1 ===
                    "Abdomen/midsection/love handles/bra fat"
                  }
                  readOnly={true}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer(
                      "question1",
                      "Abdomen/midsection/love handles/bra fat"
                    )
                  }
                >
                  Abdomen/midsection/love handles/bra fat
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question1"
                  value="Inner/outer thighs"
                  checked={values.question1 === "Inner/outer thighs"}
                  readOnly={true}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer("question1", "Inner/outer thighs")
                  }
                >
                  Inner/outer thighs
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question1"
                  value="Chin"
                  checked={values.question1 === "Chin"}
                  readOnly={true}
                />
                <label onClick={() => setQuestionAnswer("question1", "Chin")}>
                  Chin
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question1"
                  value="Arms"
                  checked={values.question1 === "Arms"}
                  readOnly={true}
                />
                <label onClick={() => setQuestionAnswer("question1", "Arms")}>
                  Arms
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question1"
                  value="Why settle for one?  I want two or more areas"
                  checked={
                    values.question1 ===
                    "Why settle for one?  I want two or more areas"
                  }
                  readOnly={true}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer(
                      "question1",
                      "Why settle for one?  I want two or more areas"
                    )
                  }
                >
                  Why settle for one? I want two or more areas
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

import React from "react"
import { Row, Col, Button } from "react-bootstrap"

const Step2 = ({ values, setFieldValue, handleNext, hanldleAnswers }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#000000",

          padding: "3em",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Col lg={6} md={10} className="text-align-center">
          <h1>When did you start noticing that your skin is visibly aging?</h1>
        </Col>
      </div>
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
              name="question2"
              value="Ugh, it’s been a while"
              checked={values.question2 === "Ugh, it’s been a while"}
              onChange={() => {
                setFieldValue("question2", "Ugh, it’s been a while")
                hanldleAnswers("green")
                handleNext()
              }}
            />
            <label htmlFor="option1">Ugh, it’s been a while</label>
          </li>
          <li>
            <input
              type="radio"
              id="option2"
              name="question2"
              value="Like a week! It feels as if I’ve aged 5 years overnight"
              checked={
                values.question2 ===
                "Like a week! It feels as if I’ve aged 5 years overnight"
              }
              onChange={() => {
                setFieldValue(
                  "question2",
                  "Like a week! It feels as if I’ve aged 5 years overnight"
                )
                hanldleAnswers("green")
                handleNext()
              }}
            />
            <label htmlFor="option2">
              Like a week! It feels as if I’ve aged 5 years overnight
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="option3"
              name="question2"
              value="I’m gradually noticing signs of aging, which I’d like to address"
              checked={
                values.question2 ===
                "I’m gradually noticing signs of aging, which I’d like to address"
              }
              onChange={() => {
                setFieldValue(
                  "question2",
                  "I’m gradually noticing signs of aging, which I’d like to address"
                )
                hanldleAnswers("green")
                handleNext()
              }}
            />
            <label htmlFor="option3">
              I’m gradually noticing signs of aging, which I’d like to address
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="option4"
              name="question2"
              value="I’m not really aging. Just hoping to focus on preventative treatments	"
              checked={
                values.question2 ===
                "I’m not really aging. Just hoping to focus on preventative treatments	"
              }
              onChange={() => {
                setFieldValue(
                  "question2",
                  "I’m not really aging. Just hoping to focus on preventative treatments	"
                )
                hanldleAnswers("green")
                handleNext()
              }}
            />
            <label htmlFor="option4">
              I’m not really aging. Just hoping to focus on preventative
              treatments{" "}
            </label>
          </li>
          <li style={{ display: "flex" }}>
            <input type="radio" />
            <Button className="next-btn  py-3" onClick={handleNext}>
              Next &nbsp; &nbsp;
            </Button>
          </li>
        </ul>
      </Col>
    </>
  )
}

export default Step2

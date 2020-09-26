import React from "react"
import { Row, Col, Button } from "react-bootstrap"

const Step4 = ({ values, setFieldValue, handleNext, hanldleAnswers }) => {
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
        <Col lg={5} md={10} className="text-align-center">
          <h1>
            Ever try pinching your fat? Well there’s a first time for
            everything.When you pinch the area of concern, what would be the
            closest way to describe what you feel?
          </h1>
        </Col>
      </div>
            <Col
        md={10}
        lg={4}
        className="flex justify-content-center text-center"
        style={{ margin: "auto", padding:"2em" }}
      >
          <ul className="radio-btn">
            <li>
              <input
                type="radio"
                id="option1"
                name="question4"
                value="Lots of volume (aka. Fat)"
                checked={values.question4 === "Lots of volume (aka. Fat)"}
                onChange={() => {
                  setFieldValue("question4", "Lots of volume (aka. Fat)")
                  hanldleAnswers("green")

                  handleNext()
                }}
              />
              <label htmlFor="option1">Lots of volume (aka. Fat)</label>
            </li>
            <li>
              <input
                type="radio"
                id="option2"
                name="question4"
                value="Just skin with no volume in between.  If there wasn’t any skin in the way, my fingers would be touching	"
                checked={
                  values.question4 ===
                  "Just skin with no volume in between.  If there wasn’t any skin in the way, my fingers would be touching	"
                }
                onChange={() => {
                  setFieldValue(
                    "question4",
                    "Just skin with no volume in between.  If there wasn’t any skin in the way, my fingers would be touching	"
                  )
                  hanldleAnswers("red")

                  handleNext()
                }}
              />
              <label htmlFor="option2">
                Just skin with no volume in between. If there wasn’t any skin in
                the way, my fingers would be touching{" "}
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="option3"
                name="question4"
                value="Volume but a bit of lax skin"
                checked={values.question4 === "Volume but a bit of lax skin"}
                onChange={() => {
                  setFieldValue("question4", "Volume but a bit of lax skin")
                  hanldleAnswers("green")

                  handleNext()
                }}
              />
              <label htmlFor="option3">Volume but a bit of lax skin</label>
            </li>
            <li>
              <input
                type="radio"
                id="option4"
                name="question4"
                value="No volume and lots of lax skin in the way"
                checked={
                  values.question4 ===
                  "No volume and lots of lax skin in the way"
                }
                onChange={() => {
                  setFieldValue(
                    "question4",
                    "No volume and lots of lax skin in the way"
                  )
                  hanldleAnswers("red")

                  handleNext()
                }}
              />
              <label htmlFor="option4">
                No volume and lots of lax skin in the way
              </label>
            </li>
<li style={{ display: "flex" }}>
             <input type="radio"/>
              <Button className="next-btn  py-3" onClick={handleNext}>
                Next &nbsp; &nbsp;
              </Button>
            </li>
          </ul>
        </Col>

    </>
  )
}

export default Step4

import React from "react"
import { Row, Col, Button } from "react-bootstrap"

const Step4 = ({ values, setFieldValue, handleNext, hanldleAnswers }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#000000",
          textAlign: "center",
          padding: "3em",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Col lg={5} md={10} className="text-align-center">
          <h1>
            Have you ever had laser hair removal in the area you are hoping to
            have treated?
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
                value="Yes, and I loved the results!"
                checked={values.question4 === "Yes, and I loved the results!"}
                onChange={() => {
                  setFieldValue("question4", "Yes, and I loved the results!")
                  hanldleAnswers("yellow")

                  handleNext()
                }}
              />
              <label htmlFor="option1">Yes, and I loved the results!</label>
            </li>
            <li>
              <input
                type="radio"
                id="option2"
                name="question4"
                value="Yes, but it didn’t work very well"
                checked={
                  values.question4 === "Yes, but it didn’t work very well"
                }
                onChange={() => {
                  setFieldValue(
                    "question4",
                    "Yes, but it didn’t work very well"
                  )
                  hanldleAnswers("green")

                  handleNext()
                }}
              />
              <label htmlFor="option2">Yes, but it didn’t work very well</label>
            </li>
            <li>
              <input
                type="radio"
                id="option3"
                name="question4"
                value="No"
                checked={values.question4 === "No"}
                onChange={() => {
                  setFieldValue("question4", "No")
                  hanldleAnswers("green")

                  handleNext()
                }}
              />
              <label htmlFor="option3">No</label>
            </li>
            <li>
              <input
                type="radio"
                id="option4"
                name="question4"
                value="No, but I’ve been considering it for a while"
                checked={
                  values.question4 ===
                  "No, but I’ve been considering it for a while"
                }
                onChange={() => {
                  setFieldValue(
                    "question4",
                    "No, but I’ve been considering it for a while"
                  )
                  hanldleAnswers("green")

                  handleNext()
                }}
              />
              <label htmlFor="option4">
                No, but I’ve been considering it for a while
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

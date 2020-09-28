import React, { useState } from "react"

//router
import { Link } from "gatsby"

//components
import { Formik, Form } from "formik"
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap"

//custom components
import Step1 from "./steps/step-1"
import Step2 from "./steps/step-2"
import Step3 from "./steps/step-3"
import Step4 from "./steps/step-4"
import Step5 from "./steps/step-5"
import Step6 from "./steps/step-6"
import ResultAlcohol from "./result-alcohol"

//assets
import { LeftArrowHeader } from "./assets"

//styles
import "./_index.scss"

const initialValues = {
  question1: "",
  question2: "",
  question3: "",
  question4: "",
  question5: "",
  name: "",
  email: "",
  phone: "",
}

const AlcoholTest = () => {
  const alcoholTest = { title: "" }
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [progress, setProgress] = useState(25)
  const [currentStep, setCurrentStep] = useState(1)
  const [payloadend, setpayload] = useState(null)
  const [colorArray, setcolorArray] = useState([])
  const hanldleAnswers = value => {
    let temp = colorArray
    temp.push(value)
    setcolorArray([...temp])
  }

  const handleSubmit = async payload => {
    const subject = "Qualifications Quiz for Website"

    const emailHtml = `
    <p><strong>Name:</strong> ${payload.name}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Phone:</strong> ${payload.phone}</p>
    <table>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">Let’s get started! Tell us about your current method of hair removal.How do you normally remove your hair?</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question1}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">How often do you remove your hair?</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question2}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">What colour is your hair in the area you are hoping to have treated?</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question3}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">Have you ever had laser hair removal in the area you are hoping to have treated?</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question4}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">When would you like to get started on your treatment?</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question5}</td>
      </tr>
     
    </table>
    `

    // try {
    //   const response = await axios.post("/.netlify/functions/send-email", {
    //     emailHtml,
    //     subject,
    //   })
    setFormSubmitted(true)

    // console.log("Request Response", response)
    // } catch (error) {
    //   console.log(error)
    // }
    setpayload(payload)
    console.log("Payload", payload)
  }

  const handleNext = () => {
    if (currentStep >= 6) {
      console.log("Max Number is reached")
    } else {
      setProgress(progress + 15)
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep <= 1) {
      console.log("Min Number is reached")
    } else if (currentStep >= 2) {
      setProgress(progress - 15)
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <>
      {formSubmitted ? (
        <div>
          <ResultAlcohol payload={payloadend} result={colorArray} />
        </div>
      ) : (
        <section id="alcohol-test-section">
          <div  >
            <Row className="headerTest py-4">
              <Col>
                {currentStep === 1 ? (
                  <Link to="/assessment">
                    <img
                      src={LeftArrowHeader}
                      alt="Back arrow"
                      style={{
                        width: "35px",
                        height: "18px",
                      }}
                    />
                  </Link>
                ) : (
                  <button className="buttonWrap" onClick={handlePrev}>
                    <img
                      src={LeftArrowHeader}
                      alt="Back arrow"
                      style={{
                        width: "35px",
                        height: "18px",
                      }}
                    />
                  </button>
                )}
              </Col>
              <Col className="text-center my-3">
                <span
                  className="alcohol-test-heading"
                  style={{ color: "#fff" }}
                >
                  Laser Hair Removal Assessment
                </span>
              </Col>
              <Col style={{ textAlign: "end" }}>
                <a href="/contact-us/" style={{ textDecoration: "underline" }}>
                  Need help?
                </a>
              </Col>
            </Row>
          </div>
          <Container className="alcohol-test-wrapper" fluid>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {({ isSubmitting, values, setFieldValue }) => (
                <Form>
                  {/* Progressbar */}
                  <Row>
                    <Col md={12} className="px-0">
                      <ProgressBar
                        now={progress}
                        variant="mybarVariant"
                        className="progressbar-sec"
                      />
                    </Col>
                  </Row>
                  {/* Questions Wrapper */}
                  <Row
                    className="justify-content-center"
                    style={{ flexDirection: "column" }}
                  >
                    {/* <Col className="text-center"> */}
                    {/* <div className="index">{currentStep} of 6</div> */}
                    {currentStep === 1 && (
                      <Step1
                        values={values}
                        setFieldValue={setFieldValue}
                        handleNext={handleNext}
                        hanldleAnswers={hanldleAnswers}
                      />
                    )}
                    {currentStep === 2 && (
                      <Step2
                        values={values}
                        setFieldValue={setFieldValue}
                        handleNext={handleNext}
                        hanldleAnswers={hanldleAnswers}
                      />
                    )}
                    {currentStep === 3 && (
                      <Step3
                        values={values}
                        setFieldValue={setFieldValue}
                        handleNext={handleNext}
                        hanldleAnswers={hanldleAnswers}
                      />
                    )}
                    {currentStep === 4 && (
                      <Step4
                        values={values}
                        setFieldValue={setFieldValue}
                        handleNext={handleNext}
                        hanldleAnswers={hanldleAnswers}
                      />
                    )}
                    {currentStep === 5 && (
                      <Step5
                        values={values}
                        setFieldValue={setFieldValue}
                        handleNext={handleNext}
                        hanldleAnswers={hanldleAnswers}
                      />
                    )}

                    {currentStep >= 6 && <Step6 />}
                    {/* </Col> */}
                    {/* </Row> */}

                    {/* Contron Buttons */}
                    {/* <Row> */}
                    {/* <Col lg={5} md={10} className="btn-section"> */}
                    {/* {currentStep === 1 ? (
                        // <Link to="/assessment-test">
                        <Button
                          className="cancel-btn"
                          onClick={() => {
                            window.location.reload()
                          }}
                        >
                          cancel
                        </Button>
                      ) : (
                        // </Link>
                        <Button className="back-btn" onClick={handlePrev}>
                          <i className="fa fa-long-arrow-left" />
                          &nbsp;&nbsp; Back
                        </Button>
                      )} */}
                    <Row className="flex justify-content-center">
                      <Col lg={4} md={10} style={{ textAlign: "center" }}>
                        {currentStep === 6 && (
                          <Button
                            className="next-btn"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Submitting" : "Submit"}
                            {/* <i className="fa fa-long-arrow-right" /> */}
                          </Button>
                        )}
                      </Col>
                    </Row>
                  </Row>
                </Form>
              )}
            </Formik>
          </Container>
        </section>
      )}
    </>
  )
}

export default AlcoholTest

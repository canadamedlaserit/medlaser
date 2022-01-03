//components
import { Form, Formik } from "formik"
import React, { useState } from "react"
import { Button, Col, Container, ProgressBar, Row } from "react-bootstrap"
import ResultAlcohol from "./result-alcohol"
//custom components
import Step1 from "./steps/step-1"
import Step2 from "./steps/step-2"
import Step3 from "./steps/step-3"
import Step4 from "./steps/step-4"
import Step5 from "./steps/step-5"
import Step6 from "./steps/step-6"
import Step7 from "./steps/step-7"
//styles
import "./_index.scss"







const initialValues = {
  question1: "",
  question2: "",
  question3: "",
  question4: "",
  question5: "",
  question6: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  assessmentType: "Anti-Aging Assessment Assessment",
}

const LhrTest1 = () => {
  //const alcoholTest = { title: "" }
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [progress, setProgress] = useState(15)
  const [currentStep, setCurrentStep] = useState(1)
  const [payloadend, setpayload] = useState(null)
  const [colorArray, setcolorArray] = useState([])
  const hanldleAnswers = value => {
    let temp = colorArray
    temp.push(value)
    setcolorArray([...temp])
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  const handleSubmit = async payload => {
    const emailHtml = `
    <p><strong>First Name:</strong> ${payload.firstName}</p>
    <p><strong>Last Name:</strong> ${payload.lastName}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Phone:</strong> ${payload.phone}</p>
    <table>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">Ready? Let’s go! If you had to choose one area of your body, on which area would you like to see fat loss?</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question1}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">How long have you been considering getting treatment on that stubborn fat?</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question2}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">Based on your knowledge, is the fat you’re hoping to target there because of genetics?</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question3}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">Ever try pinching your fat? Well there’s a first time for everything.When you pinch the area of concern, what would be the closest way to describe what you feel?</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question4}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">My ideal result after having a fat-reduction treatment would look like this:</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question5}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">How soon do you want to see that fat fade away?</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question6}</td>
      </tr>
      <tr>
      <td style="border: 1px solid #dddddd; padding: 10px;">Do you have any of the following medical conditions:
      Cancer, diabetes, skin diseases/skin lesions, blood clotting abnormalities, G6PD deficiency, psoriasis/vitiligo/lupus, HIV/AIDS, history of hernia in the area of potential treatment
      OR are you pregnant or breastfeeding?</td>
      <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question7}</td>
    </tr>
     
    </table>
    `
    setpayload(payload)
    //e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "Medlaser NEW LEAD - anit-aging Form",
        ...payload,
      }),
    })
      .then(() => (setFormSubmitted(true), console.log("Payload", payload)))
      .catch(error => alert(error))

    //console.log("Payload", payload)
  }

  /* const handleSubmit = async payload => {
    const subject = "Qualifications Quiz for Website"

    const emailHtml = `
    <p><strong>First Name:</strong> ${payload.firstName}</p>
    <p><strong>Last Name:</strong> ${payload.lastName}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Phone:</strong> ${payload.phone}</p>
    <table>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">First thing’s first. What concerns you the most about your skin?</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question1}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">When did you start noticing that your skin is visibly aging?</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question2}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">Have you ever had medical/aesthetic procedures to target signs of aging?</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question3}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">How did you enjoy the treatment and results?</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question4}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">How soon are you hoping to start treating your skin concern?</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question5}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">Do you have any of the following medical conditions:
        Cancer, diabetes, skin diseases/skin lesions, seizure disorder, blood clotting abnormalities, G6PD deficiency, psoriasis/vitiligo/lupus, HIV/AIDS
        OR are you pregnant or breastfeeding?
        </td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question6}</td>
      </tr>
     
    </table>
    `

    
    setFormSubmitted(true)

    // console.log("Request Response", response)
    // } catch (error) {
    //   console.log(error)
    // }
    setpayload(payload)
    // console.log("Payload", payload)
  } */
  const handleNext = () => {
    if (currentStep >= 8) {
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

  return formSubmitted ? (
    <div>
      <ResultAlcohol payload={payloadend} result={colorArray} />
    </div>
  ) : (
    <section id="alcohol-test-section">
      <div className="header-gap">
        <Row className="headerTest py-4">
          {/* <Col>
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
          </Col> */}
          <Col className="text-center my-3">
            <h1 className="alcohol-test-heading">
              Anti-Aging – Find out the Best Treatment Solution for You
            </h1>
          </Col>
          {/* <Col style={{ textAlign: "end" }}>
            <a style={{ textDecoration: "underline" }}>Need help?</a>
          </Col> */}
        </Row>
      </div>
      <Container className="alcohol-test-wrapper" fluid>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ isSubmitting, values, setFieldValue }) => (
            <Form
              name="Medlaser NEW LEAD - anit-aging Form"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              data-netlify-recaptcha="true"
            >
              <input
                type="hidden"
                name="form-name"
                value="Medlaser NEW LEAD - anit-aging Form"
              />
              <input
                type="hidden"
                value="Anti-Aging Assessment"
                name="assessmentType"
              />
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
                    handleNext={handleNext}
                    setQuestionAnswer={(field, value, color = "green") => {
                      setFieldValue(field, value)
                      hanldleAnswers(color)
                      handleNext()
                    }}
                  />
                )}
                <Step2
                  currentStep={currentStep}
                  values={values}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                  setQuestionAnswer={(field, value) => {
                    setFieldValue(field, value)
                    hanldleAnswers("green")
                    handleNext()
                  }}
                />
                <Step3
                  currentStep={currentStep}
                  values={values}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                  setQuestionAnswer={(field, value) => {
                    setFieldValue(field, value)
                    hanldleAnswers("green")
                    handleNext()
                  }}
                />
                <Step4
                  currentStep={currentStep}
                  values={values}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                  setQuestionAnswer={(field, value) => {
                    setFieldValue(field, value)
                    hanldleAnswers("green")
                    handleNext()
                  }}
                />
                <Step5
                  currentStep={currentStep}
                  values={values}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                  setQuestionAnswer={(field, value) => {
                    setFieldValue(field, value)
                    hanldleAnswers("green")
                    handleNext()
                  }}
                />
                <Step6
                  currentStep={currentStep}
                  values={values}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                  setQuestionAnswer={(field, value) => {
                    setFieldValue(field, value)
                    hanldleAnswers("green")
                    handleNext()
                  }}
                />

                <Step7 currentStep={currentStep} />
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
                  <Col
                    lg={4}
                    md={10}
                    style={{ textAlign: "center", paddingBottom: "5vh" }}
                  >
                    {currentStep === 7 && (
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
  )
}

export default LhrTest1

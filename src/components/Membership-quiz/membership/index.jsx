import React, { useState } from "react"
//router
import { Link } from "gatsby"
//components
import { Formik, Form } from "formik"
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap"
import Stepper from "react-stepper-horizontal"
//custom components
import Step1 from "./steps/step-1"
import Step2 from "./steps/step-2"
import Step3 from "./steps/step-3"
import Step4 from "./steps/step-4"
import Step5 from "./steps/step-5"
import Step6 from "./steps/step-6"
import Step7 from "./steps/step-7"
import ResultAlcohol from "./result-alcohol"
//assets
import CmlNewLogo from "../../../images/cml-new-logo.png"
import { LeftArrowHeader } from "./assets"
import MQuiz1 from "../../../images/MQuiz1.png"
import MQuiz2 from "../../../images/MQuiz2.png"
//styles
import "./_index.scss"
const initialValues = {
  question1: "",
  question2: "",
  question3: "",
  question4: "",
  question5: "",
  question6: "",
  name: "",
  email: "",
  phone: "",
}
const MQuizImage = [MQuiz1, MQuiz2]
const CMLQUIZ = ({ ComponentFor, locationComponent }) => {
  // const alcoholTest = { title: "" }
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [progress, setProgress] = useState(20)
  const [currentStep, setCurrentStep] = useState(1)
  const [payloadend, setpayload] = useState(null)
  const [colorArray, setcolorArray] = useState([])
  const hanldleAnswers = value => {
    let temp = colorArray
    temp.push(value)
    setcolorArray([...temp])
  }
  const handleSubmit = async payload => {
    const emailHtml = `
    <p><strong>First Name:</strong> ${payload.firstName}</p>
    <p><strong>Last Name:</strong> ${payload.lastName}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Phone:</strong> ${payload.phone}</p>
    <table>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">Let's get started! Tell us about your current method of hair removal.How do you normally remove your hair?</td>
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
    setpayload(payload)
    console.log("Payload", payload)
  }
  const handleNext = () => {
    if (currentStep >= 2) {
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
    <section
      id="alcohol-test-section"
      style={{
        backgroundColor: "#ffffff",
        paddingBottom: "0px",
        width: "100%",
      }}
    >
      <div
        className={
          ComponentFor === "locationSection"
            ? "locationSection"
            : "header-gap background-black"
        }
      >
        <Container>
          <Row className="headerTest py-4 background-black">
            {/* <Col className="text-center my-3">
            <span className="alcohol-test-heading">Membership Quiz</span>
          </Col> */}
            {/* <Col className="text-center my-3 d-flex justify-content-center">
              <div>
                <p className="WizrdsSteps">1</p>
                Choose Promotion
              </div>
              <hr className="hrStyles" />
              <div>
                <p className="WizrdsSteps">1</p>
                Checkout
              </div>
            </Col> */}
            {/* <Col>
              <Row>
                <img src={CmlNewLogo} />
              </Row>
              <Row> */}
            <Col md={6}>
              <Stepper
                steps={[{ title: "Choose Promotion" }, { title: "Checkout" }]}
                activeStep={currentStep - 1}
                // defaultColor="#FFFFFF"
                activeColor="white"
                completeColor="#ddd"
                activeTitleColor="white"
                completeTitleColor="white"
                circleFontColor="#000"
              />
            </Col>
            {/* </Row>
            </Col> */}
          </Row>
        </Container>
      </div>
      <Container className="alcohol-test-wrapper" fluid>
        <Row
          style={
            locationComponent === "locationPromoStyles"
              ? {
                  backgroundColor: "#161616",
                  //  color: "#fff",
                }
              : ""
          }
        >
          <Col
            md={5}
            style={{
              backgroundImage: `url(${MQuizImage[currentStep - 1]})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "50% 50%",
            }}
          ></Col>
          <Col md={7}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {({ isSubmitting, values, setFieldValue }) => (
                <Form>
                  <Row
                    className="justify-content-center"
                    style={{ flexDirection: "column" }}
                  >
                    {/* <Col className="text-center"> */}
                    {/* <div className="index text-center">{currentStep} of 4</div> */}
                    {/* {currentStep === 1 && (
                      <Step1
                        values={values}
                        setFieldValue={setFieldValue}
                        handleNext={handleNext}
                        hanldleAnswers={hanldleAnswers}
                      />
                    )} */}
                    {currentStep === 1 && (
                      <Step2
                        values={values}
                        setFieldValue={setFieldValue}
                        handlePrev={handlePrev}
                        handleNext={handleNext}
                        hanldleAnswers={hanldleAnswers}
                        locationComponent={locationComponent}
                      />
                    )}
                    {/* {currentStep === 3 && (
                      <Step3
                        values={values}
                        selected={values.question2}
                        setFieldValue={setFieldValue}
                        handlePrev={handlePrev}
                        handleNext={handleNext}
                        hanldleAnswers={hanldleAnswers}
                      />
                    )} */}
                    {currentStep >= 2 && (
                      <Step7 locationComponent={locationComponent} />
                    )}
                    {/* {currentStep === 5 && (
                  <Step5
                    values={values}
                    setFieldValue={setFieldValue}
                    handleNext={handleNext}
                    hanldleAnswers={hanldleAnswers}
                  />
                )}
                {currentStep === 6 && (
                  <Step6
                    values={values}
                    setFieldValue={setFieldValue}
                    handleNext={handleNext}
                    hanldleAnswers={hanldleAnswers}
                  />
                )}
                {currentStep >= 7 && <Step7 />} */}
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
                    {/* <Row className="flex justify-content-center">
                      <Col
                        lg={4}
                        md={10}
                        style={{ textAlign: "center", paddingBottom: "5vh" }}
                      >
                        {currentStep === 4 && (
                          <Button
                            className="next-btn"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Submitting" : "Submit"}
                          </Button>
                        )}
                      </Col>
                    </Row> */}
                  </Row>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default CMLQUIZ

import React from "react"
import "./BookingComponent_location.scss"
//import ChangeHistoryIcon from "@material-ui/icons/ChangeHistory"
import { Row } from "react-bootstrap"
import { navigate } from "gatsby-link"
import { Field, Form, Formik, FormikProps } from "formik"
import { Col, Button } from "react-bootstrap"

export const fragment = graphql`
  fragment Bookinglocationspecific on WPGraphQL_Page_Sectionfields_Sections_Bookinglocationspecific {
    fieldGroupName
    title
  }
`
const MyInput = ({ field, form, ...props }) => {
  return <input {...field} {...props} />
}
// const encode = data => {
//   return Object.keys(data)
//     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&")
// }

// const handleSubmit = e => {
//   //e.preventDefault()

//   if (this.state.formValid) {
//     // this.reset()

//     const form = e.target
//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: encode({
//         "form-name": "Medlaser NEW LEAD - Main Form",
//         // ...this.state,
//       }),
//     })
//       .then(() => navigate(form.getAttribute("action")))
//       .catch(error => alert(error))
//   } else {
//     // console.log("form invalid")

//     this.validateField("firstName", this.state.firstName)
//     this.validateField("lastName", this.state.lastName)
//     this.validateField("email", this.state.email)
//     this.validateField("phone", this.state.phone)
//     this.validateField("desiredTreatment", this.state.desiredTreatment)
//     this.validateField("location", this.state.location)

//     // console.log(this.state.formErrors)
//   }
// }

const BookingComponentLocation = () => {
  return (
    <>
      <section id="BookingSection_location">
        <div className="header_wrapper">
          <h1>Book your free consultation</h1>
        </div>
      </section>
      <section id="BookingForm_location">
        <Row className="LocationBookingWrapper">
          <Col lg={12}>
            <Formik
              initialValues={{
                email: "",
                firstName: "",
                lastName: "",
                phone: "",
              }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2))
                  actions.setSubmitting(false)
                }, 1000)
              }}
              // name="Medlaser NEW LEAD - Main Form"
              // method="post"
              // data-netlify="true"
              // data-netlify-honeypot="bot-field"
              // action="/thank-you/"
              // onSubmit={handleSubmit}
            >
              <Form className="FormStep1Wrapper">
                <Col lg={4}>
                  <p className="para">Step 1 of 2</p>
                  <h3 className="headerWrapper"> Select Date & Time</h3>
                  <div className="formFieldWrapper">
                    <Field
                      name="date"
                      type="date"
                      className="form-control mb-3 alcohol-test-field"
                      placeholder="choose Date"
                      required
                    />

                    <Field
                      name="time"
                      type="time"
                      className="form-control alcohol-test-field"
                      placeholder="Time"
                      required
                    />
                  </div>
                </Col>
                <Col lg={8}>
                  <p className="para">Step 2 of 2</p>
                  <h3 className="headerWrapper"> Enter your information</h3>
                  <div className="formField_textWrapper">
                    <Field
                      name="firstName"
                      type="text"
                      className="form-control mb-3 alcohol-test-field"
                      placeholder="First Name"
                      required
                    />

                    <Field
                      name="lastName"
                      type="text"
                      className="form-control mb-3 alcohol-test-field"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <div className="formField_textWrapper">
                    <Field
                      name="phone"
                      type="number"
                      className="form-control mb-3 alcohol-test-field"
                      placeholder="Phone"
                      required
                    />

                    <Field
                      type="email"
                      name="email"
                      className="form-control mb-3 alcohol-test-field"
                      placeholder="Email"
                      required
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <Button
                    className=" btn btn-red"
                    // onClick={this.handleSubmit}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Col>
              </Form>
            </Formik>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default BookingComponentLocation
/* */

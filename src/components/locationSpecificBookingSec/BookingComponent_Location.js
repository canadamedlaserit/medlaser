import React, { Component } from "react"
import { Row, Col, Form, Button } from "react-bootstrap"
import { navigate } from "gatsby-link"
import "./BookingComponent_location.scss"

//import styles from "../Contact/ContactForm/Form.module.scss"

export const fragment = graphql`
  fragment Bookinglocationspecific on WPGraphQL_Page_Sectionfields_Sections_Bookinglocationspecific {
    fieldGroupName
    title
  }
`

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  desiredTreatment: "",
  location: "",

  firstNameValid: false,
  lastNameValid: false,
  emailValid: false,
  phoneValid: false,
  desiredTreatmentValid: false,
  // locationValid: false,
  formValid: false,
  emailSent: false,

  formErrors: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    desiredTreatment: "",
    location: "",
  },
}

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export class BookingComponentLocation extends Component {
  componentDidMount() {
    const pathname = this.props.location.pathname
    if (pathname) {
      let loc = ""

      loc = pathname
      loc = loc.replace("location", "")
      loc = loc.replace(/\//g, "")
      initialState.location = loc
    }
  }

  state = initialState

  reset() {
    // reseting state
    this.setState(initialState)

    // update inputs
    this.refs.firstName.value = ""
    this.refs.lastName.value = ""
    this.refs.email.value = ""
    this.refs.phone.value = ""
    this.refs.date.value = ""
    this.refs.time.value = ""
    this.refs.desiredTreatment.value = ""
    // this.refs.location.value = "DEFAULT"
  }

  handleChange = input => event => {
    const value = event.target.value

    this.setState({ [input]: value }, () => {
      this.validateField(input, value)
    })
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors

    let firstNameValid = this.state.firstNameValid
    let lastNameValid = this.state.lastNameValid
    let emailValid = this.state.emailValid
    let phoneValid = this.state.phoneValid
    let desiredTreatmentValid = this.state.desiredTreatmentValid
    // let locationValid = this.state.locationValid

    switch (fieldName) {
      case "firstName":
        firstNameValid = value.length >= 1
        fieldValidationErrors.firstName = firstNameValid
          ? ""
          : "First Name is required"
        break

      case "lastName":
        lastNameValid = value.length >= 1
        fieldValidationErrors.lastName = lastNameValid
          ? ""
          : "Last Name is required"
        break

      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        fieldValidationErrors.email = emailValid ? "" : "Email is invalid"
        break

      case "phone":
        phoneValid = value.length >= 1
        fieldValidationErrors.phone = phoneValid ? "" : "Phone is invalid"
        break

      case "desiredTreatment":
        desiredTreatmentValid = value.length >= 1
        fieldValidationErrors.desiredTreatment = desiredTreatmentValid
          ? ""
          : "Select Desired Treatment"

        break

      // case "location":
      //   locationValid = value.length >= 1
      //   fieldValidationErrors.location = locationValid ? "" : "Enter Location"

      //   break

      default:
        break
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        firstNameValid: firstNameValid,
        lastNameValid: lastNameValid,
        emailValid: emailValid,
        phoneValid: phoneValid,
        desiredTreatmentValid: desiredTreatmentValid,
        // locationValid: locationValid,
      },
      this.validateForm
    )
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.firstNameValid &&
        this.state.lastNameValid &&
        this.state.emailValid &&
        this.state.phoneValid &&
        this.state.desiredTreatmentValid,
      // this.state.locationValid,
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    if (this.state.formValid) {
      this.reset()

      const form = e.target
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "Medlaser NEW LEAD - Contact Form",
          ...this.state,
        }),
      })
        .then(
          () => navigate(form.getAttribute("action")),
          console.log(
            "form-submitted",
            this.state.firstName,
            this.state.lastName,
            this.state.email,
            this.state.phone,
            this.state.date,
            this.state.time
            // this.state.desiredTreatment,
            // this.state.location
          )
        )
        .catch(error => alert(error))
    } else {
      // console.log("form invalid")

      this.validateField("firstName", this.state.firstName)
      this.validateField("lastName", this.state.lastName)
      this.validateField("email", this.state.email)
      this.validateField("phone", this.state.phone)
      this.validateField("desiredTreatment", this.state.desiredTreatment)
      // this.validateField("location", this.state.location)

      // console.log(this.state.formErrors)
    }
  }

  render() {
    const { btntext, column, pathname } = this.props

    let loc = ""

    if (pathname) {
      loc = pathname
      loc = loc.replace("location", "")
      // loc = loc.replace('/', "")
      loc = loc.replace(/\//g, "")
    }

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
              <Form
                name="Medlaser NEW LEAD - Contact Form"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/thank-you/"
                onSubmit={this.handleSubmit}
                className="FormStep1Wrapper "
              >
                <input
                  type="hidden"
                  name="form-name"
                  value="Medlaser NEW LEAD - Contact Form"
                />

                <input
                  type="hidden"
                  name="location"
                  value={this.state.location}
                />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you're human:{" "}
                    <input name="bot-field" />
                  </label>
                </p>
                <Col lg={4}>
                  <p className="para">Step 1 of 2</p>
                  <h3 className="headerWrapper"> Select Date & Time</h3>
                  <div className="formFieldWrapper ">
                    <Form.Group>
                      <Form.Control
                        onChange={this.handleChange("date")}
                        type="date"
                        placeholder="Choose Date"
                        ref="date"
                        name="date"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        onChange={this.handleChange("time")}
                        type="time"
                        placeholder="Choose Time"
                        ref="time"
                        name="time"
                      />
                    </Form.Group>
                  </div>
                </Col>

                <Col lg={8}>
                  <p className="para">Step 2 of 2</p>
                  <h3 className="headerWrapper"> Enter your information</h3>

                  <div className="formField_textWrapper">
                    <Form.Group>
                      <Form.Control
                        onChange={this.handleChange("firstName")}
                        type="text"
                        placeholder="First Name"
                        ref="firstName"
                        name="firstName"
                      />
                      <p className="ErrorMessage">
                        {this.state.formErrors.firstName}
                      </p>
                    </Form.Group>

                    <Form.Group>
                      <Form.Control
                        onChange={this.handleChange("lastName")}
                        type="text"
                        placeholder="Last Name"
                        ref="lastName"
                        name="lastName"
                      />
                      <p className="ErrorMessage">
                        {this.state.formErrors.lastName}
                      </p>
                    </Form.Group>
                  </div>

                  <div className="formField_textWrapper">
                    <Form.Group>
                      <Form.Control
                        onChange={this.handleChange("email")}
                        type="email"
                        placeholder="Email"
                        ref="email"
                        name="email"
                      />
                      <p className="ErrorMessage">
                        {this.state.formErrors.email}
                      </p>
                    </Form.Group>

                    <Form.Group>
                      <Form.Control
                        onChange={this.handleChange("phone")}
                        type="tel"
                        placeholder="Phone"
                        ref="phone"
                        name="phone"
                      />
                      <p className="ErrorMessage">
                        {this.state.formErrors.phone}
                      </p>
                    </Form.Group>
                  </div>
                  <div className="formField_textWrapper">
                    <Form.Group className="w-90">
                      <Form.Control
                        onChange={this.handleChange("desiredTreatment")}
                        ref="desiredTreatment"
                        name="desiredTreatment"
                        as="select"
                      >
                        <option value="">Select Desired Treatment</option>
                        <option value="Laser Hair Removal">
                          Laser Hair Removal
                        </option>
                        <option value="Coolsculpting">Coolsculpting</option>
                        <option value="Cosmetic Injections">
                          Cosmetic Injections
                        </option>
                        <option value="Skin Treatments">Skin Treatments</option>
                        <option value="Hair Restoration">
                          Hair Restoration
                        </option>
                        <option value="Other">Other</option>
                      </Form.Control>
                      <p className="ErrorMessage">
                        {this.state.formErrors.phone}
                      </p>
                    </Form.Group>
                  </div>

                  <Button type="submit" className="btn btn-red btn btn-primary">
                    {/*btntext*/}
                    submit
                  </Button>
                </Col>
              </Form>

              <div>
                {/* Email send block */}
                {this.state.emailSent ? (
                  <div
                  //className={styles.SuccessBlock}
                  >
                    <p>Thank you! Email has been sent</p>
                  </div>
                ) : (
                  ""
                )}

                {/* Error block */}
                {this.state.formErrors.firstName ||
                this.state.formErrors.lastName ||
                this.state.formErrors.email ||
                this.state.formErrors.phone ||
                this.state.formErrors.desiredTreatment ||
                this.state.formErrors.location ? (
                  <div
                  //className={styles.ErrorBlock}
                  >
                    <p>Some Fields are invalid</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </Col>
          </Row>
        </section>
      </>
    )
  }
}

export default BookingComponentLocation

import { navigate } from "gatsby-link"
import React, { Component } from "react"
import { Button, Form } from "react-bootstrap"
import styles from "./Form.module.scss"


const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  timeFrame: "",
  postal: "",
  opportunity: "",
  message: "",
  check: false,

  firstNameValid: false,
  lastNameValid: false,
  emailValid: false,
  phoneValid: false,
  timeFrameValid: false,
  postalValid: false,
  opportunityValid: false,
  messageValid: false,

  formValid: false,
  emailSent: false,

  formErrors: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    timeFrame: "",
    postal: "",
    opportunity: "",
    message: "",
  },
}

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export class InquiryWithSubscriptionForm extends Component {
  state = initialState

  reset() {
    // reseting state
    this.setState(initialState)

    // update inputs
    this.refs.firstName.value = ""
    this.refs.lastName.value = ""
    this.refs.email.value = ""
    this.refs.phone.value = ""
    this.refs.timeFrame.value = "DEFAULT"
    this.refs.postal.value = ""
    this.refs.opportunity.value = ""
    this.refs.message.value = ""
  }

  handleChange = input => event => {
    const value = event.target.value

    this.setState({ [input]: value }, () => {
      this.validateField(input, value)
    })
  }

  handleCheck = e => {
    this.setState({ check: e.target.checked })
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors

    let firstNameValid = this.state.firstNameValid
    let lastNameValid = this.state.lastNameValid
    let emailValid = this.state.emailValid
    let phoneValid = this.state.phoneValid
    let timeFrameValid = this.state.timeFrameValid
    let postalValid = this.state.postalValid
    let opportunityValid = this.state.opportunityValid
    let messageValid = this.state.messageValid

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

      case "timeFrame":
        timeFrameValid = value.length >= 1
        fieldValidationErrors.timeFrame = timeFrameValid
          ? ""
          : "Select Time Frame"
        break

      case "postal":
        postalValid = value.length >= 1
        fieldValidationErrors.postal = postalValid ? "" : "Postal is invalid"
        break

      case "opportunity":
        opportunityValid = value.length >= 1
        fieldValidationErrors.opportunity = opportunityValid
          ? ""
          : "Opportunity is invalid"
        break

      case "message":
        messageValid = value.length >= 1
        fieldValidationErrors.message = messageValid
          ? ""
          : "Please, fill out comments field"
        break

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
        timeFrameValid: timeFrameValid,
        postalValid: postalValid,
        opportunityValid: opportunityValid,
        messageValid: messageValid,
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
        this.state.timeFrameValid &&
        this.state.postalValid &&
        this.state.opportunityValid &&
        this.state.messageValid,
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
          "form-name": "Medlaser NEW LEAD - Inquiry Franshise Page",
          ...this.state,
        }),
      })
        .then(() => navigate(form.getAttribute("action")))
        .catch(error => alert(error))
    } else {
      this.validateField("firstName", this.state.firstName)
      this.validateField("lastName", this.state.lastName)
      this.validateField("email", this.state.email)
      this.validateField("phone", this.state.phone)
      this.validateField("timeFrame", this.state.timeFrame)
      this.validateField("postal", this.state.postal)
      this.validateField("opportunity", this.state.opportunity)
      this.validateField("message", this.state.message)
    }
  }

  render() {
    const { btntext } = this.props

    // console.log(this.state)

    return (
      <div className={styles.FormWrapper}>
        <Form
          name="Medlaser NEW LEAD - Inquiry Franshise Page"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/thank-you/"
          onSubmit={this.handleSubmit}
          className={styles.Form}
        >
          <input
            type="hidden"
            name="form-name"
            value="Medlaser NEW LEAD - Inquiry Franshise Page"
          />

          <p className="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>

          <div className={styles.FormColumn}>
            <Form.Group className={styles.Form___group}>
              <Form.Control
                className={`${styles.Form___formControl} ${
                  this.state.formErrors.firstName ? styles.ErrorField : ""
                }`}
                onChange={this.handleChange("firstName")}
                type="text"
                placeholder="First Name*"
                ref="firstName"
                name="firstName"
              />
              <p className={styles.ErrorMessage}>
                {this.state.formErrors.firstName}
              </p>
            </Form.Group>
          </div>

          <div className={styles.FormColumn}>
            <Form.Group className={styles.Form___group}>
              <Form.Control
                className={`${styles.Form___formControl} ${
                  this.state.formErrors.lastName ? styles.ErrorField : ""
                }`}
                onChange={this.handleChange("lastName")}
                type="text"
                placeholder="Last Name*"
                ref="lastName"
                name="lastName"
              />
              <p className={styles.ErrorMessage}>
                {this.state.formErrors.lastName}
              </p>
            </Form.Group>
          </div>

          <div className={styles.FormColumn}>
            <Form.Group className={styles.Form___group}>
              <Form.Control
                className={`${styles.Form___formControl} ${
                  this.state.formErrors.email ? styles.ErrorField : ""
                }`}
                onChange={this.handleChange("email")}
                type="email"
                placeholder="Email"
                ref="email"
                name="email"
              />
              <p className={styles.ErrorMessage}>
                {this.state.formErrors.email}
              </p>
            </Form.Group>
          </div>

          <div className={styles.FormColumn}>
            <Form.Group className={styles.Form___group}>
              <Form.Control
                className={`${styles.Form___formControl} ${
                  this.state.formErrors.phone ? styles.ErrorField : ""
                }`}
                onChange={this.handleChange("phone")}
                type="tel"
                placeholder="Mobile Number*"
                ref="phone"
                name="phone"
              />
              <p className={styles.ErrorMessage}>
                {this.state.formErrors.phone}
              </p>
            </Form.Group>
          </div>

          <div className={styles.FormColumn}>
            <Form.Group className={styles.Form___group}>
              <Form.Control
                className={`${styles.Form___formControl} ${
                  this.state.formErrors.opportunity ? styles.ErrorField : ""
                }`}
                onChange={this.handleChange("opportunity")}
                type="text"
                placeholder="How did you hear about the opportunity?*"
                ref="opportunity"
                name="opportunity"
              />
              <p className={styles.ErrorMessage}>
                {this.state.formErrors.opportunity}
              </p>
            </Form.Group>
          </div>

          <div className={styles.FormColumn}>
            <Form.Group className={styles.Form___group}>
              <Form.Control
                className={`${styles.Form___formControl} ${
                  this.state.formErrors.postal ? styles.ErrorField : ""
                }`}
                onChange={this.handleChange("postal")}
                type="text"
                placeholder="Postal Code*"
                ref="postal"
                name="postal"
              />
              <p className={styles.ErrorMessage}>
                {this.state.formErrors.postal}
              </p>
            </Form.Group>
          </div>

          <div className={styles.FormColumn}>
            <Form.Group className={styles.Form___group}>
              <Form.Control
                className={`${styles.Form___formControl} ${
                  this.state.formErrors.timeFrame ? styles.ErrorField : ""
                }`}
                onChange={this.handleChange("timeFrame")}
                defaultValue={"DEFAULT"}
                as="select"
                ref="timeFrame"
                name="timeFrame"
              >
                <option disabled value="DEFAULT">
                  Your Time Frame
                </option>
                <option>0 Months</option>
                <option>3 Months</option>
                <option>6 Months</option>
                <option>9 Months</option>
                <option>12 Months</option>
              </Form.Control>
              <p className={styles.ErrorMessage}>
                {this.state.formErrors.timeFrame}
              </p>
            </Form.Group>
          </div>

          <div className={styles.FormColumnFull}>
            <Form.Group className={styles.Form___group}>
              <Form.Control
                className={`${styles.Form___formControl} ${
                  this.state.formErrors.message ? styles.ErrorField : ""
                }`}
                onChange={this.handleChange("message")}
                as="textarea"
                placeholder="Comments*"
                rows="5"
                ref="message"
                name="message"
              />
              <p className={styles.ErrorMessage}>
                {this.state.formErrors.message}
              </p>
            </Form.Group>
          </div>

          <div className={styles.FormColumnFull}>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                onChange={this.handleCheck}
                className={styles.Checkbox}
                type="checkbox"
                label="Subscribe me to receive great offers and updates from Canada MedLaser Clinics"
                name="check"
              />
            </Form.Group>
          </div>

          <Button
            className={` ${styles.Form___formSubmit} btn btn-red`}
            // onClick={this.handleSubmit}
            type="submit"
          >
            {btntext}
          </Button>
        </Form>

        <div className={styles.NotificationBlock}>
          {/* Email send block */}
          {this.state.emailSent ? (
            <div className={styles.SuccessBlock}>
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
          this.state.formErrors.queryType ? (
            <div className={styles.ErrorBlock}>
              <p>Some Fields are invalid</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    )
  }
}

export default InquiryWithSubscriptionForm

import React, { Component } from "react"
import { Form, Button } from "react-bootstrap"
import querystring from "query-string"
import axios from "axios"

import styles from "./Form.module.scss"
import { wpUrl } from "../../../globals"

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
    this.refs.message.check = ""
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

  handleSubmit = event => {
    event.preventDefault()

    if (this.state.formValid) {
      const data = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phone: this.state.phone,
        email: this.state.email,
        timeFrame: this.state.timeFrame,
        postal: this.state.postal,
        opportunity: this.state.opportunity,
        messageArea: this.state.message,
        check: this.state.check
      }

      this.reset()

      axios
        .post(`${wpUrl}/contact-enquiry-sub.php`, querystring.stringify(data))
        .then(res => {
          this.setState({ emailSent: true })

          setTimeout(() => {
            this.setState({ emailSent: false })
          }, 2000)
        })
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

    return (
      <div className={styles.FormWrapper}>
        <Form className={styles.Form}>
          <div className={styles.FormColumn}>
            <Form.Group className={styles.Form___group}>
              <Form.Control
                className={`${styles.Form___formControl} ${
                  this.state.formErrors.firstName ? styles.ErrorField : ""
                }`}
                onChange={this.handleChange("firstName")}
                type="text"
                placeholder="First Name"
                ref="firstName"
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
                placeholder="Last Name"
                ref="lastName"
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
                  this.state.formErrors.phone ? styles.ErrorField : ""
                }`}
                onChange={this.handleChange("phone")}
                type="tel"
                placeholder="Phone"
                ref="phone"
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
                  this.state.formErrors.email ? styles.ErrorField : ""
                }`}
                onChange={this.handleChange("email")}
                type="email"
                placeholder="Email"
                ref="email"
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
                  this.state.formErrors.opportunity ? styles.ErrorField : ""
                }`}
                onChange={this.handleChange("opportunity")}
                type="text"
                placeholder="How did you hear about the opportunity"
                ref="opportunity"
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
                placeholder="Postal Code"
                ref="postal"
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
              >
                <option disabled value="DEFAULT">
                  Time Frame
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
                placeholder="Comments"
                rows="5"
                ref="message"
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
              />
            </Form.Group>

          </div>

          <Button
            className={` ${styles.Form___formSubmit} btn btn-red`}
            onClick={this.handleSubmit}
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
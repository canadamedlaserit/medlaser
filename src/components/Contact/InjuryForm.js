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
  queryType: "",
  message: "",

  firstNameValid: false,
  lastNameValid: false,
  emailValid: false,
  phoneValid: false,
  queryTypeValid: false,
  // messageValid: false,

  formValid: false,
  emailSent: false,

  formErrors: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    queryType: "",
    // message: "",
  },
}

export class InjuryForm extends Component {
  state = initialState

  reset() {
    // reseting state
    this.setState(initialState)

    // update inputs
    this.refs.firstName.value = ""
    this.refs.lastName.value = ""
    this.refs.email.value = ""
    this.refs.phone.value = ""
    this.refs.queryType.value = "DEFAULT"
    this.refs.message.value = ""
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
    let queryTypeValid = this.state.queryTypeValid
    // let messageValid = this.state.messageValid

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

      case "queryType":
        queryTypeValid = value.length >= 1
        fieldValidationErrors.queryType = queryTypeValid
          ? ""
          : "Select Query Type"

        break

      // case "message":
      //   locationValid = value.length >= 1
      //   fieldValidationErrors.message = locationValid ? "" : "Select Location"

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
        queryTypeValid: queryTypeValid,
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
        this.state.queryTypeValid,
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
        queryType: this.state.queryType,
        messageArea: this.state.message,
      }

      this.reset()

      axios
        .post(`${wpUrl}/contact-enquiry.php`, querystring.stringify(data))
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
      this.validateField("queryType", this.state.queryType)
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
                  this.state.formErrors.queryType ? styles.ErrorField : ""
                }`}
                onChange={this.handleChange("queryType")}
                defaultValue={"DEFAULT"}
                as="select"
                ref="queryType"
              >
                <option disabled value="DEFAULT">
                  Query Type
                </option>
                <option>Sales</option>
                <option>Finance</option>
                <option>Marketing</option>
                <option>Customer Care</option>
                <option>Other Inquires</option>
              </Form.Control>
              <p className={styles.ErrorMessage}> 
                {this.state.formErrors.queryType}
              </p>
            </Form.Group>
          </div>

          <div className={styles.FormColumnFull}>
            <Form.Group className={styles.Form___group}>
              <Form.Control
                className={styles.Form___formControl}
                onChange={this.handleChange("message")}
                as="textarea"
                placeholder="Message"
                rows="5"
                ref="message"
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

export default InjuryForm

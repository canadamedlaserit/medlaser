import React, { Component } from "react"
import { Form, Button } from "react-bootstrap"
import styles from "./Form.module.scss"

const initialState = {
  email: "",
  emailValid: false,
  formValid: false,
  emailSent: false,

  formErrors: {
    email: "",
  },
}

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export class NewsletterForm extends Component {
  state = initialState

  reset() {
    // reseting state
    this.setState(initialState)

    // update inputs
    this.refs.email.value = ""
  }

  handleChange = input => event => {
    const value = event.target.value

    this.setState({ [input]: value }, () => {
      this.validateField(input, value)
    })
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors

    let emailValid = this.state.emailValid

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        fieldValidationErrors.email = emailValid ? "" : "Email is invalid"
        break

      default:
        break
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
      },
      this.validateForm
    )
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid,
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    if (this.state.formValid) {
      console.log("form valid")

      const data = {
        email: this.state.email,
      }

      this.reset()

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "newsletter",
          ...data,
        }),
      })
        .then(() =>
          this.setState({
            emailSent: true,
          })
        )
        .catch(error => alert(error))
    } else {
      console.log("form invalid")
      this.validateField("email", this.state.email)
      console.log(this.state.formErrors)
    }
  }

  render() {
    const { btntext, column } = this.props

    return (
      <div className={styles.FormWrapper}>
        <Form
          name="newsletter"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
          className={styles.Form}
        >
          <input type="hidden" name="form-name" value="newsletter" />

          <div
            className={`${styles.FormColumn} ${
              column ? styles.FormColumnType : ""
            }`}
          >
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

          <Button
            className={` ${styles.Form___formSubmit} btn btn-red ${
              column ? styles.ButtonColumnType : ""
            }`}
            type="submit"
          >
            {btntext}
          </Button>
        </Form>

        <div
          className={`${styles.NotificationBlock} ${
            column ? styles.NotificationBlockType : ""
          }`}
        >
          {/* Email send block */}
          {this.state.emailSent ? (
            <div className={styles.SuccessBlock}>
              <p>Thank you! Your subscription has been confirmed</p>
            </div>
          ) : (
            ""
          )}

          {/* Error block */}
          {this.state.formErrors.email ? (
            <div className={styles.ErrorBlock}>
              <p>Email is invalid</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    )
  }
}

export default NewsletterForm

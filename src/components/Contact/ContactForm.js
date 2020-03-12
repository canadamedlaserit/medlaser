import React, { Component } from "react"
import styles from "./Contact.module.scss"
import { Form, Button } from "react-bootstrap"

export class ContactForm extends Component {
  render() {
    const { btntext } = this.props

    return (
      <div className={styles.FormWrapper}>
        <Form className={styles.Form}>
          <div className={styles.FormColumn}>
            <Form.Group className={styles.Form___group}>
              <Form.Control
                className={styles.Form___formControl}
                type="text"
                placeholder="First Name"
              />
            </Form.Group>

            <Form.Group className={styles.Form___group}>
              <Form.Control
                className={styles.Form___formControl}
                type="text"
                placeholder="Phone"
              />
            </Form.Group>

            <Form.Group className={styles.Form___group}>
              <Form.Control
                className={styles.Form___formControl}
                defaultValue={"DEFAULT"}
                as="select"
              >
                <option disabled value="DEFAULT">
                  Desired Treatment
                </option>
                <option>Laser Hair Removal</option>
                <option>Skin Treatments</option>
                <option>CoolSculpting Body</option>
                <option>CoolSculpting Chin</option>
                <option>Cosmetic Injections</option>
                <option>Skin Tightening</option>
                <option>Cellulite</option>
                <option>Hair Restoration</option>
                <option>Anti Aging</option>
                <option>Microblading</option>
                <option>Nail Fungus</option>
              </Form.Control>
            </Form.Group>
          </div>

          <div className={styles.FormColumn}>
            <Form.Group className={styles.Form___group}>
              <Form.Control
                className={styles.Form___formControl}
                type="text"
                placeholder="Last Name"
              />
            </Form.Group>

            <Form.Group className={styles.Form___group}>
              <Form.Control
                className={styles.Form___formControl}
                type="email"
                placeholder="Email"
                ref="email"
              />
            </Form.Group>

            <Form.Group className={styles.Form___group}>
              <Form.Control
                className={styles.Form___formControl}
                defaultValue={"DEFAULT"}
                as="select"
              >
                <option disabled value="DEFAULT">
                  Location
                </option>
                <option>Toronto</option>
                <option>Vaughan</option>
                <option>Mississauga</option>
                <option>Newmarket</option>
              </Form.Control>
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
        <div className={`${styles.panel} ${styles.panelDefault}`}>
          {/* <FormErrors formErrors={this.state.formErrors} /> */}
        </div>
      </div>
    )
  }
}

export default ContactForm

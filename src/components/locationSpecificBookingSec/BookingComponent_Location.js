import React from "react"
import "./BookingComponent_location.scss"
//import ChangeHistoryIcon from "@material-ui/icons/ChangeHistory"
import { Row } from "react-bootstrap"

export const fragment = graphql`
  fragment Bookinglocationspecific on WPGraphQL_Page_Sectionfields_Sections_Bookinglocationspecific {
    title
    fieldGroupName
  }
`

const BookingComponentLocation = () => {
  return (
    <>
      <section id="BookingSection_location">
        <div className="header_wrapper">
          <h1>Book your free consultation</h1>
        </div>
      </section>
      <section id="BookingForm_location">
        <Row>hello</Row>
      </section>
    </>
  )
}

export default BookingComponentLocation
/* */

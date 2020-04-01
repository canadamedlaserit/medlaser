import React from "react"
import Layout from "../components/Layout"

const ContactUs = ({ location }) => {
  return (
    <Layout location={location}>
      <div
        style={{
          paddingTop: "220px",
          paddingBottom: "120px",
          textAlign: "center",
        }}
      >
        ContactUs
      </div>
    </Layout>
  )
}

export default ContactUs
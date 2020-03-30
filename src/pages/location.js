import React from "react"
import Layout from "../components/Layout"

const Location = ({ location }) => {
  return (
    <Layout location={location}>
      <div
        style={{
          paddingTop: "220px",
          paddingBottom: "120px",
          textAlign: "center",
        }}
      >
        Location
      </div>
    </Layout>
  )
}

export default Location

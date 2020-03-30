import React from "react"
import Layout from "../components/Layout"

const BeforeAfter = ({ location }) => {
  return (
    <Layout location={location}>
      <div
        style={{
          paddingTop: "220px",
          paddingBottom: "120px",
          textAlign: "center",
        }}
      >
        BeforeAfter
      </div>
    </Layout>
  )
}

export default BeforeAfter

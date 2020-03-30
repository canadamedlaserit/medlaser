import React from "react"
import Layout from "../components/Layout"

const Specials = ({ location }) => {
  return (
    <Layout location={location}>
      {" "}
      <div
        style={{
          paddingTop: "220px",
          paddingBottom: "120px",
          textAlign: "center",
        }}
      >
        Specials
      </div>
    </Layout>
  )
}

export default Specials

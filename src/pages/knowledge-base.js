import React from "react"
import Layout from "../components/Layout"

const KnowledgeBase = ({ location }) => {
  return (
    <Layout location={location}>
      <div
        style={{
          paddingTop: "220px",
          paddingBottom: "120px",
          textAlign: "center",
        }}
      >
        KnowledgeBase
      </div>
    </Layout>
  )
}

export default KnowledgeBase

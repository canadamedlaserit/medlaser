import React from "react"
import Layout from "../components/Layout"

const NotFound = ({ location }) => {
  return (
    <Layout location={location}>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">404 not FOUND</div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NotFound

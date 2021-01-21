import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/particles/SEO"
import { Link } from "gatsby"
import Img from "gatsby-image"

const NotFound = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "not-found.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  // console.log(data)

  return (
    <Layout location={location}>
      <SEO data={{ seo: { title: "404: Not found", metaDesc: "" } }} />

      <section>
        <div
          style={{ paddingTop: 150, paddingBottom: 150 }}
          className="container"
        >
          <div className="row">
            <div className="col-md-12">
              <div style={{ maxWidth: 600, margin: "20px auto 40px auto" }}>
                <Img
                  fluid={data.placeholderImage.childImageSharp.fluid}
                  alt="404 not found"
                />
              </div>

              <h1 style={{ textAlign: "center" }}>404 NOT FOUND</h1>
              <p style={{ textAlign: "center", marginBottom: 40 }}>
                You just hit a route that doesn&#39;t exist...
              </p>
              <div>
                <Link className="btn btn-red" to="/">
                  Go homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NotFound

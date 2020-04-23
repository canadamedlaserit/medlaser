import React from "react"

import Layout from "../../components/Layout"
import Pagination from "../../components/Pagination"
import { blogURI } from "../../../globals"

import { Link } from "gatsby"

const Post = ({ pageContext, location }) => {
  const {
    post: { title, content, date },
    previous,
    next,
  } = pageContext

  return (
    <Layout location={location}>
      <section className="firstSection">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <div className="featured-image"></div> */}
              asdasdadsadasd
              <h2> {title} </h2>
              <div dangerouslySetInnerHTML={{ __html: content }} />
              <div>{console.log(date)}</div>
              <div>
                <ul
                  style={{
                    display: `flex`,
                    flexWrap: `wrap`,
                    justifyContent: `space-between`,
                    listStyle: `none`,
                    padding: 0,
                  }}
                >
                  <li>
                    {previous && (
                      <Link to={`/${previous.uri}`} rel="prev">
                        ← {previous.title}
                      </Link>
                    )}
                  </li>
                  <li>
                    {next && (
                      <Link to={`/${next.uri}`} rel="next">
                        {next.title} →
                      </Link>
                    )}
                  </li>
                </ul>
                {/* <Link to={`/${blogURI}/${previous.uri}`}>{previous.title}</Link> */}
                {/* <Link to={`/${blogURI}/${next.uri}`}>{next.title}</Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Post

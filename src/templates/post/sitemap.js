import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"
const Sitemap = ({ pageContext, location }) => {
  return (
    <Layout location={location}>
      <div style={{ marginTop: "200px" }} className={`container`}>
        <div className={`row `}>
          <div className="col-md-12">
            <h1>PAGES :</h1>
            <ul>
              {pageContext.data.pages.edges.map((page, index) => {
                if (page.node.childPages.edges.length > 0) {
                  return (
                    <div key={index}>
                      <li>
                        <Link to={`/${page.node.uri}`}>{page.node.title}</Link>
                      </li>

                      <ul>
                        {page.node.childPages.edges.map((page, index) => {
                          if (page.node.childPages.edges.length > 0) {
                            return (
                              <div key={index}>
                                <li>
                                  <Link to={`/${page.node.uri}`}>
                                    {page.node.title}
                                  </Link>
                                </li>

                                <ul>
                                  {page.node.childPages.edges.map(
                                    (page, index) => (
                                      <li key={index}>
                                        <Link to={`/${page.node.uri}`}>
                                          {page.node.title}
                                        </Link>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            )
                          } else {
                            return (
                              <li key={index}>
                                <Link to={`/${page.node.uri}`}>
                                  {page.node.title}
                                </Link>
                              </li>
                            )
                          }
                        })}
                      </ul>
                    </div>
                  )
                } else {
                  return (
                    <li key={index}>
                      <Link to={`/${page.node.uri}`}>{page.node.title}</Link>
                    </li>
                  )
                }
              })}
            </ul>
          </div>

          <div className="col-md-12">
            <h1>Category / posts :</h1>
            <ul>
              {pageContext.data.categories.edges.map((category, index) => {
                if (
                  category.node.slug === "uncategorized" ||
                  category.node.slug === "team-cml-newmarket" ||
                  category.node.slug === "team-cml-mississauga" ||
                  category.node.slug === "specials" ||
                  category.node.slug === "results" ||
                  category.node.slug === "main-team"
                ) {
                  return null
                } else {
                  return (
                    <div key={index}>
                      <li>
                        <Link to={`/${category.node.uri}`}>
                          <h5 style={{ textAlign: "left" }}>
                            {category.node.name}
                          </h5>
                        </Link>

                        {category.node.posts.nodes ? (
                          <div>
                            <ul>
                              {category.node.posts.nodes.map((post, index) => (
                                <li key={index}>
                                  <Link to={`/${post.uri}`}>{post.title}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          ""
                        )}
                      </li>
                    </div>
                  )
                }
              })}
            </ul>
          </div>

          <div className="col-md-12">
            <h1>TAGS :</h1>
            <ul>
              {pageContext.data.tags.edges.map((tag, index) => {
                return (
                  <div key={index}>
                    <li>
                      <Link to={`/${tag.node.uri}`}>{tag.node.name}</Link>
                    </li>
                  </div>
                )
              })}
            </ul>
          </div>

          <div className="col-md-12">
            <h1>TEAM MEMBERS :</h1>
            <ul>
              {pageContext.data.teams.edges.map((member, index) => {
                return (
                  <div key={index}>
                    <li>
                      <Link to={`/${member.node.slug}`}>
                        {member.node.slug}
                      </Link>
                    </li>
                  </div>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Sitemap

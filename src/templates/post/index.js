import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import DateStyle from "../../components/DateStyle"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import CategoryList from "../../components/CategoryList"
import Contact from "../../components/Contact/Contact"
import SEO from "../../components/particles/SEO"

import styles from "../../styles/singleBlog.module.scss"

const Post = ({ pageContext, location, data }) => {
  const {
    post: { title, content, date, author, categories },
    previous,
    next,
  } = pageContext

  return (
    <Layout location={location}>
      {/* <SEO data={data.wpgraphql.page} /> */}

      <article className={`entry-content ${styles.Wrapper}`}>
        <section className={`${styles.Section} ${styles.Hero}`}>
          <div className={styles.HeroImage}>
            {data.wpgraphql.post.featuredImage ? (
              <Img
                fluid={
                  data.wpgraphql.post.featuredImage.imageFile.childImageSharp
                    .fluid
                }
              />
            ) : null}
          </div>
          <div className={styles.HeroWrapper}>
            <div className={styles.ArticleHeaderWrapper}>
              <div className={styles.Term}>
                {categories.nodes.map((category, index) => (
                  <Link key={index} to={`/category/${category.slug}/`}>
                    <span>{category.name} </span>
                  </Link>
                ))}
                {/* {termNames.map((term, index) => (
                  <Link key={index} to={`/category/${termSlugs[index]}/`}>
                    <span>{term} </span>
                  </Link>
                ))} */}
              </div>
              <div className={styles.Author}>
                by {author.name === "admin" ? "Canada MedLaser" : author.name}
              </div>
            </div>

            <h1> {title} </h1>
          </div>

          <div className={styles.Overlay}></div>
          <div className={styles.Hatch}></div>
        </section>
        <CategoryList showOnDevice="mobile" />

        <section className={styles.Main}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className={styles.Date}>
                  <DateStyle date={date} />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div
                  className={styles.Content}
                  dangerouslySetInnerHTML={{ __html: content }}
                />
                <div>
                  <ul
                    style={{
                      display: `flex`,
                      flexWrap: `wrap`,
                      justifyContent: `space-between`,
                      listStyle: `none`,
                      padding: 0,
                      marginTop: "40px",
                    }}
                  >
                    <li>
                      {previous && (
                        <Link
                          className={styles.SingleNextPrev}
                          to={`/${previous.uri}`}
                          rel="prev"
                        >
                          {/* ← {previous.title} */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ marginRight: "20px" }}
                            width="10"
                            height="34.982"
                            viewBox="0 0 25.432 50.865"
                          >
                            <g transform="translate(153.435 50.865) rotate(180)">
                              <g transform="translate(128.003 0)">
                                <path
                                  d="M153.141,24.7,129.828.327A1.06,1.06,0,1,0,128.3,1.792l22.612,23.641L128.3,49.073a1.06,1.06,0,0,0,1.532,1.465l23.314-24.373A1.062,1.062,0,0,0,153.141,24.7Z"
                                  transform="translate(-128.003 0)"
                                ></path>
                              </g>
                            </g>
                          </svg>
                          Previous
                        </Link>
                      )}
                    </li>
                    <li>
                      {next && (
                        <Link
                          className={styles.SingleNextPrev}
                          to={`/${next.uri}`}
                          rel="next"
                        >
                          Next
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="34.982"
                            viewBox="0 0 16.325 34.982"
                            style={{ marginLeft: "20px" }}
                          >
                            <defs></defs>
                            <path
                              d="M144.139,16.987,129.174.225A.65.65,0,0,0,128.212.2a.767.767,0,0,0-.021,1.031l14.515,16.259L128.191,33.75a.767.767,0,0,0,.021,1.031.649.649,0,0,0,.962-.023L144.139,18A.768.768,0,0,0,144.139,16.987Z"
                              transform="translate(-128.003 0)"
                            ></path>
                          </svg>
                        </Link>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <CategoryList maxHeight="unset" showOnDevice="desktop" />
              </div>
            </div>
          </div>
        </section>

        <div className="show-mobile">
          <Contact />
        </div>
      </article>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query BlogPostByID($id: ID!) {
    wpgraphql {
      post(id: $id) {
        featuredImage {
          altText
          sourceUrl
          imageFile {
            childImageSharp {
              fluid(quality: 100, maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

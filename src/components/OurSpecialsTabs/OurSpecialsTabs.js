import React from "react"
import { Tabs, Tab } from "react-bootstrap"
import Img from "gatsby-image"

import { useStaticQuery, graphql } from "gatsby"

import styles from "./OurSpecialsTabs.module.scss"

const OurSpecialsTabs = () => {
  const data = useStaticQuery(graphql`
    query Specials {
      wpgraphql {
        specials {
          nodes {
            specialsFields {
              title
              categoryName
              price
              text
              image {
                sourceUrl
                imageFile {
                  childImageSharp {
                    fluid(quality: 100, maxWidth: 600) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
            }
            terms {
              ... on WPGraphQL_Category {
                name
              }
            }
          }
        }

        categories(where: { search: "Specials" }) {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    }
  `)


  const specials = data.wpgraphql.specials.nodes
  const categories = data.wpgraphql.categories.edges

  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row`}>
          <div className="col-md-12">
            <h3>Our Specials</h3>
          </div>
          <div className={`col-md-12 ${styles.TabsCol}`}>
            <div className={styles.TabsWrap}>
              <Tabs
                className={`specials-tabs ${styles.Tabs}`}
                defaultActiveKey="Specials"
              >
                {categories
                  ? categories.map((category, index) => (
                      <Tab
                        key={index}
                        eventKey={category.node.name}
                        title={
                          category.node.name === "Specials"
                            ? "All"
                            : `${category.node.name.replace("Specials ", "")}`
                        }
                      >
                        {/* output here specials with same category */}
                        {specials.map((special, index) => {
                          if (
                            special.terms.filter(
                              e => e.name === category.node.name
                            ).length > 0
                          ) {
                            return (
                              <div
                                className={styles.SpecialWrapper}
                                key={index}
                              >
                                <div className={styles.ImageSide}>
                                  <Img
                                    fluid={
                                      special.specialsFields.image.imageFile
                                        .childImageSharp.fluid
                                    }
                                  />
                                </div>

                                <div className={styles.TextSide}>
                                  <div className={styles.TextSideWrapper}>
                                    <div className={styles.TextWrapper}>
                                      <h4>
                                        {special.specialsFields.categoryName}
                                      </h4>
                                      <h3>{special.specialsFields.title}</h3>
                                      <div
                                        className={styles.Text}
                                        dangerouslySetInnerHTML={{
                                          __html: special.specialsFields.text,
                                        }}
                                      ></div>
                                    </div>

                                    <div className={styles.buttonsWrapper}>
                                      <a
                                        href="#book"
                                        className="btn btn-white-transparent"
                                      >
                                        Reserve it
                                      </a>
                                    </div>
                                  </div>

                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: special.specialsFields.price,
                                    }}
                                    className={styles.Circle}
                                  ></div>
                                </div>
                              </div>
                            )
                          } else {
                            return null
                          }
                        })}
                      </Tab>
                    ))
                  : ""}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurSpecialsTabs

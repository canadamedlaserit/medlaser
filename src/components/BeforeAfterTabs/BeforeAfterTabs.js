import React from "react"
import { Tabs, Tab } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import GalleryComponent from "./GalleryComponent"

import styles from "./BeforeAfterTabs.module.scss"

export const fragment = graphql`
  fragment BeforeAfterTabsSection on WPGraphQL_Page_Sectionfields_Sections_Beforeaftertabs {
    fieldGroupName
  }
`

const BeforeAfterTabs = () => {
  const data = useStaticQuery(graphql`
    query Results {
      wpgraphql {
        results(first: 200) {
          nodes {
            resultsFields {
              title
              description
              image {
                sourceUrl
                altText
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

        categories(where: { search: "Results" }) {
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

  const results = data.wpgraphql.results.nodes
  const categories = data.wpgraphql.categories.edges

  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row`}>
          <div className="col-md-12">
            <h1>BEFORE & AFTER Laser Treatment</h1>
          </div>
          <div className={`col-md-12 ${styles.TabsCol}`}>
            <div className={styles.TabsWrap}>
              <Tabs
                className={`specials-tabs ${styles.Tabs}`}
                defaultActiveKey="Results"
              >
                {categories
                  ? categories.map((category, index) => (
                      <Tab
                        key={index}
                        eventKey={category.node.name}
                        title={
                          category.node.name === "Results"
                            ? "All"
                            : `${category.node.name.replace("Results ", "")}`
                        }
                      >
                        <GalleryComponent
                          category={category}
                          results={results}
                        />
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

export default BeforeAfterTabs

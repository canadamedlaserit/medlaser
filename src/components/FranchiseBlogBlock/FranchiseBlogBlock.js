import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from "./FranchiseBlogBlock.module.scss"
import Img from "gatsby-image"

const itemsPerShow = 2

const FranchiseBlogBlock = () => {
  const data = useStaticQuery(graphql`
    query FranchiseQuery {
      wpgraphql {
        posts(first: 500, where: { categoryName: "Franchise" }) {
          edges {
            node {
              id
              uri
              excerpt
              title
              featuredImage {
                id
                sourceUrl
                altText
                imageFile {
                  childImageSharp {
                    fluid(quality: 100, maxWidth: 960) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const posts = data.wpgraphql.posts.edges

  const [itemsToShow, setItemsToShow] = React.useState(itemsPerShow)
  const [showMoreItems, setShowMoreItems] = React.useState(true)

  const showMore = _ => {
    posts.length > itemsToShow
      ? setItemsToShow(itemsToShow + itemsPerShow)
      : setShowMoreItems(false)
  }

  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row`}>
          {posts.length
            ? posts.slice(0, itemsToShow).map(({ node }, index) => (
                <div key={index} className={`col-md-6 ${styles.Column}`}>
                  <div className={styles.Wrapper}>
                    <Link to={`/${node.uri}`}>
                      <Img
                        alt={node.featuredImage.altText}
                        className={`${styles.Img}`}
                        fluid={
                          node.featuredImage.imageFile.childImageSharp.fluid
                        }
                      />
                    </Link>

                    <div className={styles.ContentWrapper}>
                      <h4 dangerouslySetInnerHTML={{ __html: node.title }}></h4>
                      <div
                        dangerouslySetInnerHTML={{ __html: node.excerpt }}
                      ></div>

                      <Link className={styles.ReadMore} to={`/${node.uri}`}>
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>

        {posts.length > itemsToShow && showMoreItems ? (
          <div className={`row ${styles.Row}`}>
            <div className={`col-md-12 ${styles.Btn}`}>
              <button onClick={showMore} className="btn btn-black-transparent">
                Load more
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default FranchiseBlogBlock

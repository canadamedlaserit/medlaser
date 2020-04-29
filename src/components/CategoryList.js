import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import styles from "../components/BlogMain/BlogMain.module.scss"

const CategoryList = ({showOnDevice}) => {
  const data = useStaticQuery(graphql`
    query CategoriesListQuery {
      wpgraphql {
        categories {
          edges {
            node {
              name
              slug
              posts {
                edges {
                  node {
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className={` ${showOnDevice === 'mobile' ? styles.CategoryMobile : styles.Categories }`}>
      <div className={styles.CatWrapper}>
        <h3>Categories</h3>

        <ul>
          <li>
            <Link to={`/knowledge-base`}>All</Link>
          </li>
          {data.wpgraphql.categories.edges.map(({ node }, index) => {
            if (node.posts.edges.length) {
              return (
                <li key={index}>
                  <Link to={`/category/${node.slug}`}>{node.name}</Link>
                </li>
              )
            } else return null
          })}
        </ul>
        {/* {data.wpgraphql.categories.edges.node.posts ? data.wpgraphql.categories.edges.node.name : ''} */}
      </div>
    </div>
  )
}

export default CategoryList

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Dropdown } from "react-bootstrap"

import CategoryShowMore from "../components/CategoryShowMore"

import styles from "../components/BlogMain/BlogMain.module.scss"

const CategoryList = ({ showOnDevice }) => {
  const data = useStaticQuery(graphql`
    query CategoriesListQuery {
      wpgraphql {
        categories(first: 500) {
          edges {
            node {
              name
              slug
              posts(first: 500) {
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

  // const [rowsToDisplay, setRowsToDisplay] = useState(14)

  // const showMore = () => {
  //   let listLength = data.wpgraphql.categories.edges
  //   setRowsToDisplay(listLength)
  // }

  return (
    <div
      className={` ${
        showOnDevice === "mobile" ? styles.CategoryMobile : styles.Categories
      }`}
    >
      {showOnDevice === "mobile" ? (
        <Dropdown className="category-dropdown">
          <Dropdown.Toggle>
            Categories
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="18"
                viewBox="0 0 8 18"
              >
                <defs></defs>
                <path
                  d="M135.91,8.741,128.577.116A.308.308,0,0,0,128.105.1a.41.41,0,0,0-.01.53L135.208,9l-7.113,8.366a.41.41,0,0,0,.01.53.308.308,0,0,0,.471-.012l7.334-8.625A.41.41,0,0,0,135.91,8.741Z"
                  transform="translate(-128.003)"
                />
              </svg>
            </span>
          </Dropdown.Toggle>

          <Dropdown.Menu className={styles.Menu}>
            <Dropdown.Item as={Link} to={`/knowledge-base`}>
              All
            </Dropdown.Item>

            {/* {data.wpgraphql.categories.edges.map(({ node }, index) => {
              if (node.posts.edges.length) {
                return (
                  <Dropdown.Item
                    key={index}
                    as={Link}
                    to={`/category/${node.slug}`}
                  >
                    {node.name}
                  </Dropdown.Item>
                )
              } else return null
            })} */}

            <CategoryShowMore type="mobile" data={data} />
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <div className={styles.CatWrapper}>
          <h3>Categories</h3>

          <ul>
            <li>
              <Link to={`/knowledge-base`}>All</Link>
            </li>
            {/* {data.wpgraphql.categories.edges.map(({ node }, index) => {
              if (node.posts.edges.length) {
                return (
                  <li key={index}>
                    <Link to={`/category/${node.slug}`}>{node.name}</Link>
                  </li>
                )
              } else return null
            })} */}

            <CategoryShowMore type="desktop" data={data} />
          </ul>
        </div>
      )}
    </div>
  )
}

export default CategoryList

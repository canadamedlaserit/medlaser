import React, { useState } from "react"
import { Link } from "gatsby"
import { Dropdown } from "react-bootstrap"

import styles from "../components/BlogMain/BlogMain.module.scss"

const CategoryList = ({ data, type }) => {
  const [rowsToDisplay, setRowsToDisplay] = useState(14)
  const [loadMore, setLoadMore] = useState(false)

  const showMore = () => {
    let listLength = data.wpgraphql.categories.edges.length
    setRowsToDisplay(listLength)
    setLoadMore(true)
  }

  return (
    <>
      {type === "desktop"
        ? data.wpgraphql.categories.edges
            .slice(0, rowsToDisplay)
            .map(({ node }, index) => {
              if (node.posts.edges.length) {
                return (
                  <li key={index}>
                    <Link to={`/category/${node.slug}`}>{node.name}</Link>
                  </li>
                )
              } else return null
            })
        : ""}

      {type === "mobile"
        ? data.wpgraphql.categories.edges
            .slice(0, rowsToDisplay)
            .map(({ node }, index) => {
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
            })
        : ""}

      <div>
        {!loadMore ? <button className={styles.ShowMore} onClick={showMore}>Show more</button> : ""}
      </div>
    </>
  )
}

export default CategoryList

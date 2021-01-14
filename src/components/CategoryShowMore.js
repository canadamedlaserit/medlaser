import React, { useState } from "react"
import { Link } from "gatsby"
import { Dropdown } from "react-bootstrap"

import styles from "../components/BlogMain/BlogMain.module.scss"

const CategoryList = ({ data, type }) => {
  const [rowsToDisplay, setRowsToDisplay] = useState(40)
  const [loadMore, setLoadMore] = useState(false)
  const [hideList, setHideList] = useState(false)

  const showMore = () => {
    let listLength = data.wpgraphql.categories.edges.length
    console.log("list", listLength)
    setRowsToDisplay(listLength)
    setLoadMore(true)
    setHideList(!hideList)
  }
  const hideRowList = () => {
    setRowsToDisplay(40)
    setLoadMore(!loadMore)
    setHideList(!hideList)
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
        {!loadMore ? (
          <button className={styles.ShowMore} onClick={showMore}>
            Show more
          </button>
        ) : (
          ""
        )}
        {hideList ? (
          <button className={styles.ShowMore} onClick={hideRowList}>
            Hide
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  )
}

export default CategoryList

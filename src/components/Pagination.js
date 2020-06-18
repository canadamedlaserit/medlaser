// src/components/Pagination.js

import React from "react"

import { Link } from "gatsby"
import styles from "../styles/pagination.module.scss"

const Pagination = ({ pageNumber, hasNextPage, numPages, pageUri }) => {
  if (pageNumber === 1 && !hasNextPage) return null

  // numPages = 7
  // const item

  return (
    <div className={styles.PagiantionWrapper}>
      <div className={styles.Pagination}>
        {pageNumber > 1 && (
          <Link
            className={`prev page-numbers ${styles.PrevNext}`}
            to={
              pageNumber > 2
                ? `/${pageUri}/page/${pageNumber - 1}`
                : `/${pageUri}/`
            }
          >
            <span>Previous</span>
          </Link>
        )}

        <ul>
          {Array.from({ length: numPages }, (_, i) => {
            var index = i + 1 // index same as numpages
            if (numPages > 6) {
              if (
                (index <= 4 && pageNumber <= 4) ||
                index === numPages ||
                index === 1 ||
                index === pageNumber + 1 ||
                index === pageNumber ||
                index === pageNumber - 1 ||
                (index === numPages - 1 && pageNumber === numPages - 1) ||
                (index === numPages - 2 && pageNumber - 2 === numPages - 2)
              ) {
                return (
                  <li
                    key={`pagination-number${i + 1}`}
                    style={{
                      margin: 0,
                    }}
                  >
                    {index === numPages && pageNumber < numPages - 2
                      ? "..."
                      : ""}
                    <Link
                      to={`/${pageUri}/${i === 0 ? "" : "page/" + (i + 1)}`}
                      style={{
                        padding: "5px",
                        textDecoration: "none",
                      }}
                      className={`${i + 1 === pageNumber ? styles.Active : ""}`}
                    >
                      {i + 1}
                    </Link>
                    {index === 1 && pageNumber > 4 ? "..." : ""}
                  </li>
                )
              } else {return null}
            } else {
              return (
                <li
                  key={`pagination-number${i + 1}`}
                  style={{
                    margin: 0,
                  }}
                >
                  <Link
                    to={`/${pageUri}/${i === 0 ? "" : "page/" + (i + 1)}`}
                    style={{
                      padding: "5px",
                      textDecoration: "none",
                    }}
                    className={`${i + 1 === pageNumber ? styles.Active : ""}`}
                  >
                    {i + 1}
                  </Link>
                </li>
              )
            }
          })}
        </ul>

        {hasNextPage && (
          <Link
            className={`next page-numbers ${styles.PrevNext}`}
            to={`/${pageUri}/page/${pageNumber + 1}`}
          >
            <span>Next</span>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Pagination

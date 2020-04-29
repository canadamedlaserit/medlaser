// src/components/Pagination.js

import React from "react"
import { Link } from "gatsby"

import styles from "../styles/pagination.module.scss"

const Pagination = ({ pageNumber, hasNextPage, numPages, pageUri }) => {
  if (pageNumber === 1 && !hasNextPage) return null

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
          {Array.from({ length: numPages }, (_, i) => (
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
          ))}
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

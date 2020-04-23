// src/components/Pagination.js

import React from "react"
import { Link } from "gatsby"
import { blogURI } from "../../globals"

const Pagination = ({ pageNumber, hasNextPage, numPages }) => {

  if (pageNumber === 1 && !hasNextPage) return null
  //   console.log(pageNumber);

  return (
    <div style={{ margin: "60px auto", textAlign: "center" }}>
      <h2>Posts navigation</h2>
      <div>
        {
          pageNumber > 1 && (
            <Link
              className="prev page-numbers"
              style={{
                padding: "4px 8px 5px 8px",
                backgroundColor: "rgba(0,0,0,.05)",
                borderRadius: "3px",
              }}
              to={pageNumber > 2 ? `/${blogURI}/page/${pageNumber - 1}` : `/${blogURI}/`}
            >
              <span>Previous page</span>
            </Link>
          )
        }
        {/* <span aria-current="page" className="page-numbers current" style={{ padding: "5px 10px" }}>
          <span className="meta-nav screen-reader-text">Page </span>
          {pageNumber}


        </span> */}

        {Array.from({ length: numPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{
                margin: 0,
              }}
            >
              <Link
                to={`/${blogURI}/${i === 0 ? '' : 'page/'+ (i + 1)}`}
                style={{
                  padding: '5px',
                  textDecoration: 'none',
                  color: i + 1 === pageNumber ? '#ffffff' : '',
                  background: i + 1 === pageNumber ? '#007acc' : '',
                }}
              >
                {i + 1}
              </Link>
            </li>
          ))}

        {
          hasNextPage && (
            <Link
              style={{
                padding: "4px 8px 5px 8px",
                backgroundColor: "rgba(0,0,0,.05)",
                borderRadius: "3px",
              }}
              className="next page-numbers"
              to={`/${blogURI}/page/${pageNumber + 1}`
              }
            >
              <span>Next page </span>
            </Link>
          )
        }
      </div>
    </div>
  )
}

export default Pagination
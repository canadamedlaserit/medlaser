import React from "react"
import Pagination from "../Pagination"
import PostEntry from "../PostEntry"

import styles from "./BlogMain.module.scss"

const BlogMain = ({ nodes, pageNumber, hasNextPage, numPages }) => {
  return (
    <article className={styles.Section}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={styles.EntriesWrapper}>
              {nodes &&
                nodes.map((post, index) => (
                  <PostEntry key={index} post={post} />
                ))}

              <div className={styles.Categories} style={{ backgroundColor: "orange" }}>Categories</div>
            </div>

            <Pagination
              pageNumber={pageNumber}
              hasNextPage={hasNextPage}
              numPages={numPages}
            />
          </div>
        </div>
      </div>
    </article>
  )
}

export default BlogMain

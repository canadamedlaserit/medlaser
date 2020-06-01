import React from "react"
import Pagination from "../Pagination"
import PostEntry from "../PostEntry"
import { blogURI } from "../../../globals"

import CategoryList from "../CategoryList"

import styles from "./BlogMain.module.scss"

const BlogMain = ({ nodes, pageNumber, hasNextPage, numPages }) => {

  return (
    <article className={styles.Section}>
      <div className={`container ${styles.Container}`}>
        <div className="row">
        <CategoryList showOnDevice="mobile" />

          <div className="col-md-12">

            <div className={styles.EntriesWrapper}>

              {nodes &&
                nodes.map((post, index) => (
                  <PostEntry key={index} post={post} />
                ))}

              <CategoryList showOnDevice="desktop" />
            </div>

            <Pagination
              pageNumber={pageNumber}
              hasNextPage={hasNextPage}
              numPages={numPages}
              pageUri={blogURI}
            />
          </div>
        </div>
      </div>
    </article>
  )
}

export default BlogMain

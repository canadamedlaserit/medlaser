import React from "react"

import PostEntry from "../../components/PostEntry"
import Pagination from "../../components/Pagination"
import CategoryList from "../../components/CategoryList"

import styles from "../../components/BlogMain/BlogMain.module.scss"

const CategoriesMain = ({ posts, pageNumber, hasNextPage, numPages, slug }) => {
  return (
    <article className={styles.Section}>
      <div className={`container ${styles.Container}`}>
        <div className="row">
          <div className="col-md-12">
            <div className={styles.EntriesWrapper}>
              {posts.map((node, index) => (
                <PostEntry key={index} post={node} />
              ))}

              <CategoryList />
            </div>

            <Pagination
              pageNumber={pageNumber}
              hasNextPage={hasNextPage}
              numPages={numPages}
              pageUri={`category/${slug}`}
            />
          </div>
        </div>
      </div>
    </article>
  )
}

export default CategoriesMain

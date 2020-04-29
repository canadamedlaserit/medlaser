import React from "react"
import Layout from "../../components/Layout"
import PostEntry from "../../components/PostEntry"
import Pagination from "../../components/Pagination"
import styles from "../../components/BlogMain/BlogMain.module.scss"
import CategoryList from "../../components/CategoryList"

const CategoryPage = ({ location, pageContext }) => {
  const { slug, posts, pageNumber, hasNextPage, numPages } = pageContext

  return (
    <Layout location={location}>
      <section className="firstSection">
        <div className="container">
          <div className="row">
            <div style={{ marginTop: "200px" }} className="col-md-12">
              <h2> CATEGORY PAGE //// {slug}</h2>
              <h2> current {pageNumber}</h2>
            </div>
          </div>
        </div>
      </section>

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
    </Layout>
  )
}

export default CategoryPage

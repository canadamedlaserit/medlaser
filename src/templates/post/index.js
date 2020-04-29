import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"


import styles from "../../styles/singleBlog.module.scss"


const Post = ({ pageContext, location }) => {
  const {
    post: { title, content, date, featuredImage, author, termNames, termSlugs },
    previous,
    next,
  } = pageContext

  return (
    <Layout location={location}>
      <div className={styles.Wrapper}>
        <section
          style={{ backgroundImage: `url(${featuredImage.sourceUrl})` }}
          className={`${styles.Section} ${styles.Hero}`}
        >
          <div className={styles.HeroWrapper}>
            <div className={styles.ArticleHeaderWrapper}>
              <div className={styles.Term}>
                {termNames.map((term, index) => (
                  <Link key={index} to={`/category/${termSlugs[index]}/`}>
                    <span>{term} </span>
                  </Link>
                ))}
              </div>
              <div className={styles.Author}>
                by {author.name === "admin" ? "Canada MedLaser" : author.name}
              </div>
            </div>

            <h3> {title} </h3>
          </div>

          <div className={styles.Overlay}></div>
          <div className={styles.Hatch}></div>
        </section>

        <section className={styles.Main}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div
                  className={styles.Content}
                  dangerouslySetInnerHTML={{ __html: content }}
                />
                <div>{console.log(date)}</div>
                <div>
                  <ul
                    style={{
                      display: `flex`,
                      flexWrap: `wrap`,
                      justifyContent: `space-between`,
                      listStyle: `none`,
                      padding: 0,
                    }}
                  >
                    <li>
                      {previous && (
                        <Link to={`/${previous.uri}`} rel="prev">
                          ← {previous.title}
                        </Link>
                      )}
                    </li>
                    <li>
                      {next && (
                        <Link to={`/${next.uri}`} rel="next">
                          {next.title} →
                        </Link>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Post

import React from "react"
import { Link } from "gatsby"
import DateStyle from "../components/DateStyle"
import styles from "./BlogMain/BlogMain.module.scss"
import Img from "gatsby-image"

const PostEntry = ({ post }) => {
  const { uri, title, featuredImage, excerpt, date, author, categories } = post

  return (
    <div className={styles.Entry}>
      <header>
        <Link to={`/${uri}`}>
          {featuredImage ? (
            <Img
              style={{ height: "100%" }}
              alt={featuredImage.altText}
              fluid={featuredImage.imageFile.childImageSharp.fluid}
            />
          ) : null}
        </Link>
      </header>

      <article>
        <div className={styles.ArticleHeaderWrapper}>
          <div className={styles.Term}>
            {categories.nodes.map((category, index) => (
              <Link key={index} to={`/category/${category.slug}`}>
                {category.name}
              </Link>
            ))}
          </div>
          <div className={styles.Date}>
            <DateStyle date={date} />
          </div>
        </div>

        <h2 style={{ marginBottom: "5px" }}>
          <Link
            dangerouslySetInnerHTML={{ __html: title }}
            to={`/${uri}/`}
          ></Link>
        </h2>

        <div className={styles.ArticleAuthorWrapper}>
          <div className={styles.Author}>
            by {author.name === "admin" ? "Canada MedLaser" : author.name}
          </div>
        </div>

        <div
          className={styles.Excerpt}
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      </article>
    </div>
  )
}

export default PostEntry

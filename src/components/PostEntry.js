import React from "react"
import { Link } from "gatsby"
import DateStyle from "../components/DateStyle"
import styles from "./BlogMain/BlogMain.module.scss"

const PostEntry = ({ post }) => {
  const {
    uri,
    title,
    featuredImage,
    excerpt,
    // termNames,
    // termSlugs,
    date,
    author,
    categories,
  } = post

  // {console.log(post.featuredImage)}


  return (
    <div className={styles.Entry}>
      <header>
        <Link to={`/${uri}/`}>
          <img
            src={featuredImage ? featuredImage.sourceUrl : ""}
            alt={featuredImage ? featuredImage.altText : ""}
          />
        </Link>
      </header>

      <article>
        <div className={styles.ArticleHeaderWrapper}>
          <div className={styles.Term}>
            {categories.nodes.map((category, index) => (
              <Link key={index} to={`/category/${category.slug}/`}>
                <span>{category.name} </span>
              </Link>
            ))}
            {/* {termNames.map((term, index) => (
              <Link key={index} to={`/category/${termSlugs[index]}/`}>
                <span>{term} </span>
              </Link>
            ))} */}
          </div>
          <div className={styles.Date}>
            <DateStyle date={date} />
          </div>
        </div>

        <Link to={`/${uri}/`}>
          <h3 dangerouslySetInnerHTML={{__html: title}} style={{ marginBottom: "5px" }}></h3>
        </Link>

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

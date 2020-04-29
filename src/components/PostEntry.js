import React from "react"
import { Link } from "gatsby"
// import Image from "./Image"
// import { blogURI } from "../../globals"

import styles from "./BlogMain/BlogMain.module.scss"

const PostEntry = ({ post }) => {
  const {
    uri,
    title,
    featuredImage,
    excerpt,
    termNames,
    termSlugs,
    date,
    author,
  } = post

  const dateMiliseconds = Date.parse(date)

  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

  var postDate = new Date(dateMiliseconds)

  var dd = postDate.getDate()

  var mm = postDate.getMonth()
  var yyyy = postDate.getFullYear()

  if (dd < 10) {
    dd = "0" + dd
  }
  postDate = monthNames[mm] + " " + dd + ", " + yyyy

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
            {termNames.map((term, index) => (
              <Link key={index} to={`/category/${termSlugs[index]}/`}>
                <span>{term} </span>
              </Link>
            ))}
          </div>
          <div className={styles.Date}>{postDate}</div>
        </div>

        <Link to={`/${uri}/`}>
          <h3 style={{ marginBottom: "5px" }}>{title}</h3>
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

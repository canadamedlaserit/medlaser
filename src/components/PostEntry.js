import React from "react"
import { Link } from "gatsby"
// import Image from "./Image"
import { blogURI } from "../../globals"

import styles from "./BlogMain/BlogMain.module.scss"


const PostEntry = ({ post }) => {
  const { uri, title, featuredImage, excerpt, termNames } = post

  return (
    <div className={styles.Entry} >
      <header>
        <img src={featuredImage ? featuredImage.sourceUrl : ""} alt="" />

        {console.log(termNames[0])}

        <div>{termNames[0]}</div>
        <Link to={`/${uri}/`}>
          <h2 style={{ marginBottom: "5px" }}>{title}</h2>
          {/* <Image image={featuredImage} style={{ margin: 0 }}/> */}
        </Link>
      </header>

      <div dangerouslySetInnerHTML={{ __html: excerpt }} />
    </div>
  )
}

export default PostEntry

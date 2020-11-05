import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import styles from "./AsSeen.module.scss"

export const fragment = graphql`
  fragment AsSeenSection on WPGraphQL_Page_Sectionfields_Sections_Asseen {
    fieldGroupName
  }
`
const imageData = [
  {
    src:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Daily_Hive_logo.png/880px-Daily_Hive_logo.png",
  },
  {
    src:
      "https://www.albawaba.com/sites/default/files/im/pr_new/Forbes__1446463886.jpg?width=1200&enable=upscale",
  },
  {
    src:
      "https://www.narcity.com/u/2019/08/26/6a2fb12ec1104d722904ab989c127f2d.png",
  },
  {
    src: `https://i.iheart.com/v3/re/assets.brands/5e533b49f83738ebdb6df70c?ops=gravity("center"),maxcontain(150,52),quality(80)`,
  },
]
const AsSeen = () => {
  return (
    <section className={styles.Section}>
      <div className={`container ${styles.Container}}`}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-12 ${styles.TextSide} ${styles.Col}`}>
            <div
              className={styles.TextSideWrapper}
              style={{ textAlign: "center" }}
            >
              {/* {text ? (
                <div
                  className={styles.Text}
                  dangerouslySetInnerHTML={{ __html: text }}
                ></div>
              ) : (
                ""
              )} */}
              {imageData.map(data => (
                <img
                  src={data.src}
                  className="px-4"
                  //                  width="164"
                  height="40"
                  alt="logo"
                />
              ))}{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AsSeen

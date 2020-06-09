import React from "react"
import { graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import styles from "./InquireButtonsBlock.module.scss"

export const fragment = graphql`
  fragment InquireButtonsBlockSection on WPGraphQL_Page_Sectionfields_Sections_Inquirebuttonsblock {
    title
    btntext1
    btntext2
    link1
    link2
  }
`

const InquireButtonsBlock = ({ title, btntext1, btntext2, link1, link2 }) => {
  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row`}>
          <div className="col-md-12">
            <h3>{title}</h3>

            <div className={styles.buttonsWrapper}>
              <AnchorLink to={link1} className="btn btn-red">
                {btntext1}
              </AnchorLink>
              <a
                href={link2}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-black-transparent"
              >
                {btntext2}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InquireButtonsBlock

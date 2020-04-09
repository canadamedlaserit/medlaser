import React, { Component } from "react"
import { graphql } from "gatsby"

import styles from "./PrivacyPolicyContainer.module.scss"

export const fragment = graphql`
  fragment PrivacyPolicyContainerSection on WPGraphQL_Page_Sectionfields_Sections_Privacypolicycontainer {
    content
  }
`

class PrivacyPolicyContainer extends Component {
  render() {
    const { content } = this.props

    return (
      <section className={styles.Section}>
        <div className={`container-fluid ${styles.Container}`}>
          <div className={`row ${styles.Row}`}>
            <div className={`col-md-12 ${styles.Text}`}>
              <div
                className={styles.Content}
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default PrivacyPolicyContainer

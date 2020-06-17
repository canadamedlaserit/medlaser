import React from "react"
import { graphql } from "gatsby"


export const fragment = graphql`
  fragment MoreInfoAnchorSection on WPGraphQL_Page_Sectionfields_Sections_MoreInfoAnchor {
    fieldGroupName
  }
`

const MoreInfoAnchor = () => {
  return <div id="more-info"></div>
}

export default MoreInfoAnchor

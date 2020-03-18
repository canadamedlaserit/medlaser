import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import InnerHero from "../components/InnerHero/InnerHero"

export const query = graphql`
  {
    wpgraphql {
      page(id: "coolsculpting-body", idType: URI) {
        id
        title
        sectionFields {
          sections {
            __typename
            ...InnerHeroSection
          }
        }
      }
    }
  }
`

const CoolsculptingBody = ({ data, location }) => {
  const sections = data.wpgraphql.page.sectionFields.sections

  return (
    <Layout location={location}>
      {sections.map((section, index) => {
        const typeName = section.__typename

        switch (typeName) {
          case "WPGraphQL_Page_Sectionfields_Sections_Innerhero":
            return <InnerHero key={index} {...section} />

          default:
            return console.log("You done. Default thing")
        }
      })}
    </Layout>
  )
}

export default CoolsculptingBody

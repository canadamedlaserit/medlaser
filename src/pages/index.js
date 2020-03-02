import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import MainHero from "../components/homeComponents/MainHero/MainHero"


export const query = graphql`
  {
    wpgraphql {
      pageBy(uri: "home") {
        id
        title
        sectionFields {
          sections {
            __typename
            ...MainHeroSection
          }
        }
      }
    }
  }
`

const Home = ({ data, location }) => {
  const sections = data.wpgraphql.pageBy.sectionFields.sections

  return (
    <Layout location={location}>
      {sections.map((section, index) => {
        const typeName = section.__typename

        switch (typeName) {
          case "WPGraphQL_Page_Sectionfields_Sections_Mainhero":
            return <MainHero key={index} {...section} />

          default:
            return <p>You done busted it.</p>
        }
      })}

      asdsad
    </Layout>
  )
}

export default Home

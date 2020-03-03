import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import MainHero from "../components/homeComponents/MainHero/MainHero"
import Specials from "../components/homeComponents/Specials/Specials"

export const query = graphql`
  {
    wpgraphql {
      generalSettings {
        title
        description
      }
      pageBy(uri: "home") {
        id
        title
        sectionFields {
          sections {
            __typename
            ...MainHeroSection
            ...SpecialsSection
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
            
          case "WPGraphQL_Page_Sectionfields_Sections_Homeourspecials":
            return <Specials key={index} {...section} />

          default:
            return <p key={index} >You done busted it.</p>
        }
      })}
    </Layout>
  )
}

export default Home

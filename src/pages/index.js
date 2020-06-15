import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/particles/SEO"
import MainHero from "../components/homeComponents/MainHero/MainHero"
import Specials from "../components/homeComponents/Specials/Specials"
import OurServices from "../components/homeComponents/OurServices/OurServices"
import LaserClinics from "../components/homeComponents/LaserClinics/LaserClinics"
import VideoSection from "../components/homeComponents/VideoSection/VideoSection"
// import LookYounger from "../components/homeComponents/LookYounger/LookYounger"
import Faqs from "../components/homeComponents/Faqs/Faqs"
import FullWidthImage from "../components/homeComponents/FullWidthImage/FullWidthImage"
import Reviews from "../components/homeComponents/Reviews/Reviews"
import BeforeAfter from "../components/BeforeAfter/BeforeAfter"
import Contact from "../components/Contact/Contact"
import LocationMap from "../components/LocationMap/LocationMap"
import BeforeAfterImage from "../components/BeforeAfterImage/BeforeAfterImage"

export const query = graphql`
  {
    wpgraphql {
      generalSettings {
        title
        description
      }
      pageBy(uri: "home") {
        id
        featuredImage {
          sourceUrl
        }
        title
        slug
        seo {
          title
          metaDesc
          focuskw
          metaKeywords
          metaRobotsNoindex
          metaRobotsNofollow
          opengraphTitle
          opengraphDescription
          opengraphImage {
            altText
            sourceUrl
            srcSet
          }
          twitterTitle
          twitterDescription
          twitterImage {
            altText
            sourceUrl
            srcSet
          }
        }
        sectionFields {
          sections {
            __typename
            ...MainHeroSection
            ...SpecialsSection
            ...ServicesSection
            ...LaserClinicsSection
            ...VideoSection
            # ...LookYoungerSection
            ...FaqsSection
            ...FullWidthImageSection
            ...ReviewsSection
            ...BeforeAfterSection
            ... on WPGraphQL_Page_Sectionfields_Sections_Contact {
              fieldGroupName
            }
            ...LocationMapSection
            ...BeforeAfterImageSection
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
      <SEO data={data.wpgraphql.pageBy} />

      {sections.map((section, index) => {
        const typeName = section.__typename

        switch (typeName) {
          case "WPGraphQL_Page_Sectionfields_Sections_Mainhero":
            return <MainHero key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Homeourspecials":
            return <Specials key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Ourservices":
            return <OurServices key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Laserclinics":
            return <LaserClinics key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Fullsizevideo":
            return <VideoSection key={index} {...section} />

          // case "WPGraphQL_Page_Sectionfields_Sections_Lookyounger":
          //   return <LookYounger key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Fullwidthimage":
            return <FullWidthImage key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Faqs":
            return <Faqs key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Googlereviews":
            return <Reviews key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_BeforeAfter":
            return <BeforeAfter key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Contact":
            return <Contact bgcolor="#161616" key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Locationsmap":
            return <LocationMap key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Beforeafterimage":
            return <BeforeAfterImage key={index} {...section} />

          default:
            return console.log("You done. Default thing")
        }
      })}
    </Layout>
  )
}

export default Home

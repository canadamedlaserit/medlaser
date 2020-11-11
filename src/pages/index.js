import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/particles/SEO"

import MainHero from "../components/homeComponents/MainHero/MainHero"
import Specials from "../components/homeComponents/Specials/Specials"
import Asseen from "../components/homeComponents/AsSeenComponent/AsSeen"
import AcuityScheduling from "../components/homeComponents/AcuityScheduling/AcuityScheduling"
import OurServices from "../components/homeComponents/OurServices/OurServices"
import VideoSection from "../components/homeComponents/VideoSection/VideoSection"
import Reviews from "../components/homeComponents/Reviews/Reviews"
import BeforeAfterImage from "../components/BeforeAfterImage/BeforeAfterImage"
import LaserClinics from "../components/homeComponents/LaserClinics/LaserClinics"
import FullWidthImage from "../components/homeComponents/FullWidthImage/FullWidthImage"
import FaqsTabs from "../components/homeComponents/Faqs/FaqsTabs"
import Contact from "../components/Contact/Contact"
import LocationMap from "../components/LocationMap/LocationMap"

const Home = ({ data, location }) => {
  const sections = data.wpgraphql.page.sectionFields.sections

  return (
    <Layout location={location}>
      <SEO data={data.wpgraphql.page} />

      {sections.map((section, index) => {
        const typeName = section.__typename

        switch (typeName) {
          case "WPGraphQL_Page_Sectionfields_Sections_Mainhero":
            return <MainHero key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Homeourspecials":
            return <Specials key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Asseen":
            return <Asseen key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Acuityscheduling":
            return <AcuityScheduling key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Ourservices":
            return <OurServices key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Fullsizevideo":
            return <VideoSection key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Googlereviews":
            return <Reviews key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Beforeafterimage":
            return <BeforeAfterImage key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Laserclinics":
            return <LaserClinics key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Fullwidthimage":
            return <FullWidthImage key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Faqstabs":
            return <FaqsTabs key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Contact":
            return <Contact key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Locationsmap":
            return <LocationMap key={index} {...section} />

          default:
            return ""
        }
      })}
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    wpgraphql {
      page(id: "home", idType: URI) {
        id
        featuredImage {
          sourceUrl
        }
        title
        slug
        modified
        date
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
            ...MainHeroSection
            ...AsSeenSection
            ...AcuitySchedulingSection
            ...SpecialsSection
            ...ServicesSection
            ...VideoSection
            ...ReviewsSection
            ...BeforeAfterImageSection
            ...LaserClinicsSection
            ...FullWidthImageSection
            ...FaqsTabsSection
            ...ContactSection
            ...LocationMapSection
          }
        }
      }
    }
  }
`

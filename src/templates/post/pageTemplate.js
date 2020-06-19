import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/particles/SEO"

import MainHero from "../../components/homeComponents/MainHero/MainHero"
import Specials from "../../components/homeComponents/Specials/Specials"
import OurServices from "../../components/homeComponents/OurServices/OurServices"
import OurServicesSlider from "../../components/OurServicesSlider/OurServicesSlider"
import LaserClinics from "../../components/homeComponents/LaserClinics/LaserClinics"
import VideoSection from "../../components/homeComponents/VideoSection/VideoSection"
import LookYounger from "../../components/homeComponents/LookYounger/LookYounger"
import Faqs from "../../components/homeComponents/Faqs/Faqs"
import FullWidthImage from "../../components/homeComponents/FullWidthImage/FullWidthImage"
import FullWidthImageRedBtn from "../../components/FullWidthImageRedBtn/FullWidthImageRedBtn"
import FullWidthImageGeneral from "../../components/FullWidthImageGeneral/FullWidthImageGeneral"
import Reviews from "../../components/homeComponents/Reviews/Reviews"
import BeforeAfter from "../../components/BeforeAfter/BeforeAfter"
import BeforeAfterImage from "../../components/BeforeAfterImage/BeforeAfterImage"
import Contact from "../../components/Contact/Contact"
import Injury from "../../components/Contact/Injury"
import InquiryWithSubscription from "../../components/Contact/InquiryWithSubscription"
import ContactLocation from "../../components/Contact/ContactLocation"
import LocationMap from "../../components/LocationMap/LocationMap"
import LocationsMapWithOptions from "../../components/LocationsMapWithOptions/LocationsMapWithOptions"
import InnerHero from "../../components/InnerHero/InnerHero"
import InnerHeroLocation from "../../components/InnerHeroLocation/InnerHeroLocation"
import InnerHeroClean from "../../components/InnerHeroClean/InnerHeroClean"
import InnerHeroStripFullWidth from "../../components/InnerHeroStripFullWidth/InnerHeroStripFullWidth"
import InnerHeroImageFullWidth from "../../components/InnerHeroImageFullWidth/InnerHeroImageFullWidth"
import EqualTextLeftImageRight from "../../components/EqualTextLeftImageRight/EqualTextLeftImageRight"
import EqualTextRightImageLeft from "../../components/EqualTextRightImageLeft/EqualTextRightImageLeft"
import BiggerLeftWithButtons from "../../components/BiggerLeftWithButtons/BiggerLeftWithButtons"
import BiggerLeftWithButtonsStyle2 from "../../components/BiggerLeftWithButtonsStyle2/BiggerLeftWithButtonsStyle2"
import BiggerRightWithButtons from "../../components/BiggerRightWithButtons/BiggerRightWithButtons"
import TextFullWidth from "../../components/TextFullWidth/TextFullWidth"
import TextFullWidthFont from "../../components/TextFullWidthFont/TextFullWidthFont"
import TextFullWidthListsButton from "../../components/TextFullWidthListsButton/TextFullWidthListsButton"
import VideoSlider from "../../components/VideoSlider/VideoSlider"
import TwoSidesLinks from "../../components/TwoSidesLinks/TwoSidesLinks"
import ThreeImageLinks from "../../components/ThreeImageLinks/ThreeImageLinks"
import TreatmentAreas from "../../components/TreatmentAreas/TreatmentAreas"
import TreatmentAreas2 from "../../components/TreatmentAreas/TreatmentAreas2"
import SkinTypes from "../../components/SkinTypes/SkinTypes"
import EqualTextWithStrip from "../../components/EqualTextWithStrip/EqualTextWithStrip"
import GetPricing from "../../components/GetPricing/GetPricing"
import LeftRightMultiple from "../../components/LeftRightMultiple/LeftRightMultiple"
import LinkSlider from "../../components/LinkSlider/LinkSlider"
import HalfImageRedBtn from "../../components/HalfImageRedBtn/HalfImageRedBtn"
import BiggerLeftNumberedList from "../../components/BiggerLeftNumberedList/BiggerLeftNumberedList"
import CategoryTabs from "../../components/CategoryTabs/CategoryTabs"
import ThreeColumns from "../../components/ThreeColumns/ThreeColumns"
import PermanentTwoLists from "../../components/PermanentTwoLists/PermanentTwoLists"
import EqualWithBlackHeader from "../../components/EqualWithBlackHeader/EqualWithBlackHeader"
import LocationsWp from "../../components/LocationsWp/LocationsWp"
import PrivacyPolicyContainer from "../../components/PrivacyPolicyContainer/PrivacyPolicyContainer"
import LocationText from "../../components/LocationText/LocationText"
import TeamLocation from "../../components/TeamLocation/TeamLocation"
import TeamSlider from "../../components/TeamSlider/TeamSlider"
import EqualTextLinks from "../../components/EqualTextLinks/EqualTextLinks"
import NotAlignedTitle from "../../components/NotAlignedTitle/NotAlignedTitle"
import TextAndThreeImages from "../../components/TextAndThreeImages/TextAndThreeImages"
import PhoneEmailSocials from "../../components/PhoneEmailSocials/PhoneEmailSocials"
import OurSpecialsTabs from "../../components/OurSpecialsTabs/OurSpecialsTabs"
import BeforeAfterTabs from "../../components/BeforeAfterTabs/BeforeAfterTabs"
import InquireButtonsBlock from "../../components/InquireButtonsBlock/InquireButtonsBlock"
import ClinicsSlider from "../../components/ClinicsSlider/ClinicsSlider"
import FourColumnsBlock from "../../components/FourColumnsBlock/FourColumnsBlock"
import MoreInfoAnchor from "../../components/MoreInfoAnchor/MoreInfoAnchor"
import ThankYouHero from '../../components/ThankYouHero/ThankYouHero'


const PageTempl = ({ data, location, pageContext }) => {
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

          case "WPGraphQL_Page_Sectionfields_Sections_Ourservices":
            return <OurServices key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Ourservicesslider":
            return <OurServicesSlider key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Laserclinics":
            return <LaserClinics key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Fullsizevideo":
            return <VideoSection key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Lookyounger":
            return <LookYounger key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Faqs":
            return <Faqs key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Fullwidthimage":
            return <FullWidthImage key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Fullwidthimageredbtn":
            return <FullWidthImageRedBtn key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Fullwidthimagegeneral":
            return <FullWidthImageGeneral key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Googlereviews":
            return <Reviews key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_BeforeAfter":
            return <BeforeAfter key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Beforeafterimage":
            return <BeforeAfterImage key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Contact":
            return <Contact key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Injury":
            return <Injury key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Inquiry2":
            return <InquiryWithSubscription key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Contactlocation":
            return <ContactLocation key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Locationsmap":
            return <LocationMap key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Locationsmapwithoptions":
            return <LocationsMapWithOptions key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Innerhero":
            return <InnerHero key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Innerherolocation":
            return <InnerHeroLocation key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Innerheroclean":
            return <InnerHeroClean key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Innerherostripfullwidth":
            return <InnerHeroStripFullWidth key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Innerheroimagefullwidth":
            return <InnerHeroImageFullWidth key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Equaltextleftimageright":
            return <EqualTextLeftImageRight key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Equaltextrightimageleft":
            return <EqualTextRightImageLeft key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Biggerleftwithbuttons":
            return <BiggerLeftWithButtons key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Biggerleftwithbuttonsstyle2":
            return <BiggerLeftWithButtonsStyle2 key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Biggerrightwithbuttons":
            return <BiggerRightWithButtons key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Textfullwidth":
            return <TextFullWidth key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Textfullwidthfont":
            return <TextFullWidthFont key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Textfullwidthlistsbutton":
            return <TextFullWidthListsButton key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Videoslider":
            return <VideoSlider key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Twosideslinks":
            return <TwoSidesLinks key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Threeimagelinks":
            return <ThreeImageLinks key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Treatmentareas":
            return <TreatmentAreas key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Treatmentareas2":
            return <TreatmentAreas2 key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Skintypes":
            return <SkinTypes key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Equaltextwithstrip":
            return <EqualTextWithStrip key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Getpricing":
            return <GetPricing key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Leftrightmultiple":
            return <LeftRightMultiple key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Linkslider":
            return <LinkSlider key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Halfimageredbtn":
            return <HalfImageRedBtn key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Biggerleftnumberedlist":
            return <BiggerLeftNumberedList key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Categorytabs":
            return <CategoryTabs key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Threecolumns":
            return <ThreeColumns key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Permanenttwolists":
            return <PermanentTwoLists key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Equalwithblackheader":
            return <EqualWithBlackHeader key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Locationscards":
            return <LocationsWp key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Privacypolicycontainer":
            return <PrivacyPolicyContainer key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Locationtext":
            return <LocationText key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Teamlocation":
            return <TeamLocation key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Teamslider":
            return <TeamSlider key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Equaltextlinks":
            return <EqualTextLinks key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Notalignedtitle":
            return <NotAlignedTitle key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Textandthreeimages":
            return <TextAndThreeImages key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Phoneemailsocials":
            return <PhoneEmailSocials key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Ourspecialstabs":
            return <OurSpecialsTabs key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Beforeaftertabs":
            return <BeforeAfterTabs key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Inquirebuttonsblock":
            return <InquireButtonsBlock key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Clinicsslider":
            return <ClinicsSlider key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Fourcolumnsblock":
            return <FourColumnsBlock key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_MoreInfoAnchor":
            return <MoreInfoAnchor key={index} {...section} />

            case "WPGraphQL_Page_Sectionfields_Sections_ThankYouHero":
              return <ThankYouHero key={index} {...section} />
            
          default:
            return ""
        }
      })}
    </Layout>
  )
}

export default PageTempl

export const pageQuery = graphql`
  query($id: ID!) {
    wpgraphql {
      page(id: $id, idType: ID) {
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
            ...MainHeroSection
            ...SpecialsSection
            ...ServicesSection
            ...OurServicesSliderSection
            ...LaserClinicsSection
            ...VideoSection
            ...LookYoungerSection
            ...FaqsSection
            ...FullWidthImageSection
            ...FullWidthImageRedBtnSection
            ...FullWidthImageGeneralSection
            ...ReviewsSection
            ...BeforeAfterSection
            ...BeforeAfterImageSection
            ...ContactSection
            ...InjurySection
            ...InquiryWithSubscriptionSection
            ...ContactLocationSection
            ...LocationMapSection
            ...LocationsMapWithOptionsSection
            ...InnerHeroSection
            ...InnerHeroLocationSection
            ...InnerHeroCleanSection
            ...InnerHeroStripFullWidthSection
            ...InnerHeroImageFullWidthSection
            ...EqualTextLeftImageRightSection
            ...EqualTextRightImageLeftSection
            ...BiggerLeftWithButtonsSection
            ...BiggerLeftWithButtonsStyle2Section
            ...BiggerRightWithButtonsSection
            ...TextFullWidthSection
            ...TextFullWidthFontSection
            ...TextFullWidthListsButtonSection
            ...VideoSliderSection
            ...TwoSidesLinksSection
            ...ThreeImageLinksSection
            ...TreatmentAreasSection
            ...TreatmentAreas2Section
            ...SkinTypesSection
            ...EqualTextWithStripSection
            ...GetPricingSection
            ...LeftRightMultipleSection
            ...LinkSliderSection
            ...HalfImageRedBtnSection
            ...BiggerLeftNumberedListSection
            ...CategoryTabsSection
            ...ThreeColumnsSection
            ...PermanentTwoListsSection
            ...EqualWithBlackHeaderSection
            ...LocationsWpSection
            ...PrivacyPolicyContainerSection
            ...LocationTextSection
            ...TeamLocationSection
            ...TeamSliderSection
            ...EqualTextLinksSection
            ...NotAlignedTitleSection
            ...TextAndThreeImagesSection
            ...PhoneEmailSocialsSection
            ...OurSpecialsTabsSection
            ...BeforeAfterTabsSection
            ...InquireButtonsBlockSection
            ...ClinicsSliderSection
            ...FourColumnsBlockSection
            ...MoreInfoAnchorSection
            ...ThankYouHeroSection
          }
        }
      }
    }
  }
`

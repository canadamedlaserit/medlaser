import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

import styles from "./BiggerLeftNumberedList.module.scss"

export const fragment = graphql`
  fragment BiggerLeftNumberedListSection on WPGraphQL_Page_Sectionfields_Sections_Biggerleftnumberedlist {
    title
    subtitle
    content
    backgroundcolor
    textcolor
    image {
      sourceUrl
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
    mobileimage {
      sourceUrl
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 450) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`

const BiggerLeftNumberedList = ({
  title,
  subtitle,
  content,
  backgroundcolor,
  textcolor,
  image,
  mobileimage,
}) => {
  const fluidImage = image.imageFile.childImageSharp.fluid
  const fluidImageMobile = mobileimage.imageFile.childImageSharp.fluid



//   const TextSide = styled.div`
//     @media only screen and (max-width: 767px) {
//       background-color: ${imagecontent ? "#000000" : "#ffffff"};
//       color: ${imagecontent ? "#ffffff" : "#000000"};
//     }
//   `

  return (
    <section className={styles.Section}>
      <div className={`container-fluid `}>
        {title ? (
          <div className={`row ${styles.Row}`}>
            <div className={`col-md-12`}>
              <h3>{title}</h3>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className={`row ${styles.Row}`}>
          <div
            className={`col-md-7 biggerSide2 ${styles.TextSide} ${styles.Col}`}
          >
            <div className={styles.TextSideWrapper}>
              {subtitle ? <h5>{subtitle}</h5> : ""}

              <div
                className="content text"
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </div>
          </div>

          <BackgroundImage
            className={`col-md-5 smallerSide2 ${styles.ImageSide} ${styles.Col}`}
            fluid={fluidImage}
          ></BackgroundImage>
        </div>
      </div>
    </section>
  )
}

export default BiggerLeftNumberedList

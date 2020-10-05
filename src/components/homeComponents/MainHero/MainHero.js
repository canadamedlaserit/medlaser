import React, { Component } from "react"
import { graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Img from "gatsby-image"

import styles from "./MainHero.module.scss"

export const fragment = graphql`
  fragment MainHeroSection on WPGraphQL_Page_Sectionfields_Sections_Mainhero {
    heading1
    heading2
    separator
    subtitle
    btntext1
    backgroundimage {
      altText
      sourceUrl
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
    backgroundimagemobile {
      altText
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

class MainHero extends Component {
  constructor(props) {
    super(props)

    this.state = {
      windowWidth: 0,
    }
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    this.setState({
      windowWidth: window.innerWidth,
    })
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  render() {
    const {
      heading1,
      heading2,
      separator,
      subtitle,
      btntext1,
      backgroundimage,
      backgroundimagemobile,
    } = this.props

    //if no image display nothing
    const fluidImage = backgroundimage
      ? backgroundimage.imageFile.childImageSharp.fluid
      : false

    const fluidImageMobile = backgroundimagemobile
      ? backgroundimagemobile.imageFile.childImageSharp.fluid
      : false

    return (
      <section className={styles.MainHero}>
        <div className={`container-fluid ${styles.container}`}>
          <div className={`row ${styles.row}`}>
            <div className={`col-md-7 biggerSide ${styles.imgSide}`}>
              {fluidImage ? (
                <Img
                  fluid={
                    this.state.windowWidth > 767 ? fluidImage : fluidImageMobile
                  }
                  loading="eager"
                  fadeIn={false}
                  alt={backgroundimage.altText}
                  className="gatsby-image-background"
                />
              ) : (
                ""
              )}
            </div>

            <div className={`col-md-5 smallerSide ${styles.rightSide}`}>
              <div className={styles.rightSideWrapper}>
                <div className={styles.Title}>
                  <h1>{heading1}</h1>
                  <span>{separator} </span>
                  <h2>{heading2}</h2>
                </div>

                <div
                  className={styles.Subtitle}
                  dangerouslySetInnerHTML={{ __html: subtitle }}
                ></div>

                <div className={styles.buttonsWrapper}>
                  <AnchorLink to="/#contact" className="btn btn-red">
                    {btntext1}
                  </AnchorLink>
                  {/* <Link to="/" className="btn btn-black-transparent">
                    {btntext2}
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default MainHero

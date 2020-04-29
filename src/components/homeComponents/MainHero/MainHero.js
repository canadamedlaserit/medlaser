import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styles from "./MainHero.module.scss"

export const fragment = graphql`
  fragment MainHeroSection on WPGraphQL_Page_Sectionfields_Sections_Mainhero {
    title
    subtitle
    btntext1
    btntext2
    backgroundimage {
      sourceUrl
      imageFile {
        childImageSharp {
          fluid(
            quality: 100
            maxWidth: 1200
            traceSVG: {
              color: "#9C1A3B"
              turnPolicy: TURNPOLICY_MINORITY
              # blackOnWhite: false
            }
          ) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
    backgroundimagemobile {
      sourceUrl
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400) {
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
      title,
      subtitle,
      btntext1,
      btntext2,
      backgroundimage,
      backgroundimagemobile,
    } = this.props

    const fluidImage = backgroundimage.imageFile.childImageSharp.fluid
    const fluidImageMobile =
      backgroundimagemobile.imageFile.childImageSharp.fluid

    return (
      <section className={styles.MainHero}>
        <div className={`container-fluid ${styles.container}`}>
          <div className={`row ${styles.row}`}>
            <BackgroundImage
              fadeIn="true"
              className={`col-md-7 biggerSide ${styles.imgSide}`}
              fluid={
                this.state.windowWidth > 767 ? fluidImage : fluidImageMobile
              }
            ></BackgroundImage>

            <div className={`col-md-5 smallerSide ${styles.rightSide}`}>
              <div className={styles.rightSideWrapper}>
                <h1>{title}</h1>
                <h3>{subtitle}</h3>

                <div className={styles.buttonsWrapper}>
                  <Link to="/#book" className="btn btn-red">
                    {btntext1}
                  </Link>
                  <Link to="/#book" className="btn btn-black-transparent">
                    {btntext2}
                  </Link>
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

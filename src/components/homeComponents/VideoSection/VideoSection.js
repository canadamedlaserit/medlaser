import React from "react"
import { graphql } from "gatsby"
import ReactPlayer from "react-player"
import Img from "gatsby-image"

import styles from "./VideoSection.module.scss"

export const fragment = graphql`
  fragment VideoSection on WPGraphQL_Page_Sectionfields_Sections_Fullsizevideo {
    title
    videolink
    imagelink
    playicon {
      sourceUrl
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 65) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

class VideoSection extends React.Component {
  handlePlay(event) {
    // event.target.pauseVideo()
    // console.log('clicked')
  }

  render() {
    const { title, videolink, imagelink, playicon } = this.props
    const fluidImage = playicon.imageFile.childImageSharp.fluid

    return (
      <section className={styles.Section}>
        <div className={`container-fluid ${styles.Container}`}>
          <div className={`row ${styles.Row}`}>
            <div className={`col-md-12 ${styles.Col}`}>
              <h2>{title}</h2>

              <div className={styles.fic}></div>
              <div className={styles.PlayerWrapper}>
                <ReactPlayer
                  className={styles.ReactPlayer}
                  playing
                  playIcon={<Img className={styles.Icon} fluid={fluidImage}/>}
                  url={videolink}
                  light={imagelink}
                  onPlay={this.handlePlay()}
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default VideoSection
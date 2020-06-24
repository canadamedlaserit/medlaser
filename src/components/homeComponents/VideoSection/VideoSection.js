import React from "react"
import { graphql } from "gatsby"
import ReactPlayer from "react-player"
import play from "../../../images/play-icon.png"
// import fallback from "../../../images/fallback.svg"
import videoBg from "../../../images/video-bg.jpg"

import styles from "./VideoSection.module.scss"

export const fragment = graphql`
  fragment VideoSection on WPGraphQL_Page_Sectionfields_Sections_Fullsizevideo {
    title
    videolink
    image {
      sourceUrl
    }
  }
`

class VideoSection extends React.Component {
  state = {
    started: false,
  }

  handleReady = () => {
    this.setState({ started: true })
  }

  ref = player => {
    this.player = player
  }

  // youtube_parser(url) {
  //   var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  //   var match = url.match(regExp)
  //   return match && match[7].length === 11 ? match[7] : false
  // }

  render() {
    const { title, videolink, image } = this.props

    return (
      <section className={styles.Section}>
        <div className={`container-fluid ${styles.Container}`}>
          <div className={`row ${styles.Row}`}>
            <div className={`col-md-12 ${styles.Col}`}>
              <h2>{!this.state.started ? title : ""}</h2>

              <div className={styles.fic}></div>
              <div className={styles.PlayerWrapper}>
                <ReactPlayer
                  ref={this.ref}
                  className={styles.ReactPlayer}
                  playing
                  playIcon={
                    <img alt="play-icon" className={styles.Icon} src={play} />
                  }
                  url={videolink}
                  light={image ? image.sourceUrl : videoBg}
                  onReady={this.handleReady}
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

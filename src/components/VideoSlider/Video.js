import React, { Component } from "react"
import ReactPlayer from "react-player"
import play from "../../images/play-icon.png"
import fallback from "../../images/fallback.svg"

import styles from "./Video.module.scss"

class Video extends Component {
  state = {
    playing: true,
  }

  ref = player => {
    this.player = player
  }

  handlePause = () => {
    console.log("onPause")
    this.setState({ playing: false })
    this.setState({ wasPaused: true })
  }

  handlePlay = () => {
    console.log("onPlay")
    this.setState({ playing: true })
  }

  youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
    var match = url.match(regExp)
    return match && match[7].length === 11 ? match[7] : false
  }

  render() {
    const { videolink, imagelink } = this.props

    return (
      <>
        <ReactPlayer
          ref={this.ref}
          className={styles.ReactPlayer}
          playing={this.props.isVisible && this.state.playing ? true : false}
          playIcon={
            <img
              alt="play-icon"
              loading="lazy"
              className={styles.Icon}
              src={play}
            />
          }
          url={videolink}
          light={
            imagelink
              ? imagelink.sourceUrl
              : videolink ? `https://img.youtube.com/vi/${this.youtube_parser(
                  videolink
                )}/hqdefault.jpg` : fallback
          }
          width="100%"
          height="100%"
          onPause={this.handlePause}
          onPlay={this.handlePlay}
        />
      </>
    )
  }
}
export default Video

import React, { Component } from "react"
import ReactPlayer from "react-player"
import play from "../../images/play-icon.png"

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
          light={imagelink}
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

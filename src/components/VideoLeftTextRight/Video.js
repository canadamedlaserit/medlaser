import React, { Component } from "react"
import ReactPlayer from "react-player"
import play from "../../images/play-btn-black.png"
import styles from "./VideoLeftTextRight.module.scss"

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
          playing={this.state.playing ? true : false}
          playIcon={
            <img alt="play-icon" className={styles.PlayIcon} src={play} />
          }
          url={videolink}
          light={imagelink ? imagelink : true}
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

import React from "react"
import { graphql } from "gatsby"
import ReactPlayer from "react-player"

import styles from "./VideoSection.module.scss"

export const fragment = graphql`
  fragment VideoSection on WPGraphQL_Page_Sectionfields_Sections_Fullsizevideo {
    title
    videolink
  }
`

class VideoSection extends React.Component {
  handlePlay(event) {
    // event.target.pauseVideo()
    console.log(event);
  }

  render() {
    const { title, videolink } = this.props

    return (
      <section className={styles.Section}>
        <div className={`container-fluid ${styles.Container}`}>
          <div className={`row ${styles.Row}`}>
            <div className={`col-md-12 ${styles.TextSide}`}>
              <h2>{title}</h2>
              {videolink}

              <ReactPlayer
                playing
                url={videolink}
                light="http://placekitten.com/200/300"
                onReady={this.handlePlay()}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default VideoSection

// const VideoSection = ({ title, videolink }) => {
//     _onReady(event) {
//         event.target.pauseVideo();
//       }

//   return (
// <section className={styles.Section}>
//   <div className={`container-fluid ${styles.Container}`}>
//     <div className={`row ${styles.Row}`}>
//       <div className={`col-md-12 ${styles.TextSide}`}>
//         <h2>{title}</h2>
//         {videolink}

//         <ReactPlayer
//           url={videolink}
//           light="true"
//           onReady={this.handlePlay()}
//         />
//       </div>
//     </div>
//   </div>
// </section>
//   )
// }

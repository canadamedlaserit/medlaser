import React, { Component } from "react"
import { graphql } from "gatsby"
import Swiper from "react-id-swiper"
import Video from "./Video"
import VisibilitySensor from "react-visibility-sensor"

import styles from "./VideoSlider.module.scss"

export const fragment = graphql`
  fragment VideoSliderSection on WPGraphQL_Page_Sectionfields_Sections_Videoslider {
    title
    slides {
      ... on WPGraphQL_Page_Sectionfields_Sections_Videoslider_slides {
        title
        videolink
        imagelink {
          sourceUrl
        }
      }
    }
  }
`

class VideoSlider extends Component {
  state = {
    getElement: null,
  }

  componentDidMount() {
    this.setState(() => {
      return {
        getElement: document.getElementById("sample"),
      }
    })
  }

  render() {
    const { title, slides } = this.props
    var containmentDOMRect = this.state.getElement
      ? this.state.getElement
      : null

    const params = {
      slidesPerView: "auto",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        //   dragSize: "446",
      },
      spaceBetween: 0,
      renderPrevButton: () => (
        <div className="swiper-button-prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25.432"
            height="50.865"
            viewBox="0 0 25.432 50.865"
          >
            <g transform="translate(153.435 50.865) rotate(180)">
              <g transform="translate(128.003 0)">
                <path
                  d="M153.141,24.7,129.828.327A1.06,1.06,0,1,0,128.3,1.792l22.612,23.641L128.3,49.073a1.06,1.06,0,0,0,1.532,1.465l23.314-24.373A1.062,1.062,0,0,0,153.141,24.7Z"
                  transform="translate(-128.003 0)"
                />
              </g>
            </g>
          </svg>
        </div>
      ),
      renderNextButton: () => (
        <div className="swiper-button-next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16.325"
            height="34.982"
            viewBox="0 0 16.325 34.982"
          >
            <defs></defs>x
            <path
              d="M144.139,16.987,129.174.225A.65.65,0,0,0,128.212.2a.767.767,0,0,0-.021,1.031l14.515,16.259L128.191,33.75a.767.767,0,0,0,.021,1.031.649.649,0,0,0,.962-.023L144.139,18A.768.768,0,0,0,144.139,16.987Z"
              transform="translate(-128.003 0)"
            />
          </svg>
        </div>
      ),
    }

    return (
      <section className={styles.Section}>
        <div className={`container-fluid ${styles.Container}`}>
          <div className={`row ${styles.Row}`}>
            <div className={`col-md-12 ${styles.Titles}`}>
              <h3>{title}</h3>
            </div>
            <div className={`col-md-12 video-swiper ${styles.SwiperWrapper}`}>
              <Swiper id="sample" {...params}>
                {/* {slides.map((slide, index) => (
                  <div key={index} className={styles.SwiperSlide}>
                    <h5>{slide.title}</h5>

                    <div className={styles.InsideSlider}>
                      <div className={styles.Inner}>
                        <Video
                          index={index}
                          videolink={slide.videolink}
                          imagelink={slide.imagelink}
                        />
                      </div>
                    </div>
                  </div>
                ))} */}

                {/* {slides.map((slide, index) => (
                  <div key={index} className={styles.SwiperSlide}>
                    <VisibilitySensor containment={containmentDOMRect}>
                      <div>
                        <h5>{slide.title}</h5>

                        <div className={styles.InsideSlider}>
                          <div className={styles.Inner}>
                            <Video
                              index={index}
                              videolink={slide.videolink}
                              imagelink={slide.imagelink}
                              isV
                            />
                          </div>
                        </div>
                      </div>
                    </VisibilitySensor>
                  </div>
                ))} */}

                {slides.map((slide, index) => {
                  return (
                    <div key={index} className={styles.SwiperSlide}>
                      <VisibilitySensor containment={containmentDOMRect}>
                        {({ isVisible }) => {
                          return (
                            <div>
                              <h5>{slide.title}</h5>

                              <div className={styles.InsideSlider}>
                                <div className={styles.Inner}>
                                  <Video
                                    videolink={slide.videolink}
                                    imagelink={slide.imagelink}
                                    isVisible={isVisible}
                                  />
                                </div>
                              </div>
                            </div>
                          )
                        }}
                      </VisibilitySensor>
                    </div>
                  )
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default VideoSlider

// const VideoSlider = ({ title, slides }) => {
//   return (
//     <section className={styles.Section}>
//       <div className={`container-fluid ${styles.Container}`}>
//         <div className={`row ${styles.Row}`}>
//           <div className={`col-md-12 ${styles.Titles}`}>
//             <h3>{title}</h3>
//           </div>
//           <div className={`col-md-12 video-swiper ${styles.SwiperWrapper}`}>
//             <Swiper {...params}>
//               {slides.map((slide, index) => (
//                 <div key={index} className={styles.SwiperSlide}>
//                   <h5>{slide.title}</h5>

//                   <div className={styles.InsideSlider}>
//                     <div className={styles.Inner}>
//                       <Video
//                         videolink={slide.videolink}
//                         imagelink={slide.imagelink}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               {/* <div className={styles.SwiperSlide}>
//                 <div className={styles.InsideSlider}>
//                   <h4>slide 1</h4>
//                 </div>
//               </div>
//               <div className={styles.SwiperSlide}>
//                 <div className={styles.InsideSlider}>
//                   <h4>slide 1</h4>
//                 </div>
//               </div> */}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default VideoSlider

import React, { Component } from "react"
import { GoogleApiWrapper } from "google-maps-react"
import Swiper from "react-id-swiper"
import StarRatings from "react-star-ratings"
import styles from "./Reviews.module.scss"

class ReviewsSlider extends Component {
  state = {
    places: [],
  }
  componentDidMount() {
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    })

    let service = new window.google.maps.places.PlacesService(map)

    service.getDetails(
      {
        placeId: "ChIJD1bAH9s0K4gRVgP84mm4EkE",
      },
      (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          this.setState({ places: place.reviews })
        }
      }
    )
  }

  render() {
    const { places } = this.state

    const params = {
      slidesPerView: 1,
      autoHeight: true, //enable auto height
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      spaceBetween: 20,
    }
    return (
      <>
        <div id="map"></div>
        <div className="reviews-swiper">
          {places.length >= 5 ? (
            <Swiper {...params}>
              {places.map(review => {
                if (review.rating > 4) {
                  return (
                    <div
                      className={styles.SwiperSlide}
                      key={review.author_name}
                    >
                      <div className={styles.SwiperSlideInside}>
                        <div className={styles.ReviewText}>
                          {review.text.length > 552
                            ? review.text.substring(0, 552) + '...'
                            : review.text}
                        </div>
                        <div className={styles.ReviewRaiting}>
                          <div>Google</div>
                          <StarRatings
                            rating={review.rating}
                            starRatedColor="#e39d00"
                            changeRating={this.changeRating}
                            numberOfStars={5}
                            name="rating"
                            starDimension="30px"
                          />
                        </div>
                        <div className={styles.ReviewAuthor}>
                          {review.author_name} <span>- Google Reviews</span>
                        </div>
                      </div>
                    </div>
                  )
                } else {
                  return null
                }
              })}
            </Swiper>
          ) : (
            ""
          )}
        </div>
      </>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBvlS3Iua1K3IdWkFhDXy6Ki66Xlrmnoco",
})(ReviewsSlider)

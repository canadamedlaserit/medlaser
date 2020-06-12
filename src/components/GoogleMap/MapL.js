import React, { Component } from "react"
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"

import styles from "./Map.module.scss"

const mapStyle = [
  {
    featureType: "administrative",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#444444",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        color: "#f2f2f2",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        saturation: -100,
      },
      {
        lightness: 45,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#46bcec",
      },
      {
        visibility: "on",
      },
    ],
  },
]
const positions = {
  toronto: { lat: 43.6532, lng: -79.3832, index: 0 }, // 0 Toronto
  vaughan: { lat: 43.8563, lng: -79.5085, index: 1 }, // 1 Vaughan
  mississauga: { lat: 43.589, lng: -79.6441, index: 2 }, // 2 Mississauga
  newmarket: { lat: 44.0592, lng: -79.4613, index: 3 }, // 3 Newmarket
  thornhill: { lat: 43.8143, lng: -79.424, index: 4 }, // 4 Thornhill
  maple: { lat: 43.8518, lng: -79.5273, index: 5 }, // 5 Maple
}

export class MapContainerL extends Component {
  state = {
    activeMarker: {},
    selectedPlace: {},
  }

  _mapLoaded(mapProps, map) {
    map.setOptions({
      styles: mapStyle,
    })
  }

  // onMarkerClick = (props, marker, e) => {
  //   // console.log("marker clickied")

  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       function(position) {
  //         var pos = {
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude,
  //         }

  //         // console.log(pos)
  //       },
  //       function() {
  //         console.log("some error")
  //       }
  //     )
  //   } else {
  //     console.log("some error")
  //   }
  // }

  render() {
    const { locations, markeractive, location } = this.props
    let currentIndex = 0

    if (positions.hasOwnProperty(location)) {
      currentIndex = positions[location].index
    }

    // const triangleCoords = [
    //   { lat: 43.6532, lng: -79.3832 },
    //   { lat: 44.0592, lng: -79.4613 },
    // ]

    return (
      <div>
        <div className={styles.Wrapper}>
          <Map
            className={styles.Map}
            mapTypeControl={false}
            fullscreenControl={false}
            zoomControl={false}
            streetViewControl={false}
            google={this.props.google}
            zoom={8.6}
            initialCenter={{
              lat: positions[location].lat,
              lng: positions[location].lng,
            }}
            onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
          >
            <Marker
              className={styles.Markers}
              // onClick={this.onMarkerClick}
              position={{
                lat: positions[location].lat,
                lng: positions[location].lng,
              }}
              icon={{
                url: `${markeractive ? markeractive.sourceUrl : null}`,
                scaledSize: new window.google.maps.Size(25, 42),
              }}
            />
  
          </Map>
        </div>

        <div className={styles.InfoSection}>
          <div
            className={styles.Info}
            dangerouslySetInnerHTML={{ __html: locations[currentIndex].info }}
          />

          <div className={styles.OpeningTimes}>
            <h3>Opening Times</h3>
            <ul>
              {locations[currentIndex].hours.map((daytime, index) => (
                <li key={index}>
                  <div className={styles.Day}>{daytime.day}</div>
                  <div className={styles.Time}>{daytime.time}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBvlS3Iua1K3IdWkFhDXy6Ki66Xlrmnoco",
})(MapContainerL)

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
  toronto: { lat: 43.638709, lng: -79.385837, index: 0 }, // 0 Toronto
  vaughan: { lat: 43.796319, lng: -79.517114, index: 1 }, // 1 Vaughan
  mississauga: { lat: 43.518207, lng: -79.622481, index: 2 }, // 2 Mississauga
  newmarket: { lat: 44.035323, lng: -79.472319, index: 3 }, // 3 Newmarket
  thornhill: { lat: 43.79609, lng: -79.433903, index: 4 }, // 4 Thornhill
  maple: { lat: 43.859584, lng: -79.488931, index: 5 }, // 5 Maple
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

  render() {
    const { locations, markeractive, location } = this.props
    let currentIndex = 0

    if (positions.hasOwnProperty(location)) {
      currentIndex = positions[location].index
    }

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

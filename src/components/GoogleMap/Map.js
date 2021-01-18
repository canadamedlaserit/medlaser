import React, { Component } from "react"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"

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
// const positions = [
//   { lat: 43.6532, lng: -79.3832 }, // 0 Toronto
//   { lat: 43.8563, lng: -79.5085 }, // 1 Vaughan
//   { lat: 43.589, lng: -79.6441 }, // 2 Mississauga
//   { lat: 44.0592, lng: -79.4613 }, //3 Newmarket
//   { lat: 43.8143, lng: -79.424 }, //4 Thornhill
//   { lat: 43.8518, lng: -79.5273 }, // 5 Maple
// ]


const positions = [
  { lat: 43.638709, lng: -79.385837 }, // 0 Toronto new
  { lat: 43.796319, lng: -79.517114 }, // 1 Vaughan new
  { lat: 43.518207, lng: -79.622481 }, // 2 Mississauga new
  { lat: 44.035323, lng: -79.472319 }, //3 Newmarket new
  { lat: 43.796090, lng: -79.433903 }, //4 Thornhill new
  { lat: 43.859584, lng: -79.488931}, // 5 Maple new
]

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    activeMarkerIndex: 0,
    windowWidth: 0,
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    this.setState({
      windowWidth: window.innerWidth,
    })
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      activeMarkerIndex: marker.index,
    })
  }

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
        activeMarkerIndex: null,
      })
    }
  }

  _mapLoaded(mapProps, map) {
    map.setOptions({
      styles: mapStyle,
    })
  }

  simulateClick = e => {
    if (e) {
      this.setState({
        selectedPlace: e.props,
        activeMarker: e.marker,
        showingInfoWindow: true,
      })
    }
  }

  render() {
    const { locations, marker, markeractive } = this.props

    const pixelOffsetMobile = new window.google.maps.Size(20, 300)
    const pixelOffsetDesktop = new window.google.maps.Size(200, 100)

    // console.log(this.props.google)

    return (
      <div className={styles.Wrapper}>
        <Map
          className={styles.Map}
          mapTypeControl={false}
          fullscreenControl={false}
          zoomControl={false}
          streetViewControl={false}
          google={this.props.google}
          onClick={this.onMapClicked}
          zoom={8.6}
          initialCenter={{
            lat: 43.6532,
            lng: -79.3832,
          }}
          onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
        >
          {locations.map((location, index) => (
            <Marker
              key={index}
              index={index}
              className={styles.Markers}
              onClick={this.onMarkerClick}
              position={positions[index]}
              ref={index === 0 ? this.simulateClick : ""}
              info={
                <div
                  className={styles.Info}
                  dangerouslySetInnerHTML={{ __html: location.info }}
                />
              }
              icon={{
                url: `
                ${
                  this.state.activeMarkerIndex === index
                    ? markeractive ?  markeractive.sourceUrl : null
                    : marker ? marker.sourceUrl : null
                }`,
                scaledSize: new window.google.maps.Size(25, 42),
              }}
            />
          ))}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            position={{ lat: 43.6532, lng: -79.3832 }}
            maxWidth={330}
            pixelOffset={
              this.state.windowWidth > 767
                ? pixelOffsetDesktop
                : pixelOffsetMobile
            }
          >
            <div>{this.state.selectedPlace.info}</div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDZJJlU9tpkF727jM23ZgKZDZP0_c2PUA8",
})(MapContainer)

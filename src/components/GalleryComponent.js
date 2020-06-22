import React from "react"
import Carousel, { Modal, ModalGateway } from "react-images"

const images = [
  {
    src:
      "https://canadamedlaser.ca/wp-content/uploads/2018/07/RSPhotos-Courtesy-of-Hutton-M.D.-13-copy.jpg",
    alt: "no",
  },
  {
    src:
      "https://canadamedlaser.ca/wp-content/uploads/2018/07/RSPhotos-Courtesy-of-Hutton-M.D.-13-copy.jpg",
    alt: "no",
  },
]

class GalleryComponent extends React.Component {
  state = {
    selectedIndex: 0,
    modalIsOpen: false,
  }

  toggleModal = selectedIndex => {
    this.setState(state => ({
      modalIsOpen: !state.modalIsOpen,
      selectedIndex,
    }))
  }

  render() {
    const { modalIsOpen } = this.state

    return (
      <>
        <Gallery>
          {images.map(({  src }, j) => (
            <Image
              onClick={() => this.toggleModal(j)}
              key={j}
            >
              <img
                src={src}
          
              />
            </Image>
          ))}
        </Gallery>

        <ModalGateway>
          {modalIsOpen ? (
            <Modal onClose={this.toggleModal}>
              <Carousel views={images} />
            </Modal>
          ) : null}
        </ModalGateway>
      </>
    )
  }
}
export default GalleryComponent


const gutter = 2;

const Gallery = (props) => (
  <div
    css={{
      overflow: 'hidden',
      marginLeft: -gutter,
      marginRight: -gutter,
    }}
    {...props}
  />
);

const Image = (props) => (
  <div
    css={{
      backgroundColor: '#eee',
      boxSizing: 'border-box',
      float: 'left',
      margin: gutter,
      overflow: 'hidden',
      paddingBottom: '16%',
      position: 'relative',
      width: `calc(25% - ${gutter * 2}px)`,

      ':hover': {
        opacity: 0.9,
      },
    }}
    {...props}
  />
);
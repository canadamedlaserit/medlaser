import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Accordion, Card } from "react-bootstrap"

import styles from "./Faqs.module.scss"

export const fragment = graphql`
  fragment FaqsSection on WPGraphQL_Page_Sectionfields_Sections_Faqs {
    title
    subtitle
    image {
      altText
      sourceUrl
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 654) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }

    list {
      ... on WPGraphQL_Page_Sectionfields_Sections_Faqs_list {
        title
        text
      }
    }
  }
`

class Faqs extends React.Component {
  state = {
    activeAccordion: 0,
  }

  handleAccordion = index => {
    this.setState({
      activeAccordion: index,
    })
  }

  render() {
    const { title, subtitle, image, list } = this.props
    const fluidImage = image.imageFile.childImageSharp.fluid

    return (
      <section className={`${styles.Section}`}>
        <div className={`container-fluid ${styles.Container}`}>
          <div className={`row ${styles.Row}`}>
            <div className={`col-md-12`}>
              <div className={styles.TitlesWrapper}>
                <h2>{title}</h2>
                <h2>{subtitle}</h2>
              </div>
            </div>
            <div className={`col-md-7 biggerSide ${styles.TextSide}`}>
              <div className={styles.AccordionWrapper}>
                <Accordion defaultActiveKey={this.state.activeAccordion}>
                  {list.map((single, index) => (
                    <div className={styles.Question} key={index}>
                      <Card className={styles.Card}>
                        <Accordion.Toggle
                          onClick={e => {
                            this.handleAccordion(index)
                          }}
                          className={`${
                            this.state.activeAccordion === index
                              ? `${styles.Active}`
                              : ""
                          } ${styles.Header}`}
                          as={Card.Header}
                          eventKey={index}
                        >
                          <div className={styles.Arrow}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="8"
                              height="18"
                              viewBox="0 0 8 18"
                            >
                              <defs></defs>
                              <path
                                d="M135.91,8.741,128.577.116A.308.308,0,0,0,128.105.1a.41.41,0,0,0-.01.53L135.208,9l-7.113,8.366a.41.41,0,0,0,.01.53.308.308,0,0,0,.471-.012l7.334-8.625A.41.41,0,0,0,135.91,8.741Z"
                                transform="translate(-128.003)"
                              />
                            </svg>
                          </div>
                          {single.title}
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey={index}>
                          <Card.Body
                            className={styles.Body}
                            dangerouslySetInnerHTML={{ __html: single.text }}
                          ></Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </div>
                  ))}
                </Accordion>
              </div>
            </div>

            <BackgroundImage
              className={`col-md-5 smallerSide ${styles.ImageSide}`}
              fluid={fluidImage}
            ></BackgroundImage>
          </div>
        </div>
      </section>
    )
  }
}

export default Faqs

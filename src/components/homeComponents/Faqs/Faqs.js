import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Accordion, Card } from "react-bootstrap"

import styles from "./Faqs.module.scss"

export const fragment = graphql`
  fragment FaqsSection on WPGraphQL_Page_Sectionfields_Sections_Faqs {
    subtitle
    type
    image {
      altText
      sourceUrl
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 654) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
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
    list2 {
      ... on WPGraphQL_Page_Sectionfields_Sections_Faqs_list2 {
        title
        text
      }
    }
  }
`

class Faqs extends Component {
  state = {
    activeAccordion: 0,
    activeAccordion2: -111,
    toggled: true,
    toggled2: false,
  }

  handleAccordion = index => {
    this.setState({
      activeAccordion: index,
      toggled:
        this.state.activeAccordion === index ? !this.state.toggled : true,
    })
  }
  handleAccordion2 = index => {
    this.setState({
      activeAccordion2: index,
      toggled2:
        this.state.activeAccordion2 === index ? !this.state.toggled2 : true,
    })
  }

  render() {
    const { subtitle, image, list, list2, type } = this.props

    return (
      <section
        id="faq"
        className={`${styles.Section} ${
          type === "two-columns" ? `${styles.TwoColumnsSection}` : ""
        }`}
      >
        <div className={`container-fluid ${styles.Container}`}>
          <div className={`row ${styles.Row}`}>
            <div className={`col-md-12`}>
              <div className={styles.TitlesWrapper}>
                <div
                  className={styles.Subtitle}
                  dangerouslySetInnerHTML={{ __html: subtitle }}
                ></div>
              </div>
            </div>
            <div
              className={`col-md-7 biggerSide ${styles.TextSide} ${
                type === "two-columns" ? `${styles.TwoColumnsFaqs}` : ""
              }`}
            >
              <div className={styles.AccordionWrapper}>
                <Accordion defaultActiveKey={this.state.activeAccordion}>
                  <ul className={styles.AccordionList}>
                    {list.map((single, index) => (
                      <li className={styles.Question} key={index}>
                        <Card className={styles.Card}>
                          <Accordion.Toggle
                            onClick={e => {
                              this.handleAccordion(index)
                            }}
                            className={`${
                              this.state.activeAccordion === index &&
                              this.state.toggled === true
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
                            <div
                              className={styles.ToggleTitle}
                              dangerouslySetInnerHTML={{ __html: single.title }}
                            ></div>
                          </Accordion.Toggle>

                          <Accordion.Collapse eventKey={index}>
                            <Card.Body
                              className={styles.Body}
                              dangerouslySetInnerHTML={{ __html: single.text }}
                            ></Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </li>
                    ))}
                  </ul>
                </Accordion>
              </div>
            </div>

            {type === "normal" ? (
              <div className={`col-md-5 smallerSide ${styles.ImageSide}`}>
                {image ? (
                  <Img
                    alt={image.altText}
                    className="gatsby-image-background"
                    fluid={image ? image.imageFile.childImageSharp.fluid : null}
                    imgStyle={{
                      objectFit: "contain",
                      objectPosition: "center center",
                    }}
                    // style={{}}
                    // style={{ objectFit: "fill" }}
                  />
                ) : (
                  ""
                )}
              </div>
            ) : (
              <div
                className={`col-md-7 biggerSide ${styles.TextSide} ${
                  type === "two-columns" ? `${styles.TwoColumnsFaqs}` : ""
                }`}
              >
                <div className={styles.AccordionWrapper}>
                  <Accordion defaultActiveKey={this.state.activeAccordion2}>
                    {list2.map((single, index) => (
                      <div className={styles.Question} key={index}>
                        <Card className={styles.Card}>
                          <Accordion.Toggle
                            onClick={e => {
                              this.handleAccordion2(index)
                            }}
                            className={`${
                              this.state.activeAccordion2 === index &&
                              this.state.toggled2 === true
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
                            <div
                              className={styles.ToggleTitle}
                              dangerouslySetInnerHTML={{ __html: single.title }}
                            ></div>
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
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default Faqs

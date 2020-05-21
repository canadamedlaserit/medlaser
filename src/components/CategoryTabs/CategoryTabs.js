import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import { Row, Tab, Col, Nav } from "react-bootstrap"
import Img from "gatsby-image"
import { Accordion, Card } from "react-bootstrap"

import styles from "./CategoryTabs.module.scss"

export const fragment = graphql`
  fragment CategoryTabsSection on WPGraphQL_Page_Sectionfields_Sections_Categorytabs {
    title
    content
    list {
      ... on WPGraphQL_Page_Sectionfields_Sections_Categorytabs_list {
        title
        content
        link
        image {
          sourceUrl
          altText
          imageFile {
            childImageSharp {
              fluid(quality: 100, maxWidth: 740) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`

class CategoryTabs extends Component {
  state = {
    windowWidth: 0,
    activeAccordion: 0,
    toggled: true,
  }

  handleAccordion = index => {
    this.setState({
      activeAccordion: index,
      toggled:
        this.state.activeAccordion === index ? !this.state.toggled : true,
    })
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

  render() {
    const { title, content, list } = this.props

    return (
      <section className={styles.Section}>
        <div className={styles.Container}>
          {/* show if desktop  else mobile*/}

          {this.state.windowWidth > 767 ? (
            <Tab.Container
              className="tabs-left"
              id="tabs-left"
              defaultActiveKey="0"
            >
              <Row className={styles.Row}>
                <Col className={`${styles.Left} smallerSide2`} md={5}>
                  <div className={styles.InsideWrapper}>
                    <div className={styles.TextWrapper}>
                      <h3>{title}</h3>

                      <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: content }}
                      ></div>
                    </div>

                    <Nav
                      variant="pills"
                      className={`${styles.TabList} flex-column`}
                    >
                      {list.map((item, index) => (
                        <Nav.Item key={index}>
                          <Nav.Link eventKey={index}>
                            {item.title}

                            <svg
                              className="tabs-arrow"
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
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  </div>
                </Col>

                <Col className={`${styles.Right} biggerSide2`} md={7}>
                  <Tab.Content className={styles.TabContent}>
                    {list.map((item, index) => (
                      <Tab.Pane
                        className={styles.TabPane}
                        key={index}
                        eventKey={index}
                      >
                        {item.image ? (
                          <Img
                            className={styles.Img}
                            alt={item.image.altText}
                            fluid={item.image.imageFile.childImageSharp.fluid}
                          />
                        ) : (
                          ""
                        )}

                        <h3>{item.title}</h3>
                        <div
                          className="content"
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        ></div>
                        {item.link ? (
                          <div className={styles.ButtonsWrapper}>
                            <Link
                              to={item.link}
                              className="btn btn-black-transparent"
                            >
                              Learn More
                            </Link>
                          </div>
                        ) : (
                          ""
                        )}
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          ) : (
            <div className={styles.AccordionWrapper}>
              <div
                className={`${styles.TextWrapper} ${styles.TextWrapperMobile}`}
              >
                <h3>{title}</h3>

                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: content }}
                ></div>
              </div>
              <Accordion
                className="tabs-left-accordion"
                defaultActiveKey={this.state.activeAccordion}
              >
                {list.map((item, index) => (
                  <div className={styles.Question} key={index}>
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
                        <h3>{item.title}</h3>

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
                      </Accordion.Toggle>
                      <Accordion.Collapse
                        className={`${
                          this.state.activeAccordion === index &&
                          this.state.toggled === true
                            ? `${styles.ActiveBody}`
                            : ""
                        } ${styles.Body}`}
                        eventKey={index}
                      >
                        <Card.Body>
                          <div
                            className="content"
                            dangerouslySetInnerHTML={{ __html: item.content }}
                          ></div>
                          {item.link ? (
                            <div className={styles.ButtonsWrapper}>
                              <Link to={item.link} className={styles.Link}>
                                Read More
                              </Link>
                            </div>
                          ) : (
                            ""
                          )}
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </div>
                ))}
              </Accordion>
            </div>
          )}
        </div>
      </section>
    )
  }
}
export default CategoryTabs

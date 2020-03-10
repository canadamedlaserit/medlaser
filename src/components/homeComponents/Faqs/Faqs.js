import React from "react"
import { graphql, Link } from "gatsby"
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
          fluid(quality: 100, maxWidth: 454) {
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

  handleAccordion(index) {
      
    console.log("event key" + index)
  }

  render() {
    const { title, subtitle, image, list } = this.props
    const fluidImage = image.imageFile.childImageSharp.fluid

    return (
      <section className={styles.Section}>
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
                          className={styles.Header}
                          as={Card.Header}
                          eventKey={index}
                        >
                          {single.title}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={index}>
                          <Card.Body
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

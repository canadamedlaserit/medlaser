import React from "react"
import { graphql } from "gatsby"

import Tab from "react-bootstrap/Tab"
import Nav from "react-bootstrap/Nav"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import styles from "./FaqsTabs.module.scss"

export const fragment = graphql`
  fragment FaqsTabsSection on WPGraphQL_Page_Sectionfields_Sections_Faqstabs {
    title
    list {
      ... on WPGraphQL_Page_Sectionfields_Sections_Faqstabs_list {
        title
        text
      }
    }
  }
`

const FaqsTabs = ({ title, list }) => {

  return (
    <section className={` ${styles.Section}`}>
      <div className={`container ${styles.Container}`}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-12`}>
            <div
              className={styles.Title}
              dangerouslySetInnerHTML={{ __html: title }}
            ></div>
          </div>
        </div>

        <div className={`col-md-12`}>
          <Tab.Container defaultActiveKey="0">
            <Row>
              <Col sm={4} className={styles.Tabs}>
                <Nav
                  as="ul"
                  variant="pills"
                  className={`${styles.TabList} flex-column`}
                >
                  {list.map((item, index) => (
                    <Nav.Item key={index} as="li">
                      <Nav.Link eventKey={index}>{item.title}</Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Col>
              <Col sm={8} className={styles.ContentWrapper}>
                {list.map((item, index) => (
                  <Tab.Content key={index} className={styles.Content}>
                    <Tab.Pane eventKey={index}>
                      <div
                        dangerouslySetInnerHTML={{ __html: item.text }}
                      ></div>
                    </Tab.Pane>
                  </Tab.Content>
                ))}
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </section>
  )
}

export default FaqsTabs

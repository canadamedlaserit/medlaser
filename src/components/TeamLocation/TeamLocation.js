import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./TeamLocation.module.scss"

export const fragment = graphql`
  fragment TeamLocationSection on WPGraphQL_Page_Sectionfields_Sections_Teamlocation {
    teamcategory
    numberperrow
    teammembers {
      ... on WPGraphQL_Page_Sectionfields_Sections_Teamlocation_teammembers {
        member {
          ... on WPGraphQL_Team {
            title
            teamMembersDescription {
              name
              position
              description
              image {
                sourceUrl
                altText
                imageFile {
                  childImageSharp {
                    fluid(quality: 100, maxWidth: 600) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const TeamLocation = ({ teamcategory, numberperrow, teammembers }) => {
  console.log(teammembers)
  return (
    <section className={styles.Section}>
      <div className={`container ${styles.Container}`}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-12 ${styles.Heading}`}>
            <div className={styles.TextSideWrapper}>
              <h3>{teamcategory}</h3>
            </div>
          </div>
        </div>
        <div className={`row ${styles.Row}`}>
          {teammembers
            ? teammembers.map(({ member }, index) => (
                <div
                  className={`${
                    numberperrow === "3"
                      ? `col-md-4 ${styles.Col4}`
                      : `col-md-6 ${styles.Col6}`
                  } ${styles.MemberCol} `}
                  key={index}
                >
                  <Img
                    className={styles.Gimg}
                    alt={member.altText}
                    fluid={
                      member.teamMembersDescription.image.imageFile
                        .childImageSharp.fluid
                    }
                  />
                  <h5>{member.teamMembersDescription.name}</h5>

                  {member.teamMembersDescription.position ? (
                    <p className={styles.Position}>
                      {member.teamMembersDescription.position}
                    </p>
                  ) : (
                    ""
                  )}

                  <p
                    className={styles.Description}
                    dangerouslySetInnerHTML={{
                      __html: member.teamMembersDescription.description,
                    }}
                  ></p>
                </div>
              ))
            : null}
        </div>

        <div className="ad"></div>
      </div>
    </section>
  )
}

export default TeamLocation

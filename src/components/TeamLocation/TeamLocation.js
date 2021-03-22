import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./TeamLocation.module.scss"

export const fragment = graphql`
  fragment TeamLocationSection on WPGraphQL_Page_Sectionfields_Sections_Teamlocation {
    numberperrow
    teamcategory
    teammembers {
      member {
        ... on WPGraphQL_Team {
          title
          teamMembersDescription {
            description
            name
            position
            image {
              altText
              sourceUrl
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
`
/* 
            
            
            
            
            
            
            
            
            
            
            
            
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
            */

const TeamLocation = ({ teamcategory, numberperrow, teammembers }) => {
  console.log("I am here");
  console.log(teammembers)
  return (
    <section id="ourTeam" className={styles.Section}>
      <div className={`container ${styles.Container}`}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-12 ${styles.Heading}`}>
            <div className={styles.TextSideWrapper}>
              <h2
              //dangerouslySetInnerHTML={{ __html: teamcategory }}
              >
                Meet Our Team
              </h2>
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
                  {member.teamMembersDescription.image ? (
                    <Img
                      className={styles.Gimg}
                      alt={member.teamMembersDescription.image.altText}
                      fluid={
                        member.teamMembersDescription.image.imageFile
                          .childImageSharp.fluid
                      }
                    />
                  ) : (
                    ""
                  )}

                  <h5>{member.teamMembersDescription.name}</h5>

                  {member.teamMembersDescription.position ? (
                    <p className={styles.Position}>
                      {member.teamMembersDescription.position}
                    </p>
                  ) : (
                    ""
                  )}

                  {member.teamMembersDescription.description ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: member.teamMembersDescription.description,
                      }}
                      className={styles.Description}
                    ></div>
                  ) : (
                    ""
                  )}
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  )
}

export default TeamLocation

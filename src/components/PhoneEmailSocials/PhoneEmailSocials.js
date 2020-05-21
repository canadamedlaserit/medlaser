import React from "react"
import { graphql } from "gatsby"
import styles from "./PhoneEmailSocials.module.scss"

export const fragment = graphql`
  fragment PhoneEmailSocialsSection on WPGraphQL_Page_Sectionfields_Sections_Phoneemailsocials {
    phoneinfo
    emailinfo
    socials {
      ... on WPGraphQL_Page_Sectionfields_Sections_Phoneemailsocials_socials {
        link
        image {
          sourceUrl
        }
      }
    }
  }
`

const PhoneEmailSocials = ({ phoneinfo, emailinfo, socials }) => {
  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row`}>
          <div className="col-md-12">
            <div className={styles.EmailPhoneWrapper}>
              <div
                dangerouslySetInnerHTML={{ __html: phoneinfo }}
                className={styles.Phone}
              ></div>
              <div
                dangerouslySetInnerHTML={{ __html: emailinfo }}
                className={styles.Email}
              ></div>
            </div>

            <div className={styles.SocialWrapper}>
              {socials.map((item, index) => (
                <div key={index}>
                  <a
                    className={styles.Icon}
                    style={{ backgroundImage: `URL(${item.image ? item.image.sourceUrl:null})` }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.link}
                  >
                  </a>
                </div>
              ))}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhoneEmailSocials

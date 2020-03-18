import React, { Component } from "react"
import { Link } from "gatsby"
import CustomNav from "../Header/CustomNav"
import styles from "./Footer.module.scss"
import { Navbar } from "react-bootstrap"

class Footer extends Component {
  render() {
    const { data } = this.props
    const menus = data.wpgraphql.menus.edges
    const footerInfo = data.wpgraphql.page.headerFooterInfo
    var footerMenu

    for (const menu in menus) {
      if (menus[menu].node.name === "footer-menu") {
        footerMenu = menus[menu].node.menuItems.edges
      }
    }

    return (
      <footer className={styles.Footer}>
        <div className={`container ${styles.Container}`}>
          <div className={`row ${styles.Row}`}>
            <div className={styles.NavWrapper}>
              <Navbar expand="lg">
                <CustomNav isMobile={true} data={footerMenu} />
              </Navbar>
            </div>

            {footerMenu.map(({ node }, index) => {
              if (node.childItems.edges.length !== 0) {
                const submenu = node.childItems.edges
                return (
                  <div className={`col-md-3 ${styles.DesktopMenu}`} key={index}>
                    <h3>{node.label}</h3>
                    <ul>
                      {submenu.map(({ node }, index) => (
                        <li key={index}>
                          <Link to={node.url}>{node.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              } else {
                return('')
              }
            })}

            <div className={styles.LocatiosWrapper}>
              <div className={styles.Locations}>
                <div className="col-md-12">
                  <h3 className={styles.Title}>{footerInfo.locationstitle}</h3>
                </div>
                {footerInfo.locations.map((single, index) => (
                  <div
                    key={index}
                    dangerouslySetInnerHTML={{ __html: single.info }}
                    className={`col-xl-3 col-lg-4 col-6 ${styles.LocationsCol}`}
                  ></div>
                ))}
              </div>
            </div>

            <div className={styles.SocialsWrapper}>
              <div className="col-md-12">
                <h3 className={styles.Title}>{footerInfo.socialstitle}</h3>
              </div>

              <div className={`col-md-12 ${styles.SocialsListWrapper}`}>
                {footerInfo.socials.map((single, index) => (
                  <a
                    key={index}
                    className={styles.SocialLink}
                    href={single.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                ))}
              </div>
            </div>

            <div className={styles.PrivacyWrapper}>
              <div className="col-md-12">
                <Link className={styles.pp} to={footerInfo.privacypolicylink}>
                  {footerInfo.privacypolicy}
                </Link>

                <p>{footerInfo.disclaimer}</p>
              </div>
            </div>

            <div className={styles.CopyWrapper}>
              <div className="col-md-12">
                © Copyrights {new Date().getFullYear()} | All Rights Reserved |
                Canada MedLaser Inc.
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer

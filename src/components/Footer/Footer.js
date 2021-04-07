import React, { Component } from "react"
import { Link } from "gatsby"
import CustomNav from "../Header/CustomNav"
import styles from "./Footer.module.scss"
import { Navbar } from "react-bootstrap"

/* useEffect(() => {
    let targetElement = !!document.querySelector("#mainNav");
    if (isOpen) {
      document.querySelector("#mainContainer").style.display = "none";
      document.querySelector("#contactLocation").style.display = "none";
      document.querySelector("#footerSection").style.display = "none";
    } else {
      document.querySelector("#mainContainer").style.display = "block";
      document.querySelector("#contactLocation").style.display = "block";
      document.querySelector("#footerSection").style.display = "block";
    }
 */

class Footer extends Component {
  componentDidMount() {
    if (typeof window !== "undefined") {
      if (window.location.href.includes("/location")) {
        document.querySelector("#locationAddress").style.display = "none"
        document.querySelector("#footerMainMenu").style.display = "flex"
        document.querySelector("#footerMainMenu").style.justifyContent =
          "center"
      }
    }
  }

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
          <div
            className={`row ${styles.Row}`}
            // style={
            //   document.getElementById("LocationHeroBrand")
            //     ? { justifyContent: "center", display: "flex" }
            //     : null
            // }
            id="footerMainMenu"
            // style={
            //   document.getElementById("LocationHeroBrand")
            //     ? { justifyContent: "center", display: "flex" }
            //     : null
            // }
          >
            <div className={styles.NavWrapper}>
              <Navbar expand="lg">
                <CustomNav isMobile={true} data={footerMenu} />
              </Navbar>
            </div>

            {footerMenu.map(({ node }, index) => {
              if (node.childItems.edges.length !== 0) {
                const submenu = node.childItems.edges
                return (
                  <div
                    id="myFooterLabel"
                    className={`col-md-3 ${styles.DesktopMenu}`}
                    key={index}
                    // style={
                    //   document.getElementById("LocationHeroBrand")
                    // ? node.label === "Locations"
                    //   ? { display: "none" }
                    //   : null
                    // : null
                    // }
                    style={
                      typeof window !== "undefined"
                        ? window.location.href.includes("/location")
                          ? node.label === "Locations"
                            ? { display: "none" }
                            : null
                          : null
                        : null
                    }
                  >
                    {node.url ? (
                      <h2>
                        <Link style={{ color: "#ffffff" }} to={node.url}>
                          {node.label}
                        </Link>
                      </h2>
                    ) : (
                      <h2>{node.label}</h2>
                    )}
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
                return ""
              }
            })}

            <div id="locationAddress" className={styles.LocatiosWrapper}>
              <div className={styles.Locations}>
                <div className="col-md-12">
                  <h2 className={styles.Title}>{footerInfo.locationstitle}</h2>
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
                <h2 className={styles.Title}>{footerInfo.socialstitle}</h2>
              </div>

              <div className={`col-md-12 ${styles.SocialsListWrapper}`}>
                {footerInfo.socials.map((single, index) => (
                  <a
                    key={index}
                    className={styles.SocialLink}
                    href={single.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    socials link
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.PrivacyWrapper}>
              <div className="col-md-12">
                <Link className={styles.pp} to={footerInfo.privacypolicylink}>
                  {footerInfo.privacypolicy}
                </Link>

                <p id="disclaimer">{footerInfo.disclaimer}</p>
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
        <div
            className="bottompromo"
            dangerouslySetInnerHTML={{ __html: footerInfo.promoTopLine }}
          ></div>
      </footer>
    )
  }
}

export default Footer

import React, { Component } from "react"
import { Link } from "gatsby"
import CustomNav from "../Header/CustomNav"
import styles from "./Footer.module.scss"
import { Navbar } from "react-bootstrap"

class Footer extends Component {
  render() {
    const { data } = this.props
    const menus = data.wpgraphql.menus.edges
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
            {console.log(footerMenu)}

            <div className={styles.NavWrapper}>
              <Navbar expand="lg">
                <CustomNav isMobile={true} data={footerMenu} />
              </Navbar>
            </div>

            {footerMenu.map(({ node }, index) => {
              if (node.childItems.edges.length !== 0) {
                const submenu = node.childItems.edges
                return (
                  <div className="col-md-3" key={index}>
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
                return (
                  <div className="col-md-3" key={index}>
                    <h3>{node.label}</h3>
                  </div>
                )
              }
            })}

            {/* <div className="col-12">
              <div className={styles.Footer_container}>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </div>
            </div> */}
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer

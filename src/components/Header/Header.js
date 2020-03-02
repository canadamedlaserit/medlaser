import React from "react"
import { Link } from "gatsby"
import { Navbar, NavDropdown, Nav } from "react-bootstrap"
import Img from "gatsby-image"

import styles from "./Header.module.scss"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { scrolledTop: true }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = _ => {
    // this.setState({
    //   x: window.scrollX,
    //   y: window.scrollY
    // });
    if (window.scrollY > 100) {
      console.log("asdsa" + this.props.location.pathname)
      this.setState({
        scrolledTop: false,
      })
    } else {
      this.setState({
        scrolledTop: true,
      })
    }
  }

  render() {
    const { data } = this.props
    const mainMenu = data.wpgraphql.menus.edges[0].node.menuItems.edges
    const topMenu = data.wpgraphql.menus.edges[1].node.menuItems.edges

    const logo =
      data.wpgraphql.pageBy.headerInfo.logo.imageFile.childImageSharp.fluid
    return (
      <header>
        <Navbar
          fixed="top"
          expand="lg"
          className={`${styles.Navbar} ${
            this.state.scrolledTop && this.props.location.pathname === "/"
              ? "transparent"
              : "normal"
          }`}
        >
          <div className={styles.headerTopLine}>
            <div className={`container ${styles.container}`}>
              <Nav>
                {topMenu.map(({ node }) => {
                  if (node.childItems.edges.length !== 0) {
                    const submenu = node.childItems.edges
                    return (
                      <li key={node.id} className="nav-item dropdown">
                        <NavDropdown title={node.label} >
                          {submenu.map(({ node }) => (
                            <Link
                              key={node.id}
                              className="nav-link"
                              to={node.url}
                            >
                              {node.label}
                            </Link>
                          ))}
                        </NavDropdown>
                      </li>
                    )
                  } else {
                    return (
                      <Link key={node.id} className="nav-link" to={node.url}>
                        {node.label}
                      </Link>
                    )
                  }
                })}
              </Nav>
            </div>
          </div>
          <div className={`container ${styles.container}`}>
            <Navbar.Brand className={styles.NavbarBrand}>
              <Link to="/" className={styles.Navbar_logo}>
                <Img
                  fluid={logo}
                  alt={data.wpgraphql.pageBy.headerInfo.logo.altText}
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse
              id="basic-navbar-nav"
              className={styles.NavCollapse}
            >
              <Nav>
                {mainMenu.map(({ node }) => {
                  if (node.childItems.edges.length !== 0) {
                    const submenu = node.childItems.edges
                    return (
                      <li key={node.id} className="nav-item dropdown">
                        <NavDropdown title={node.label} >
                          {submenu.map(({ node }) => (
                            <Link
                              key={node.id}
                              className="nav-link"
                              to={node.url}
                            >
                              {node.label}
                            </Link>
                          ))}
                        </NavDropdown>
                      </li>
                    )
                  } else {
                    return (
                      <Link key={node.id} className="nav-link" to={node.url}>
                        {node.label}
                      </Link>
                    )
                  }
                })}
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>
    )
  }
}

export default Header

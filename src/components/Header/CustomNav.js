import React, { Component } from "react"
import { Nav, Dropdown, Button } from "react-bootstrap"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styles from "./Header.module.scss"

export class CustomNav extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false, activeDropdown: 0 }
  }

  handleOpen = id => {
    this.setState({ isOpen: true })
    this.setState({ activeDropdown: id })
  }

  handleClose = () => {
    this.setState({ isOpen: false })
    this.setState({ activeDropdown: 0 })
  }

  render() {
    const { data } = this.props

    const { menuimages } = this.props

    // var laserHairRemoval, skinProcedures,

    // for (const menuimage in menuimages) {
    //   if (menus[menu].node.name === "main-menu") {
    //     mainMenu = menus[menu].node.menuItems.edges
    //   }
    // }
    // console.log(data)

    // console.log(menuimages)
    return (
      <>
        <Nav className={`globalNavCollapse ${styles.NavCollapseNew}`}>
          <div className={styles.OverflowFix}>
            {data.map(({ node }) => {
              if (node.childItems.edges.length !== 0) {
                const submenu = node.childItems.edges
                return (
                  <Dropdown
                    key={node.id}
                    onMouseEnter={e => this.handleOpen(node.id)}
                    onMouseLeave={this.handleClose}
                    className={`${styles.MainLink}`}
                  >
                    {node.url ? (
                      <Dropdown.Toggle
                        className={`nav-link`}
                        to={node.url}
                        as={Link}
                      >
                        <span className={styles.LinkWrapper}></span>

                        {node.label}
                      </Dropdown.Toggle>
                    ) : (
                      <Dropdown.Toggle className={`nav-link ${styles.Default}`}>
                        <span className={styles.LinkWrapper}></span>

                        {node.label}
                      </Dropdown.Toggle>
                    )}

                    {/* this is mobile arrow / show only on mobile */}
                    {this.props.isMobile === true ? (
                      <Dropdown.Toggle
                        className={`dropdown-arrow ${styles.lil}`}
                        aria-label="Mobile Arrow"
                      >
                        <svg
                          className="firstArrow"
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
                      </Dropdown.Toggle>
                    ) : (
                      ""
                    )}

                    <Dropdown.Menu
                      className={`nav-item dropdown ${styles.Dropdown}`}
                      show={
                        this.state.isOpen &&
                        this.state.activeDropdown === node.id &&
                        this.props.isMobile !== true
                      }
                    >
                      <div className={styles.DropdownWrapper}>
                        {menuimages && !this.props.isMobile ? (
                          <div className={styles.ImageWrapper}>
                            {/* {node.label === "About" ? "asd" : "ff"} */}
                            {/* {console.log(node.label + " -- ")} */}
                            {/* {console.log(menuimages[0])} */}

                            {menuimages
                              ? menuimages.map((index, item) => {
                                  if (index.menuName === node.label) {
                                    return (
                                      <div
                                        className="menu-image-wrapper"
                                        key={item}
                                      >
                                        {index.menuImage ? (
                                          <Img
                                            className="gatsby-image-background"
                                            alt={index.menuImage.altText}
                                            fluid={
                                              index.menuImage.imageFile
                                                .childImageSharp.fluid
                                            }
                                          />
                                        ) : (
                                          ""
                                        )}
                                      </div>
                                    )
                                  } else {
                                    return null
                                  }
                                })
                              : ""}
                          </div>
                        ) : (
                          ""
                        )}

                        <div
                          className={`${
                            menuimages ? `${styles.SubmenuWrapper}` : ""
                          }`}
                        >
                          {submenu.map(({ node }) => {
                            if (node.childItems.edges.length !== 0) {
                              const submenu = node.childItems.edges

                              // INSIDE

                              // showing nested dropdown-type style menu on mobile / on desktop  -> else
                              if (this.props.isMobile === true) {
                                return (
                                  <Dropdown
                                    key={node.id}
                                    onMouseEnter={e => this.handleOpen(node.id)}
                                    onMouseLeave={this.handleClose}
                                    className={`dropdownCustom ${styles.MainLink}`}
                                  >
                                    <Dropdown.Toggle
                                      className={`nav-link`}
                                      to={node.url}
                                      as={Link}
                                    >
                                      <span
                                        className={styles.LinkWrapper}
                                      ></span>

                                      {node.label}
                                    </Dropdown.Toggle>

                                    {/* this is mobile arrow / show only on mobile */}
                                    {this.props.isMobile === true ? (
                                      <Dropdown.Toggle
                                        className={`dropdown-arrow ${styles.lil}`}
                                        aria-label="Mobile Arrow"
                                      >
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
                                      </Dropdown.Toggle>
                                    ) : (
                                      ""
                                    )}

                                    <Dropdown.Menu
                                      className={`nav-item dropdown ${styles.Dropdown}`}
                                      show={
                                        this.state.isOpen &&
                                        this.state.activeDropdown === node.id &&
                                        this.props.isMobile !== true
                                      }
                                    >
                                      {submenu.map(({ node }) => (
                                        <Link
                                          key={node.id}
                                          className={`${styles.InnerLink} nav-link`}
                                          to={node.url}
                                        >
                                          {node.label}
                                        </Link>
                                      ))}
                                    </Dropdown.Menu>
                                  </Dropdown>
                                )
                              } else {
                                return (
                                  <div
                                    className={`${styles.SubmenuWrapper2}`}
                                    key={node.id}
                                  >
                                    <Link
                                      className={`${styles.InnerLink2} nav-link`}
                                      to={node.url}
                                    >
                                      {node.label}
                                    </Link>
                                    {submenu.map(({ node }) => (
                                      <Link
                                        key={node.id}
                                        className={`${styles.InnerLink} nav-link`}
                                        to={node.url}
                                      >
                                        {node.label}
                                      </Link>
                                    ))}
                                  </div>
                                )
                              }

                              // INSIDE
                            } else {
                              return (
                                <Link
                                  key={node.id}
                                  className={`${styles.InnerLink} nav-link`}
                                  to={node.url}
                                >
                                  {node.label}
                                </Link>
                              )
                            }
                          })}
                        </div>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                )
              } else {
                return (
                  <Link
                    key={node.id}
                    className={`${styles.MainLink} nav-link`}
                    to={node.url}
                  >
                    <span className={styles.LinkWrapper}></span>
                    {node.label}
                  </Link>
                )
              }
            })}
            <Link to="/assessment">Assessment</Link>
          </div>
        </Nav>
      </>
    )
  }
}

export default CustomNav

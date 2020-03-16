import React, { Component } from "react"
import { Nav, Dropdown } from "react-bootstrap"
import { Link } from "gatsby"

import styles from "./Header.module.scss"

export class CustomNav extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)

    this.state = { isOpen: false, activeDropdown: 0}
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
    const { data, isMobile } = this.props
    return (
      <>
        <Nav>
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
                  <Dropdown.Toggle
                    className={`nav-link`}
                    to={node.url}
                    as={Link}
                  >
                    <span className={styles.LinkWrapper}></span>

                    {node.label}
                  </Dropdown.Toggle>

                  {this.props.isMobile === true ? (
                    <Dropdown.Toggle className={styles.lil}>
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
                  {console.log("mob" + this.props.isMobile)}


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
        </Nav>
      </>
    )
  }
}

export default CustomNav

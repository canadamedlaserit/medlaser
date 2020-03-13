import React, { Component } from "react"
import { Nav, Dropdown } from "react-bootstrap"
import { Link } from "gatsby"

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
    return (
      <div>
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

                  <Dropdown.Menu
                    className={`nav-item dropdown ${styles.Dropdown}`}
                    key="0"
                    show={
                      this.state.isOpen && this.state.activeDropdown === node.id
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
      </div>
    )
  }
}

export default CustomNav

import React, { Component } from "react"
import { NavDropdown, Nav } from "react-bootstrap"
import { Link } from "gatsby"


export class CustomNav extends Component {
  render() {

    const { data } = this.props

    return (
      <div>
        <Nav>
          {data.map(({ node }) => {
            if (node.childItems.edges.length !== 0) {
              const submenu = node.childItems.edges
              return (
                <NavDropdown
                  key={node.id}
                  className="nav-item dropdown"
                  title={node.label}
                >
                  {submenu.map(({ node }) => (
                    <Link key={node.id} className="nav-link" to={node.url}>
                      {node.label}
                    </Link>
                  ))}
                </NavDropdown>
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
    )
  }
}

export default CustomNav

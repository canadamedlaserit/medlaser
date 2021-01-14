import React, { Component } from "react"
import { Link } from "gatsby"
import { Navbar } from "react-bootstrap"
import Img from "gatsby-image"
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock"

import CustomNav from "./CustomNav"
import styles from "./Header.module.scss"

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      windowWidth: 1440,
    }
  }

  targetElement = null

  componentDidMount() {
    this.updateWindowDimensions()
    this.targetElement = document.querySelector("#mainNav")
    window.addEventListener("resize", this.updateWindowDimensions)
  }

  handleToggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen }, () => {
      this.state.isOpen
        ? disableBodyScroll(this.targetElement)
        : enableBodyScroll(this.targetElement)
    })
  }

  updateWindowDimensions = () => {
    this.setState({
      windowWidth: window.innerWidth,
    })
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks()
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  render() {
    const { data } = this.props

    const menus = data.wpgraphql.menus.edges
    var mainMenu, topMenu, mainMenuMobile

    for (const menu in menus) {
      if (menus[menu].node.name === "main-menu") {
        mainMenu = menus[menu].node.menuItems.edges
      } else if (menus[menu].node.name === "top-menu") {
        topMenu = menus[menu].node.menuItems.edges
      } else if (menus[menu].node.name === "main-menu-mobile") {
        mainMenuMobile = menus[menu].node.menuItems.edges
      }
    }

    //if no image display nothing
    const logo = data.wpgraphql.page.headerFooterInfo.logo
      ? data.wpgraphql.page.headerFooterInfo.logo.imageFile.childImageSharp
          .fluid
      : false

    const headerInfo = data.wpgraphql.page.headerFooterInfo

    return (
      <header>
        <div className={`${styles.ShopNowLink_wrapper}`}>
          <Link to="https://shop.canadamedlaser.ca/">Visit Our Shop Now</Link>
        </div>
        <Navbar
          id="mainNav"
          fixed="top"
          expand="lg"
          className={`${styles.Navbar}`}
        >
          {headerInfo.promoTopLine ? (
            <div className="promobar">
              <div className="container">
                <div className="row ">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: headerInfo.promoTopLine,
                    }}
                    className="col-md-12"
                  ></div>
                </div>
              </div>
            </div>
          ) : null}
          {/* <div></div> */}
          <div className={styles.headerTopLine}>
            <div className={`container ${styles.container}`}>
              <Link
                to={"/assessment"}
                className={`btn btn-red ${styles.Btn} ${styles.AYCButton}`}
              >
                TAKE THE QUIZ
              </Link>

              <CustomNav data={topMenu} />
              <div className={styles.RightSide}>
                <div className={styles.PhoneWrapper}>
                  <a href={headerInfo.phoneurl}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25.203"
                      height="25.25"
                      viewBox="0 0 25.203 25.25"
                    >
                      <path
                        className={styles.PhoneSvg}
                        d="M26.369,20.405v3.5a2.333,2.333,0,0,1-2.543,2.333,23.087,23.087,0,0,1-10.068-3.581,22.748,22.748,0,0,1-7-7A23.087,23.087,0,0,1,3.177,5.543,2.333,2.333,0,0,1,5.5,3H9a2.333,2.333,0,0,1,2.333,2.007,14.979,14.979,0,0,0,.817,3.278,2.333,2.333,0,0,1-.525,2.461l-1.482,1.482a18.665,18.665,0,0,0,7,7l1.482-1.482a2.333,2.333,0,0,1,2.461-.525,14.979,14.979,0,0,0,3.278.817,2.333,2.333,0,0,1,2.007,2.368Z"
                        transform="translate(-2.167 -2)"
                      />
                    </svg>
                    {headerInfo.phone}
                  </a>
                </div>
                <div
                  className={styles.ButtonWrapper}
                  style={{ display: "flex" }}
                >
                  <Link
                    to={headerInfo.btnlink}
                    className={`btn btn-red ${styles.Btn}`}
                  >
                    {headerInfo.btntext}
                  </Link>
                </div>

                <div className={styles.CartWrapper}>
                  <a
                    className={`${styles.CartLink}`}
                    href={headerInfo.cartlink}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26.634"
                      height="25.514"
                      viewBox="0 0 26.634 25.514"
                    >
                      <g transform="translate(-0.5 -0.5)">
                        <path
                          className={styles.Cart}
                          d="M14.239,31.12A1.12,1.12,0,1,1,13.12,30,1.12,1.12,0,0,1,14.239,31.12Z"
                          transform="translate(-2.662 -7.225)"
                        />
                        <path
                          className={styles.Cart}
                          d="M30.739,31.12A1.12,1.12,0,1,1,29.62,30,1.12,1.12,0,0,1,30.739,31.12Z"
                          transform="translate(-6.845 -7.225)"
                        />
                        <path
                          className={styles.Cart}
                          d="M1.5,1.5H5.979l3,14.993a2.239,2.239,0,0,0,2.239,1.8H22.1a2.239,2.239,0,0,0,2.239-1.8L26.134,7.1H7.1"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={`container ${styles.container}`}>
            <Navbar.Brand className={styles.NavbarBrand}>
              <Link to="/" className={styles.Navbar_logo}>
                {logo ? <Img fluid={logo} alt={headerInfo.logo.altText} /> : ""}
              </Link>
            </Navbar.Brand>

            <Navbar.Toggle
              className={styles.NavbarToggler}
              aria-controls="basic-navbar-nav"
              onClick={this.handleToggleMenu}
            >
              <div />
              <div />
              <div />
            </Navbar.Toggle>

            <Navbar.Collapse
              id="basic-navbar-nav"
              className={`${this.state.isOpen ? "isOpen" : "closed"}   ${
                styles.NavCollapse
              }`}
            >
              {/* {console.log(this.state.windowWidth )} */}
              <CustomNav
                isMobile={this.state.windowWidth > 991 ? false : true}
                data={this.state.windowWidth > 991 ? mainMenu : mainMenuMobile}
                menuimages={data.wpgraphql.page.headerFooterInfo.menuimages}
              />
            </Navbar.Collapse>
          </div>
        </Navbar>
        {/* <div className={styles.FloatingMenuTop}>
          <div style={{ width: "100%" }}>
              <a href={"/assessment"}>Are You A Candidate?</a>
            </div>
          </div> */}

        <div className={styles.FloatingMenu}>
          {headerInfo.floatingmenu.map((item, index) => (
            <div key={index}>
              <a href={item.btnlink}>{item.btntext}</a>
            </div>
          ))}
        </div>
      </header>
    )
  }
}

export default Header

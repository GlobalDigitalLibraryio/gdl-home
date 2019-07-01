/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "../style/footerStyle.css"
import CCLogo from "../icons/cc-logo.svg"
//import Footer from "./footer"
import FacebookIcon from "../icons/FacebookIcon"
import TwitterIcon from "../icons/TwitterIcon"
import YoutubeIcon from "../icons/YoutubeIcon"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            zendeskUrl
          }
        }
      }
    `}
    render={data => (
      <div style={{ height: "auto", overflow: "hidden" }}>
        <Header siteTitle={"Home"} />
        {children}
        <div id="footerContainer">
          <footer id="footerId">
            <div
              id="footerDivider"
            />
            <ul id="linkList">
              <div>
                <a href="https://home.digitallibrary.io/the-global-digital-library-uses-cookies/">
                  Cookie policy
                </a>
              </div>
              <div>
                <a href="https://home.digitallibrary.io/privacy/">
                  Privacy policy
                </a>
              </div>
              <div>
                <a href="https://home.digitallibrary.io/cc/">
                  Licensing and reuse
                </a>
              </div>
              <div>
                <a href={data.site.siteMetadata.zendeskUrl}>Report issues</a>
              </div>
              <div>
                <a href="https://home.digitallibrary.io/about/">About</a>
              </div>
              <div>
                <a href="https://blog.digitallibrary.io/">Blog</a>
              </div>
            </ul>

            <div id="creativeCommons">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://creativecommons.org/"
                aria-label="Creative Commons"
              >
                <img
                  src={CCLogo}
                  style={{ width: "100px", margin: "30px 0px" }}
                />
              </a>
            </div>
            <div id="socialMediaIcons">
              <a
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                aria-label="Facebook"
                href="https://www.facebook.com/globaldigitallibrary/"
              >
                <FacebookIcon />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
                aria-label="Twitter"
                href="https://twitter.com/gdigitallibrary"
              >
                <TwitterIcon />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
                aria-label="YouTube"
                href="https://www.youtube.com/channel/UCN5RyDXS_aKA37YwIPzQPTg"
              >
                <YoutubeIcon />
              </a>
            </div>
          </footer>
        </div>

        {/*  <footer>
          © {new Date().getFullYear()}, By
          {` `}
          <a href="https://www.globaldigitallibrary.io">
            Global Digital Library
          </a>
        </footer> */}
      </div>
      /* </div> */
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

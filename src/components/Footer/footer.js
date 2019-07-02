import React from "react"
import CCLogo from "./cc-logo.svg"
import FacebookIcon from "./FacebookIcon"
import TwitterIcon from "./TwitterIcon"
import YoutubeIcon from "./YoutubeIcon"
import { StaticQuery, graphql } from "gatsby"
import "../../style/footerStyle.css"

const Footer = () => (
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
      <div id="footerContainer">
        <footer id="footerId">
          <div id="footerDivider" />
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
            <div>
              <a href="https://home.digitallibrary.io/privacy/">
                Detailed attributions
              </a>
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
                alt="CCLogo"
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
    )}
  />
)

export default Footer

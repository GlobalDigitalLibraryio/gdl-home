//@flow
import * as React from "react"
import CCLogo from "./cc-logo.svg"
import FacebookIcon from "./FacebookIcon"
import TwitterIcon from "./TwitterIcon"
import YoutubeIcon from "./YoutubeIcon"
import "../../style/footerStyle.css"

const Footer = () => {
  let blogPath
  const env = process.env.GATSBY_GDL_ENVIRONMENT || "development"
  switch (env) {
    case "development":
      blogPath = "http://localhost:8000/"
      break
    case "prod":
      blogPath = "https://blog.digitallibrary.io/"
      break
    default:
      blogPath = `https://blog.${env}.digitallibrary.io/`
      break
  }
  return (
    <div id="footerContainer">
      <footer id="footerId">
        <div id="footerDivider" />
        <ul id="footerList">
          <div>
            <a href="/the-global-digital-library-uses-cookies">Cookie policy</a>
          </div>
          <div>
            <a href="/privacy">Privacy policy</a>
          </div>
          <div>
            <a href="/cc">Licensing and reuse</a>
          </div>
          <div>
            <a href="https://digitallibrary.zendesk.com/hc/en-us/requests/new">
              Report issues
            </a>
          </div>
          <div>
            <a href="/about">About</a>
          </div>
          <div>
            <a href={blogPath}>Blog</a>
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
  )
}

export default Footer

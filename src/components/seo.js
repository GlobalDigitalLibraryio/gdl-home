// @flow
import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import favicon from "../images/favicon.png"
import { Location } from "@reach/router"

type Props = {
  title: string,
}

class SEO extends React.Component<Props> {
  render() {
    let thisUrl
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Location>
              {({ location }) => {
                thisUrl = location.href
                return (
                  <Helmet
                    htmlAttributes={{ lang: `en` }}
                    title={this.props.title}
                    titleTemplate={`%s | ${data.site.siteMetadata.title}`}
                    link={[
                      {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: `${favicon}`,
                      },
                      {
                        rel: "shortcut icon",
                        type: "image/png",
                        href: `${favicon}`,
                      },
                    ]}
                  >
                    <meta property="og:url" content={thisUrl} />
                    <meta property="og:type" content="website" />
                    <meta
                      property="og:description"
                      content="The Global Digital Library is part of the Global Book Alliance – bringing books to every child in the world by 2030"
                    />
                    <meta
                      name="description"
                      content="The Global Digital Library is part of the Global Book Alliance – bringing books to every child in the world by 2030"
                    />
                    <meta
                      property="og:site_name"
                      content="Home | Global Digital Library"
                    />
                    <meta property="og:image" content="../images/cover.png" />
                    <meta name="twitter:card" content="summary" />
                    <meta
                      name="twitter:image:alt"
                      content="Global Digital Library Logo"
                    />
                    <meta name="twitter:site" content="@GDigitalLibrary" />
                  </Helmet>
                )
              }}
            </Location>
          </>
        )}
      />
    )
  }
}

export default SEO

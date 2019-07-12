// @flow
import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import favicon from "../images/favicon.png"

type Props = {
  title: string,
}

class SEO extends React.Component<Props> {
  render() {
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
              { rel: "shortcut icon", type: "image/png", href: `${favicon}` },
            ]}
          />
        )}
      />
    )
  }
}

export default SEO

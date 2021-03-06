//@flow
import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Cover from "../elements/Cover"
import { Grid } from "@material-ui/core"
import "../style/gridStyle.css"
import BackButton from "../components/backButton"

type node = {
  node: {
    html: any,
  },
}

type pq = {
  allMarkdownRemark: {
    edges: Array<node>,
  },
}

class gdlInNews extends React.Component<{ data: pq }> {
  render() {
    const { edges: posts } = this.props.data.allMarkdownRemark
    return (
      <Layout path="/gdl-in-the-news">
        <SEO title="GDL in the news" />
        <main
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            flex: "1 0 auto",
            height: "fit-content",
          }}
        >
          <div className="news-grid">
            <Cover>
              <h2>Global Digital Library in the news</h2>
            </Cover>
            <Grid>
              <div
                className="postContainer"
                style={{ wordBreak: "break-word" }}
              >
                <div dangerouslySetInnerHTML={{ __html: posts[0].node.html }} />{" "}
                <BackButton />
              </div>
            </Grid>
          </div>
        </main>
      </Layout>
    )
  }
}

export default gdlInNews

export const pageQuery = graphql`
  query gdlNews {
    allMarkdownRemark(filter: { frontmatter: { path: { eq: "/gdlNews" } } }) {
      edges {
        node {
          html
        }
      }
    }
  }
`

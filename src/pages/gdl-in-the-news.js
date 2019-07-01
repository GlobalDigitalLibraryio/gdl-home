import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../elements/Main"
import Cover from "../elements/Cover"
import { Grid } from "@material-ui/core"
import "../style/gridStyle.css"

function gdlInNews({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="GDL in the news" />
      <main
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          width: "fit-content",
          flex: "1 0 auto",
          boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.2)",
          height: "fit-content",
        }}
      >
        <Main style={{ boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.2)" }}>
          <Cover>
            <h2>Global Digital Library in the news</h2>
          </Cover>
          <Grid>
            <div className="pageContent">
              <div dangerouslySetInnerHTML={{ __html: posts[0].node.html }} />{" "}
            </div>
          </Grid>
        </Main>
      </main>
    </Layout>
  )
}

export default gdlInNews

export const pageQuery = graphql`
  query gdlNews {
    allMarkdownRemark(filter: { frontmatter: { path: { eq: "/gdlNews" } } }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            author
            description
          }
          html
        }
      }
    }
  }
`

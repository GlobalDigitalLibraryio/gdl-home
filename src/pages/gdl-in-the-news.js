//@flow
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../elements/Main"
import Cover from "../elements/Cover"
import { Grid } from "@material-ui/core"
import "../style/gridStyle.css"
import BackButton from "../components/backButton"

type Props = {
  pageQuery: allMarkdownRemark,
}

function gdlInNews(props: Props) {
  const { edges: posts } = props.data.allMarkdownRemark
  return (
    <Layout path="/gdl-in-the-news">
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
            <div className="postContainer">
              <div dangerouslySetInnerHTML={{ __html: posts[0].node.html }} />{" "}
              <BackButton />
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
            description
          }
          html
        }
      }
    }
  }
`

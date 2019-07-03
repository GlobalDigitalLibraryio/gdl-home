import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import favicon from "../images/favicon.png"
import Helmet from "react-helmet"
import Main from "../elements/Main"
import "../style/gridStyle.css"
import rehypeReact from "rehype-react"
import { Typography } from "@material-ui/core"
import BackButton from "../components/backButton"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { h1: H1, h2: H2, h3: H3 },
}).Compiler

export default function Template({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <Helmet
        link={[
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: `${favicon}`,
          },
          { rel: "shortcut icon", type: "image/png", href: `${favicon}` },
        ]}
        title={`${post.frontmatter.title} | Global Digital Library`}
      />
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
        <Main>
          <div className="postContainer">
            {" "}
            {renderAst(post.htmlAst)}
            <BackButton />
          </div>
        </Main>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

function H1(props) {
  return (
    <Typography id="h1" variant="h3">
      {props.children}
    </Typography>
  )
}
function H2(props) {
  return (
    <Typography id="h2" variant="h5">
      {props.children}
    </Typography>
  )
}
function H3(props) {
  return (
    <Typography id="h3" variant="h5">
      {props.children}
    </Typography>
  )
}

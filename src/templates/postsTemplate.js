import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import favicon from "../images/favicon.png"
import Helmet from "react-helmet"
import "../style/gridStyle.css"
import rehypeReact from "rehype-react"
import { Typography } from "@material-ui/core"
import BackButton from "../components/backButton"
import Sponsors from "../elements/sponsors"
import Main from "../elements/Main"

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
export const videoTag = link => {
  return (
    <figure
      className="video_container"
      style={{
        position: "relative",
        width: "100%",
        paddingTop: "56.25%",
        marginLeft: "0",
        marginRight: "0",
      }}
    >
      <iframe
        className="video"
        src={link.children[0].replace("watch?v=", "embed/")}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="noe her"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          bottom: "0",
          right: "0",
          width: "100%",
          height: "100%",
        }}
      />
    </figure>
  )
}

export const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { h1: H1, h2: H2, h3: H3, video: videoTag, sponsors: Sponsors },
}).Compiler

type Props = {
  pageQuery: markdownRemark,
}

export default class Template extends React.Component<Props> {
  render() {
    const post = this.props.data.markdownRemark
    return (
      <Layout path={post.frontmatter.path}>
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
        <main className="container">
          <Main>
            <div className="postContainer">
              <div style={{ paddingBottom: "20px", fontStyle: "italic" }}>
                {post.frontmatter.date !== "Invalid date"
                  ? post.frontmatter.date
                  : ""}
              </div>
              {renderAst(post.htmlAst)}
              <BackButton />
            </div>
          </Main>
        </main>
      </Layout>
    )
  }
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

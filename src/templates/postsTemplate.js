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
import { Location } from "@reach/router"

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
        padding: "30%",
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
  components: { h1: H1, h2: H2, h3: H3, video: videoTag },
}).Compiler

type Props = {
  pageQuery: markdownRemark,
}

export default class Template extends React.Component<Props> {
  render() {
    const post = this.props.data.markdownRemark
    let thisUrl
    return (
      <Layout path={post.frontmatter.path}>
        <Location>
          {({ location }) => {
            thisUrl = location.href
            return (
              <Helmet
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
                title={`${post.frontmatter.title} | Global Digital Library`}
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

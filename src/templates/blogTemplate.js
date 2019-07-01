import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import favicon from "../images/favicon.png"
import Helmet from "react-helmet"
import Main from "../elements/Main"
import "../style/gridStyle.css"
import rehypeReact from "rehype-react"
import { Typography } from "@material-ui/core"

function H1(props) {
  return (
    <Typography id="h1" variant="h3">
      {props.children}
    </Typography>
  )
}

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { h1: H1 },
  /*  h2= <Typography css={styles.h2} variant="h5" />,
    h3: (props: any) => <Typography {...props} css={styles.h3} variant="h5" />,
    button: (props: any) => {
      const isCover = props.hasOwnProperty('invert');
      return (
        <SafeButton
          {...props}
          css={isCover ? styles.coverButton : styles.button}
        />
      );
    },

    p: Paragraph,
    cover: Cover,
    section: Section,
    grid: Grid,
    griditem: GridItem,
    gridheader: GridHeader
  }  }, */
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
          <div className="blogContainer">
            {" "}
            {/*  <h1>{post.frontmatter.title}</h1>{" "} */}
            {renderAst(post.htmlAst)}
            {/* <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.htmlAst }}
            />{" "} */}
            <div></div>
            <button>Back</button>
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
        author
      }
    }
  }
`

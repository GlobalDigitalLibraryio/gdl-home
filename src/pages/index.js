import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

import {
  Button,
  Grid,
  CardActionArea,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core"

import Main from "../elements/Main"
import Cover from "../elements/Cover"
import Sponsors from "../elements/sponsors"
import "../Style/indexStyle.css"

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="Home" />
      <main
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          /* width: "fit-content", */
          flex: "1 0 auto",
          height: "fit-content",
        }}
      >
        <Main>
          <Cover>
            <p>Our mission</p>
            <h2>
              The Global Digital Library is part of the Global Book Alliance –
              bringing books to every child in the world by 2030
            </h2>
            <p id="coverButton">
              <Button
                id="coverBtnLink"
                variant="outlined"
                href="https://digitallibrary.io/"
              >
                START READING
              </Button>
            </p>
          </Cover>
          <Grid container id="gridFrontPage">
            {posts.map(({ node: post }, key) => (
              <Grid item key={post.frontmatter.title}>
                <CardActionArea
                  component="a"
                  href={post.frontmatter.path}
                  style={{
                    boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.1)",
                    height: "100%",
                  }}
                >
                  <Card
                    className={
                      key % 4 === 0 || key % 4 === 3
                        ? key % 2 === 0
                          ? "card"
                          : "colorSmallScreen card"
                        : key % 2 === 0
                        ? "colorBigScreen card"
                        : "colorBigScreen colorSmallScreen card"
                    }
                    style={{ height: "100%" }}
                  >
                    <CardContent>
                      <Typography
                        variant="h5"
                        style={{
                          padding: "10px 0px",
                          fontSize: "1.7rem",
                        }}
                      >
                        {post.frontmatter.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        paragraph
                        style={{
                          fontSize: "16px",
                          fontFamily: "Lato, Roboto, sans-serif",
                        }}
                      >
                        {post.frontmatter.description}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        style={{ color: "#0277bd" }}
                      >
                        Read more...
                      </Typography>
                    </CardContent>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>

          <Sponsors />

          <div style={{ marginTop: "30px" }}>
            <Card className="card">
              <CardContent id="blogInfo">
                <Typography
                  variant="h5"
                  style={{
                    padding: "10px 0px",
                    fontSize: "1.7rem",
                  }}
                >
                  News, info and updates on the development of the Global
                  Digital Library
                </Typography>
                <div className="quote">
                  <Typography
                    variant="subtitle1"
                    paragraph
                    style={{
                      fontSize: "16px",
                      fontFamily: "Lato, Roboto, sans-serif",
                    }}
                  >
                    In the blog you can read about experiences developing the
                    GDL to date and be kept in the loop as it evolves.
                  </Typography>
                </div>
                <p style={{ marginLeft: "auto", marginRight: "auto" }}>
                  <Button
                    id="blogBtnLink"
                    variant="outlined"
                    href="https://blog.digitallibrary.io/"
                  >
                    Visit the blog
                  </Button>
                </p>
              </CardContent>
            </Card>
          </div>
        </Main>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { showOnFrontPage: { eq: true } } }
      sort: { order: DESC, fields: frontmatter___description }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          frontmatter {
            title
            path
            description
          }
        }
      }
    }
  }
`

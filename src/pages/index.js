import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"
import { makeStyles } from "@material-ui/core/styles"

import {
  Button,
  Grid,
  CardActionArea,
  Card,
  CardContent,
  Hidden,
  CardMedia,
  Typography,
} from "@material-ui/core"

import Main from "../elements/Main"
import Cover from "../elements/Cover"
import "../Style/indexStyle.css"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
}))

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Home" />
      {/* <Container maxWidth="lg"> */}
      <main
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          width: "fit-content",
          flex: "1 0 auto",
          //boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.2)",
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
          <br></br>
          <Grid container spacing={4}>
            {posts.map(({ node: post }) => (
              <Grid item key={post.frontmatter.title} xs={12} md={6}>
                <CardActionArea
                  component="a"
                  href={post.frontmatter.path}
                  style={{
                    boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.1)",
                    height: "100%",
                  }}
                >
                  <Card className={classes.card} style={{ height: "100%" }}>
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
                    <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                      />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
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

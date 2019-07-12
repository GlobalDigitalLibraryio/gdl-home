//@flow
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Grid } from "@material-ui/core"
import "../style/gridStyle.css"

const Sponsors = () => {
  return (
    <StaticQuery
      query={graphql`
        query imageQuery {
          allFile(filter: { sourceInstanceName: { eq: "sponsors" } }) {
            edges {
              node {
                publicURL
              }
            }
          }
        }
      `}
      render={data => (
        <Grid id="sponsorGrid" style={{ marginTop: "80px" }}>
          {data.allFile.edges.map(img => {
            return (
              <Grid item key={img.node.publicURL}>
                <img
                  src={img.node.publicURL}
                  alt="sponsorLogo"
                  style={{ width: "100%", padding: "5px" }}
                ></img>
              </Grid>
            )
          })}
        </Grid>
      )}
    />
  )
}

export default Sponsors

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../elements/Main"
import Cover from "../elements/Cover"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Main>
      <Cover></Cover>
    </Main>
  </Layout>
)

export default SecondPage

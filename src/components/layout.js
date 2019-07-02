import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./Footer/footer"

const Layout = ({ children }) => (
  <div style={{ height: "auto", overflow: "hidden" }}>
    <Header />
    {children}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

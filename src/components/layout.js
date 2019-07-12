//@flow
import React from "react"
import Header from "./header"
import Footer from "./Footer/footer"

type Props = {
  children: React.node,
  path: string,
}

class Layout extends React.Component<Props> {
  render() {
    return (
      <div style={{ height: "auto" }}>
        <Header path={this.props.path} />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default Layout

//@flow
import * as React from "react"
import Header from "./header"
import Footer from "./Footer/footer"

type Props = {
  children: React.Node,
  path: string,
}

const Layout = ({ children, path }: Props) => (
  <div style={{ height: "auto" }}>
    <Header path={path} />
    {children}
    <Footer />
  </div>
)

export default Layout

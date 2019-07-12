//@flow
import React from "react"
import "../style/gridStyle.css"

type Props = {
  children: React.node,
}

class Main extends React.Component<Props> {
  render() {
    return <div id="grid">{this.props.children}</div>
  }
}

export default Main

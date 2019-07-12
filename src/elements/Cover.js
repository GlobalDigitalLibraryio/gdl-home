//@flow
import React from "react"
import "../style/coverStyle.css"

type Props = {
  children: React.node,
}

class Cover extends React.Component<Props> {
  render() {
    return <div id="cover">{this.props.children}</div>
  }
}
export default Cover

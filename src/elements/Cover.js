//@flow
import * as React from "react"
import "../style/coverStyle.css"

type Props = {
  children: React.Node,
}

class Cover extends React.Component<Props> {
  render() {
    return <div id="cover">{this.props.children}</div>
  }
}
export default Cover

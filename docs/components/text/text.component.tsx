import * as React from "react"
import * as ReactDOM from "react-dom"

class Props {
  public gaeaSetting = {
    key: "gaea-text",
    name: "文字"
  }

  public style: React.CSSProperties = {

  }

  public text: string = "文字"
}

class State { }

export default class Container extends React.Component<Props, State> {
  public static defaultProps = new Props()
  public state = new State()

  public render() {
    return (
      <span style={this.props.style}>
        {this.props.text}
      </span>
    )
  }
}
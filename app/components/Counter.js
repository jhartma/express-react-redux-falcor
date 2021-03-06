import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

export const Counter = React.createClass({
  displayName: "Hello",

  propTypes: {
    counter: React.PropTypes.number,
    incrementCounter: React.PropTypes.func,
    setPath: React.PropTypes.func,
    title: React.PropTypes.string,
    user: React.PropTypes.string,
  },

  mixins: [ PureRenderMixin ],

  setTitle() {
    this.props.setPath("title", this.refs.title.value)
  },

  render() {
    console.log(this.props)
    return (
      <div>
        <h1 className="redux-title">Redux Store</h1>
        <div className="counter">{this.props.counter}</div>
        <button className="button-increment" onClick={this.props.incrementCounter}>Increment counter</button>
        <h1>Falcor Cached User Input</h1>
        <p>{this.props.title}</p>
        <input onKeyUp={this.setTitle} placeholder="Set Title" ref="title" type="text"></input>
        <h1>Fetched from database via Falcor</h1>
        <p>User: {this.props.user}</p>
      </div>
    )
  },
})

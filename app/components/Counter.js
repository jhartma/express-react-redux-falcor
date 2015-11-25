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
    return (
      <div>
        <h1>Hello world</h1>
        <div className="counter">{this.props.counter}</div>
        <button className="button-increment" onClick={this.props.incrementCounter}>Increment counter</button>
        <div>Falcor Store</div>
        <h1>{this.props.title}</h1>
        <input onKeyUp={this.setTitle} placeholder="Set Title" ref="title" type="text"></input>
        <h1>Fetched from database</h1>
        <p>User: {this.props.user}</p>
      </div>
    )
  },
})

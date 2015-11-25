import * as CounterActions from "../core/action_creators"
import * as FalcorActions from "redux-falcor"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Counter } from "./Counter"
import _ from "lodash"

function mapStateToProps(state) {
  return {
    counter: state.counterReducer.get("counter"),
    title: state.falcorReducer.title,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(_.merge(CounterActions, FalcorActions), dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)

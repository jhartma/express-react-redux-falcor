import * as CounterActions from "../core/actions/action_creators"
import { setPath } from "redux-falcor"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Counter } from "./Counter"
import _ from "lodash"

function mapStateToProps(state) {
  console.log(state.falcorReducer)
  return {
    counter: state.counterReducer.get("counter"),
    title: state.falcorReducer.title,
    user: state.falcorReducer.user,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(_.extend(CounterActions, { setPath: setPath }), dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)

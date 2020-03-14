
import { connect } from 'react-redux'
import UndoableTool from "../components/UndoableTool.jsx"
import { ActionCreators } from "redux-undo"
import { hideUndoableTool } from "../actions/importAction"

const mapStateToProps = state => ({
  inuse: state.importReducer.present.showUndoableTool
})

const mapDispatchToProps = dispatch => ({
  undo: () => {
    dispatch(ActionCreators.undo());
    dispatch(hideUndoableTool());
  },
  hideUndoableTool: () => { dispatch(hideUndoableTool()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(UndoableTool)

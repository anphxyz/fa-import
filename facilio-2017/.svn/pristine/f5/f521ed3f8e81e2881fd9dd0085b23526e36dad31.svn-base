
import { connect } from 'react-redux'
import MachineNameTool from "../components/MachineNameTool.jsx"
import { changeSV201 } from "../actions/importAction"


const mapDispatchToProps = dispatch => ({
  changeSV201: e => { dispatch(changeSV201(e.target.value || '')) }
})

const mapStateToProps = state => ({
  FS200: state.importReducer.present.FS200,
  SV201: state.importReducer.present.SV201,
  imported: state.importReducer.present.imported
})

export default connect(mapStateToProps, mapDispatchToProps)(MachineNameTool)

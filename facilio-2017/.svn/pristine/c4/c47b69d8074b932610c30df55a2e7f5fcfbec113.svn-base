
import { connect } from 'react-redux'
import TabContentPM from "../components/TabContentPM.jsx"
import { addRow } from "../actions/importAction"
import { mapRowFromExcel } from "../helper/maper"

const mapStateToProps = state => ({
  listPM: state.importReducer.present.tab_M
})

const mapDispatchToProps = dispatch => ({
  addRow: () => dispatch(addRow('M', mapRowFromExcel('M')))
})

export default connect(mapStateToProps, mapDispatchToProps)(TabContentPM)

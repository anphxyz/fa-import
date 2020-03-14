
import { connect } from 'react-redux'
import TabContentPM from "../components/TabContentPM.jsx"
import { addRow } from "../actions/importAction"
import { mapRowFromExcel } from "../helper/maper"

const mapStateToProps = state => ({
  listPM: state.importReducer.present.tab_E
})

const mapDispatchToProps = dispatch => ({
  addRow: () => dispatch(addRow('E', mapRowFromExcel('E')))
})

export default connect(mapStateToProps, mapDispatchToProps)(TabContentPM)

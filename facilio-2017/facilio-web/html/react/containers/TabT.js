
import { connect } from 'react-redux'
import TabContentBT from "../components/TabContentBT.jsx"
import { addRow } from "../actions/importAction"
import { mapRowFromExcel } from "../helper/maper"

const mapStateToProps = state => ({
  listBT: state.importReducer.present.tab_T

})

const mapDispatchToProps = dispatch => ({
  addRow: () => dispatch(addRow('T', mapRowFromExcel('T')))
})

export default connect(mapStateToProps, mapDispatchToProps)(TabContentBT)

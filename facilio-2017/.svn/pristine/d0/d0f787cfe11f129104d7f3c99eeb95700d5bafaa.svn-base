
import { connect } from 'react-redux'
import BTRow from "../components/BTRow.jsx"
import {
  rmvRow, cloneRow, goEditMode, saveEdit, cancelEdit
} from "../actions/importAction"

const mapDispatchToProps = dispatch => ({
  saveEdit: (rowId, rowData) => { dispatch(saveEdit(rowId, rowData)) },
  cancelEdit: rowId => { dispatch(cancelEdit(rowId)) },
  rmvRow: rowId => { dispatch(rmvRow(rowId)) },
  cloneRow: rowId => { dispatch(cloneRow(rowId)) },
  goEditMode: rowId => { dispatch(goEditMode(rowId)) }
})

export default connect(null, mapDispatchToProps)(BTRow)

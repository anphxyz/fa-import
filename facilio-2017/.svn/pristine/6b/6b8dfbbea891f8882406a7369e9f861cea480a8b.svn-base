import {
  changeSV201, changeFName, addTab, resetAllData, doImport
} from "../actions/importAction"
import { connect } from 'react-redux'
import Toolbar from "../components/Toolbar.jsx"
import { ReadXLS } from '../helper/excel';
import { mapRowFromExcel } from "../helper/maper"

const START_ROW_TO_READ = 4;

const mapStateToProps = state => ({
  fileName: state.importReducer.present.fileName,
  imported: state.importReducer.present.imported,
  downloadLink: '#'
})

const mapDispatchToProps = dispatch => ({
  resetAllData: () => {
    document.querySelector('input[type="file"]').value = null;
    dispatch(resetAllData())
  },
  doImport: () => { dispatch(doImport()) },
  handleFileUpload: e => {
    //1. reset form
    dispatch(resetAllData())
    //2. get file info + update file name
    const file = !!e.target.files[0] ? e.target.files[0] : null;
    dispatch(changeFName(file.name));
    //3. Read file
    ReadXLS(file).then(wb => {
      //4. set sv201
      const mainSheet = wb.E || wb.M || wb.T || wb.O,
        row0 = !!mainSheet && !!mainSheet[0] ? mainSheet[0].split('#qb#') : [];
      dispatch(changeSV201(row0[1] || ''));
      //5: analytic wb -> {}
      ['E', 'M', 'T', 'O'].map(fc550 => {
        dispatch(addTab(fc550, !!wb[fc550] ? _proccessDataTab(wb[fc550], fc550) : []))
      })
    }).catch(err => { throw new Error(err); });
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)

const _proccessDataTab = (tab, fc550) => tab.slice(START_ROW_TO_READ)
  .filter(row => !!row && row.split('#qb#')[1].length)//'' || #qb##qb##qb##qb##qb##qb##qb##qb#
  .map((row, i) => mapRowFromExcel(fc550, row, i))
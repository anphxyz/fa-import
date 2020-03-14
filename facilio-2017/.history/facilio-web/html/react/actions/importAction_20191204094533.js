import axios from 'axios';
import * as Types from '../constants/ActionTypes'
import { mapRowFromDB } from "../helper/maper"

export const hideUndoableTool = () => ({ type: Types.HIDE_UNDOABLE_TOOL });
export const resetAllData = () => ({ type: Types.RESET_ALL_DATA });
export const changeSV201 = SV201 => ({ type: Types.CHANGE_SV201, SV201 });
export const changeFName = fname => ({ type: Types.CHANGE_FNAME, fname });
export const addTab = (fc550, tabData) => ({ type: Types.ADD_TAB, fc550, tabData });
export const addTabAfterImport = (fc550, tabData) => ({ type: Types.ADD_TAB_AFTER_IMPORT, fc550, tabData });
export const addRow = (fc550, rowData) => ({ type: Types.ADD_ROW, fc550, rowData });
export const saveEdit = (rowId, rowData) => ({ type: Types.SAVE_EDIT, rowId, rowData });
export const goEditMode = rowId => ({ type: Types.GO_EDIT_MODE, rowId });
export const cancelEdit = rowId => ({ type: Types.CANCEL_EDIT, rowId });
export const rmvRow = rowId => ({ type: Types.RMV_ROW, rowId });
export const cloneRow = rowId => ({ type: Types.CLONE_ROW, rowId });
/** get all state => request*/
export const doImport = () => (dispatch, getState) => {
  const { importReducer: { present: { FS200, SV201, tab_M, tab_E, tab_T, tab_O } } } = getState(),
    formData = new FormData();
  formData.append('JSON', JSON.stringify({ FS200, SV201, tab_M, tab_E, tab_T, tab_O }))
  showLoading();
  axios({
    method: 'post',
    url: '/import/receive_wb',
    data: formData,
    config: { headers: { 'Content-Type': 'multipart/form-data' } }
  }).then(rs => {
    dispatch(importDone(rs));
    hideLoading();
  }).catch(error => { throw new Error(error); })
}
/** after import success*/
export const importDone = () => (dispatch, getState) => {
  const { importReducer: { present: { SV201, tab_M, tab_E, tab_T, tab_O } } } = getState(),
    fc550Array = [];

  tab_M.length && fc550Array.push('M');
  tab_E.length && fc550Array.push('E');
  tab_T.length && fc550Array.push('T');
  tab_O.length && fc550Array.push('O');


  const promiseImport = fc550Array.map(FC550 =>
    axios({
      method: 'get',
      url: buildUrl('/import/get_listb100', {
        FS200: 0,
        FC550,
        SV201: encodeURI(SV201),
        MTYPE: ['M', 'E'].indexOf(FC550) > -1 ? 'PM' : 'BT'
      }),
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
  )

  showLoading();

  Promise.all(promiseImport).then(rs => {
    const status = rs.reduce((recent, curent) => curent.data.status !== recent ? curent.data.status : recent, 'success')

    if (status === 'success') {
      rs.map(tab => {
        const tabArray = tab.data.elements || [];
        if (tabArray.length) {
          const dataTab = tabArray.map((b100, i) => mapRowFromDB(b100, i))
          console.log(tab.data.elements, tabArray);
          dispatch(addTabAfterImport(tabArray[0].FC550, dataTab));
        }
      })
      hideLoading();
      swalSuccess(lang._update_success)
    } else
      swalError(lang._update_fail)
  })
    .catch(error => { throw new Error(error); })
}


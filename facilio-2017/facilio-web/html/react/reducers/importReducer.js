import * as Types from "../constants/ActionTypes";

const initialState = {
  fileName: lang._choose_file,
  FS200: 0,
  SV201: '',
  tab_M: [],
  tab_E: [],
  tab_T: [],
  tab_O: [],
  imported: false,
  showUndoableTool: false
}

export default (state = initialState, action) => {
  const fc550 = action.fc550 || (action.rowId ? action.rowId.split('-')[0] : ''),
    tabName = fc550 ? 'tab_' + fc550 : '',
    actionIdx = !!action.rowId ? +action.rowId.split('-')[1] : 0;

  //đảm bảo chỉ unload đúng lúc, vào đây tức là có action => reset HIDE_UNDOABLE_TOOL
  state = { ...state, showUndoableTool: false }

  switch (action.type) {

    //virtual case Types.HIDE_UNDOABLE_TOOL:

    case Types.RESET_ALL_DATA:
      const { tab_M, tab_E, tab_T, tab_O } = state,
        allTabEmpty = [tab_M, tab_E, tab_T, tab_O]
          .reduce((recent, tab) => recent && isTabEmpty(tab))
      return {
        ...initialState,
        showUndoableTool: !allTabEmpty
      };

    case Types.CHANGE_SV201:
      return {
        ...state,
        SV201: action.SV201
      };

    case Types.CHANGE_FNAME:
      return {
        ...state,
        fileName: action.fname
      };

    case Types.ADD_TAB:
      return {
        ...state,
        [tabName]: action.tabData
      };

    case Types.ADD_TAB_AFTER_IMPORT:
      return {
        ...state,
        imported: true,
        [tabName]: action.tabData
      };

    case Types.ADD_ROW:
      //ex: E-1 | M-0 | T-9 | O-12
      action.rowData.ID = action.fc550 + '-' + state[tabName].length;
      return {
        ...state,
        [tabName]: [...state[tabName], action.rowData]
      };

    case Types.GO_EDIT_MODE:
      return {
        ...state,
        [tabName]: state[tabName]
          .map(row => row.ID === action.rowId ?
            ({ ...row, stateRow: row.stateRow.replace('row-view', 'row-edit') }) : row)
      }

    case Types.SAVE_EDIT:
      return {
        ...state,
        [tabName]: state[tabName].map(row => row.ID === action.rowId ? ({
          ...action.rowData,
          stateRow: row.stateRow.replace('empty', '').replace('row-edit', 'row-view')
        }) : row)
      }

    case Types.CANCEL_EDIT:
      return {
        ...state,
        [tabName]: state[tabName]
          .filter(row => !isRowEmpty(row, action.rowId))
          .map(row => row.ID === action.rowId ?
            ({ ...row, stateRow: row.stateRow.replace('row-edit', 'row-view') })
            : row)
      }

    case Types.RMV_ROW:
      const [{ SV251, dispSv251 }] = state[tabName].filter(row => row.ID === action.rowId);
      return {
        ...state,
        //empty -> dont need undo
        showUndoableTool: 0 === state[tabName].filter(row => isRowEmpty(row, action.rowId)).length,
        [tabName]: [...state[tabName]]
          .reduce(rmvRow({ SV251, dispSv251 }, actionIdx), [])
          .map(reInitRowID)
      };

    case Types.CLONE_ROW:
      return {
        ...state,
        [tabName]: [...state[tabName]]
          .reduce(makeCloneRow(actionIdx), [])
          .map(reInitRowID)
      };

    default: return { ...state };
  }
};

const reInitRowID = (row, i) => ({ ...row, ID: row.FC550 + '-' + i });

const rmvRow = ({ SV251, dispSv251 }, idx) => (tabData, row, index) =>
  // 1. clone: concat row + cloned row
  index === idx ? tabData
    : index === idx + 1 ?//2. 
      [...tabData, {//processSV251NextRow
        ...row,//prev: !empty <=> fade-out + same sv251
        dispSv251: !dispSv251 && SV251 === row.SV251 ? '' : row.dispSv251
      }]
      : [...tabData, row]//3. keep original

const makeCloneRow = idx => (tabData, row, index) =>
  index === idx ? [// 1. clone: concat row + cloned row
    ...tabData,
    ...[row, { ...row, stateRow: 'row-edit', rowKey: row.FC550 + getRandomStr() }]
  ] : [...tabData, row]//2. keep original

const isTabEmpty = tab => tab.reduce((recent, row) => recent && row.stateRow.indexOf('empty') > -1, true)

const isRowEmpty = (row, actionRowId) => row.ID === actionRowId && row.stateRow.indexOf('empty') > -1
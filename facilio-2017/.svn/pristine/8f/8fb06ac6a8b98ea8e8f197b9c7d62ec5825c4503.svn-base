
import { combineReducers } from "redux";
import undoable from 'redux-undo';
import importReducer from "./importReducer";
const rootReducer = combineReducers({
  importReducer: undoable(importReducer, { limit: 2 })
});
export default rootReducer;

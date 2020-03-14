
import { combineReducers } from "redux";
import undoable from 'redux-undo';
import reagierenReducer from "./reagierenReducer";
const rootReducer = combineReducers({
  reagierenReducer//: undoable(reagierenReducer, { limit: 2 })
});
export default rootReducer;

import { combineReducers } from "redux-immutable";
import {reducer as indexReducer} from '../views/index/store'
const cReducer = combineReducers({
  index:indexReducer
});

export default cReducer;
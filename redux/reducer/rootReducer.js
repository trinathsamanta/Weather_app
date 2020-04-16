import {NameReducer} from "./reducer";
import { combineReducers } from "redux";
import { DataReducer } from "./reducer2";

const rootReducer = combineReducers({
    NameReducer:NameReducer,
    DataReducer:DataReducer
})
export default rootReducer;
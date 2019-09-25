import { History } from "history";
import { combineReducers } from "redux";
import { Todo, OneData } from "../model/model";
import * as todoReducer from "./todo";
import * as oneDataReducer from "./oneData";

export interface RootState {
	todoList: Todo[];
	oneDataList: OneData[];
}

export default (history: History) =>
	combineReducers({
		...todoReducer,
		...oneDataReducer,
	});

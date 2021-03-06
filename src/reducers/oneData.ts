import { Action, ActionType, OneData } from "../model/model";
import createReducer from "./createReducer";

export const oneDataList = createReducer<OneData[]>([], {
	[ActionType.ADD_ONEDATA](state: OneData[], action: Action<OneData>) {
		return [...state, action.payload];
	},
	[ActionType.COMPLETE_ONEDATA](state: OneData[], action: Action<number>) {
		// search after todo item with the given id and set completed to true
		return state.map(t =>
			t.id === action.payload ? { ...t, completed: true } : t
		);
	},
	[ActionType.UNCOMPLETE_ONEDATA](state: OneData[], action: Action<number>) {
		// search after todo item with the given id and set completed to false
		return state.map(t =>
			t.id === action.payload ? { ...t, completed: false } : t
		);
	},
	[ActionType.DELETE_ONEDATA](state: OneData[], action: Action<number>) {
		// remove all todos with the given id
		return state.filter(t => t.id !== action.payload);
	},
});

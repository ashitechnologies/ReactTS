import { Action, ActionType, OneData } from "../model/model";

export function addOneData(oneData: OneData): Action<OneData> {
	return {
		type: ActionType.ADD_ONEDATA,
		payload: oneData,
	};
}

// Async Function expample with redux-thunk
export function completeOneData(oneDataID: number) {
	// here you could do API eg

	return (dispatch: Function, getState: Function) => {
		dispatch({ type: ActionType.COMPLETE_ONEDATA, payload: oneDataID });
	};
}

export function uncompleteOneData(oneDataID: number): Action<number> {
	return {
		type: ActionType.UNCOMPLETE_ONEDATA,
		payload: oneDataID,
	};
}

export function deleteOneData(oneDataID: number): Action<number> {
	return {
		type: ActionType.DELETE_ONEDATA,
		payload: oneDataID,
	};
}


export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export enum ActionType {
    ADD_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    UNCOMPLETE_TODO,
    ADD_ONEDATA,
    DELETE_ONEDATA,
    COMPLETE_ONEDATA,
    UNCOMPLETE_ONEDATA
}

export interface Action<T> {
    type: ActionType;
    payload: T;
}

export interface OneData {
    id: number;
    userList: User[];

}

export interface User {
    id: number;
    name: string;
    address: string;
    email: string;
    password: string;
}



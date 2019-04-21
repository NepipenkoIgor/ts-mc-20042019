import { AnyAction } from 'redux';

export enum UsersActions {
    GET_USERS_PENDING = 'GET_USERS_PENDING',
    GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
    GET_USERS_ERROR = 'GET_USERS_ERROR',
}

export function getUsersPending(): AnyAction {
    return {
        type: UsersActions.GET_USERS_PENDING,
    };
}

export function getUsersSuccess(payload: any): AnyAction {
    return {
        type:  UsersActions.GET_USERS_SUCCESS,
        payload
    };
}
export function getUsersError(payload: string): AnyAction {
    return {
        type: UsersActions.GET_USERS_ERROR,
        payload
    };
}

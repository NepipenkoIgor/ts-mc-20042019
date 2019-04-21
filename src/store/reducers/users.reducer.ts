import { UsersActions } from '../actions/user.actions';
import { AnyAction } from 'redux';

export interface IUser {
    profileName: string;
    firstName: string;
    surname: string;
    photo: string;
    country: string;
}

const initialState: IUser[] = [];

export function usersReducer(state: IUser[] = initialState, action: AnyAction): IUser[] {
    switch (action.type) {
        case  UsersActions.GET_USERS_SUCCESS:
            return action.payload;
        case  UsersActions.GET_USERS_ERROR:
            return state;
        default:
            return state;
    }
}

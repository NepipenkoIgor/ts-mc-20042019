import { combineReducers, Reducer } from 'redux';
import { searchTermReducer } from './search-term.reducer';
import { IUser, usersReducer } from './users.reducer';

export interface IStore {
    searchTerm: string;
    users: IUser[];
}

export const rootReducers: Reducer<IStore> = combineReducers({
    searchTerm: searchTermReducer,
    users: usersReducer,
})

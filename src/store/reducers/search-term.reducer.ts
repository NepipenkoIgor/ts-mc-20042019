import { AnyAction } from 'redux';
import { SEARCH_BY_TERM } from '../actions/search-term.actions';

const initalState: string = '';

export function searchTermReducer(state: string = initalState, action: AnyAction): string {
    switch (action.type) {
        case SEARCH_BY_TERM:
            return action.payload;
        default:
            return state;
    }
}

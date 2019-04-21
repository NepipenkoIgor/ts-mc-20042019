import { AnyAction } from 'redux';

export const SEARCH_BY_TERM: string = 'SEARCH_BY_TERM';

export function searchByTerm(payload: string): AnyAction {
    return {
        type: SEARCH_BY_TERM,
        payload
    };
}

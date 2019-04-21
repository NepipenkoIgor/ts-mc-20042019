import { ActionsObservable, ofType } from 'redux-observable';
import { AnyAction } from 'redux';
import { getUsersError, getUsersSuccess, UsersActions } from '../actions/user.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { getUsers } from '../../services';
import { AxiosResponse } from 'axios';
import { IUser } from '../reducers/users.reducer';
// GET_USE......
// tslint:disable-next-line
export const usersEpic = (actions$: ActionsObservable<AnyAction>) =>
    actions$.pipe(
        ofType(UsersActions.GET_USERS_PENDING),
        switchMap(() => {
            return from(getUsers().then((res: AxiosResponse<IUser[]>) => res.data))
                .pipe(
                    map((users: IUser[]) => getUsersSuccess(users)),
                    catchError((_err: Error) => of(getUsersError('Error on request')))
                );
        })
    );

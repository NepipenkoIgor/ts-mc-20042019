import { AxiosPromise } from 'axios';
import { axiosInstance } from '../config';
import { IUser } from '../store/reducers/users.reducer';

export const getUsers: () => AxiosPromise<IUser[]> = () => axiosInstance.get<IUser[]>('/participants?key=u342kb');

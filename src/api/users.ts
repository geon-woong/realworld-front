import {
    GET,
    POST,
    PUT,
} from './config';
import { AuthUser,User } from '../types';

export const registerUser = (body : { user: AuthUser }) => POST('/users', body);

export const loginUser = (body: { user: AuthUser }) => POST('/users/login', body);

export const getUser = ()=> GET('/user')

export const putUser =(body : { user: User})=>PUT('/user',body);

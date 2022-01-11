import { FETCH_USERLIST_REQUEST, FETCH_USERLIST_SUCCESS, FETCH_USERLIST_FAILURE } from '../types/UserTypes';
import axios from 'axios';


export const userListRequest = () => {
    return {
        type: FETCH_USERLIST_REQUEST,
    }
};

export const userListSuccess = (user: any) => {
    return {
        type: FETCH_USERLIST_SUCCESS,
        payload: user
    }
};

export const userListFailure = (error: any) => {
    return {
        type: FETCH_USERLIST_FAILURE,
        payload: error
    }
};

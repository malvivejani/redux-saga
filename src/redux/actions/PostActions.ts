import axios from "axios"
import { FETCH_POST_FAILURE, FETCH_POST_REQUEST, FETCH_POST_SUCCESS } from "../types/PostTypes"

export const fetchPostRequest = () => {
    return {
        type: FETCH_POST_REQUEST
    }
}

export const fetchPostSuccess = (post: any) => {
    return {
        type: FETCH_POST_SUCCESS,
        payload: post
    }
}

export const fetchPostFailure = (error: any) => {
    return {
        type: FETCH_POST_FAILURE,
        payload: error
    }
}

// export const fetchPosts = () => {
//     return (dispatch: any) => {
//         dispatch(fetchPostRequest());
//         axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
//             const post = response.data;
//             dispatch(fetchPostSuccess(post));
//         }).catch(error => {
//             dispatch(fetchPostFailure(error))
//         });
//     }
// }
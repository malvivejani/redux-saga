import axios from "axios"
import { all, call, put, takeLatest } from "redux-saga/effects"
import { userListFailure, userListSuccess } from "../redux/actions/UserActions";
import { FETCH_USERLIST_REQUEST } from "../redux/types/UserTypes"

const getUserList = () => axios.get('https://jsonplaceholder.typicode.com/users');

function* fetchUserListSaga(): any {
    try {
        const response = yield call(getUserList);
        yield put(userListSuccess(response.data))
    } catch (e: any) {
        yield put(userListFailure(e.message))
    }

};

function* userSaga() {
    yield all([takeLatest(FETCH_USERLIST_REQUEST, fetchUserListSaga)])
}

export default userSaga;

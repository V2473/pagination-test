import { takeEvery, put, select, debounce } from 'redux-saga/effects';
import * as requests from '../logic/requests'
import * as actionTypes from '../redux/actionTypes';

function* requestUsersLists() {

  const payload = yield requests.getUsersRequest()
    .then(res => res)
    .catch(err => console.log(err));
  yield put({ type: actionTypes.USERS_LIST, payload: [...payload.data ]})
}

function* deleteUser(id) {
  yield requests.deleteUserRequest(id.payload)
    .then(res => res)
    .catch(err => console.log(err));
  yield put({ type: actionTypes.UPDATE_USERS_LIST, })
}

function* editUser(user) {
  yield requests.editUserRequest(user.payload)
    .then(res => res)
    .catch(err => console.log(err));
  yield put({ type: actionTypes.UPDATE_USERS_LIST, })
}

function* createUser(user) {
  yield requests.createUserRequest(user.payload)
    .then(res => res)
    .catch(err => console.log(err));
  yield put({ type: actionTypes.UPDATE_USERS_LIST, })
}

export default function* sagaWatcher() {
  yield takeEvery(actionTypes.UPDATE_USERS_LIST, requestUsersLists)
  yield takeEvery(actionTypes.DELETE_USER, deleteUser)
  yield takeEvery(actionTypes.EDIT_USER, editUser)
  yield takeEvery(actionTypes.CREATE_USER, createUser)
}
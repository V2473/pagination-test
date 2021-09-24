import * as actionTypes from './actionTypes';

export const requestUsersList = () => {
  return { type: actionTypes.REQUEST_USERS_LIST }
}

export const deleteUser = (id) => {
  return { type: actionTypes.DELETE_USER, payload: id }
}

export const editUser = (user) => {
  return { type: actionTypes.EDIT_USER, payload: user }
}

export const createUser = (user) => {
  return { type: actionTypes.CREATE_USER, payload: user }
}

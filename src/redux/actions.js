import * as actionTypes from './actionTypes';

export const updateUsersList = () => {
  return { type: actionTypes.UPDATE_USERS_LIST }
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

import * as CONSTANTS from '../constants/_constants';
import axios from 'axios';

export async function getUsersRequest(){
  return await axios.get(CONSTANTS.GET_POST_USERS_URL);
}

export async function createUserRequest(user) {
  return await axios.post(CONSTANTS.GET_POST_USERS_URL + '?' + new URLSearchParams({
    name: user.name,
    surname: user.surname,
    desc: user.desc 
  }));
}

export async function editUserRequest(user) {
  return await axios.put(CONSTANTS.PUT_DELETE_USER_URL + user.id + '?' +  new URLSearchParams({
    name: user.name,
    surname: user.surname,
    desc: user.desc 
  }));
}

export async function deleteUserRequest(id) {
  return await axios.delete(CONSTANTS.PUT_DELETE_USER_URL + id);
}
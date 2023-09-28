import {UserDetailsActionTypes} from './actionTypes';
export function saveUserDetails(body) {
  console.log('inside actions', body);
  return {
    type: UserDetailsActionTypes.userdetails.SUCCESS,
    payload: body,
  };
}

import {UserDetailsActionTypes} from './actionTypes';
export function saveUserDetails(body) {
 
  return {
    type: UserDetailsActionTypes.userdetails.SUCCESS,
    payload: body,
  };
}

export function addToFavourites(body) {
  console.log('inside fav actions', body);
  return {
    type: UserDetailsActionTypes.addFavourites.SUCCESS,
    payload: body,
  };
}

export function deleteFromfavourites(body) {
  console.log('inside  delete actions', body);
  return {
    type: UserDetailsActionTypes.deleteFavourites.SUCCESS,
    payload: body,
  };
}

import {UserDetailsActionTypes} from './actionTypes';
let initialState = {
  userDetails: [],
};
const UserDetailsReducer = (state = initialState, action = {}) => {
  console.log(action.type, state, 'reducers');
  switch (action.type) {
    case UserDetailsActionTypes.userdetails.SUCCESS:
      return {
        ...state,

        userDetails: [...state.userDetails, action.payload],
      };

    default:
      return state;
  }
};
export default UserDetailsReducer;

import {UserDetailsActionTypes} from './actionTypes';
let initialState = {
  userDetails: [],
};
const UserDetailsReducer = (state = initialState, action = {}) => {
  console.log(action.payload, 'Action Payload ID');
  console.log(state.userDetails, 'User Details');
  switch (action.type) {
    case UserDetailsActionTypes.userdetails.SUCCESS:
      const newItem = {
        id: `${action.payload.firstName}-${action.payload.lastName}-${action.payload.jobTitle}`,
        ...action.payload,
        isFavorite: false,
      };
      return {
        ...state,
        userDetails: [...state.userDetails, newItem],
      };

    case UserDetailsActionTypes.addFavourites.SUCCESS:
      return {
        ...state,
        userDetails: state.userDetails.map(user =>
          user.id === action.payload ? {...user, isFavorite: true} : user,
        ),
      };

    case UserDetailsActionTypes.deleteFavourites.SUCCESS:
      console.log(action.payload, 'deletefavsuccess');
      return {
        ...state,
        userDetails: state.userDetails.map(user =>
          user.id === action.payload ? {...user, isFavorite: false} : user,
        ),
      };

    default:
      return state;
  }
};
export default UserDetailsReducer;

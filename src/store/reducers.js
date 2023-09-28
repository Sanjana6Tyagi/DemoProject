
import {combineReducers} from 'redux';
import UserDetailsReducer from '../common/redux/home/reducers';

export default combineReducers({
    userdetails: UserDetailsReducer,
  
});
import {combineReducers} from 'redux';

const INITIAL_STATE = {
  route: '/'
};

const meReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_ROUTE':
      return {...state, route: action.payload};
    default:
      return state;
  }
};

export default combineReducers({
  me: meReducer,
});

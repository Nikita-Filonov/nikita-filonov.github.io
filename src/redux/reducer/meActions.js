import {SET_ROUTE} from '../actionTypes';


export const setRoute = (state) => (
  {
    type: SET_ROUTE,
    payload: state,
  }
);

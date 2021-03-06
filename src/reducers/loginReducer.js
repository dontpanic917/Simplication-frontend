import { LOGIN } from '../actions/types';

export default function(state = {}, action) {
  console.log(action)
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

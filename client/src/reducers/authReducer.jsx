import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
  // console.log(action);
  switch (action.type) {
    case FETCH_USER:
      // eslint-disable-next-line
        return action.payload || false;
      break;
    default:
      // eslint-disable-next-line
      return state;
  }
}

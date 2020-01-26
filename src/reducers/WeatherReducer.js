import {DEMO_ACTION} from '../constants/ActionTypes';

const INITIAL_STATE = {
  demoText: 'kobi',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DEMO_ACTION: {
      const {demoText} = action.payload;
      return {...state, demoText};
    }

    default:
      return state;
  }
};

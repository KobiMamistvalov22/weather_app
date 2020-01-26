import {DEMO_ACTION} from '../constants/ActionTypes';

const INITIAL_STATE = {
  demoText: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DEMO_ACTION: {
      return {...state, demoText: 'demo text'};
    }

    default:
      return state;
  }
};

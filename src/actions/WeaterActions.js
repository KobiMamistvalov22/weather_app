import {DEMO_ACTION} from '../constants/ActionTypes';

export const demoAction = () => dispatch => {
  dispatch({type: DEMO_ACTION});
};

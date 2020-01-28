import {DEMO_ACTION} from '../constants/ActionTypes';

export const demoAction = ({demoText}) => dispatch => {
  dispatch({type: DEMO_ACTION, payload: {demoText}});
};

import { handleActions } from 'redux-actions';
import * as types from '../constants/actionTypes';

const DEFAULT_ACTION = {
  file: {}
};

const actionsHandlers = {
  [types.GET_ALL_EVENTS]: (state, { payload }) =>({
		...state, 
		file: payload.file
	}),
};

export default handleActions (
	actionsHandlers,
	DEFAULT_ACTION 
);
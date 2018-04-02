import { handleActions } from 'redux-actions';
import * as types from '../constants/actionTypes';

const DEFAULT_ACTION = {
  isDisplayed: false,
};

const actionsHandlers = {

};

export default handleActions (
	actionsHandlers,
	DEFAULT_ACTION 
);
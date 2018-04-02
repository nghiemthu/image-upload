import { handleActions } from 'redux-actions';
import * as types from '../constants/actionTypes';

const DEFAULT_ACTION = {
	fileUpload: {},
	files: [],
	selectedFile: {},
	showModal: false,
	loading: false,
};

const actionsHandlers = {
  [types.FILE_UPLOAD]: (state, { payload }) => ({
		...state, 
		fileUpload: payload.file,
		loading: true,
	}),
	[types.GET_FILES]: (state, { payload }) => ({
		...state, 
		files: payload.files,
		loading: false,
	}),
	[types.SELECT_FILE]: (state, { payload }) => ({
		...state, 
		selectedFile: payload.file,
		showModal: false,
	}),
	[types.SHOW_MODAL]: (state, { payload }) => ({
		...state, 
		showModal: true
	}),
};

export default handleActions (
	actionsHandlers,
	DEFAULT_ACTION 
);
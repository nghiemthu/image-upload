import { combineReducers } from 'redux';
import fileUpload from './fileUpload';

const rootReducer = combineReducers({
    fileUpload,
});

export default rootReducer;
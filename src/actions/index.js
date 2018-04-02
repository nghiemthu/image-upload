import axios from 'axios';
import { createAction } from 'redux-actions';

import * as types from '../constants/actionTypes';

export const selectFile			= createAction(types.SELECT_FILE);
export const showModal			= createAction(types.SHOW_MODAL);

export const fileUpload = (files) => {
    return (dispatch) => {

        var formData = new FormData();
        formData.append("file", files[0]);

        axios.post(`fileUpload`, formData)
            .then(res => {
                dispatch({ 
                    type: types.FILE_UPLOAD,
                    payload: {
                        file: files[0]
                    }
                });


                axios.get('files')
                .then(res => {
                    dispatch({ 
                        type: types.GET_FILES,
                        payload: {
                            files: res.data
                        }
                    });
                })
                .catch((error) => {
                    console.log(error);  
                });
            })
            .catch((error) => {
                console.log(error);  
            });
    };
};

export const getFiles = () => {
    return (dispatch) => {
        axios.get('files')
            .then(res => {
                dispatch({ 
                    type: types.GET_FILES,
                    payload: {
                        files: res.data
                    }
                });
            })
            .catch((error) => {
                console.log(error);  
            });
    };
};


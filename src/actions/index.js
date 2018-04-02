import axios from 'axios';

import * as types from '../constants/actionTypes';

export const fileUpload = (file) => {
    return (dispatch) => {
      axios.post(`fileUpload`, file)
        .then(res => {
        dispatch({ 
            type: types.FILE_UPLOAD,
            payload: {
              file: file
            }
          });
        })
        .catch((error) => {
           console.log(error);  
      });
      };
  };

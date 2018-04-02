import axios from 'axios';

import * as types from '../constants/actionTypes';

export const getReview = (id) => {
  
    return (dispatch) => {
      axios.get(`${mainUrl}/${id}/reviews`, config)
        .then(res => {
        dispatch({ 
            type: types.GET_REVIEW,
            payload: {id: id, review: res.data.reviews[0]}
            });
        })
        .catch((error) => {
           console.log(error);  
      });
      };
  };

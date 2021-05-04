import * as actions from './actionTypes';
import axios from 'axios';
import {upcomingUrl} from '../../config/Url';

export const getMovies = () => {
  return (dispatch) => {
    axios
      .get(upcomingUrl())
      .then((response) => {
        const movies = response.data;
        dispatch(getMovieSuccess(movies));
      })
      .catch((error) => {
        dispatch(getMovieError(error.message));
      });
  };

  //   fetch(
  //       upcomingUrl()
  //   )
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       this.setState({moviesTrending: responseJson});
  //     })
  //     .catch((error) => {
  //       console.log('Data fetching failed');
  //     });
};

export const loginUser = (username) => {
  return {
    type: actions.LOGIN_USER,
    payload: username,
  };
};

export const getMovieSuccess = (movies) => {
  return {
    type: actions.GET_MOVIE_SUCCESS,
    payload: movies,
  };
};

export const getMovieError = (error) => {
  return {
    type: actions.GET_MOVIE_ERROR,
    payload: error,
  };
};

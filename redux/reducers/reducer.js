import * as actions from '../actions/actionTypes';

const initialState = {
  userName: '',
  upcomingMovies: [],
  trendingMovies: [],
  moviesError: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN_USER:
      return {...state, userName: action.payload};
    case actions.GET_MOVIE_SUCCESS:
      return {
        ...state,
        upcomingMovies: [...state.upcomingMovies, ...action.payload],
      };
    case actions.GET_MOVIE_ERROR:
      return {...state, moviesError: [...state.moviesError, ...action.payload]};
    default:
      return state;
  }
}

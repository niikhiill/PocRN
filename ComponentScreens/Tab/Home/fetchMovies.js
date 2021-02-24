export function fetchTrendingMovies() {
  fetch(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=51c5d477ec9bd7b3e52386828e267f99',
  )
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({moviesTrending: responseJson});
    })
    .catch((error) => {
      console.log('Data fetching failed');
    });
}

export function fetchUpcomingMovies() {
  fetch(
    'https://api.themoviedb.org/3/movie/upcoming?api_key=51c5d477ec9bd7b3e52386828e267f99&region=US',
  )
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({moviesUpcoming: responseJson});
    })
    .catch((error) => {
      console.log('Data fetching failed');
    });
}

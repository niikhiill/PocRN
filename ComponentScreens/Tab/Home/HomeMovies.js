import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import bgCover from '../../../assets/bgimage.png';
import Icons from 'react-native-vector-icons/SimpleLineIcons';
import {fetchTrendingMovies, fetchUpcomingMovies} from './fetchMovies';

function renderMovie({item}) {
  return (
    <View style={{margin: 10, height: 320, alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('Details', {
            title: item.title,
            overview: item.overview,
            poster_path: item.poster_path,
            date: item.release_date,
            popularity: item.popularity,
            genre: item.genre_ids,
            vote: item.vote_average,
          })
        }>
        <Image
          style={{height: 250, width: 180, borderRadius: 17}}
          source={{
            uri: 'https://image.tmdb.org/t/p/original/' + item.poster_path,
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          width: 175,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 17}}>{item.title}</Text>
      </View>
      <View
        style={{
          width: 175,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 7,
        }}>
        <Text style={{color: 'white', fontSize: 12}}>{item.release_date}</Text>
      </View>
    </View>
  );
}

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesTrending: [],
      moviesUpcoming: [],
    };
    this.fetchTrendingMovies = fetchTrendingMovies.bind(this);
    this.fetchUpcomingMovies = fetchUpcomingMovies.bind(this);
    this.renderMovie = renderMovie.bind(this);
  }

  componentDidMount() {
    this.fetchTrendingMovies();
    this.fetchUpcomingMovies();
  }

  render() {
    const {moviesTrending, moviesUpcoming} = this.state;
    return (
      <ImageBackground source={bgCover} style={{height: '100%', width: '100%'}}>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          <View style={{flex: 1}}>
            <View style={styles.ViewStyle}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'white', fontSize: 25, marginRight: 7}}>
                  Trending Now
                </Text>
                <Icons name="fire" color="#fff" size={25} />
              </View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Trending', {name: 'Trending'})
                }>
                <Text style={{color: '#193366', fontSize: 18, marginEnd: 15}}>
                  Show All{'>'}
                </Text>
              </TouchableOpacity>
            </View>

            <FlatList
              horizontal={true}
              data={moviesTrending.results}
              renderItem={this.renderMovie}
              keyExtractor={(item, key) => key.toString()}
              showsHorizontalScrollIndicator={false}></FlatList>
          </View>
          {/* New view for upcoming movies */}
          <View style={{flex: 1, paddingTop: 25}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 18,
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'white', fontSize: 25, marginRight: 7}}>
                  Upcoming
                </Text>
                <Icons name="hourglass" color="#fff" size={25} />
              </View>

              <TouchableOpacity>
                <Text
                  style={{color: '#193366', fontSize: 18, marginEnd: 15}}
                  onPress={() => this.props.navigation.navigate('Upcoming')}>
                  Show All{'>'}
                </Text>
              </TouchableOpacity>
            </View>

            <FlatList
              horizontal={true}
              data={moviesUpcoming.results}
              renderItem={this.renderMovie}
              keyExtractor={(item, key) => key.toString()}
              showsHorizontalScrollIndicator={false}></FlatList>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingBottom: 100,
  },
  ViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 18,
    alignItems: 'center',
    marginTop: 20,
  },
});

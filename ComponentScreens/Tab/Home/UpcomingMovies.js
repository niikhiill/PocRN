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
import {fetchUpcomingMovies} from './fetchMovies';

export default class Upcoming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesUpcoming: [],
    };
    this.fetchUpcomingMovies = fetchUpcomingMovies.bind(this);
  }

  componentDidMount() {
    this.fetchUpcomingMovies();
  }

  render() {
    const {moviesUpcoming} = this.state;
    return (
      <ImageBackground source={bgCover} style={{height: '100%', width: '100%'}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              padding: 20,
            }}>
            Upcoming Movies
          </Text>
        </View>

        <View style={{flex: 8, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{width: '95%'}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              numColumns="2"
              data={moviesUpcoming.results}
              renderItem={({item}) => (
                <View
                  style={{
                    marginHorizontal: 10,
                    marginBottom: 70,
                    height: 280,
                    width: '45%',
                  }}>
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
                      style={{
                        height: '100%',
                        width: '100%',
                        borderRadius: 17,
                        resizeMode: 'contain',
                      }}
                      source={{
                        uri:
                          'https://image.tmdb.org/t/p/original/' +
                          item.poster_path,
                      }}
                    />
                  </TouchableOpacity>

                  <View
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: 'white', fontSize: 17}}>
                      {item.title}
                    </Text>
                  </View>

                  <View
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: 'white', fontSize: 12}}>
                      {item.release_date}
                    </Text>
                  </View>
                </View>
              )}
              keyExtractor={(item, key) => key.toString()}
              showsHorizontalScrollIndicator={false}></FlatList>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingBottom: 100,
  },
});

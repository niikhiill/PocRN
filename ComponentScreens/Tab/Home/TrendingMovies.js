import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import bgCover from '../../../assets/bgimage.png';
import {fetchTrendingMovies} from './fetchMovies';

export default class Trending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesTrending: [],
    };
    this.fetchTrendingMovies = fetchTrendingMovies.bind(this);
  }

  componentDidMount() {
    this.fetchTrendingMovies();
  }

  render() {
    const {moviesTrending} = this.state;
    return (
      <ImageBackground source={bgCover} style={{height: '100%', width: '100%'}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.title}>Movies Trending Now</Text>
        </View>

        <View style={styles.viewStyle}>
          <View style={{width: '95%'}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              numColumns="2"
              data={moviesTrending.results}
              renderItem={({item}) => (
                <View style={styles.container}>
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
                      style={styles.posterStyle}
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
  viewStyle: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    marginHorizontal: 10,
    marginBottom: 70,
    height: 280,
    width: '45%',
  },
  posterStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 17,
    resizeMode: 'contain',
  },
  title: {
    color: 'white',
    fontSize: 25,
    padding: 20,
  },
});

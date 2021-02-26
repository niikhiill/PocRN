import React, {useState} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import bgCover from '../../../assets/bgimage.png';
import styles from './Styles';

export default function SearchMovie({navigation}) {
  const apiurl =
    'https://api.themoviedb.org/3/search/movie?api_key=51c5d477ec9bd7b3e52386828e267f99';

  const [state, setState] = useState({
    movies: [],
  });

  const search = () => {
    axios(apiurl + '&query=' + state.text).then(({data}) => {
      let movies = data.results;
      setState((prevState) => {
        return {prevState, movies: movies};
      });
    });
  };

  return (
    <ImageBackground source={bgCover} style={{height: '100%', width: '100%'}}>
      <View style={styles.container}>
        <TextInput
          style={styles.searchBox}
          onChangeText={(text) =>
            setState((prevState) => {
              return {...prevState, text: text};
            })
          }
          placeholder="Search..."
          onSubmitEditing={search}
          autoCorrect={false}
        />

        <ScrollView style={styles.results}>
          {/* {state.movies.results ? ( */}
          {state.movies.map((movie) => (
            <TouchableOpacity
              key={movie.id}
              onPress={() =>
                navigation.navigate('Details', {
                  title: movie.title,
                  overview: movie.overview,
                  poster_path: movie.poster_path,
                  date: movie.release_date,
                  popularity: movie.popularity,
                  genre: movie.genre_ids,
                  vote: movie.vote_average,
                })
              }>
              <View style={styles.result}>
                <Image
                  source={{
                    uri:
                      'https://image.tmdb.org/t/p/original/' +
                      movie.poster_path,
                  }}
                  style={{
                    width: 70,
                    height: 100,
                  }}
                  resizeMode="cover"
                  backgroundColor="#445565"
                />
                <View style={{width: '75%'}}>
                  <Text style={styles.heading}>{movie.title}</Text>
                  <Text style={styles.datestyle}>{movie.release_date}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

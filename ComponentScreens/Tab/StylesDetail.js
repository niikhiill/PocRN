import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  viewStyle: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  container: {
    shadowOpacity: 200,
    shadowColor: 'black',
    height: 400,
    width: 200,
    margin: 10,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  titleStyle: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    shadowColor: 'black',
    shadowOpacity: 300,
    alignSelf: 'center',
  },
  overview: {
    fontSize: 25,
    color: '#000080',
    fontWeight: '500',
  },
  score: {
    marginTop: 30,
    fontSize: 17,
    fontWeight: '600',
  },
  popularity: {
    marginTop: 30,
    fontSize: 17,
    fontWeight: '600',
  },
  releaseDate: {
    fontSize: 17,
    fontWeight: '600',
  },
});

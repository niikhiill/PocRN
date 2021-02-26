import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },

  emailField: {
    height: 58,
    width: '85%',
    backgroundColor: 'rgba(0,0,0,0.2)',
    color: 'rgba(255,255,255,0.7)',
    marginTop: 25,
    fontSize: 20,
    padding: 15,
    justifyContent: 'center',
    borderRadius: 7,
  },

  passwordField: {
    height: 58,
    width: '85%',
    marginTop: 10,
    backgroundColor: 'rgba(0,0,0,0.2)',
    color: 'rgba(255,255,255,0.7)',
    fontSize: 20,
    padding: 15,
    justifyContent: 'center',
    borderRadius: 7,
  },

  signInButton: {
    height: 50,
    width: '85%',
    backgroundColor: '#cc6699',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10,
  },

  container: {
    marginTop: 20,
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
  },
});

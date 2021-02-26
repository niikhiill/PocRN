import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  searchBox: {
    fontSize: 18,
    fontWeight: '300',
    width: '90%',
    height: 58,
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 40,
    borderRadius: 50,
    marginTop: 60,
  },
  results: {
    flex: 1,
  },
  result: {
    flex: 1,
    width: '100%',
    marginBottom: 10,
    flexDirection: 'row',
    borderColor: '#fff',
    borderBottomWidth: 1,
  },
  heading: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    padding: 10,
    width: '75%',
  },
  datestyle: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 10,
    width: '75%',
  },
});

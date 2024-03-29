import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import bgCover from '../../../assets/bgimage.png';
import {useFocusEffect} from '@react-navigation/native';
import {connect} from 'react-redux';
import styles from './Styles';

function Profile({route, navigation, mail, movie}) {
  // const {mail} = route.params;

  //Used to prevent android back button
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (route.name === 'Profile') {
          return true;
        } else {
          return false;
        }
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [route]),
  );

  return (
    <ImageBackground source={bgCover} style={{height: '100%', width: '100%'}}>
      <View style={styles.viewStyle}>
        <Text style={styles.Title}>Welcome! {mail}</Text>
        <TouchableOpacity
          style={{marginTop: 15}}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.Logout}>LogOut</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const mapStateToProps = (state) => {
  return {
    mail: state.userName,
  };
};

export default connect(mapStateToProps)(Profile);

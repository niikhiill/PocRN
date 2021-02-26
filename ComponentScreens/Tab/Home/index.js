import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeMovies from './HomeMovies';
import Details from '../Details';
import Upcoming from './UpcomingMovies';
import Trending from './TrendingMovies';
import Icons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

export default function HomeStack({route, navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="HomeMovies"
      screenOptions={{
        headerStyle: {backgroundColor: '#223343'},
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
      }}
      headerMode="float">
      <Stack.Screen
        name="HomeMovies"
        component={HomeMovies}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Icons name="reorder-three" color="#fff" size={35} />
            </TouchableOpacity>
          ),
          headerTitle: 'Home',
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#223343'},
        }}></Stack.Screen>
      <Stack.Screen name="Details" component={Details}></Stack.Screen>
      <Stack.Screen name="Upcoming" component={Upcoming}></Stack.Screen>
      <Stack.Screen name="Trending" component={Trending}></Stack.Screen>
    </Stack.Navigator>
  );
}

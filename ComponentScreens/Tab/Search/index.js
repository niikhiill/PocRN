import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchMovie from './SearchMovie';
import Details from '../Details';
import Icons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

export default function searchIndex({navigation}) {
  return (
    <Stack.Navigator initialRouteName="SearchStack">
      <Stack.Screen
        name="SearchMovie"
        component={SearchMovie}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Icons name="reorder-three" color="#fff" size={35} />
            </TouchableOpacity>
          ),
          headerTitle: 'Search',
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#223343'},
        }}></Stack.Screen>
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#223343'},
        }}></Stack.Screen>
    </Stack.Navigator>
  );
}

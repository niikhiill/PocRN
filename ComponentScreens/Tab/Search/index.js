import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchMovie from './SearchMovie';
import Details from '../Details';

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
              <Text style={{color: '#fff', fontSize: 20, marginLeft: 10}}>
                I=I
              </Text>
            </TouchableOpacity>
          ),
          headerTitle: 'Search',
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#223343'},
        }}></Stack.Screen>
      <Stack.Screen name="Details" component={Details}></Stack.Screen>
    </Stack.Navigator>
  );
}

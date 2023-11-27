import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LogBox } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import Log from './src/Log/Log'
import AddWater from './src/AddWater/AddWater'
import Inspiration from './src/Inspiration/Inspiration'

import { colors } from './src/theme'

const Tab = createBottomTabNavigator();

export default class App extends Component {
  state = {
    log: []
  }

  addWater = (amount) => {
    const log = this.state.log
    log.push(amount)
    this.setState({ log })
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="AddWater" initialParams={{log: this.state.log, addWater: this.addWater}} 
            options={{
              tabBarIcon: ({focused}) => (
                <MaterialCommunityIcons name="plus" size={20} color={focused ? colors.primary : 'black'} />
              )
            }}
            component={AddWater} />
		      <Tab.Screen name="Log"  initialParams={{log: this.state.log, addWater: this.addWater}} 
            options={{
              tabBarIcon: ({focused}) => (
                <MaterialCommunityIcons name="book-open-variant" size={20} color={focused ? colors.primary : 'black'} />
              )
            }}
            component={Log} />
          <Tab.Screen name="Inspiration" initialParams={{log: this.state.log, addWater: this.addWater}} 
            options={{
              tabBarIcon: ({focused}) => (
                <MaterialCommunityIcons name="cards-heart" size={20} color={focused ? colors.primary : 'black'}  />
              )
            }}
            component={Inspiration} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import Log from './src/Log/Log'
import AddWater from './src/AddWater/AddWater'
import Inspiration from './src/Inspiration/Inspiration'

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
        <Tab.Navigator>
          <Tab.Screen name="AddWater" initialParams={{log: this.state.log, addWater: this.addWater}} component={AddWater} />
		      <Tab.Screen name="Log"  initialParams={{log: this.state.log, addWater: this.addWater}} component={Log} />
          <Tab.Screen name="Inspiration" initialParams={{log: this.state.log, addWater: this.addWater}} component={Inspiration} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
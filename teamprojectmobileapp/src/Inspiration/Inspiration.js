// Water Inspiration route

import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native'
import { colors } from '../theme'

export default class Inspiration extends React.Component {
  static navigationOptions = {
    title: 'Inspiration',
    headerTitleStyle: {
      color: 'white',
      fontSize: 20,
      fontWeight: '400'
    }
  }

  render() {
    const {  inspiration  } = this.props.route.params;
    return (
      <ScrollView style={styles.InspContainer}>
        <View >
            <Text style={styles.InspHeader}>Tips and Recipes</Text>
            <Text></Text>
            <Text style={styles.InspHeader2}>Tip of the Day:</Text>
            <Text style={styles.InspBody}>Having trouble reaching your daily water goal? Try carrying a water bottle with you throughout the day!</Text>
            <Text style={styles.InspHeader2}>Recipe of the Day:</Text>
            <Text style={styles.InspBody}>Raspberry Lemonade Fizz:</Text>
            <Text style={styles.InspBody}>Mash some raspberries in a cup. 
            Add ice, a lemon slice, some sugar or stevia, and ice.
            Let rest for a couple of minutes, then enjoy!</Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  InspContainer: {
    backgroundColor: colors.primary,
    flex: 1,
    
  },
  InspHeader: {
    fontSize: 30,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  InspHeader2: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 10,
  },
  InspBody: {
    marginLeft: 10,
    fontSize: 20,
  }
})
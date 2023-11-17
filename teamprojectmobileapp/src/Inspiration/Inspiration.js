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
    fontSize: 20,
    color: 'white'
  }
})
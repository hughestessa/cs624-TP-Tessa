// Water Log route

import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native'
import CenterMessage from '../components/CenterMessage'
import { colors } from '../theme'

export default class Log extends React.Component {
  static navigationOptions = {
    title: 'Log',
    headerTitleStyle: {
      color: 'white',
      fontSize: 20,
      fontWeight: '400'
    }
  }
  navigate = (item) => {
    this.props.navigation.navigate('Amount', { amount: item })
  }
  render() {
    const {  log  } = this.props.route.params;
    return (
      <ScrollView  contentContainerStyle={[!log.length && { flex: 1 }]}>
        <View style={[!log.length && { justifyContent: 'center', flex: 1 }]}>
          {
            !log.length && <CenterMessage message='No saved water entries!' />
          }
          {
            log.map((item, index) => (
              <TouchableWithoutFeedback onPress={() => this.navigate(item)} key={index} >
                <View style={styles.amountContainer}>
                  <Text style={styles.amount}>{item.amount}</Text>
                  <Text style={styles.measurement}>{item.measurement}</Text>
                </View>
              </TouchableWithoutFeedback>
            ))
          }
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  amountContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary
  },
  amount: {
    fontSize: 20,
  },
  measurement: {
    color: 'rgba(0, 0, 0, .5)'
  },  
})
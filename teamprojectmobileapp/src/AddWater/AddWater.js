// AddWater tab
import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import uuidV4 from 'uuid/v4'
import { colors } from '../theme'

class AddWater extends React.Component {
  state = {
    amount: '',
    measurement: ''
  }
  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }
  submit = () => {
    if (this.state.amount === '' || this.state.measurement === '') {
      alert('Please complete form') }
    else {
      alert('Great job!')
    
    const amount = {
      amount: this.state.amount,
      measurement: this.state.measurement,
      id: uuidV4(),
      logs: []
    }
    this.props.route.params.addWater(amount)
    this.setState({
      amount: '',
      measurement: ''
    }, () => {
      this.props.navigation.navigate('Log')
    })
  }}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>How much water did you drink today?</Text>
        <TextInput
          placeholder='Amount of water'
          onChangeText={val => this.onChangeText('amount', val)}
          style={styles.input}
          value={this.state.amount}
        />
        <TextInput
          placeholder='Measurement (i.e., cup, ounces)'
          onChangeText={val => this.onChangeText('measurement', val)}
          style={styles.input}
          value={this.state.measurement}
        />
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  },
  heading: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
    alignSelf: 'center'
  },
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    height: 50
  }
})

export default AddWater
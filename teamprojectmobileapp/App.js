import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.bold}>Team Members:</Text>
      <Text></Text>
      <Text>Tessa Hughes</Text>
      <Text>Gayatri Soni</Text>
      <Text>Nuja Alarfaj</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bold: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

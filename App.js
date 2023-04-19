import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.green}>
        <Text style={styles.green}>DUOLINGO</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.greenButton}>
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.whiteButton}>
        <Text style={[styles.buttonText, { color: '#55acee' }]}>I ALREDY HAVE AN ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  green:{
    fontWeight: "bolder",
    fontSize: "30px",
    collor: "#228B22"
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  greenButton: {
    backgroundColor: '#4caf50',
    padding: 12,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginBottom: 16,
  },
  whiteButton: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#32CD32',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;

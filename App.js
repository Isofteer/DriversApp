import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        marginTop:30,
        flexDirection: 'row',
        
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'red'}}/>  
       
        <View style={{width: '100%', height: 50, backgroundColor: 'skyblue'}} />
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

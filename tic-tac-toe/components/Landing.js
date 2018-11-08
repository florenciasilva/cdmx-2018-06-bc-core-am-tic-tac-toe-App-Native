import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';


export default class Landing extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={{color:'#79CADC', fontSize: 50, fontWeight: 'bold', marginLeft: -30}}>X</Text>
          <Text style={{color:'#3A98D4', fontSize: 50, fontWeight: 'bold', marginLeft: 20, marginTop: -25}}>O</Text>
          <Text style={{letterSpacing: 5, fontSize: 10, marginBottom: 50}}>tic tac toe</Text>
          <TouchableOpacity style={styles.play} onPress={() => this.props.navigation.navigate('GameScreen')}>          
           <Text> play game </Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.score} onPress={() => this.props.navigation.navigate('ScoreboardScreen')}>
            <Text> scoreboard </Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
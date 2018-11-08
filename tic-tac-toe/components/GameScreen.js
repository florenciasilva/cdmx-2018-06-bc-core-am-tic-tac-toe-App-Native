import React from 'react';
import styles from './Style';
import {View, TouchableOpacity, Text} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class Game extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={{letterSpacing: 4, fontSize: 10}}>game screen</Text>
          <View style={styles.board}>
          <View style={styles.line} />
              <View
                style={[styles.line, {
                  height: 306,
                  transform: [
                    {translateX: 200}
                  ]
                }]}
              />
              <View
                style={[styles.line, {
                  width: 306,
                  height: 1,
                  transform: [
                    {translateY: 100}
                  ]
                }]}
              />
              <View
                style={[styles.line, {
                  width: 306,
                  height: 1,
                  transform: [
                    {translateY: 200}
                  ]
                }]}
              />
              </View>
           <TouchableOpacity style={styles.score} onPress={() => this.props.navigation.navigate('ScoreboardScreen')}>
            <Text> scoreboard </Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
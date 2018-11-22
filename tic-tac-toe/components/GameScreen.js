import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Board from './Board';
import styles from './Style'

export default class GameScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Board />
      </View>
    )
  }

}
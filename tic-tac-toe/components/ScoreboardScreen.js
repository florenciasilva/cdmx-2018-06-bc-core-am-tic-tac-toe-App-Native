import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './Style'
import { createStackNavigator } from 'react-navigation';

export default class Scoreboard extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={{letterSpacing: 4, fontSize: 10}}>scoreboard screen</Text>
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
                    {translateY: 50}
                  ]
                }]}
              />
              
              </View>

          <TouchableOpacity
          title="Go back to Game"
          onPress={() => this.props.navigation.navigate('GameScreen')}
        />
        </View>
      );
    }
  }
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Scoreboard from './components/ScoreboardScreen';
import Game from './components/GameScreen';
import Landing from './components/Landing';

const RootStack = createStackNavigator({
  LandingScreen: {
    screen: Landing
  },
  GameScreen: {
    screen: Game
  },
  ScoreboardScreen: {
    screen: Scoreboard
  }
});

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    )
  }
}
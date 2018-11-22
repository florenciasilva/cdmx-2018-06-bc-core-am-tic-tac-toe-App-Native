import React, {Component} from 'react';
import {View, Text, TouchableOpacity,Image} from 'react-native';
import styles from './Style';
import { createStackNavigator } from 'react-navigation';


export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameState : [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      player : 1
    }
  }

  componentDidMount() {
    this.startGame();
  }

  startGame = () => {
    this.setState({
      gameState : [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
    })
  }


  _onPressSquare = (row, col) => {
    let value = this.state.gameState[row][col];
    if(value!== 0) { return; }
    let currentPlayer = this.state.player;
    let getGameState = this.state.gameState.slice();
    getGameState[row][col] = currentPlayer;
    this.setState({gameState : getGameState})

  let switchPlayer = (currentPlayer === 1) ? -1 : 1;
  this.setState({player : switchPlayer})
  }

  showXorO = (row, col) => {
    let value = this.state.gameState[row][col];
    switch(value) {
      case 1: return <Image source = {require('../assets/tileX.png')} />;
      case -1: return <Image source= {require('../assets/tileO.png')} />;
      default: return <View/>
    }
  }

  render()  {
    return (
      <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <View style={{
            flexDirection: 'row',
            backgroundColor: "grey"}}>
            <View>
              <TouchableOpacity
                onPress= {() => this._onPressSquare(0, 0)}
                style={{width: 100, height: 100, marginBottom:1, alignItems: 'center', backgroundColor: 'white'}}>
                  {this.showXorO(0, 0)}
              </TouchableOpacity>
              <TouchableOpacity onPress= {() => this._onPressSquare(1, 0)}
                style={{width: 100, height: 100, marginBottom:1, alignItems: 'center', backgroundColor: 'white'}}>
                {this.showXorO(1, 0)}
              </TouchableOpacity>
                <TouchableOpacity onPress= {() => this._onPressSquare(2, 0)}
                style={{width: 100, height: 100, alignItems: 'center', backgroundColor: 'white'}}>
                  {this.showXorO(2, 0)}
                  </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress= {() => this._onPressSquare(0, 1)}
                style={{width: 100, height: 100, marginBottom:1, marginLeft:1, alignItems: 'center', backgroundColor: 'white'}}>
                  {this.showXorO(0, 1)}
                  </TouchableOpacity>
                <TouchableOpacity onPress= {() => this._onPressSquare(1, 1)}
                style={{width: 100, height: 100, marginBottom:1, marginLeft:1, alignItems: 'center', backgroundColor: 'white'}}>
                {this.showXorO(1, 1)}
                 </TouchableOpacity>
                <TouchableOpacity onPress= {() => this._onPressSquare(2, 1)}
                style={{width: 100, height: 100, marginLeft:1, alignItems: 'center', backgroundColor: 'white'}}>
                {this.showXorO(2, 1)}
                  </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress= {() => this._onPressSquare(0, 2)}
                style={{width: 100, height: 100, marginBottom:1, marginLeft:1, alignItems: 'center', backgroundColor: 'white'}}>
                {this.showXorO(0, 2)}
                  </TouchableOpacity>
                <TouchableOpacity onPress= {() => this._onPressSquare(1, 2)}
                style={{width: 100, height: 100, marginBottom:1, marginLeft:1, alignItems: 'center', backgroundColor: 'white'}}>
                 {this.showXorO(1, 2)}
                  </TouchableOpacity>
                <TouchableOpacity onPress= {() => this._onPressSquare(2, 2)}
                style={{width: 100, height: 100, marginLeft:1, alignItems: 'center', backgroundColor: 'white'}}>
                 {this.showXorO(2, 2)}
                  </TouchableOpacity>
            </View>
          </View>
        </View>
        )
      }
    }
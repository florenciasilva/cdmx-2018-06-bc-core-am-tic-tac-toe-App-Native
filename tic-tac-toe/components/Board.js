import React, {Component} from 'react';
import {View, Text, TouchableOpacity,Image, Alert} from 'react-native';
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
      player : 1,
      xWins : 0,
      oWins : 0,
      ties : 0
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

  winner = () => {
    let sum;
    let arrGame = this.state.gameState;
    const tiles = 3;
    // Rows
    for(let i = 0; i < tiles; i++) {
      sum = arrGame[i][0] + arrGame[i][1] + arrGame[i][2];      if ( sum === 3) {return 1;}
      else if (sum === -3) {return -1;}
    }

    // Cols
     for(let i = 0; i < tiles; i++) {
      sum = arrGame[0][i] + arrGame[1][i] + arrGame[2][i];      if ( sum === 3) {return 1;}
      else if (sum === -3) {return -1;}
    }

    // Diagonal
    sum = arrGame[0][0] + arrGame[1][1] + arrGame[2][2];
    if ( sum === 3) {return 1;}
      else if (sum === -3) {return -1;} 
    
    sum = arrGame[2][0] + arrGame[1][1] + arrGame[0][2];
    if ( sum === 3) {return 1;}
      else if (sum === -3) {return -1;} 

    // Tie

    return 0;
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

  let winner = this.winner()
  if (winner === 1) {
    Alert.alert("X Won")
    this.setState({xWins: this.state.xWins + 1})
    this.startGame();
  } else if (winner === -1) {
      this.setState({oWins: this.state.oWins + 1})
      Alert.alert("O Won")
      this.startGame();
    }
  }

  showXorO = (row, col) => {
    let value = this.state.gameState[row][col];
    switch(value) {
      case 1: return <Image source={{uri:'https://i.imgur.com/TrCcRUp.png'}}
      style={{width: 65, height: 65}} />;
      case -1: return <Image source={{uri:'https://i.imgur.com/j46NZWM.png'}}
      style={{width: 65, height: 65}} />;
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
          <View style={{
        flex: -1,
        flexDirection: 'row',
        marginTop: 30
      }}>
        <View style={{width: 35, height: 35, backgroundColor: 'white', alignItems:'center'}}>
         <Image source={{uri:'https://i.imgur.com/QwTcqWy.png'}}
      style={{width: 35, height: 35}} />
        <Text>{this.state.xWins}</Text>
        </View>
        <View style={{width: 35, height: 35, backgroundColor: 'white', marginLeft: 150, alignItems:'center'}}>
        <Image source={{uri:'https://i.imgur.com/A9pGSU1.png'}}
      style={{width: 35, height: 35}} />
      <Text>{this.state.oWins}</Text>
        </View>        
      </View>
  <TouchableOpacity>
    <Text>Restart</Text>
  </TouchableOpacity>
        </View>
        )
      }
    }
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    board : {
      width: 300,
      height: 300,
      borderWidth: 3,
      borderColor: '#fff',
      marginTop: 20,
      marginBottom: 20
    },
    play: {
      borderRadius: 12, 
      padding: 6, 
      width: 120, 
      alignItems: 'center', 
      letterSpacing: 4,
      backgroundColor: '#79CADC',
      color: 'white'
    },
    score: {
      letterSpacing: 4,
      backgroundColor:'#3a98d4', 
      borderRadius: 12, 
      padding: 6, 
      width: 120, 
      alignItems: 'center', 
      marginTop: 10,
      color: 'white'
    },
    line: {
      position: 'absolute',
      width: 1,
      height: 300,
      backgroundColor: '#000',
      transform: [
        {translateX: 100}
      ]
    }
  });
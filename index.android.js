/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class helloapp extends Component {
  render() {
    return (
      <View style={styles.linearGradient}>

        <View style={{backgroundColor: '#5ed4f9'}} />
        <LinearGradient colors={['#5ed4f9', '#0874ed']} style={styles.container} >
        <Image source={require('./img/focusy-icon.png')} style={{alignItems:'center' ,width:150, height:150}} />
        <Image source={require('./img/focusy-test.png')} />
      </LinearGradient>
        <View style={{backgroundColor: '#0874ed'}} />


          {/*<Text style={styles.buttonText}>*/}
            {/*Sign in with Facebook*/}
          {/*</Text>*/}


      </View>
    );
  }
}

var styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 0,
        paddingRight: 0,
        // borderRadius: 5,
        flexDirection: 'column',
        height: 500,
        padding: 0
        // backgroundColor:'#4c669f',
    },
    buttonText: {
        fontSize: 40,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 20,
        color: '#4c669f',
        backgroundColor: 'transparent',
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0874ed',
  },
  //   welcome: {
  //       fontSize: 80,
  //       textAlign: 'center',
  //       margin: 10,
  //   },
  //   gradient: {
  //       flex: 1,
  //       paddingLeft: 15,
  //       paddingRight: 15,
  //       // borderRadius: 5
  //   },
  //   buttonText: {
  //       fontSize: 18,
  //       fontFamily: 'Gill Sans',
  //       textAlign: 'center',
  //       margin: 10,
  //       color: '#ffffff',
  //       backgroundColor: 'transparent',
  //   },
});

AppRegistry.registerComponent('helloapp', () => helloapp);

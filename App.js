/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
// import AddItem from "./src/component/addItem";
// import Registration from "./src/component/registration";
// import IconText from './src/component/footer/tabFooter';
// import LoginPage from "./src/pages/loginPage";
import RouterConfig from "./src/router/AppRouting";
import GeolocationExample from "./src/component/GeoLocationComponent";
export default class App extends Component{
  render() {
    return (
    
        <RouterConfig style={styles.container} />
       
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

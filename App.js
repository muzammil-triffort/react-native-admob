/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AdMobInterstitial } from 'react-native-admob'

import Root from './pages/Root.js'

export default class App extends React.Component {

  constructor(props) {

    super(props);

    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);    
    AdMobInterstitial.setAdUnitID('ca-app-pub-7479592788394026/1057901591');
  }

  render() {
    return (
      <Root/>
    );
  }
}
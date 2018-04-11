import React, { Component } from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

var screenWidth = Dimensions.get("window").width;

import {AdMobBanner} from 'react-native-admob'

export default class LargerBannerAd extends Component {
    
  constructor(props) {
    super(props);
}

  render() 
  {
    return (
      <View style={styles.adView}>

          <AdMobBanner
          adSize="largeBanner"
          adUnitID="ca-app-pub-7479592788394026/5011181590"
          testDevices={[AdMobBanner.simulatorId]}
          //onAdFailedToLoad={error => console.error(error)}
          />

      </View >
    );
  }
}

const styles = StyleSheet.create({

  adView:
  {
      height: 100,
      width: screenWidth,
      backgroundColor: 'white',
      margin:20,
      justifyContent: "center",
      alignItems: "center",

  },
  });
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Alert
} from 'react-native';

import { AdMobInterstitial } from 'react-native-admob'

import BannerAd from './BannerAd.js';
import LargerBannerAd from './LargerBannerAd.js';

var screenWidth = Dimensions.get("window").width;
var isAdLoaded = false;

export default class Root extends Component { 

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
        AdMobInterstitial.requestAd()

        AdMobInterstitial.addEventListener('adLoaded',
            
            () => {
                console.log ('Ad loaded');
                isAdLoaded = true;
            }
        );
        
        AdMobInterstitial.addEventListener('adClosed',
            
            () => {isAdLoaded = false; AdMobInterstitial.requestAd(); }
        );

        AdMobInterstitial.addEventListener('adFailedToLoad',
            
            () => {isAdLoaded = false; AdMobInterstitial.requestAd();}
        );
    }

    componentWillUnmount() 
    {
        AdMobInterstitial.removeAllListeners();
    }
    
    showInterstitialAd() {

        if(isAdLoaded) {
            AdMobInterstitial.showAd();
            //AdMobInterstitial.showAd().catch(error => console.warn(error));
        }
        else 
        {
            Alert.alert ('Interstitial Ad is not loaded');
        }
    }

    render() {
      return (

        <View style={styles.container}>

        <BannerAd/>

        <Text style={styles.welcome}>
            Welcome to AdMob Sample
        </Text>

        <TouchableOpacity style={styles.button}
        onPress={() => this.showInterstitialAd()}>
            <Text style={styles.buttonText}>
                Show Interstitial Ads
            </Text>
        </TouchableOpacity>

        <Text style={styles.intro}>
            Fell free to contact me for any kind of support. 
            Skype: muz.iphonedev
        </Text>

        <LargerBannerAd/>

        </View>
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
    intro: {
        fontSize: 15,
        color: "black",
        fontStyle: 'italic',
        fontWeight: "300",
        textAlign: 'center',
        margin: 10,
      },
    button:
    {
        flex:0,
        width: screenWidth-20,
        margin: 10,
        backgroundColor: 'red',
        height: 50,
        borderRadius:10,
        borderColor: 'white',
        borderWidth: 1,
    },
    buttonText:
    {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'white'
    },
  });
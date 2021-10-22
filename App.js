
import React from 'react';
import { Dimensions , StyleSheet, Text, View ,TouchableHighlight, SafeAreaView , Image, Button,Alert,Platform , StatusBar} from 'react-native';
import { useDimensions,useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import VeiwImageScreen from './app/screens/VeiwImageScreen';

export default function App() {

  
  return(  
  //<WelcomeScreen/>
  <VeiwImageScreen/>
    );
  
}

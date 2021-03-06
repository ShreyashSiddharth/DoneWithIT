import React from 'react';
import { Image, ImageBackground , StyleSheet, Text, View} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style = {styles.background}
        source={require('../assets/background.jpg')}>
        <View style= {styles.logoContainer}>
        <Image
        source = {require('../assets/logo-red.png')}
        style = {styles.logo}
        />
        <Text>Sell What You Dont Need</Text>

        </View>
        <View style ={styles.loginButton}></View>
        <View style ={styles.registerButton}></View>
        </ImageBackground>
            
        
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
    },
    loginButton:{
        width:'100%',
        height: 70,
        backgroundColor:'#fc5c65',
    },
    registerButton:{
        width:'100%',
        height: 70,
        backgroundColor:'#4ecdc4',
    },
    logo:{
        width:100,
        height:100,
    },
    logoContainer:{
        top: 70,
        position:"absolute",
        alignItems:"center",
    },

})
export default WelcomeScreen;
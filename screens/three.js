import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function three(){
    return(

        <View style={styles.container}>

              <View style={styles.bottom}>
                 <TouchableOpacity style={styles.touch} >
                    <Text style={{color: 'white', fontSize: '24px',marginBottom: '10px'}}>GO TO CART</Text>
                </TouchableOpacity>
             </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
  
  bottom: {
   
    marginTop: '20px'
},
  touch:{
    // height: '60px',
    width:  370,
    backgroundColor: '#EFB034',
    borderRadius:  10,
    alignItems: 'center',
    justifyContent: 'center'

  }
  });
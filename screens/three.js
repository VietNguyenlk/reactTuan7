import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function three(){

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://653f48f29e8bd3be29e029cd.mockapi.io/Drinks')
        .then(response => response.json())
        .then(json => {
            setData(json);           
        });
}, []);




    return(

        <View style={styles.container}>
                {
                    data.map((item) => {
                        return(
                          
                          <View  >              
                          <View style={{flexDirection: 'column', marginLeft: '15px'}}>


                              <Image source={{uri: item.image}} style ={{width: 50,height:50}} />
                              <Text style={{marginTop: '0px', marginLeft: '10px', fontWeight: '600'}} >{item.name}</Text>
                          </View>         
                            
                          </View>
                          
                          
                          
                        )
                    })
                }




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
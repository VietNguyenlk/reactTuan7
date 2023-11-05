import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function two({navigation}) {

const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://653f48f29e8bd3be29e029cd.mockapi.io/Shops')
        .then(response => response.json())
        .then(json => {
            setData(json);           
        });
}, []);


    return (
     <View> 
         

          <View style={styles.container}>
                {
                    data.map((item) => {
                        return(
                          <TouchableOpacity style={{width:'90%'}} onPress={()=>navigation.navigate('three')}>
                          <View style={styles.list} >              
                          <View style={{flexDirection: 'column', marginLeft: '15px'}}>


                              <Image source={{uri: item.image}} style ={{width: 250,height:70}} />
                              <Text style={{marginTop: '0px', marginLeft: '10px', fontWeight: '600'}} >{item.name}</Text>
                          </View>         
                            
                          </View>
                          
                          
                          </TouchableOpacity>
                        )
                    })
                }
               
            </View>
          


         


     </View>
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    list:{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      height: '120px',
      width: '85%',
      borderRadius: '10px',
      justifyContent: 'space-between',
      marginBottom: '20px'
  },
  bottom: {
    alignItems: 'center',
    marginTop: '20px'
},
  touch:{
    // height: '60px',
    width: '80%',
    backgroundColor: '#EFB034',
    borderRadius:  10,
    alignItems: 'center',
    justifyContent: 'center'

  }
  });
